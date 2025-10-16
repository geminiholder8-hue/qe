import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  const schedule = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 5:00 PM' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-green-900 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full mb-6">
            <span className="text-yellow-300 font-bold">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-yellow-300 mb-6">
            Visit Us &
            <span className="block bg-gradient-to-r from-yellow-200 to-amber-300 text-transparent bg-clip-text">
              Start Your Journey
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-green-900 font-black text-xl mb-2">Location</h3>
                  <p className="text-green-800 font-semibold">P9X4+GJW, Budhanilkantha</p>
                  <p className="text-green-800 font-semibold">Kathmandu 44600</p>
                  <p className="text-green-700 text-sm mt-1">Easily accessible location</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-green-900 font-black text-xl mb-3">Phone / WhatsApp</h3>
                  <a href="tel:+9779706418555" className="block text-green-800 font-bold text-lg hover:text-green-900 mb-2 transition-colors">
                    +977 9706418555
                  </a>
                  <a href="tel:+9779705851573" className="block text-green-800 font-bold text-lg hover:text-green-900 mb-2 transition-colors">
                    +977 9705851573
                  </a>
                  <p className="text-green-700 text-sm mt-2">Call or message us anytime</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-green-900 font-black text-xl mb-2">Email</h3>
                  <p className="text-green-800 font-semibold">info@ecaheaven.com</p>
                  <p className="text-green-700 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-400 hover:shadow-xl glow-yellow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-green-900 font-black text-xl mb-4">Class Schedule</h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">{item.day}</span>
                        <span className="text-green-900 font-bold">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg glow-yellow transition-all hover:scale-105"
              >
                <Instagram className="w-6 h-6 text-green-900" />
                <span className="text-green-900 font-black">Instagram</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg glow-yellow transition-all hover:scale-105"
              >
                <Facebook className="w-6 h-6 text-green-900" />
                <span className="text-green-900 font-black">Facebook</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg glow-yellow transition-all hover:scale-105"
              >
                <Youtube className="w-6 h-6 text-green-900" />
                <span className="text-green-900 font-black">YouTube</span>
              </a>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-2xl glow-yellow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0872944863!2d85.35570731506263!3d27.748596682787843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1969e1a75e05%3A0x5e5e5e5e5e5e5e5e!2sP9X4%2BGJW%2C%20Budhanilkantha%2044600!5e0!3m2!1sen!2snp!4v1697000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
