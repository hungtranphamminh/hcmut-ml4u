export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  doi: string;
  link: string;
  tags?: string[];
  image: string | null;
}

export interface YearGroup {
  year: number;
  papers: Paper[];
}