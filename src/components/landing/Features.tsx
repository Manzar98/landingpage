import { Square, Diamond } from "lucide-react"

export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center features-bg overall-bg relative">
      {/* Mountain silhouette background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />

      <div className="relative container mx-auto lg:py-20 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          {/* Left side - Laptop mockup */}
          <div className="relative lg:col-span-5">
            <img
              src="/assets/images/screen-effect.png"
              alt="Laptop showing design interface"
              className="w-full max-w-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8 lg:col-span-7">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">We Create Something New</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                We have created a new product that will help designers, developers and companies create websites for
                their startups quickly and easily.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-white/90 mb-4">
                  30 NEW FEATURE PAGES
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Startup Framework contains components and complex blocks which can easily.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Diamond className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-white/90 mb-4">
                  USEFUL SYMBOL COMPONENTS
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Samples will show you the feeling on how to play around using the components.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  )
}
