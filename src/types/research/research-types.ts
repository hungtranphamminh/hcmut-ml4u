export interface Paper {
  title: string;
  authors: string[];
  date: string;
  id: string;
  link: string;
  tags?: string[];
  image?: string | null;
}

export interface YearGroup {
  year: number;
  papers: Paper[];
}