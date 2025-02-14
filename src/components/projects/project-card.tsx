import { Project } from "@/lib/get-projects";
import Image from "next/image";
import authorIcon from "@images/shared/author.svg";
import dateIcon from "@images/shared/date.svg";
import aboutIcon from "@images/shared/about.svg";

interface ProjectCardProps {
  readonly index: number;
  readonly project: Project;
  readonly searchTerms?: string[];
  readonly onClick?: () => void;
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

export default function ProjectCard({
  index,
  project,
  searchTerms,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      className="w-full group rounded-md shadow-lg transition-all duration-300 ease-in-out hover:scale-105 "
      onClick={onClick}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col flex-1 min-w-0 py-1">
          {/* Project title */}
          <div className="w-full flex items-center">
            <div className="w-[100px] flex justify-end relative">
              <div className=" grow self-stretch text-xl justify-center flex items-center font-geist text-white/65">
                {"0" + (index + 1)}
                <div className="w-4 h-[2px] bg-white/50 rotate-[-45deg] ml-2"></div>
              </div>
              <div
                className=" rounded-tr-lg mr-[-3px]"
                style={{
                  borderWidth: "0 0 40px 40px",
                  borderColor: "transparent transparent #fff transparent",
                }}
              ></div>
            </div>
            <h3 className="self-stretch lg:text-base text-sm leading-[120%] flex items-center justify-center grow rounded-t-md h-[40px] font-bold pt-1 bg-white">
              {highlightText(project.title, searchTerms)}
            </h3>
          </div>

          {/* Project meta */}
          <div
            className="rounded-b-md rounded-tl-md border border-white group-hover:backdrop-blur-md transition-all duration-300 ease-in-out
          group-hover:bg-black/40 
          "
          >
            <div className=" flex items-center flex-wrap gap-2 text-xs  py-2 px-4 ">
              <p className="text-white  flex items-center gap-1">
                <Image src={authorIcon} alt="author" width={16} height={16} />
                <span className="text-ellipsis line-clamp-1">
                  {highlightText(project.author, searchTerms)}
                </span>
              </p>

              <p className="text-white  flex items-center gap-1">
                <Image src={dateIcon} alt="date" width={16} height={16} />
                <span>{new Date().toISOString().split("T")[0]}</span>
              </p>
            </div>

            <div className=" mt-1 text-sm text-white text-left px-4 font-normal pb-4">
              <Image
                src={aboutIcon}
                alt="about"
                width={16}
                height={16}
                className="inline mr-1"
              />
              {highlightText(project.description, searchTerms)}
            </div>
          </div>

          {/* <div className="mt-auto flex flex-wrap gap-2">
            {publication.tags?.map((tag) => (
              <Link
                href={`/research?tag=${tag}`}
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </button>
  );
}
