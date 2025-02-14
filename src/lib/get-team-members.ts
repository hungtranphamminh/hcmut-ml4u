import { z } from 'zod';
import path from "path";
import { ContentParser } from "./md-parser";

export const getTeamMembers = async () => {
  const MemberSchema = z.object({
    name: z.string(),
    image: z.string(),
    description: z.string().optional(),
    role: z.enum(['pi', 'undergrad', 'alumni']),
    affiliation: z.string().optional().nullable(),
    links: z.record(z.string()).optional(),
    aliases: z.array(z.string()).optional(),
    body: z.string().optional(),
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
