import { TeamMember } from "@/types/team/team-types";
import Image from "next/image";
import Link from "next/link";
import journalIcon from "@images/members/journal.svg";
import homepageIcon from "@images/members/homepage.svg";

const MemberCard = ({ member }: { member: TeamMember }) => {
  const constructSocialLink = (platform: string, url: string) => {
    switch (platform) {
      case "linkedin":
        return "https://www.linkedin.com/in/" + url;
      case "github":
        return "https://www.github.com/" + url;
      case "facebook":
        return "https://www.facebook.com/" + url;
      case "google-scholar":
        return "https://scholar.google.com/citations?user=" + url;
      case "home-page":
        return url;
      case "orcid":
        return "https://orcid.org/" + url;
      default:
        return url;
    }
  };

  const constructResearchSearchQuery = (aliases?: string[]) => {
    if (!aliases || aliases.length === 0) return "";
    return aliases.map((alias) => `"${alias}"`).join(" ");
  };

  return (
    <div
      className="pb-4 relative hover:scale-110 transition-all duration-300 ease-in-out
    xl:w-[260px] md:w-[240px] w-[150px] group hover:z-10
    "
    >
      <div className="md:h-[290px] h-[220px] w-full relative">
        {/* Member avatar */}
        <div className="relative grow h-full shadow-xl overflow-hidden rounded-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full group-hover:scale-110 transition-all duration-300 rounded-lg"
            // layout="fill"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Member info */}
      <div
        className="absolute bottom-0
    group-hover:-bottom-20 transition-all duration-300 ease-in-out
    px-3 group-hover:px-0 w-full z-10 "
      >
        {/* Member role */}
        {member.role === "undergrad" ? (
          <div
            className="text-sm font-semibold tracking-wider uppercase px-3 text-white bg-[url('/images/background.jpg')] bg-[center_bottom] group-hover:h-0 h-5 w-fit
        transition-all duration-300 ease-in-out"
          >
            {member.role}
          </div>
        ) : (
          <div
            className="text-sm font-semibold tracking-wider uppercase px-3 text-white bg-[url('/images/background.jpg')] bg-[left_41%_top_55%] group-hover:h-0 h-5 w-fit
      transition-all duration-300 ease-in-out"
          >
            {member.role}
          </div>
        )}

        <div className="w-full  ">
          <h3 className="md:text-lg text-base leading-tight font-semibold text-gray-600 pl-3 bg-white ">
            {member.name}
          </h3>
          <div className="h-0 group-hover:h-[150px]  mt-[-5px] transition-all duration-300 ease-in-out overflow-hidden">
            {/* Hover drop down content */}
            <div className="px-3 bg-white shadow-xl min-h-16 group-hover:rounded-b-lg rounded-sm">
              {/* Role */}
              {/* <p className="text-xs text-gray-400 text-left ring-blue-100 uppercase">
                {member.role}
              </p> */}

              {/* Description */}
              <p className="text-xs font-extralight text-black line-clamp-4 py-1 border-t my-1 border-black/40">
                {member.description}
              </p>
              <div className="w-full flex items-center justify-start gap-2 py-1 my-1 text-[#494e52] text-xs">
                {/* Research Button */}
                {member.aliases && member.aliases.length > 0 && (
                  <Link
                    href={`/researches?search=${encodeURIComponent(
                      constructResearchSearchQuery(member.aliases)
                    )}`}
                    className=" flex items-center gap-1 underline"
                  >
                    <Image
                      src={journalIcon}
                      alt="journal"
                      width={14}
                      height={14}
                    />
                    <p>Publications</p>
                  </Link>
                )}

                {/* Home page */}
                {member.links?.["home-page"] && (
                  <Link
                    href={member.links["home-page"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center gap-1 underline"
                  >
                    <Image
                      src={homepageIcon}
                      alt="homepage"
                      width={14}
                      height={14}
                    />
                    <p>Home Page</p>
                  </Link>
                )}
              </div>

              {/* Social links */}
              <div className="flex flex-wrap w-full justify-start items-center gap-1 py-2">
                {member.links?.email && (
                  <Link
                    key="email"
                    href={`mailto:${member.links.email}`}
                    className="text-blue-500 hover:text-blue-600 transition-colors flex items-center justify-start"
                  >
                    <img
                      src={"images/shared/email-icon.svg"}
                      alt="email"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  </Link>
                )}
                {member.links &&
                  Object.entries(member.links)
                    .filter(
                      ([platform]) =>
                        platform !== "email" && platform !== "home-page"
                    )
                    .map(([platform, url]) => (
                      <Link
                        key={platform}
                        href={constructSocialLink(platform, url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition-colors flex items-center justify-start"
                      >
                        <img
                          src={"images/shared/" + platform + "-icon.svg"}
                          alt={platform}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
