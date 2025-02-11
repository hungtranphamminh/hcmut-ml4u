"use client";
import React, { useMemo, useState, useRef } from "react";
import { YearGroup } from "@/types/research/research-types";
import PublicationCard from "./publication-card";

interface Props {
  readonly publications: YearGroup[];
}

export default function ResearchList({ publications }: Props) {
  const [searchText, setSearchText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter publications based on search text.
  const filteredPublications = useMemo(() => {
    if (!searchText) return publications;
    return publications
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter(
          (paper) =>
            paper.title.toLowerCase().includes(searchText.toLowerCase()) ||
            paper.authors
              .join(" ")
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            paper.publisher?.toLowerCase().includes(searchText.toLowerCase())
        ),
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);
  }, [publications, searchText]);

  const handleNext = () => {
    setScrollProgress((prev) => Math.min(prev + 0.2, 1));
  };

  const handlePrev = () => {
    setScrollProgress((prev) => Math.max(prev - 0.2, 0));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 relative">
      {/* Search bar */}
      <div className="w-fit mx-auto px-4 py-6 bg-blue-400 sticky top-0 z-50">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search publications..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div
        ref={containerRef}
        className="w-full h-screen relative overflow-hidden"
      >
        {/* Buttons for navigation */}
        <div className="absolute top-1/2 left-4 z-50">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-700 text-white rounded"
          >
            ⬅
          </button>
        </div>
        <div className="absolute top-1/2 right-4 z-50">
          <button
            onClick={handleNext}
            className="p-2 bg-gray-700 text-white rounded"
          >
            ➡
          </button>
        </div>
        {/* Horizontal Scrolling Container */}
        <div
          className="h-screen flex items-center transition-transform duration-500"
          style={{ transform: `translateX(-${scrollProgress * 100}%)` }}
        >
          <div className="flex space-x-12">
            {filteredPublications.map((yearGroup) => (
              <section
                key={yearGroup.year}
                className="min-w-[80vw] max-w-[80vw] flex-shrink-0"
              >
                <h2 className="text-3xl font-bold mb-4 bg-gray-50/80 backdrop-blur-sm py-2 px-4">
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
    </div>
  );
}
