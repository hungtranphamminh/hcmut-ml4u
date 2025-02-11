import Image from "next/image";
import { Paper } from "@/types/research/research-types";
import Link from "next/link";

interface PublicationCardProps {
  readonly publication: Paper;
  readonly searchTerm?: string;
}

function highlightText(text: string, searchTerm?: string) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text
    .split(regex)
    .map((part, idx) =>
      regex.test(part) ? <mark key={idx}>{part}</mark> : part
    );
}

export default function PublicationCard({
  publication,
  searchTerm,
}: PublicationCardProps) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl group shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="flex gap-4 p-4">
        {/* publication thumbnail image */}
        {publication.image ? (
          <div className="w-64 h-40 relative rounded-lg overflow-hidden shrink-0">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        ) : (
          <div className="w-64 h-40 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center">
            <span className="text-gray-400">No preview</span>
          </div>
        )}

        {/* publication details */}
        <div className="flex flex-col flex-1 min-w-0 py-2">
          {/* publisher */}
          <p className="text-xs text-gray-600 inline-flex">
            {highlightText(publication.publisher ?? "", searchTerm)}
          </p>

          {/* title */}
          <h3 className="text-lg font-bold mt-1 mb-2 line-clamp-2 group-hover:text-blue-600">
            <Link href={publication.link} target="_blank">
              {highlightText(publication.title, searchTerm)}
            </Link>
          </h3>

          {/* authors */}
          <p className="text-gray-600 text-sm mb-4">
            {highlightText(publication.authors.join(", "), searchTerm)}
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
