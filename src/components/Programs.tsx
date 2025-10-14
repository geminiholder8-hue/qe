import { Flame, Music, Dumbbell, Drama, Swords, Shield, PartyPopper, Weight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Shield,
      title: 'Taekwondo',
      description: 'Master the art of discipline, self-defense, and powerful strikes.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: PartyPopper,
      title: 'Dance',
      description: 'Express yourself through movement, rhythm, and creative choreography.',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      icon: Flame,
      title: 'Zumba',
      description: 'High-energy fitness party that melts calories and builds confidence.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Drama,
      title: 'Acting',
      description: 'Develop stage presence, confidence, and emotional expression.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Swords,
      title: 'Muay Thai',
      description: 'Learn the ancient art of eight limbs with power and precision.',
      color: 'from-red-600 to-orange-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Dumbbell,
      title: 'Kick Boxing',
      description: 'Combine boxing and martial arts for ultimate fitness and strength.',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Discover your musical talent with expert guidance and practice.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Weight,
      title: 'Weight Loss Workout',
      description: 'Personalized training programs to help you achieve your fitness goals.',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-400 font-semibold">Our Programs</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
              Path to Excellence
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From martial arts to performing arts, we offer diverse programs designed to transform your mind, body, and spirit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border ${program.borderColor} hover:border-opacity-100 border-opacity-50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className={`relative w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative text-white font-bold text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-300 group-hover:to-orange-300 transition-all duration-300">
                {program.title}
              </h3>

              <p className="relative text-gray-400 leading-relaxed">
                {program.description}
              </p>

              <div className={`mt-6 inline-flex items-center text-sm font-semibold ${program.bgColor} px-4 py-2 rounded-full border ${program.borderColor}`}>
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
