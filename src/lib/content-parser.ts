import { z } from 'zod';
import matter from 'gray-matter';
import path from 'path';
import { promises as fs } from 'fs';
import { Paper, YearGroup } from '@/types/research/research-types';

export class ContentParser<T> {
  private readonly schema: z.ZodType<T>;
  private readonly contentDir: string;

  constructor(
    schema: z.ZodType<T>,
    contentDir: string,
  ) {
    this.schema = schema;
    this.contentDir = contentDir;
  }

  async parse(): Promise<T[]> {
    const files = await fs.readdir(this.contentDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    const contents = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(this.contentDir, filename);
        const content = await fs.readFile(filePath, 'utf8');
        const { data } = matter(content);

        try {
          return this.schema.parse({
            ...data,
            id: filename.replace('.md', '')
          });
        } catch (error) {
          console.error(`Error validating content in ${filename}:`, error);
          throw error;
        }
      })
    );

    return contents;
  }
}

export const getResearchPapers = async (): Promise<YearGroup[]> => {
  const PaperSchema = z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    date: z.string(),
    doi: z.string(),
    link: z.string().url(),
    tags: z.array(z.string()).optional(),
    image: z.string().url().nullable(),
  });

  const parser = new ContentParser<Paper>(
    PaperSchema,
    path.join(process.cwd(), 'content/researches')
  );

  const papers = await parser.parse();

  const papersByYear = papers.reduce<Record<number, Paper[]>>((acc, paper) => {
    const year = new Date(paper.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(paper);
    return acc;
  }, {});

  Object.values(papersByYear).forEach(yearPapers => {
    yearPapers.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  return Object.entries(papersByYear)
    .map(([year, papers]): YearGroup => ({
      year: parseInt(year),
      papers,
    }))
    .sort((a, b) => b.year - a.year);
};

export const getTeamMembers = async () => {
  const MemberSchema = z.object({
    name: z.string(),
    image: z.string(),
    description: z.string().optional(),
    role: z.enum(['pi', 'undergrad', 'alumni']),
    affiliation: z.string().optional(),
    links: z.record(z.string()).optional(),
    aliases: z.array(z.string()).optional(),
  });

  const parser = new ContentParser(
    MemberSchema,
    path.join(process.cwd(), 'content/team')
  );

  return parser.parse();
};