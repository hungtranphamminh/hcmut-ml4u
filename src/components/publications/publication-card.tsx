import Image from "next/image";
import { Paper } from "@/types/research/research-types";
import Link from "next/link";

interface PublicationCardProps {
  readonly publication: Paper;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="w-full max-w-[800px] bg-white rounded-xl group shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="flex gap-4 p-4">
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

        <div className="flex flex-col flex-1 min-w-0 py-2">
          <div className="text-sm text-gray-500">{publication.venue}</div>
          <h3 className="text-xl font-medium mt-1 mb-2 line-clamp-2 group-hover:text-blue-600">
            <Link href={publication.link} target="_blank">
              {publication.title}
            </Link>
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-1">
            {publication.authors.join(", ")}
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
