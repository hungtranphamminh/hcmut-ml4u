import { TeamMember } from "@/types/team/team-types";
import MemberCard from "./profile-card";

export default function AlumnisGroup({
  members,
}: {
  readonly members: TeamMember[];
}) {
  return (
    <div className="w-full flex items-center justify-center xl:py-[120px] pt-[60px] pb-20">
      <section className="2xl:max-w-[1440px] flex items-start justify-center 2xl:px-20 px-6 w-full">
        <div
          className=" w-full flex flex-wrap flex-row-reverse justify-center items-center
        2xl:gap-10 md:gap-8 gap-6"
        >
          <div className="max-w-[300px] ml-4">
            <h2 className="text-xl md:text-4xl font-bold text-left flex flex-col md:items-start items-center">
              <div className="bg-white w-fit">
                <span className="leading-none p-[2px] uppercase bg-[url('/images/background.jpg')] bg-[left_42%_top_52%] bg-clip-text text-transparent">
                  Alumni
                </span>
              </div>
              <span className="text-white font-light py-1 border-b border-t mt-2">
                Team Members
              </span>
            </h2>
            <p className="text-white/90 font-light md:text-left text-center text-sm md:text-base">
              The following are the alumnis of HCMUT who have contributed to the
              research team.
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
