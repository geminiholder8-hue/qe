import { Music, Zap, Heart, Mic2, Lightbulb } from 'lucide-react'

export default function Programs() {
  const programs = [
    { icon: Music, title: 'Dance', description: 'Learn various dance styles in a fun environment' },
    { icon: Zap, title: 'Zumba', description: 'High-energy fitness through Latin-inspired dance' },
    { icon: Heart, title: 'Martial Arts', description: 'Build strength, discipline, and confidence' },
    { icon: Mic2, title: 'Music & Vocals', description: 'Explore your musical talents' },
    { icon: Lightbulb, title: 'Acting', description: 'Express yourself through performance' },
    { icon: Heart, title: 'Yoga', description: 'Mind and body wellness practices' }
  ]

  return (
    <section id="programs" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed for all ages and skill levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div key={index} className="p-8 bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
