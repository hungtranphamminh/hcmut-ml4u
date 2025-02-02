import { z } from 'zod';
import matter from 'gray-matter';
import path from 'path';
import { promises as fs } from 'fs';

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


export const getTeamMembers = async () => {
  const MemberSchema = z.object({
    name: z.string(),
    image: z.string(),
    description: z.string().optional(),
    role: z.enum(['pi', 'undergrad', 'alumni']),
    affiliation: z.string().optional().nullable(),
    links: z.record(z.string()).optional(),
    aliases: z.array(z.string()).optional(),
  });

  const parser = new ContentParser(
    MemberSchema,
    path.join(process.cwd(), 'content/team')
  );

  return parser.parse();
};


export const getTeamMembersByRole = async () => {
  const members = await getTeamMembers();

  const pi = members.filter(member => member.role === 'pi');
  const teamMembers = members.filter(member => member.role === 'undergrad');
  const alumni = members.filter(member => member.role === 'alumni');

  return { pi, teamMembers, alumni };
};
