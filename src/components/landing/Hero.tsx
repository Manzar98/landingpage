// import { ArrowRight } from "lucide-react"
// import { Button } from "../ui/Button"

// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center px-4 hero-bg overall-bg">
//       <div className="text-center max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">Build Your Dream</h1>
//         <p className="text-xl md:text-2xl mb-8 opacity-90">
//           Create amazing experiences with our powerful platform
//         </p>
//         <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
//           Get Started <ArrowRight className="ml-2 h-5 w-5" />
//         </Button>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NavBar from "../common/NavBar"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const slides = [
    {
      subtitle: "Startup 3",
      title: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      subtitle: "Startup 2",
      title: "Design Without Limits",
      description:
        "Create stunning websites with our intuitive drag-and-drop interface. No technical knowledge required, just pure creativity.",
    },
    {
      subtitle: "Startup 1",
      title: "Build Faster Than Ever",
      description:
        "Launch your startup website in minutes, not months. Our framework handles all the complex stuff so you can focus on what matters.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden hero-bg overall-bg">
      {/* Navigation */}
      <NavBar />
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-purple-200 text-lg font-medium tracking-wide">
              {slides[currentSlide % slides.length].subtitle}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {slides[currentSlide % slides.length].title}
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            {slides[currentSlide % slides.length].description}
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mb-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Create an Account
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-200 p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-200 p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  )
}
