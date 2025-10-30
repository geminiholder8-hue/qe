import { Check, Sparkles, Users, Crown, Music } from 'lucide-react';

export default function Pricing() {
  const admissionFee = {
    regular: 5000,
    festival: 4250,
    discount: 15,
    included: [
      'Complete Taekwondo Dress (Dobok)',
      'Club T-Shirt',
      'Official Club Membership'
    ]
  };

  const generalPrograms = [
    {
      icon: Sparkles,
      name: '1 Month',
      priceRange: '2,000–3,500',
      savings: null,
      description: 'Perfect for trying out',
      programs: 'Dance, Zumba, Muay Thai, Yoga, Taekwondo',
      popular: false
    },
    {
      icon: Users,
      name: '3 Months',
      priceRange: '5,500–11,000',
      savings: 500,
      description: 'Great for beginners',
      programs: 'Dance, Zumba, Muay Thai, Yoga, Taekwondo',
      popular: false
    },
    {
      icon: Sparkles,
      name: '6 Months',
      priceRange: '7,000–20,500',
      savings: 1000,
      description: 'Serious commitment',
      programs: 'Dance, Zumba, Muay Thai, Yoga, Taekwondo',
      popular: false
    },
    {
      icon: Crown,
      name: '1 Year',
      priceRange: '22,000–42,000',
      savings: 2000,
      description: 'Maximum savings',
      programs: 'Dance, Zumba, Muay Thai, Yoga, Taekwondo',
      popular: true
    }
  ];

  const musicPrograms = {
    icon: Music,
    name: 'Music & Vocal Classes',
    description: '3 days/week program',
    note: 'Contact for pricing'
  };

  const taekwondoClub = [
    {
      duration: '1 Month',
      price: 3000
    },
    {
      duration: '3 Months',
      price: 8000
    },
    {
      duration: '6 Months',
      price: 16000
    },
    {
      duration: '12 Months',
      price: 32000
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

        <div className="bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl p-8 mb-12 border-2 border-yellow-300">
          <div className="text-center">
            <h3 className="text-3xl font-black text-green-900 mb-4">Admission Fee</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div>
                <div className="text-5xl font-black text-green-900">NPR {admissionFee.regular.toLocaleString()}</div>
                <div className="text-green-800 font-bold">One-time registration fee</div>
              </div>
              <div className="bg-green-700 rounded-2xl p-6 text-center">
                <div className="text-yellow-300 font-black text-sm mb-2">FESTIVAL OFFER</div>
                <div className="text-3xl font-black text-yellow-300 mb-1">NPR {admissionFee.festival.toLocaleString()}</div>
                <div className="text-yellow-200 text-sm font-bold">{admissionFee.discount}% OFF during festivals</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {admissionFee.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-900/20 rounded-lg p-3">
                  <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                  <span className="text-green-900 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-black text-yellow-300 mb-8 text-center">
            Dance / Zumba / Muay Thai (Kids & Adults) / Yoga / Taekwondo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {generalPrograms.map((pkg, index) => (
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
                <div className="text-3xl font-black text-green-900 mb-2">
                  NPR {pkg.priceRange}
                </div>
                {pkg.savings && (
                  <div className="text-green-700 font-bold text-sm mb-2">
                    Save NPR {pkg.savings.toLocaleString()}
                  </div>
                )}
                <p className="text-green-800 mb-6 font-semibold">{pkg.description}</p>

                <a
                  href="tel:+9779706418555"
                  className="w-full py-4 rounded-full font-black transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 hover:shadow-lg glow-green"
                >
                  Call to Register
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-black text-yellow-300 mb-8 text-center">
            Music & Vocal Classes
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-yellow-100 p-8 rounded-3xl border-2 border-yellow-400 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <musicPrograms.icon className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-green-900 font-black text-2xl mb-2 text-center">{musicPrograms.name}</h3>
              <p className="text-green-800 mb-4 font-semibold text-center">{musicPrograms.description}</p>
              <div className="text-2xl font-black text-green-900 mb-6 text-center">{musicPrograms.note}</div>
              <a
                href="tel:+9779706418555"
                className="w-full py-4 rounded-full font-black transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 hover:shadow-lg glow-green"
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-black text-yellow-300 mb-8 text-center">
            Warrior Spirit Taekwondo Club
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taekwondoClub.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-yellow-100 p-8 rounded-3xl border-2 border-yellow-400 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                  <Crown className="w-8 h-8 text-yellow-300" />
                </div>

                <h3 className="text-green-900 font-black text-2xl mb-2">{pkg.duration}</h3>
                <div className="text-3xl font-black text-green-900 mb-6">
                  NPR {pkg.price.toLocaleString()}
                </div>

                <a
                  href="tel:+9779706418555"
                  className="w-full py-4 rounded-full font-black transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 hover:shadow-lg glow-green"
                >
                  Call to Register
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-100/95 border-2 border-yellow-400 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-green-900 mb-4">
            Payment Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-black text-green-900 mb-4">Payment Methods</h4>
              <div className="space-y-3">
                {['Cash Payment', 'Bank Transfer', 'Mobile Banking'].map((method, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-700" />
                    <span className="text-green-800 font-semibold">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-black text-green-900 mb-4">Additional Benefits</h4>
              <div className="space-y-3">
                {['Free trial class', 'Flexible scheduling', 'Family discounts available'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-700" />
                    <span className="text-green-800 font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-green-800 text-lg mb-8 max-w-2xl mx-auto font-semibold">
            Book your free trial class today and experience THE ECA HEAVEN difference. No commitment required!
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
