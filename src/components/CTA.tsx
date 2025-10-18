import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-6 py-3 rounded-full border-2 border-yellow-400/50 mb-8 backdrop-blur-sm animate-bounce-slow">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-yellow-200 font-bold tracking-wide">Limited Spots Available</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-yellow-300 mb-6 leading-tight">
          Ready to Begin Your
          <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
            Transformation?
          </span>
        </h2>

        <p className="text-xl text-yellow-100 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
          Join hundreds of students who have already started their journey to excellence. Your first trial class is completely free!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            'Expert Trainers',
            'Flexible Schedule',
            'All Age Groups Welcome'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-yellow-100 px-4 py-3 rounded-full border-2 border-yellow-400">
              <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
              <span className="text-green-900 font-black text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="tel:+9779706418555" className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-black text-lg rounded-full hover:shadow-2xl glow-yellow transition-all duration-300 hover:scale-110">
            <span className="flex items-center gap-2">
              Book Your Free Trial Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a href="#contact" className="px-10 py-5 bg-green-700/40 backdrop-blur-sm text-yellow-300 font-black text-lg rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 hover:scale-105">
            Contact Us
          </a>
        </div>

        <p className="text-yellow-200/70 text-sm font-semibold">
          No credit card required • No commitment • Start anytime
        </p>
      </div>
    </section>
  );
}
