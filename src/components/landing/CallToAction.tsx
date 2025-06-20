"use client"
import React from "react"
import { Button } from "../ui/Button"
import { Play } from "lucide-react"
export default function CallToAction() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center px-6 call-to-action-bg overall-bg">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Easy to setup.
          <br />
          Easy to maintain
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web
          development.
        </p>

        <div className="flex items-center justify-center gap-6">
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 p-0 shadow-lg">
            <Play className="w-6 h-6 ml-1" fill="white" />
          </Button>
          <Button className="bg-teal-400 hover:bg-teal-500 text-white px-12 py-4 text-lg rounded-full shadow-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}




