"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerIcon from "../ui/hamburger-icon";

const PAGE_PATHS = [
  { name: "Home", path: "/" },
  { name: "Publications", path: "/researches" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="xl:w-[100px] h-screen fixed  top-0 right-0 z-[9999] md:shadow-md">
      {/* Intersection with the header */}
      <div className="w-full px-4 h-[60px] flex items-center justify-center md:bg-black md:bg-opacity-15">
        <button>
          <HamburgerIcon />
        </button>
      </div>

      {/* Navigator */}
      <div
        className="w-full h-[calc(100%-60px)] flex-col items-center justify-center backdrop-blur-[3px] bg-black bg-opacity-15
        hidden md:flex
      "
      >
        <div className="flex flex-col items-center gap-6">
          {PAGE_PATHS.map((page, index) => {
            const isActive = pathname === page.path;

            return (
              <div key={page.path} className="flex flex-col items-center">
                <Link
                  href={page.path}
                  className={`text-lg font-geist_mono transition-colors font-geist duration-300 relative
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                >
                  {"0" + index}

                  {/* Connector line - only show if current section and not last item */}

                  <div
                    className={`
                      transition-all duration-300 ease-in-out 
                      ${isActive ? "w-8" : "w-0"}
                       h-[1px] bg-orange-200 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
