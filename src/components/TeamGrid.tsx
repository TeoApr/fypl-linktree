import team from '../data/team';
import TeamMemberCard from './TeamMemberCard';

const TeamGrid = () => (
  <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-fypl-primary">Meet Our Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
      
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 items-start">
      {team.map((member, idx) => (
        <TeamMemberCard key={idx} member={member} />
      ))}
    </div>
  </section>
);

export default TeamGrid; 