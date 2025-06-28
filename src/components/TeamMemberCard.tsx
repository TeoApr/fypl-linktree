import type { TeamMember } from '../data/team';

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const cardContent = (
    <div className="bg-white rounded-lg shadow-md p-3 md:p-4 flex flex-col justify-between items-center min-h-[220px] h-full hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer">
      <div className="flex flex-col items-center w-full">
        <div className="relative mb-2 md:mb-3">
          <img 
            src={member.photo} 
            alt={member.name} 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm" 
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-fypl-primary rounded-full flex items-center justify-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        <h3 className="font-semibold text-sm md:text-base text-gray-800 mb-1 text-center leading-tight max-w-[180px] break-words">{member.name}</h3>
        <p className="text-xs text-gray-600 mb-2 text-center leading-tight break-words max-w-[180px] whitespace-pre-line">{member.role}</p>
      </div>
    </div>
  );

  return member.socials.instagram ? (
    <a
      href={member.socials.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={member.name + " Instagram"}
      style={{ textDecoration: 'none' }}
    >
      {cardContent}
    </a>
  ) : cardContent;
};

export default TeamMemberCard; 