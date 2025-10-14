import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 animate-pulse"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-orange-400" />
          <span className="text-blue-300 font-semibold tracking-wide">Where Passion Meets Performance</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-orange-500 text-transparent bg-clip-text">
            Unleash Your
          </span>
          <br />
          <span className="text-white">Potential</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Move, Create, Conquer at <span className="text-orange-400 font-bold">The ECA Heaven</span> – Kathmandu's premier hub for fitness, martial arts, dance, and performing arts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Book Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105">
            Explore Programs
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '8+', label: 'Programs' },
            { number: '50+', label: 'Students' },
            { number: '10+', label: 'Expert Trainers' },
            { number: '5★', label: 'Rated' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
