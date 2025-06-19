import { Button } from "../ui/Button"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      featured: false,
      features: [
        { name: "2 GB of space", included: true },
        { name: "14 days of backups", included: true },
        { name: "Social integrations", included: true },
        { name: "Client billing", included: true },
        { name: "Remote access", included: false },
        { name: "Custom domain", included: false },
        { name: "24 hours support", included: false },
        { name: "Admin tools", included: false },
        { name: "Collaboration tools", included: false },
        { name: "User management", included: false },
      ],
    },
    {
      name: "Professional",
      price: "19.99",
      featured: true,
      features: [
        { name: "2 GB of space", included: true },
        { name: "14 days of backups", included: true },
        { name: "Social integrations", included: true },
        { name: "Client billing", included: true },
        { name: "Remote access", included: true },
        { name: "Custom domain", included: true },
        { name: "24 hours support", included: true },
        { name: "Admin tools", included: false },
        { name: "Collaboration tools", included: false },
        { name: "User management", included: false },
      ],
    },
    {
      name: "Team",
      price: "49.99",
      featured: false,
      features: [
        { name: "2 GB of space", included: true },
        { name: "14 days of backups", included: true },
        { name: "Social integrations", included: true },
        { name: "Client billing", included: true },
        { name: "Remote access", included: true },
        { name: "Custom domain", included: true },
        { name: "24 hours support", included: true },
        { name: "Admin tools", included: true },
        { name: "Collaboration tools", included: true },
        { name: "User management", included: true },
      ],
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 px-6 py-16 pricing-bg overall-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Plans & Pricing</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.featured
                  ? "border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-purple-600/10 shadow-2xl shadow-pink-500/20"
                  : "border-white/20 bg-white/5"
              }`}
            >
              {/* Featured glow effect */}
              {plan.featured && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-red-500/20 to-purple-500/20 blur-xl -z-10" />
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-2xl text-white/70 ml-1">$</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-white" : "text-white/40"}>{feature.name}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 text-lg font-medium rounded-full transition-all duration-200 ${
                  plan.featured
                    ? "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-lg"
                    : "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                }`}
                
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
