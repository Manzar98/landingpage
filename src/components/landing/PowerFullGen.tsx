// // src/components/landing/WhyChooseUs.tsx
// import { Zap, Shield, Users } from "lucide-react"

// export default function WhyChooseUs() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center px-4 overall-bg choose-us-bg"> 
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Us</h2>
//         <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
//           We provide cutting-edge solutions that help businesses grow and succeed in the digital world
//         </p>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <Zap className="h-16 w-16 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-4">Lightning Fast</h3>
//             <p className="opacity-80">Optimized for speed and performance</p>
//           </div>
//           <div className="text-center">
//             <Shield className="h-16 w-16 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-4">Secure</h3>
//             <p className="opacity-80">Enterprise-grade security measures</p>
//           </div>
//           <div className="text-center">
//             <Users className="h-16 w-16 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-4">Collaborative</h3>
//             <p className="opacity-80">Built for teams and collaboration</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
export default function PowerFullGen() {
  return (
    <section className="relative min-h-screen bg-purple-900/70 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden powerfull-gen-bg overall-bg">
      {/* Abstract background shapes */}
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Free Sample Badge */}
          <div className="inline-block mb-8">
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
              Free Sample
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
            Powerful Generator and Free{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Figma Sources
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto font-light">
            Startup Framework contains components and complex blocks which can easily be integrated into almost any
            design. All of the components are made in the same style, and can easily be integrated into projects,
            allowing you to create hundreds of solutions.
          </p>
        </div>
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  )
}
