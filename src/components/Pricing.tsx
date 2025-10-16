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
    <section id="pricing" className="py-24 bg-gradient-to-b from-emerald-900 to-green-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full mb-6">
            <span className="text-yellow-300 font-bold">Pricing & Packages</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6">
            Choose the Plan
            <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
              That Suits You Best
            </span>
          </h2>

          <p className="text-yellow-200/90 text-lg max-w-2xl mx-auto">
            Flexible pricing options designed to fit your goals and budget. Start your journey today!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-yellow-100 p-8 rounded-3xl border-2 ${
                pkg.popular ? 'border-amber-500 shadow-2xl glow-yellow' : 'border-yellow-400'
              } hover:border-yellow-500 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-700 to-emerald-700 px-6 py-2 rounded-full">
                  <span className="text-yellow-300 font-black text-sm">MOST POPULAR</span>
                </div>
              )}

              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                <pkg.icon className="w-8 h-8 text-yellow-300" />
              </div>

              <h3 className="text-green-900 font-black text-2xl mb-2">{pkg.name}</h3>
              <p className="text-green-800 mb-6 font-semibold">{pkg.description}</p>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span className="text-green-800 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+9779706418555"
                className={`w-full py-4 rounded-full font-black transition-all duration-300 flex items-center justify-center ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 hover:shadow-lg glow-green'
                    : 'bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 hover:shadow-lg glow-green'
                }`}
              >
                Call to Register
              </a>
            </div>
          ))}
        </div>

        <div className="bg-yellow-100/95 border-2 border-yellow-400 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-green-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-green-800 text-lg mb-8 max-w-2xl mx-auto font-semibold">
            Book your free trial class today and experience THE ECA HEAVEN difference. No credit card required, no commitment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+9779706418555" className="px-10 py-4 bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 font-black rounded-full hover:shadow-2xl glow-green transition-all duration-300 hover:scale-110">
              Call Now to Book Free Trial
            </a>
            <a href="tel:+9779705851573" className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-black rounded-full border-2 border-green-700 hover:shadow-lg glow-yellow transition-all duration-300 hover:scale-110">
              Contact for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
