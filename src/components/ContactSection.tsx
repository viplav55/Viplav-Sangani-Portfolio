import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Listen for the custom "select-service" event from the Services section
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const serviceTitle = customEvent.detail;
      
      setFormData((prev) => ({
        ...prev,
        service: serviceTitle,
        message: `Hi Viplav,\n\nI'm reaching out regarding your "${serviceTitle}" services. I would love to schedule a discussion about our upcoming project...`,
      }));
    };

    window.addEventListener("select-service", handleSelectService);
    return () => window.removeEventListener("select-service", handleSelectService);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate premium API roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", service: "", message: "" });
      
      // Clear success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden px-6 md:px-12">
      
      {/* Curved SVG Divider - Top organic connection from blog to contact */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 fill-beige">
          <path d="M0,0 C320,80 720,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Links & Text */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between h-full">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-cream/40 block mb-6">
                09 / CONTACT & BRIEFING
              </span>
              
              <h2 className="font-serif text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight mb-8">
                Let's build <br />
                something <br />
                <span className="italic text-terracotta">significant</span>.
              </h2>
              
              <p className="font-sans text-sm md:text-base text-cream/60 leading-relaxed max-w-sm mb-12">
                Have an idea, an active engineering bottleneck, or an RFP? Write me a brief synopsis and let's compile something remarkable together.
              </p>
            </div>

            {/* Direct Email Link & Social Array (Asymmetric list) */}
            <div className="w-full border-t border-cream/10 pt-10">
              <span className="font-mono text-[10px] text-cream/40 uppercase tracking-widest block mb-2">
                Direct Email
              </span>
              <a
                href="mailto:viplavsangani500@gmail.com"
                className="font-serif text-xl sm:text-2xl text-cream hover:text-terracotta transition-colors duration-300 block mb-6 break-all"
              >
                viplavsangani500@gmail.com
              </a>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <span className="font-mono text-[10px] text-cream/40 uppercase tracking-widest block mb-1">
                    Direct Phone
                  </span>
                  <a
                    href="tel:+918780160399"
                    className="font-sans text-sm font-medium text-cream hover:text-terracotta transition-colors"
                  >
                    +91 8780160399
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cream/40 uppercase tracking-widest block mb-1">
                    Location
                  </span>
                  <span className="font-sans text-sm text-cream/80 block">
                    Ahmedabad, India (IST)
                  </span>
                </div>
              </div>

              <span className="font-mono text-[10px] text-cream/40 uppercase tracking-widest block mb-4">
                Digital Profiles
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs font-semibold uppercase tracking-widest text-cream/60">
                <li>
                  <a href="https://github.com/viplav55" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors py-1 relative group block">
                    GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/viplavsangani" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors py-1 relative group block">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: High Quality Styled Form */}
          <div className="lg:col-span-7 bg-[#24211D] border border-cream/10 p-8 md:p-12 rounded-3xl w-full shadow-2xl relative">
            
            {/* Form markings */}
            <div className="absolute top-4 right-6 font-mono text-[9px] opacity-20">SESSION_ID: SECURE_WS</div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 font-sans"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                        My Name is *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-transparent border-b border-cream/20 py-2.5 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                        My Email is *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-transparent border-b border-cream/20 py-2.5 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                      I'm Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-transparent border-b border-cream/20 py-2.5 text-cream text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#24211D] text-cream">Select a category...</option>
                      <option value="Full-Stack Product Engineering" className="bg-[#24211D] text-cream">Full-Stack Product Engineering</option>
                      <option value="Aesthetic Landing Spaces" className="bg-[#24211D] text-cream">Aesthetic Landing Spaces</option>
                      <option value="System Telemetry & APIs" className="bg-[#24211D] text-cream">System Telemetry & APIs</option>
                      <option value="Performance & UX Audits" className="bg-[#24211D] text-cream">Performance & UX Audits</option>
                      <option value="General Collaboration" className="bg-[#24211D] text-cream">General Collaboration</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                      Project Synopsis *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your product parameters, deadlines, and technical scope..."
                      className="bg-transparent border-b border-cream/20 py-2.5 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-terracotta hover:bg-cream hover:text-ink transition-colors duration-300 text-cream font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer disabled:bg-cream/10 disabled:text-cream/30 disabled:cursor-not-allowed group shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-cream/30 border-t-cream animate-spin"></div>
                        <span>Transmitting briefing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-olive mb-6 animate-bounce" />
                  <h3 className="font-serif text-3xl font-normal text-cream mb-2">
                    Briefing Received
                  </h3>
                  <p className="font-sans text-sm text-cream/60 max-w-sm mb-8 leading-relaxed">
                    Thank you. Your technical scope payload has been transmitted securely. I will review your requirements and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full border border-cream/20 hover:border-cream text-cream text-xs font-semibold uppercase tracking-widest transition-all"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
