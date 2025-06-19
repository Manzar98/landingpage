import ContactForm from "./ContactForm";
import Features from "./Features";
import Hero from "./Hero";
import PowerFullGen from "./PowerFullGen";
import Testimonials from "./Testimonial";

export default function LandingPage() {
    return (
        <div className="min-h-screen">
        <Hero />
        <PowerFullGen />
        <Features />
        <ContactForm />
        <Testimonials />
      </div>
    )
  }