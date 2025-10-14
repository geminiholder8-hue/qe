import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text mb-4">
              The ECA Heaven
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Where passion meets performance. Transform your mind, body, and spirit with Kathmandu's premier fitness and performing arts academy.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Gallery', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {['Taekwondo', 'Dance', 'Zumba', 'Acting', 'Muay Thai', 'Music'].map((program, index) => (
                <li key={index}>
                  <span className="text-gray-400">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 The ECA Heaven. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <span className="text-blue-400 font-semibold">Apex Launch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
