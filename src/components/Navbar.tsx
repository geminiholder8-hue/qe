import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-lg border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://instagram.fktm10-1.fna.fbcdn.net/v/t51.2885-19/530400717_17965522895955256_5117700039563821617_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fktm10-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFxPn5v4RDzzzHzcYLOMqqxSQj-_aWFwl_yQA-1eU6kC8O3WRxBLBprOOtD7I4h7p6op1HgU3kCVxLOCd-XlIF3&_nc_ohc=aX5fM6dVYdoQ7kNvwG05IqU&_nc_gid=59IWFYvNoIHOFpjGe2fxWQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AffYZ-FSoA7JyRgr7WFfraa5A9sZbgSBiSsudDbsAfpKeg&oe=68FABFC5&_nc_sid=22de04"
              alt="The ECA Heaven Logo"
              className="w-14 h-14 rounded-lg object-cover border-2 border-yellow-400"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-yellow-300 to-amber-300 text-transparent bg-clip-text">
              The ECA Heaven
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-yellow-200 hover:text-yellow-300 font-bold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="tel:+9779706418555" className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-black rounded-full hover:shadow-lg glow-yellow transition-all duration-300 hover:scale-110">
              Join Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-300 p-2 hover:bg-green-800 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-800 border-t border-yellow-400/30">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-yellow-200 hover:text-yellow-300 font-bold py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+9779706418555" className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-black rounded-full hover:shadow-lg glow-yellow transition-all block text-center">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
