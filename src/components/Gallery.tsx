export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/7045715/pexels-photo-7045715.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Taekwondo Training'
    },
    {
      url: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dance Sessions'
    },
    {
      url: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Zumba Classes'
    },
    {
      url: 'https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Muay Thai'
    },
    {
      url: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fitness Workouts'
    },
    {
      url: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Acting Classes'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">Gallery</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Witness The
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">
              Energy & Excellence
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the vibrancy of our classes through these moments captured at The ECA Heaven.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
