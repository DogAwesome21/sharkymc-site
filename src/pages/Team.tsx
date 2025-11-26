import { Crown, Shield, Wrench, Star } from 'lucide-react';

interface TeamMember {
  username: string;
  rank: string;
  icon: React.ReactNode;
  color: string;
}

function Team() {
  const teamMembers: TeamMember[] = [
    { username: 'Steve', rank: 'Owner', icon: <Crown size={24} />, color: 'from-yellow-400 to-orange-500' },
    { username: 'Alex', rank: 'Admin', icon: <Shield size={24} />, color: 'from-red-400 to-pink-500' },
    { username: 'Notch', rank: 'Moderator', icon: <Star size={24} />, color: 'from-green-400 to-emerald-500' },
    { username: 'Herobrine', rank: 'Developer', icon: <Wrench size={24} />, color: 'from-cyan-400 to-blue-500' },
    { username: 'Enderman', rank: 'Helper', icon: <Star size={24} />, color: 'from-purple-400 to-indigo-500' },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-300">
            Meet the people who make SharkyMC awesome
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-400/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden bg-gray-700 shadow-lg">
                  <img
                    src={`https://mc-heads.net/avatar/${member.username}/96`}
                    alt={member.username}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.username}</h3>

                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${member.color} text-white font-semibold shadow-lg`}>
                  {member.icon}
                  <span>{member.rank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-12 border border-blue-500/30 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            You could be next!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
