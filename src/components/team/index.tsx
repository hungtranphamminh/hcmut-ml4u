"use client";

import React from "react";
import { TeamPageProps } from "@/types/team/team-types";
import MembersGroup from "./members-group";
import Founder from "./founder";
import AlumnisGroup from "./alumnis-group";
import WhoWeAre from "./who-we-are";

const TeamPage = ({ pi, teamMembers, alumni }: TeamPageProps) => {
  return (
    <div className="h-screen snap-y snap-mandatory scroll-smooth w-full relative overflow-y-auto scrollbar-hidden pb-20 flex flex-col items-center justify-start">
      {/* Introduction Section */}
      <WhoWeAre />

      {/* Founder Section */}
      <Founder pi={pi} />

      {/* Team Members Section */}
      <MembersGroup members={teamMembers} />

      <div className="w-full py-[60px] bg-white"></div>

      {/* Alumni Section */}
      <AlumnisGroup members={alumni} />
    </div>
  );
};

export default TeamPage;
