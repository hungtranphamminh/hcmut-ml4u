import { TeamMember } from "@/types/team/team-types";
import MemberCard from "./profile-card";

export default function AlumnisGroup({
  members,
}: {
  readonly members: TeamMember[];
}) {
  return (
    <div className="w-full snap-center flex items-center justify-center bg-white py-[120px]">
      <section className="2xl:max-w-[1440px] flex items-start justify-center 2xl:px-20 px-6 w-full">
        <div
          className=" w-full flex flex-wrap flex-row-reverse justify-center items-center
        2xl:gap-10 md:gap-8 gap-6"
        >
          <div className="max-w-[300px] ml-4 font-geist">
            <h2 className="text-xl md:text-4xl font-bold text-left my-8 uppercase bg-[url('/images/background.jpg')] bg-[left_45%_top_55%] bg-clip-text text-transparent">
              Alumni <br />
              <span className="text-black font-light">Team Members</span>
            </h2>
            <p className="text-black font-light text-left">
              The following are the alumni of HCMUT who have contributed to the
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
