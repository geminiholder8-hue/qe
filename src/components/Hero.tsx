import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-green-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 animate-pulse"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-6 py-3 rounded-full border-2 border-yellow-400/50 mb-8 backdrop-blur-sm animate-bounce-slow">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-yellow-200 font-bold tracking-wide">Where Passion Meets Performance</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-slide-in">
          <span className="text-yellow-300">Where Passion</span>
          <br />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 text-transparent bg-clip-text">
            Meets Performance!
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
          Your one-stop hub for Dance, Zumba, Martial Arts, Music & Acting – helping kids, teens, and adults grow with confidence and creativity.
        </p>

        <p className="text-lg text-yellow-200/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          At THE ECA HEAVEN, we believe every child and adult has a hidden talent waiting to shine. Our hub nurtures creativity, builds confidence, and develops life skills through arts, fitness, and performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+9779706418555" className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-black rounded-full hover:shadow-2xl glow-yellow transition-all duration-300 hover:scale-110 animate-pulse">
            <span className="flex items-center gap-2">
              Book Now - Call Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>

          <button className="px-8 py-4 bg-green-700/40 backdrop-blur-sm text-yellow-300 font-black rounded-full border-3 border-yellow-400 hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 hover:scale-110">
            Explore Our Programs
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
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
                {stat.number}
              </div>
              <div className="text-yellow-200 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900 to-transparent"></div>
    </section>
  );
}
