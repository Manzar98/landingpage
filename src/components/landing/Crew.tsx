import { Twitter, Facebook, Instagram, Dribbble, MessageCircle, Github } from "lucide-react"

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
        { icon: MessageCircle, href: "#" }, // Medium
        { icon: Github, href: "#" }, // Git
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
      role: "Copywriter",
      image: "pro2.jpg",
      socials: [{ icon: Twitter, href: "#" }],
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 px-6 py-16 testi-bg border-t border-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Startup Crew</h1>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages
            you can use as is or you can add new blocks from UI Kit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-8">
          {/* Top Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.slice(0, 3).map((member) => {
              const fullImagePath = `/assets/images/${member.image}`
              return (
                <div key={member.id} className="group">
                  {/* Profile Image */}
                  <div className="relative mb-4 w-24 h-24">
                    <img
                      src={fullImagePath || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-white/70 text-base">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3">
                    {member.socials.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="text-white/70 hover:text-white transition-colors duration-200"
                          aria-label={`${member.name} social link`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Row - 2 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.slice(3, 5).map((member) => {
              const fullImagePath = `/assets/images/${member.image}`
              return (
                <div key={member.id} className="group">
                  {/* Profile Image */}
                  <div className="relative mb-4 w-24 h-24">
                    <img
                      src={fullImagePath || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-white/70 text-base">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3">
                    {member.socials.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="text-white/70 hover:text-white transition-colors duration-200"
                          aria-label={`${member.name} social link`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
