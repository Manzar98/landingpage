"use client"

import type React from "react"

import { useState } from "react"
import { Twitter } from "lucide-react"
import { Button } from "../ui/Button"

export default function Component() {
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
      {/* Abstract background shapes */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/contentbg.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-blue/10"></div>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left side - Content (spans 7 columns on large screens) */}
        <div className="lg:col-span-7 flex items-center justify-center p-8 lg:p-16">
          <div className="text-white space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We solve digital problems with an outstanding{" "}
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                creative flare
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              We have created a new product that will help designers, developers and companies create websites for their
              startups quickly and easily.
            </p>
          </div>
        </div>

        {/* Right side - Signup Form (spans 5 columns on large screens) */}
        <div className="lg:col-span-5 flex items-center justify-center p-8 lg:p-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            {/* Tab Navigation */}
            <div className="flex mb-8">

              <Button className={`flex-1 py-3 text-center font-semibold transition-colors duration-200 ${activeTab === "signup"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
                }`} onClick={() => setActiveTab("signup")}>
                SIGN UP
              </Button>
              <Button className={`flex-1 py-3 text-center font-semibold transition-colors duration-200 ${activeTab === "login"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
                }`} onClick={() => setActiveTab("login")}>
                LOGIN
              </Button>

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
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-gray-900"
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
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold py-4 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {activeTab === "signup" ? "Create an Account" : "Sign In"}
              </button>

              <div className="text-center text-gray-400 font-medium">or</div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-4 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
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
