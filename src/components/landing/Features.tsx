// src/components/landing/Features.tsx
import { Check } from "lucide-react"
import { Card } from "../ui/Card"
import { Square, Diamond } from "lucide-react"
// import screenEffect from '../assets/images/screen-effect.png';
export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center px-4 features-bg overall-bg relative">
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left side - Laptop mockup (4 columns) */}
          <div className="relative lg:col-span-4">
            <img
              src={""}
              alt="Laptop showing design interface with ace branding and monstera leaf"
              width={600}
              height={400}
              className="w-full max-w-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right side - Content (8 columns) */}
          <div className="text-white space-y-8 lg:col-span-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">We Create Something New</h1>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-lg">
                We have created a new product that will help designers, developers and companies create websites for
                their startups quickly and easily.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Square className="w-8 h-8 text-purple-200" />
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-200">
                    30 New Feature Pages
                  </h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  Startup Framework contains components and complex blocks which can easily.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Diamond className="w-8 h-8 text-purple-200" />
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-200">
                    Useful Symbol Components
                  </h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  Samples will show you the feeling on how to play around using the components.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-3">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
//min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center px-4
//relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 overflow-hidden
  )
}
