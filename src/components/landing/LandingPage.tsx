import CallToAction from "./CallToAction";
import ContactForm from "./ContactForm";
import ContactSec from "./ContactSec";
import Crew from "./Crew";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import PowerFullGen from "./PowerFullGen";
import Pricing from "./Pricing";
import Testimonials from "./Testimonial";

export default function LandingPage() {
    return (
        <div className="min-h-screen">
        <Hero />
        <PowerFullGen />
        <Features />
        <ContactForm />
        <Testimonials />
        <CallToAction />
        <Portfolio />
        <Crew />
        <ContactSec />
        <Pricing  />
        <Footer />
      </div>
    )
  }