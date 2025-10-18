import { Flame, Music, Dumbbell, Drama, Swords, Shield, PartyPopper, Weight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: PartyPopper,
      title: 'Dance',
      description: 'Bollywood | Hip-Hop | Freestyle | Contemporary. Annual stage performances and competitions. Build rhythm, confidence, and stage presence.',
      details: 'Designed for all age groups',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      icon: Flame,
      title: 'Zumba & Fitness',
      description: 'Fun, high-energy workouts for weight loss & full-body toning. Stress relief & mental well-being.',
      details: 'Morning and evening batches available',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Shield,
      title: 'Taekwondo Dance',
      description: 'Master discipline, self-defense, and powerful strikes. Build strength, flexibility, and confidence.',
      details: 'Belt progression system',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Swords,
      title: 'Muay Thai',
      description: 'Learn the ancient art of eight limbs with power and precision. Build endurance and fighting skills.',
      details: 'Traditional techniques',
      color: 'from-red-600 to-orange-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Dumbbell,
      title: 'Kick Boxing',
      description: 'Combine boxing and martial arts for ultimate fitness and strength. High-intensity training.',
      details: 'Full-body conditioning',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Drama,
      title: 'Acting',
      description: 'Theatre and drama training to develop stage presence, confidence, and emotional expression.',
      details: 'Performance opportunities',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Learn guitar, keyboard, drums, and vocals with skilled musicians. Express yourself through music.',
      details: 'One-on-one & group sessions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Weight,
      title: 'Weight Loss Workout',
      description: 'Personalized training programs to help you achieve your fitness goals with expert guidance.',
      details: 'Custom meal plans available',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-emerald-900 to-green-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 border-2 border-yellow-400/40 rounded-full mb-6">
            <span className="text-yellow-300 font-bold">Our Programs</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
              Path to Excellence
            </span>
          </h2>

          <p className="text-yellow-200/90 text-lg max-w-2xl mx-auto font-semibold">
            From martial arts to performing arts, we offer diverse programs designed to transform your mind, body, and spirit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-yellow-100 p-8 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:transform hover:scale-105 cursor-pointer overflow-hidden animate-slide-in"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="w-8 h-8 text-yellow-300" />
              </div>

              <h3 className="relative text-green-900 font-black text-2xl mb-3 transition-all duration-300">
                {program.title}
              </h3>

              <p className="relative text-green-800 leading-relaxed mb-3 font-semibold">
                {program.description}
              </p>

              <p className="relative text-emerald-700 text-sm font-bold mb-4">
                {program.details}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-black bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 px-4 py-2 rounded-full hover:shadow-lg glow-green transition-all">
                Enroll Now →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
