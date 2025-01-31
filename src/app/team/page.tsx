// app/team/page.tsx
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import TeamPage from "@/components/team";

export const metadata = {
  title: "Team",
  description: "About our team",
};

interface TeamMember {
  name: string;
  image: string;
  description?: string;
  id: string;
  role: "pi" | "undergrad" | "alumni";
  affiliation?: string;
  links?: Record<string, string>;
  aliases?: string[];
}

interface IndexData {
  title: string;
  nav: {
    order: number;
    tooltip: string;
  };
}

export default async function Page() {
  // Read the content directory
  const contentDirectory = path.join(process.cwd(), "content/team");
  const files = await fs.readdir(contentDirectory);

  // Process each markdown file
  const members = await Promise.all(
    files
      .filter((filename) => filename !== "index.md")
      .map(async (filename) => {
        const filePath = path.join(contentDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const parsed = matter(fileContent);
        // Type assertion here
        const memberData = parsed.data as unknown as TeamMember;
        return {
          ...memberData,
          id: filename.replace(".md", ""),
        };
      })
  );

  // Read index.md for any additional configuration
  const indexPath = path.join(contentDirectory, "index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const parsed = matter(indexContent);
  // Type assertion for index data
  const indexData = parsed.data as unknown as IndexData;

  // Categorize members by role
  const pi = members.filter(
    (member): member is TeamMember => member.role === "pi"
  );
  const teamMembers = members.filter(
    (member): member is TeamMember =>
      member.role !== "pi" && member.role !== "alumni"
  );
  const alumni = members.filter(
    (member): member is TeamMember => member.role === "alumni"
  );

  return (
    <TeamPage
      pi={pi}
      teamMembers={teamMembers}
      alumni={alumni}
      pageData={indexData}
    />
  );
}
