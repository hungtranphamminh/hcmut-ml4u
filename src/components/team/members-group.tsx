import { TeamMember } from "@/types/team/team-types";
import MemberCard from "./profile-card";

export default function MembersGroup({
  members,
}: {
  readonly members: TeamMember[];
}) {
  return (
    <div className="w-full snap-start flex items-center justify-center bg-white pt-[120px]">
      <section className="2xl:max-w-[1440px] flex flex-col items-start justify-center 2xl:px-20 px-6 w-full">
        <div
          className=" w-full flex flex-wrap justify-center items-center 
        md:gap-8 xl:gap-10 gap-6"
        >
          <div className="max-w-[300px]">
            <h2 className="text-xl md:text-4xl font-bold text-right my-8 uppercase bg-[url('/images/background.jpg')] bg-[center_bottom] bg-clip-text text-transparent">
              Undergrad <br />{" "}
              <span className="text-black font-light">Team Members</span>
            </h2>
            <p className="text-black font-light text-right">
              The following are the undergraduate students of HCMUT who are part
              of the research team.
            </p>
          </div>

          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
