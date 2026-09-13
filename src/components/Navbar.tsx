import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-cream/80 backdrop-blur-md py-4 border-slate-beige/40 shadow-sm"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="font-serif text-xl md:text-2xl font-black tracking-tight text-ink hover:text-terracotta transition-colors duration-300"
          >
            VIPLAV SANGANI<span className="text-terracotta">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav links */}
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm font-medium text-ink/75 hover:text-terracotta transition-colors duration-300 relative py-1 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Separator */}
            <div className="h-4 w-[1px] bg-slate-beige"></div>

            {/* Freelance Availability Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-olive/30 bg-olive/5 text-olive font-sans text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive"></span>
              </span>
              Available for Freelance
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Compact Availability Dot (Only dot for small screens) */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-olive/30 bg-olive/5 text-olive font-sans text-[10px] font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse"></span>
              Available
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-full border border-slate-beige/60 hover:bg-beige text-ink transition-colors duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-cream flex flex-col justify-between p-8 md:p-16 pt-24 md:pt-32"
          >
            {/* Watermark SVG background inside menu */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center overflow-hidden">
              <span className="font-serif text-[32vw] font-bold select-none leading-none">VIPLAV</span>
            </div>

            {/* Links container */}
            <div className="relative z-10 flex flex-col justify-center flex-grow max-w-lg mx-auto w-full">
              <span className="text-xs font-semibold tracking-widest text-ink/40 uppercase mb-6 block font-sans">
                Navigation
              </span>
              <ul className="flex flex-col gap-4 md:gap-6">
                {NAV_LINKS.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-serif text-4xl md:text-5xl font-bold text-ink hover:text-terracotta hover:pl-2 transition-all duration-300 flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-terracotta" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Section of Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 border-t border-slate-beige/60 pt-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center max-w-lg mx-auto w-full font-sans"
            >
              <div>
                <span className="text-xs text-ink/40 block">Get in Touch</span>
                <a
                  href="mailto:viplavsangani500@gmail.com"
                  className="text-sm font-semibold text-ink hover:text-terracotta transition-colors"
                >
                  viplavsangani500@gmail.com
                </a>
              </div>
              <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider text-ink/60">
                <a href="https://github.com/viplav55" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/viplavsangani" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">
                  LinkedIn
                </a>
                <a href="tel:+918780160399" className="hover:text-terracotta">
                  +91 8780160399
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
