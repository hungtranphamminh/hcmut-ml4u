import React from "react";
import { YearGroup } from "@/types/research/research-types";
import PublicationCard from "./publication-card";

interface Props {
  publications: YearGroup[];
}

export default function ResearchList({ publications }: Props) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {publications.map((yearGroup) => (
            <section
              key={yearGroup.year}
              className="scroll-mt-20"
              id={yearGroup.year.toString()}
            >
              <h2 className="text-3xl font-bold mb-8 sticky top-20 bg-gray-50/80 backdrop-blur-sm py-4">
                {yearGroup.year}
              </h2>

              <div className="space-y-6">
                {yearGroup.papers.map((paper) => (
                  <PublicationCard key={paper.doi} publication={paper} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
