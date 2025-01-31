import React from "react";
import MemberCard from "./member-card";
import { TeamPageProps } from "@/types/team/team-types";

const TeamPage = ({ pi, teamMembers, alumni }: TeamPageProps) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* team leader */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
            Principal Investigator:
          </h2>
          <div className="flex justify-center">
            {pi.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>
        {/* team member */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
            Team members:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* alumni */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
            Alumni:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
