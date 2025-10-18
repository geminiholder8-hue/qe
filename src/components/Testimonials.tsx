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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-emerald-900 to-green-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 border-2 border-yellow-400/40 rounded-full mb-6">
            <span className="text-yellow-300 font-bold">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6">
            Stories of
            <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
              Transformation
            </span>
          </h2>

          <p className="text-yellow-200/90 text-lg max-w-2xl mx-auto font-semibold">
            Hear from our amazing students and parents about their journey at The ECA Heaven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-yellow-100 p-8 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 animate-slide-in"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-green-700/20" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-700"
                />
                <div>
                  <h4 className="text-green-900 font-black text-lg">{testimonial.name}</h4>
                  <p className="text-green-800 text-sm font-semibold">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-green-800 leading-relaxed italic font-semibold">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
