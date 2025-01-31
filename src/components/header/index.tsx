"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { name: "Home", path: "/" },
  { name: "Researches", path: "/researches" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const pathName = usePathname();

  console.log("pathName", pathName);

  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 z-[9999] py-4">
      <div className=" flex items-center justify-center">
        {PAGES.map((page) => (
          <Link key={page.path} href={page.path}>
            <p
              className={`text-xl font-semibold hover:text-blue-500 mx-4
                ${pathName === page.path ? "text-blue-500" : "text-gray-800"}
              `}
            >
              {page.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
