"use client"

import type React from "react"
import { useState } from "react"
import { Twitter } from "lucide-react"

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("signup")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden powerfull-gen-bg overall-bg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/contentbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-purple-900/30"></div>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 px-8 lg:px-20 xl:px-32">
        {/* Left side - Content */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="text-white space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We solve digital problems with an outstanding creative flare
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              We have created a new product that will help designers, developers and companies create websites for their
              startups quickly and easily.
            </p>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
            {/* Tab Navigation */}
            <div className="flex mb-8 border-b border-gray-100">
              <button
                className={`flex-1 py-3 text-center font-semibold transition-colors duration-200 ${
                  activeTab === "signup"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                SIGN UP
              </button>
              <button
                className={`flex-1 py-3 text-center font-semibold transition-colors duration-200 ${
                  activeTab === "login"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                onClick={() => setActiveTab("login")}
              >
                LOGIN
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400 text-gray-900 bg-gray-50"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400 text-gray-900 bg-gray-50"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {activeTab === "signup" ? "Create an Account" : "Sign In"}
              </button>

              <div className="text-center text-gray-400 font-medium">or</div>

              <button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Twitter className="w-5 h-5" />
                <span>Login via Twitter</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
