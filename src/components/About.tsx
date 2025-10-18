import { Heart, Target, Users, Zap, CheckCircle, Sparkles, Award, Shield } from 'lucide-react';

export default function About() {
  const whyChoose = [
    {
      icon: Sparkles,
      title: 'Variety of Programs',
      description: 'Dance, Zumba, Martial Arts, Music, Acting – all under one roof'
    },
    {
      icon: Award,
      title: 'Expert Trainers',
      description: 'Certified, friendly, and passionate coaches & teachers'
    },
    {
      icon: Users,
      title: 'Confidence & Discipline',
      description: 'Personality development through fun learning'
    },
    {
      icon: Target,
      title: 'Events & Competitions',
      description: 'Stage shows, performances, and talent exposure'
    },
    {
      icon: Shield,
      title: 'Safe & Family-Friendly',
      description: 'A secure and encouraging learning environment'
    }
  ];

  const mission = [
    {
      icon: Heart,
      title: 'Inspire',
      description: 'Encourage students to explore creativity and self-expression'
    },
    {
      icon: Zap,
      title: 'Empower',
      description: 'Build confidence, focus, and leadership through activities'
    },
    {
      icon: Target,
      title: 'Develop',
      description: 'Provide opportunities to perform, compete, and grow'
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Bring together families, trainers, and students in a positive environment'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-green-900 to-emerald-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 border-2 border-yellow-400/40 rounded-full mb-6">
            <span className="text-yellow-300 font-bold">Our Story</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6 leading-tight">
            About
            <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
              THE ECA HEAVEN
            </span>
          </h2>

          <p className="text-yellow-100 text-lg mb-6 max-w-4xl mx-auto leading-relaxed font-semibold">
            THE ECA HEAVEN was founded with the vision of creating a creative and fitness-friendly space where children, teens, and adults can explore their passions, improve their skills, and develop discipline in a supportive environment.
          </p>

          <p className="text-yellow-200/90 text-lg max-w-4xl mx-auto leading-relaxed">
            We are more than just a training center — we are a community where talent is encouraged, dreams are nurtured, and achievements are celebrated.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-yellow-300 mb-4">
              Why Choose <span className="text-amber-300">THE ECA HEAVEN?</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:transform hover:scale-105 animate-slide-in"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="text-green-900 font-black text-xl mb-2">{item.title}</h3>
                <p className="text-green-800 text-sm leading-relaxed font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-100/95 border-2 border-yellow-400 rounded-3xl p-12 glow-yellow">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Our <span className="text-emerald-700">Mission</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mission.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-bounce-slow">
                  <item.icon className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="text-green-900 font-black text-xl mb-2">{item.title}</h3>
                <p className="text-green-800 text-sm leading-relaxed font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-yellow-300 mb-4">
              Our <span className="text-amber-300">Team</span>
            </h3>
            <p className="text-yellow-200/90 text-lg max-w-3xl mx-auto font-semibold">
              We are proud to have a team of passionate and skilled trainers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-100 p-8 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-10 h-10 text-yellow-300" />
              </div>
              <h4 className="text-green-900 font-black text-xl text-center mb-2">Ramsharan Guru</h4>
              <p className="text-amber-600 text-sm text-center mb-3 font-bold">Founder & Director</p>
              <p className="text-green-800 text-sm leading-relaxed text-center font-semibold">
                A visionary leader who believes extracurricular activities shape a child's future.
              </p>
            </div>

            <div className="bg-yellow-100 p-8 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-10 h-10 text-yellow-300" />
              </div>
              <h4 className="text-green-900 font-black text-xl text-center mb-2">Dance & Zumba Team</h4>
              <p className="text-amber-600 text-sm text-center mb-3 font-bold">Choreographers & Fitness Experts</p>
              <p className="text-green-800 text-sm leading-relaxed text-center font-semibold">
                Professional choreographers and fitness experts who bring energy to every class.
              </p>
            </div>

            <div className="bg-yellow-100 p-8 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-10 h-10 text-yellow-300" />
              </div>
              <h4 className="text-green-900 font-black text-xl text-center mb-2">Martial Arts Coaches</h4>
              <p className="text-amber-600 text-sm text-center mb-3 font-bold">Taekwondo, Muay Thai & Kickboxing</p>
              <p className="text-green-800 text-sm leading-relaxed text-center font-semibold">
                Experienced trainers dedicated to building strength, discipline, and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
