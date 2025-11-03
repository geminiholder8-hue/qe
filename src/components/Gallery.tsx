export default function Gallery() {
  const images = [
    'https://images.pexels.com/photos/91227/dance-dancer-performance-music-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3822517/pexels-photo-3822517.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Moments from our classes and events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <div key={i} className="overflow-hidden rounded-xl h-64 group cursor-pointer">
              <img
                src={image}
                alt="Gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
