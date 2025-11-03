import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Arjun Sharma', role: 'Parent', text: 'Amazing experience! My kids have learned so much and gained confidence.', rating: 5 },
    { name: 'Priya Poudel', role: 'Student', text: 'The best place to learn dance. Great trainers and friendly environment!', rating: 5 },
    { name: 'Raj Kumar', role: 'Parent', text: 'Highly recommended. My son is making great progress in martial arts.', rating: 5 },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied students and parents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
