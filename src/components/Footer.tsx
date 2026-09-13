import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-ink border-t border-cream/10 py-12 md:py-16 text-cream/60 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Wordmark & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTop();
            }}
            className="font-serif text-xl font-black text-cream tracking-tight hover:text-terracotta transition-colors"
          >
            VIPLAV SANGANI<span className="text-terracotta">.</span>
          </a>
          <p className="font-sans text-xs text-cream/40 text-center md:text-left leading-relaxed">
            © 2026 Viplav Sangani. Full Stack Web Developer. <br />
            Ahmedabad, Gujarat, India • IST (GMT+5:30)
          </p>
        </div>

        {/* Middle: Brief message or info */}
        <div className="hidden lg:block text-center font-serif italic text-sm text-cream/30">
          "Craftsmanship is the refusal to accept defaults."
        </div>

        {/* Right: Quick Back to Top and Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <ul className="flex items-center gap-6 font-sans text-xs uppercase tracking-wider font-semibold text-cream/40">
            <li>
              <a href="#work" className="hover:text-cream transition-colors">Work</a>
            </li>
            <li>
              <a href="#about" className="hover:text-cream transition-colors">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-cream transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
            </li>
          </ul>

          {/* Separator */}
          <div className="hidden sm:block h-4 w-[1px] bg-cream/10"></div>

          {/* Back to Top */}
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-full border border-cream/20 hover:border-cream hover:bg-cream hover:text-ink text-cream transition-all duration-300 cursor-pointer flex items-center justify-center shadow-md group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
