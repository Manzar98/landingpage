import { Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "Tour", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing Plans", href: "#" },
    { name: "Our Works", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Contacts", href: "#" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-6 py-8 testi-bg border-t border-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Startup 3</h2>
          </div>

          {/* Legal Links and Social Icons */}
          <div className="flex items-center gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Google Plus"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.613 0-4.75-2.16-4.75-4.823s2.137-4.823 4.75-4.823c1.487 0 2.482.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.118-1.995C3.44 4.363 0 7.803 0 12s3.44 7.637 7.635 7.637c4.41 0 7.332-3.098 7.332-7.464 0-.501-.054-.885-.12-1.264H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.182v2.184h2.183v-2.184H24v-2.181z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap items-center gap-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-white/60 text-sm">© 2017 Designmodo. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
