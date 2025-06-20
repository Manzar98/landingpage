export default function PowerFullGen() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 overflow-hidden powerfull-gen-bg">
      

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Free Sample Badge */}
          <div className="mb-8">
            <span className="text-xs font-normal tracking-[0.25em] uppercase text-white/70">FREE SAMPLE</span>
          </div>

          {/* Main Heading - matching exact font size and spacing */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] mb-8 tracking-[-0.02em]">
            Powerful Generator and Free
            <br />
            Figma Sources
          </h1>

          {/* Description - matching exact line breaks and spacing */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-white/75 leading-[1.6] font-light tracking-[0.01em]">
              Startup Framework contains components and complex blocks which can easily be
              <br />
              integrated into almost any design. All of the components are made in the same style, and
              <br />
              can easily be integrated into projects, allowing you to create hundreds of solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
