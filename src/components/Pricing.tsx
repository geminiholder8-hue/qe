import { Check, Sparkles, Users, Crown } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      icon: Sparkles,
      name: 'Single Activity',
      description: 'Perfect for focused learning',
      features: [
        'Choose any one program',
        'Monthly, Quarterly, or Yearly plans',
        'Access to all facilities',
        'Performance opportunities',
        'Progress tracking'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      icon: Crown,
      name: 'Combo Package',
      description: 'Best value for multiple interests',
      features: [
        'Join two or more activities',
        'Special discounted rates',
        'Flexible scheduling',
        'Priority booking for events',
        'Free trial for new activity',
        'Cross-training benefits'
      ],
      color: 'from-orange-500 to-red-600',
      popular: true
    },
    {
      icon: Users,
      name: 'Family Package',
      description: 'Great savings for families',
      features: [
        'Special offers for siblings',
        'Parents joining together',
        'Multi-member discounts',
        'Family performance events',
        'Shared progress updates'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">Pricing & Packages</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Choose the Plan
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
              That Suits You Best
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible pricing options designed to fit your goals and budget. Start your journey today!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border ${
                pkg.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/20' : 'border-gray-700'
              } hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full">
                  <span className="text-white font-bold text-sm">MOST POPULAR</span>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6`}>
                <pkg.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-white font-black text-2xl mb-2">{pkg.name}</h3>
              <p className="text-gray-400 mb-6">{pkg.description}</p>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/50'
                    : 'bg-white/10 text-white border-2 border-gray-700 hover:border-blue-500'
                }`}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 border border-blue-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book your free trial class today and experience THE ECA HEAVEN difference. No credit card required, no commitment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              Book a Free Trial Class
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 hover:scale-105">
              Contact for Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
