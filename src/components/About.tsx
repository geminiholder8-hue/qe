import { Heart, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We push you to achieve your highest potential in every discipline.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our trainers bring energy and dedication to every single session.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a supportive family that celebrates every achievement together.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge training methods that blend tradition with modern fitness.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 font-semibold">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Journey to
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
                Greatness Starts Here
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              The ECA Heaven is more than just an academy – it's a transformative experience. Located in the heart of Kathmandu, we specialize in developing both physical prowess and creative expression.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're mastering a flying kick in Taekwondo, finding your rhythm in Zumba, or discovering your voice in acting classes, our expert instructors guide you every step of the way. We believe that everyone has untapped potential waiting to be unleashed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
