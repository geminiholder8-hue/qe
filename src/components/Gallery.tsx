export default function Gallery() {
  const images = [
    {
      url: 'https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/546700167_769476035831420_8655265697408261672_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Ox8qwUT17UQ7kNvwHI2H3m&_nc_oc=Adls4gVDi03XuJR0NuhFujuyX_BJvDu-20_TeSI5EFYpvQJ86TV-dbYvTXmCwJcWVXdLxdG6j4hVxkhssaySyAWv&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3gFU-mywIOoeLSjSXA0568q0ClB_eqxXHkYeO9E8YdF6UA&oe=6915EB7C',
      title: 'Taekwondo Training'
    },
    {
      url: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dance Sessions'
    },
    {
      url: 'https://www.bing.com/images/search?view=detailV2&ccid=U5FQNwjB&id=79F337B11FDC768DFDDD2FEA213F896EA731BE4C&thid=OIP.U5FQNwjBkkF4Qt6MeyVWLAHaE6&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2faa%2f59%2fe2%2faa59e25b035f095faa77e1ee7b3646cc.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5391503708c192417842de8c7b25562c%3frik%3dTL4xp26JPyHqLw%26pid%3dImgRaw%26r%3d0&exph=1590&expw=2400&q=zumba+classes+4k+image&FORM=IRPRST&ck=266EA53EF78BD0254693215384C9FABB&selectedIndex=1&itb=0',
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
      url: 'https://media.istockphoto.com/photos/performance-picture-id93958169?k=20&m=93958169&s=612x612&w=0&h=32jpZ-M69wK0YOcxGDCk8HG_JwK__Sod96IP7NB62GM=',
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
