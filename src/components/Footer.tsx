import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-emerald-900 border-t border-yellow-400/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-300 to-amber-300 text-transparent bg-clip-text mb-4">
              The ECA Heaven
            </h3>
            <p className="text-yellow-200/90 leading-relaxed font-semibold">
              Where passion meets performance. Transform your mind, body, and spirit with Kathmandu's premier fitness and performing arts academy.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-black text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Gallery', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-yellow-200/90 hover:text-yellow-300 transition-colors font-semibold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-300 font-black text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {['Taekwondo', 'Dance', 'Zumba', 'Acting', 'Muay Thai', 'Music'].map((program, index) => (
                <li key={index}>
                  <span className="text-yellow-200/90 font-semibold">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-yellow-200/70 text-sm font-semibold">
            © 2025 The ECA Heaven. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-yellow-200/70 text-sm font-semibold">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <span className="text-amber-300 font-black">Apex Launch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
