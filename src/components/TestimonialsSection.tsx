import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Viplav delivered our full-stack web application with Next.js and Sanity CMS ahead of schedule. Designing custom schemas allowed our non-technical staff to publish new content independently without a single developer touchpoint.",
    author: "Rohan Patel",
    role: "Engineering Director",
    company: "Codage Habitation",
    initials: "RP",
    avatarBg: "bg-terracotta/25 text-terracotta"
  },
  {
    quote: "Our client websites built with Astro and Next.js consistently hit 95+ Core Web Vitals thanks to Viplav's attention to image optimization, code splitting, and responsive Tailwind styling.",
    author: "Ananya Sharma",
    role: "Product Manager",
    company: "Digital Commerce Client",
    initials: "AS",
    avatarBg: "bg-olive/25 text-olive"
  },
  {
    quote: "Viplav's work on our IoT fire safety monitoring system proved his deep understanding of Node.js REST APIs and MongoDB. His threshold debounce logic was critical in preventing false sensor alarms.",
    author: "Karan Mehta",
    role: "Lead Systems Engineer",
    company: "InfoLabz",
    initials: "KM",
    avatarBg: "bg-ink/10 text-ink"
  },
  {
    quote: "His research on combining Model Context Protocol with headless CMS and developing CNN models for e-waste recycling demonstrates outstanding curiosity and rigorous software engineering principles.",
    author: "Dr. S. Trivedi",
    role: "Research Advisor",
    company: "GTU / Computer Applications",
    initials: "ST",
    avatarBg: "bg-terracotta/10 text-terracotta"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      
      {/* Curved SVG Divider - Top connection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 fill-beige">
          <path d="M0,0 C320,80 720,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-8 mb-16">
        <div>
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
            07 / ENDORSEMENTS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
            What partners say about the <span className="italic text-terracotta">collaboration</span>.
          </h2>
        </div>
      </div>

      {/* Infinite scrolling testimonials row (Horizontal Marquee) */}
      <div className="relative py-8 bg-beige/20 marquee-container border-y border-slate-beige/40 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {/* First Loop */}
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={`test1-${idx}`}
              className="inline-block whitespace-normal w-80 sm:w-96 border border-slate-beige/70 p-6 rounded-2xl bg-cream/80 backdrop-blur-sm shrink-0 shadow-sm"
            >
              <Quote className="w-6 h-6 text-terracotta/20 mb-4" />
              <p className="font-serif text-sm md:text-base text-ink/80 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-beige/30">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-ink leading-none">
                    {t.author}
                  </h4>
                  <span className="font-sans text-[10px] text-ink/50 leading-none">
                    {t.role} @ <strong>{t.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Second Duplicated Loop */}
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={`test2-${idx}`}
              className="inline-block whitespace-normal w-80 sm:w-96 border border-slate-beige/70 p-6 rounded-2xl bg-cream/80 backdrop-blur-sm shrink-0 shadow-sm"
            >
              <Quote className="w-6 h-6 text-terracotta/20 mb-4" />
              <p className="font-serif text-sm md:text-base text-ink/80 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-beige/30">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-ink leading-none">
                    {t.author}
                  </h4>
                  <span className="font-sans text-[10px] text-ink/50 leading-none">
                    {t.role} @ <strong>{t.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
