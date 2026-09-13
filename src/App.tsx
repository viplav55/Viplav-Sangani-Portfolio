import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ScrollRevealText from "./components/ScrollRevealText";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink selection:bg-terracotta/20 selection:text-terracotta">
      {/* Premium tactile paper noise/grain overlay */}
      <div className="grain-overlay" />

      {/* Floating Call to Action Pill */}
      <FloatingCTA />

      {/* Sticky Modular Header */}
      <Navbar />

      {/* Hero & About Chapter */}
      <HeroSection />

      {/* Technical Skill Marquees & Categories */}
      <SkillsSection />

      {/* Full-Bleed Manifesto Chapter (Framer Motion Word-by-Word Scroll Reveal) */}
      <section className="relative py-32 md:py-48 bg-cream border-t border-b border-slate-beige/40">
        {/* Understated grids */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-between max-w-7xl mx-auto px-6 md:px-12">
          <div className="w-[1px] h-full bg-ink"></div>
          <div className="w-[1px] h-full bg-ink"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block">
                02.5 / MANIFESTO
              </span>
            </div>
            
            <div className="lg:col-span-9">
              <span className="font-mono text-xs text-terracotta font-semibold uppercase tracking-wider block mb-6">
                [Scroll to scrub the narrative]
              </span>
              
              <ScrollRevealText
                text="I believe in building software that doesn't just run, but endures. Products that honor user attention with rapid loading speeds, clean semantic layers, high accessibility standards, and an uncompromising dedication to visual alignment. The web is an extension of human intellect, and every compiled digital artifact should reflect the care and precision of its creator."
                className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.15] tracking-tight max-w-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Timeline Section */}
      <ProcessSection />

      {/* Centerpiece Projects Section */}
      <ProjectsSection />

      {/* Vertical Time Resume Section */}
      <ExperienceSection />

      {/* Services and Consulting Cards Section */}
      <ServicesSection />

      {/* Testimonials Marquee Section */}
      <TestimonialsSection />

      {/* Editorial Blog / Writing Teaser Section */}
      <BlogSection />

      {/* Secure Contact synopsizer Section */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
