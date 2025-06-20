import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSec() {
  return (
    <section className="relative px-6 py-24 bg-[#2F1893] bg-opacity-90 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/keepintouchbg.jpg')" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact Info */}
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Let's Keep in Touch
            </h1>

            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              We have created a new product that will help designers, developers, and companies create websites for their
              startups quickly and easily.
            </p>

            <div className="space-y-6 text-sm">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/80" />
                <span>+1 555 505 5050</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/80" />
                <span>info@designmodo.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <div>San Francisco, CA560 Bush St &</div>
                  <div>20th Ave, Apt5 San Francisco,</div>
                  <div>230909</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-xl p-10 shadow-2xl w-full max-w-xl mx-auto">
            <form className="space-y-6">
              {/* Name and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-indigo-800 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-indigo-800 mb-2 uppercase tracking-wider">
                    Budget
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="" disabled>Select budget</option>
                    <option value="500">$500</option>
                    <option value="1000">$1,000</option>
                    <option value="2500">$2,500</option>
                    <option value="5000">$5,000</option>
                    <option value="10000">$10,000+</option>
                  </select>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold text-indigo-800 mb-2 uppercase tracking-wider">
                  Input Field
                </label>
                <Input
                  type="email"
                  placeholder="name@mail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-indigo-800 mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Checkbox & Button */}
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-teal-400" />
                  Send me a copy
                </label>

                <Button className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-2.5 rounded-full text-sm font-semibold">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
