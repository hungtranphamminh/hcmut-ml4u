import { Paper } from "@/types/research/research-types";
import Link from "next/link";

interface PublicationCardProps {
  readonly publication: Paper;
  readonly searchTerms?: string[];
}

function highlightText(text: string, searchTerms: string[] = []) {
  if (!searchTerms.length) return text;

  const escapedTerms = searchTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <mark key={idx} className="bg-yellow-200">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function PublicationCard({
  publication,
  searchTerms,
}: PublicationCardProps) {
  return (
    <div className="w-full bg-white group shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="flex flex-col gap-4 p-4 w-full">
        {/* Image */}
        {/* {publication.image ? (
          <div className="w-full 2xl:h-40 relative rounded-lg overflow-hidden shrink-0">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <div className="w-64 h-60 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center">
            <span className="text-gray-400">No preview</span>
          </div>
        )} */}

        <div className="flex flex-col flex-1 min-w-0 py-2">
          <p className="text-xs text-gray-600 inline-flex">
            {highlightText(publication.publisher ?? "", searchTerms)}
          </p>

          <h3 className="text-base leading-[120%] font-bold mt-1 mb-2 group-hover:text-blue-600">
            <Link href={publication.link} target="_blank">
              {highlightText(publication.title, searchTerms)}
            </Link>
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            {highlightText(publication.authors.join(", "), searchTerms)}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {publication.tags?.map((tag) => (
              <Link
                href={`/research?tag=${tag}`}
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
