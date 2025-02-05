import { TeamMember } from "@/types/team/team-types";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div
      className="pb-4 relative rounded-
    xl:w-[260px] md:w-[240px] w-[150px] group
    "
    >
      <div className="md:h-[290px] h-[220px] w-full relative">
        {/* member avatar */}
        <div
          className="relative grow h-full shadow-xl overflow-hidden
    "
        >
          <Image
            src={"/" + member.image}
            alt={member.name}
            className="w-full h-full group-hover:scale-110 transition-all duration-300"
            layout="fill"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* member info */}
      <div
        className=" absolute bottom-0
    group-hover:-bottom-10 transition-all duration-300 ease-in-out
    px-3 group-hover:px-0 w-full z-10"
      >
        {/* member role */}

        {member.role === "undergrad" ? (
          <div
            className="text-sm font-semibold tracking-wider uppercase px-3 text-white bg-[url('/images/background.jpg')] bg-[center_bottom] group-hover:h-0 h-5 w-fit
        transition-all duration-300 ease-in-out
      "
          >
            {member.role}
          </div>
        ) : (
          <div
            className="text-sm font-semibold tracking-wider uppercase px-3 text-white bg-[url('/images/background.jpg')] bg-[left_41%_top_55%] group-hover:h-0 h-5 w-fit
      transition-all duration-300 ease-in-out
    "
          >
            {member.role}
          </div>
        )}

        <div className="w-full bg-white shadow-xl">
          <h3 className="text-lg font-semibold text-gray-600 pl-3">
            {member.name}
          </h3>
          <div className="h-0 group-hover:h-[140px] transition-all duration-300 ease-in-out overflow-hidden">
            <div className="px-3">
              <p className="text-xs text-gray-400 text-left ring-blue-100 uppercase">
                {member.role}
              </p>
              <div className="w-full h-[1px] bg-gray-400 my-2"> </div>
              <p className="text-xs font-extralight text-gray-400">
                {member.description}
              </p>

              <div className=" flex flex-wrap gap-2 mt-2">
                {member.links?.email && (
                  <Link
                    key="email"
                    href={`mailto:${member.links.email}`}
                    className="text-blue-500 hover:text-blue-600 transition-colors flex items-center justify-start"
                  >
                    <Image
                      src={"/images/shared/email-icon.svg"}
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
                        <Image
                          src={"/images/shared/" + platform + "-icon.svg"}
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
