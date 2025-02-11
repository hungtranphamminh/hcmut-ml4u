"use client";
import { Suspense } from "react";
import ResearchList from "./index-v2";
import { YearGroup } from "@/types/research/research-types";

interface Props {
  readonly publications: YearGroup[];
}

export default function SuspenseSearchParamsWrapper({ publications }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearchList publications={publications} />
    </Suspense>
  );
}
