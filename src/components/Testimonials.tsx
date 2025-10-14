import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anisha Sharma',
      role: 'Taekwondo Student',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The ECA Heaven transformed my confidence completely. I went from being shy to earning my black belt and competing nationally. The instructors here are phenomenal.',
      rating: 5
    },
    {
      name: 'Rohit Thapa',
      role: 'Muay Thai Enthusiast',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Best decision I ever made! Lost 15kg in 4 months while learning authentic Muay Thai. The trainers push you just right – tough but caring.',
      rating: 5
    },
    {
      name: 'Priya Gautam',
      role: 'Dance & Zumba Member',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The Zumba and dance classes are so fun! It doesn\'t feel like working out. The community here is so supportive and the energy is unmatched.',
      rating: 5
    },
    {
      name: 'Suman Karki',
      role: 'Parent',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'My son has been attending Taekwondo and acting classes for a year. His discipline, focus, and confidence have improved tremendously. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-400 font-semibold">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Stories of
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
              Transformation
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our amazing students and parents about their journey at The ECA Heaven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
