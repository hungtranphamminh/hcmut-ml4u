import { TeamMember } from "@/types/team/team-types";
import Image from "next/image";

const MemberCard = ({ member }: { member: TeamMember }) => (
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
        <div className="h-0 group-hover:h-[100px] transition-all duration-300 ease-in-out overflow-hidden">
          <div className="px-3">
            <p className="text-xs text-gray-400 text-left ring-blue-100 uppercase">
              {member.role}
            </p>
            <div className="w-full h-[1px] bg-gray-400 my-2"> </div>
            <p className="text-xs font-extralight text-gray-400">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MemberCard;
