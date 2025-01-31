export interface TeamMember {
  name: string;
  image: string;
  description?: string;
  role: "pi" | "undergrad" | "alumni";
  affiliation?: string;
  links?: Record<string, string>;
  aliases?: string[];
}

export interface IndexData {
  title: string;
  nav: {
    order: number;
    tooltip: string;
  };
}

export interface TeamPageProps {
  pi: TeamMember[];
  teamMembers: TeamMember[];
  alumni: TeamMember[];
  pageData: IndexData;
}
