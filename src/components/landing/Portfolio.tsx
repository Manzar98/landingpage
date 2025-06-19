import { Button } from "../ui/Button"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: "UI KIT",
      title: "Mozart Project",
      image: "mozart.jpg",
    },
    {
      id: 2,
      category: "FRAMEWORK",
      title: "Startup Framework 2.0",
      image: "framework.jpg",
    },
    {
      id: 3,
      category: "PHOTOS",
      title: "From the Sky",
      image: "fromsky.jpg",
    },
    {
      id: 4,
      category: "PICTURES",
      title: "Air Forces",
      image: "airfocus.jpg",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 px-6 py-16 testi-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Last works</h1>
          <Button
            className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg"
            >
            View all Works
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => {
            const fullImagePath = `/assets/images/${project.image}`;
            return (
            <div key={project.id} className="group cursor-pointer">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={fullImagePath}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="text-center">
                <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-white text-2xl md:text-3xl font-semibold">{project.title}</h3>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
