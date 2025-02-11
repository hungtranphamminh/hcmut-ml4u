"use client";
import React, {
  useMemo,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

import { YearGroup } from "@/types/research/research-types";
import PublicationCard from "./publication-card-v2";
import { matchesQuery, splitQuery } from "@/lib/research-search";
import { useDebounce } from "@/hooks/use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import leftIcon from "@images/publications/left.svg";
import rightIcon from "@images/publications/right.svg";
import Image from "next/image";

interface Props {
  readonly publications: YearGroup[];
}

export default function ResearchList({ publications }: Props) {
  console.log("publications: ", publications);

  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSearch = searchParams.get("search") || "";
  const inputRef = useRef<HTMLInputElement>(null);

  const currentInputValue = useRef(currentSearch);

  const debouncedUrlUpdate = useDebounce(currentInputValue.current, 300);

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useRef<"left" | "right" | null>(null);
  const scrollSpeed = 20;

  const filteredPublications = useMemo(() => {
    if (!currentSearch) return publications;
    const { phrases, terms } = splitQuery(currentSearch);

    return publications
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter((paper) => {
          const searchableText = [
            paper.title,
            paper.authors.join(" "),
            paper.publisher,
          ].join(" ");

          return matchesQuery(searchableText, phrases, terms);
        }),
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);
  }, [publications, currentSearch]);

  // Get all matched terms for highlighting
  const highlightTerms = useMemo(() => {
    if (!currentSearch) return [];
    const { phrases, terms } = splitQuery(currentSearch);
    return [...phrases, ...terms];
  }, [currentSearch]);

  const animate = useCallback(() => {
    if (!containerRef.current || !scrollDirection.current) return;
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (scrollDirection.current === "left") {
      container.scrollLeft = Math.max(0, container.scrollLeft - scrollSpeed);
    } else {
      container.scrollLeft = Math.min(
        maxScroll,
        container.scrollLeft + scrollSpeed
      );
    }

    scrollAnimationRef.current = requestAnimationFrame(animate);
  }, []);

  const startScroll = useCallback(
    (direction: "left" | "right") => {
      if (isScrolling) return;
      scrollDirection.current = direction;
      setIsScrolling(true);
      scrollAnimationRef.current = requestAnimationFrame(animate);
    },
    [isScrolling, animate]
  );

  const stopScroll = useCallback(() => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
    scrollDirection.current = null;
    setIsScrolling(false);
  }, []);

  // Handle input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentInputValue.current = e.target.value;
    // Force a rerender to trigger the debounce effect
    router.refresh();
  };

  // Update URL when debounced value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedUrlUpdate) {
      params.set("search", debouncedUrlUpdate);
    } else {
      params.delete("search");
    }

    // Only update if the URL would actually change
    if (params.toString() !== searchParams.toString()) {
      router.replace(`/researches?${params.toString()}`, { scroll: false });
    }
  }, [debouncedUrlUpdate, router, searchParams]);

  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-[calc(100%-100px)] h-screen relative pt-20 scrollbar-hidden overflow-y-auto
      2xl:px-10 xl:px-8 lg:px-6
    "
    >
      <div className="w-fit mx-auto px-4 py-6 sticky top-0 z-50">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            defaultValue={currentSearch}
            onChange={handleSearchChange}
            placeholder='Search publications... Use "word1" "word2" for OR search'
            className="w-[400px] px-4 py-2 bg-black/10 backdrop-blur-md 
                 border border-white/20 rounded-lg
                 text-white placeholder-white/50"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/[0.05] to-white/[0.01] rounded-lg" />
        </div>
      </div>

      <div className="absolute top-1/2 left-4 z-50">
        <button
          onMouseDown={() => startScroll("left")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll("left")}
          onTouchEnd={stopScroll}
          disabled={containerRef.current?.scrollLeft === 0}
          className="p-2 rounded-full bg-blue-900 shadow-lg hover:bg-blue-700  enabled:animate-bounce  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Move left"
        >
          <div className="w-6 h-6">
            <Image src={leftIcon} alt="left" width={24} height={24} />
          </div>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-50">
        <button
          onMouseDown={() => startScroll("right")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll("right")}
          onTouchEnd={stopScroll}
          disabled={
            containerRef.current?.scrollLeft ===
            (containerRef.current?.scrollWidth ?? 0) -
              (containerRef.current?.clientWidth ?? 0)
          }
          className="p-2 rounded-full bg-blue-800 shadow-lg hover:bg-blue-700 enabled:animate-bounce  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Move right"
        >
          <div className="w-6 h-6">
            <Image src={rightIcon} alt="left" width={24} height={24} />
          </div>
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex flex-row overflow-x-auto xl:gap-10 scrollbar-hidden"
      >
        {[...filteredPublications].toReversed().map((yearGroup) => (
          <div key={yearGroup.year}>
            <h2 className="text-xl relative font-bold mb-4 text-white backdrop-blur-sm py-2 px-4  top-0 z-10">
              {yearGroup.year}
            </h2>
            <section className="2xl:w-[600px] w-[500px] shrink-0 px-4  overflow-y-auto scrollbar-hidden h-[calc(100vh-(70px+90px+80px))]">
              <div className="space-y-6 w-full">
                {yearGroup.papers.map((paper) => (
                  <PublicationCard
                    key={paper.id}
                    publication={paper}
                    searchTerms={highlightTerms}
                  />
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
