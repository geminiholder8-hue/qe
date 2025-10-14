import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  const schedule = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 5:00 PM' }
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Visit Us &
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
              Start Your Journey
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Location</h3>
                  <p className="text-gray-400">sundarbasti, bhangal-08, Budha-Nilkantha, Nepal 44600</p>
                  <p className="text-gray-500 text-sm mt-1">Near major landmarks</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
                  <p className="text-gray-400">+977 9706418555,9705851573</p>
                  <p className="text-gray-500 text-sm mt-1">Call us anytime</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-400">info@ecaheaven.com</p>
                  <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-4">Class Schedule</h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-400">{item.day}</span>
                        <span className="text-blue-400 font-semibold">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-pink-600 to-purple-600 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                <Instagram className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Instagram</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Facebook className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Facebook</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <Youtube className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">YouTube</span>
              </a>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.235857969!2d85.32394!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuMiJF!5e0!3m2!1sen!2snp!4v1234567890"
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
