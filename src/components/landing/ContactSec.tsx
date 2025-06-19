import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSec() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 px-6 py-16 keep-in-touch-bg overall-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Contact Info */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Let's Keep in Touch</h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              We have created a new product that will help designers, developers and companies create websites for their
              startups quickly and easily.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-white/80" />
                <span className="text-lg">+1 555 505 5050</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-white/80" />
                <span className="text-lg">info@designmodo.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white/80 mt-1" />
                <div className="text-lg">
                  <div>San Francisco, CA560 Bush St &</div>
                  <div>20th Ave, Apt5 San Francisco,</div>
                  <div>230909</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="space-y-6">
              {/* Name and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Budget
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Input Field
                </label>
                <Input
                  type="email"
                  placeholder="name@mail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Your Message
                </label>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Checkbox and Submit */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="copy"
                    className="border-gray-300"
                  />
                  <label htmlFor="copy" className="text-sm text-gray-600">
                    Send me a copy
                  </label>
                </div>

                <Button className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-medium">
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
