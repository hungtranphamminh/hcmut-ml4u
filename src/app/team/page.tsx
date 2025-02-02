// app/team/page.tsx
import TeamPage from "@/components/team";
import { getTeamMembersByRole } from "@/lib/content-parser";

export const metadata = {
  title: "Team",
  description: "About our team",
};

export default async function Page() {
  const { pi, alumni, teamMembers } = await getTeamMembersByRole();

  return <TeamPage pi={pi} teamMembers={teamMembers} alumni={alumni} />;
}
