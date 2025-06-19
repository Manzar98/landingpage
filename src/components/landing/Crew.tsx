import { Twitter, Facebook, Instagram, Dribbble, MessageCircle, GitBranch } from "lucide-react"

export default function Crew() {
  const teamMembers = [
    {
      id: 1,
      name: "Leah Salomon",
      role: "UI Designer",
      image: "pro5.jpg",
      socials: [
        { icon: Twitter, href: "#" },
        { icon: Facebook, href: "#" },
        { icon: Dribbble, href: "#" },
        { icon: Instagram, href: "#" },
      ],
    },
    {
      id: 2,
      name: "Colin Timmons",
      role: "UX Designer",
      image: "pro6.jpg",
      socials: [
        { icon: Twitter, href: "#" },
        { icon: Dribbble, href: "#" },
      ],
    },
    {
      id: 3,
      name: "Miguel Osborne",
      role: "Front-end Developer",
      image: "pro7.jpg",
      socials: [
        { icon: MessageCircle, href: "#" }, // Skype
        { icon: MessageCircle, href: "#" }, // Medium (using MessageCircle as placeholder)
        { icon: GitBranch, href: "#" }, // Git
      ],
    },
    {
      id: 4,
      name: "Taylor Simon",
      role: "Product Manager",
      image: "pro8.jpg",
      socials: [
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" },
      ],
    },
    {
      id: 5,
      name: "Steven MacAlister",
      role: "Copyrighter",
      image: "pro2.jpg",
      socials: [{ icon: Twitter, href: "#" }],
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 px-6 py-16 testi-bg border-t border-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Startup Crew</h1>
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-4xl">
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages
            you can use as is or you can add new blocks from UI Kit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member) => {
            const fullImagePath = `/assets/images/${member.image}`
            return (
            <div key={member.id} className="text-center group">
              {/* Profile Image */}
              <div className="relative mb-6 mx-auto w-32 h-32">
                <img
                  src={fullImagePath}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white/20 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Member Info */}
              <div className="mb-6">
                <h3 className="text-white text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/70 text-lg">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {member.socials.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 p-2"
                      aria-label={`${member.name} social link`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
