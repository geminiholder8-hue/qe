import { Check } from 'lucide-react'

export default function Pricing() {
  const generalPrograms = [
    { name: '1 Month', priceRange: 'NPR 2,000–3,500', savings: null },
    { name: '3 Months', priceRange: 'NPR 5,500–11,000', savings: 'Save NPR 500' },
    { name: '6 Months', priceRange: 'NPR 7,000–20,500', savings: 'Save NPR 1,000' },
    { name: '1 Year', priceRange: 'NPR 22,000–42,000', savings: 'Save NPR 2,000', popular: true }
  ]

  const taekwondoClub = [
    { duration: '1 Month', price: 'NPR 3,000' },
    { duration: '3 Months', price: 'NPR 8,000' },
    { duration: '6 Months', price: 'NPR 16,000' },
    { duration: '12 Months', price: 'NPR 32,000' }
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing for all our programs and classes
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dance / Zumba / Muay Thai / Yoga / Taekwondo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalPrograms.map((pkg, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 ${pkg.popular ? 'border-blue-600 bg-blue-50 shadow-lg' : 'border-gray-200 bg-white hover:border-blue-300'}`}>
                {pkg.popular && (
                  <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">{pkg.priceRange}</div>
                {pkg.savings && <div className="text-sm text-green-600 font-semibold mb-4">{pkg.savings}</div>}
                <a href="tel:+9779706418555" className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center inline-block">
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Music & Vocal Classes
          </h3>
          <div className="max-w-sm mx-auto p-6 rounded-xl border-2 border-gray-200 bg-white text-center">
            <p className="text-gray-600 mb-4">3 days per week program</p>
            <p className="text-lg font-semibold text-gray-900 mb-4">Contact for pricing</p>
            <a href="tel:+9779706418555" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Call for Details
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Warrior Spirit Taekwondo Club
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taekwondoClub.map((pkg, index) => (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.duration}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                <a href="tel:+9779706418555" className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center inline-block">
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
