import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Parent',
      role: 'Parent of Dance & Acting Student',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'My daughter has gained so much confidence after joining THE ECA HEAVEN. She loves her dance and acting classes!',
      rating: 5
    },
    {
      name: 'Adult Student',
      role: 'Zumba Member',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'I joined Zumba and have lost weight while having fun. Highly recommended.',
      rating: 5
    },
    {
      name: 'Teen Student',
      role: 'Performance Student',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'I performed on stage for the first time with THE ECA HEAVEN, and it was the best moment of my life.',
      rating: 5
    },
    {
      name: 'Satisfied Member',
      role: 'Martial Arts Student',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The trainers are amazing and really care about our progress. I\'ve learned so much and built great friendships here.',
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
