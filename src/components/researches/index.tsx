"use client";
import React, { useMemo, useState } from "react";
import { YearGroup } from "@/types/research/research-types";
import PublicationCard from "./publication-card";

interface Props {
  readonly publications: YearGroup[];
}

export default function ResearchList({ publications }: Props) {
  const [searchText, setSearchText] = useState("");

  // Filter publications based on search text.
  const filteredPublications = useMemo(() => {
    if (!searchText) return publications;
    return publications
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter((paper) =>
          // Adjust the fields to search in as necessary (e.g., title, abstract)
          paper.title.toLowerCase().includes(searchText.toLowerCase())
        ),
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);
  }, [publications, searchText]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 bg-blue-400">
        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search publications..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="space-y-16 flex flex-col-reverse ">
          {filteredPublications.map((yearGroup) => (
            <section
              key={yearGroup.year}
              className="scroll-mt-20"
              id={yearGroup.year.toString()}
            >
              <h2 className="text-3xl font-bold mb-8 sticky z-10 top-20 bg-gray-50/80 backdrop-blur-sm py-4">
                {yearGroup.year}
              </h2>
              <div className="space-y-6">
                {yearGroup.papers.map((paper) => (
                  <PublicationCard
                    key={paper.id}
                    publication={paper}
                    searchTerm={searchText}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
