import TeamPage from "@/components/team";
import { getTeamMembersByRole } from "@/lib/md-parser";

export const metadata = {
  title: "ML4U | Our Team",
  description: "About our team",
};

export default async function Page() {
  const { pi, alumni, teamMembers } = await getTeamMembersByRole();

  return <TeamPage pi={pi} teamMembers={teamMembers} alumni={alumni} />;
}
