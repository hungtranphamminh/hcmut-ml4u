import { TeamMember } from "@/types/team/team-types";

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center p-4">
    <div className="relative w-32 h-32 mb-4">
      <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs">⌛</span>
      </div>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <h3 className="text-lg font-medium text-blue-500 text-center hover:text-blue-600 transition-colors">
      {member.name}
    </h3>
    {member.description && (
      <p className="text-sm text-gray-600 text-center mt-1 px-2">
        {member.description}
      </p>
    )}
    {member.affiliation && (
      <p className="text-sm text-gray-500 text-center mt-1 px-2">
        {member.affiliation}
      </p>
    )}
    {member.links && (
      <div className="flex gap-2 mt-2">
        {Object.entries(member.links).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default MemberCard;
