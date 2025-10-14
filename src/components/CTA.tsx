import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-orange-400" />
          <span className="text-blue-300 font-semibold tracking-wide">Limited Spots Available</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Begin Your
          <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
            Transformation?
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of students who have already started their journey to excellence. Your first trial class is completely free!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            'Expert Trainers',
            'Flexible Schedule',
            'All Age Groups Welcome'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-700">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white font-semibold text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Book Your Free Trial Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          No credit card required • No commitment • Start anytime
        </p>
      </div>
    </section>
  );
}
