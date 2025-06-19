import React from "react";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id:1,
    name: "RAYHAN CURRAN",
    image: "/images/pro4.png",
    message:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
  },
  {
    id:2,
    name: "KAYLEY FRAME",
    image: "/images/pro3.png",
    message:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
  },
  {
    id:3,
    name: "GENE WHITFIELD",
    image: "/images/pro1.png",
    message:
      "The most important part of the Startup Framework is the samples",
  },
  {
    id:4,
    name: "ALLAN KIM",
    image: "/images/pro2.png",
    message:
      "I’ve built my website with Startup just in one day, and it was ready-to-go.",
  },
];

const Testimonials: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 py-16 lg:py-24 testi-b">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our Happy Clients</h2>
            </div>
    
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group bg-transparent border border-purple-400/20 rounded-3xl p-8 lg:p-10 hover:border-purple-400/40 hover:bg-purple-800/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-purple-400/30 group-hover:border-purple-400/50 transition-colors duration-300">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} profile`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
    
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <blockquote className="text-white text-lg lg:text-xl leading-relaxed font-light">
                        {testimonial.message}
                      </blockquote>
                      <cite className="block text-purple-300/80 text-sm font-semibold tracking-widest uppercase not-italic">
                        {testimonial.name}
                      </cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
};

export default Testimonials;
