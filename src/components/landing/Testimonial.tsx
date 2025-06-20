type Testimonial = {
  id: number
  name: string
  image: string
  message: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "RAYHAN CURRAN",
    image: "pro4.jpg",
    message:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
  },
  {
    id: 2,
    name: "KAYLEY FRAME",
    image: "pro3.jpg",
    message:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
  },
  {
    id: 3,
    name: "GENE WHITFIELD",
    image: "pro1.jpg",
    message: "The most important part of the Startup Framework is the samples",
  },
  {
    id: 4,
    name: "ALLAN KIM",
    image: "pro2.jpg",
    message: "I've built my website with Startup just in one day, and it was ready-to-go.",
  },
]

export default function Testimonials() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 py-20 lg:py-32 testi-bg">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our Happy Clients</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => {
            const fullImagePath = `/assets/images/${testimonial.image}`
            return (
              <div
                key={testimonial.id}
                className="bg-transparent border border-purple-400/20 rounded-2xl p-8 lg:p-10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden">
                      <img
                        src={fullImagePath || "/placeholder.svg?height=80&width=80"}
                        alt={`${testimonial.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed">
                      {testimonial.message}
                    </blockquote>
                    <cite className="block text-purple-300/60 text-sm font-medium tracking-widest uppercase not-italic">
                      {testimonial.name}
                    </cite>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
