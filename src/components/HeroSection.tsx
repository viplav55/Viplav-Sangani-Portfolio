import { motion } from "motion/react";
import StatCounter from "./StatCounter";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cream px-6 md:px-12">
      {/* Decorative background grid lines (subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[1px] h-full bg-ink"></div>
        <div className="w-[1px] h-full bg-ink hidden md:block"></div>
        <div className="w-[1px] h-full bg-ink hidden lg:block"></div>
        <div className="w-[1px] h-full bg-ink"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Headline & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tiny Label/Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-[1px] w-8 bg-terracotta"></span>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta">
                Full Stack Web Developer • Ahmedabad, India
              </span>
            </motion.div>

            {/* Giant Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-ink mb-8"
            >
              I build fast, <br />
              <span className="italic text-terracotta font-normal">thoughtful</span> <br />
              web products<span className="text-terracotta">.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base md:text-lg text-ink/70 max-w-xl mb-10 leading-relaxed"
            >
              Viplav Sangani is a full-stack web developer specializing in the MERN stack, Next.js, Astro, and headless CMS architectures (Sanity & Strapi). Experienced in delivering 8+ live client projects end-to-end, API design, and Model Context Protocol (MCP) integrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo("work")}
                className="px-8 py-4 rounded-full bg-ink text-cream font-sans font-medium text-sm border border-ink hover:bg-terracotta hover:border-terracotta transition-colors duration-300 shadow-md cursor-pointer text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-8 py-4 rounded-full bg-transparent text-ink font-sans font-medium text-sm border border-ink/30 hover:border-ink transition-colors duration-300 cursor-pointer text-center"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Right: Layered Image / Shape Mask / SVG Line art */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]"
            >
              {/* Layer 1: Warm Offset Background Shadow Block */}
              <div className="absolute inset-0 bg-beige rounded-t-[160px] translate-x-4 translate-y-4 border border-slate-beige/30"></div>

              {/* Layer 2: Shape Mask Clipped Portait (Using border radius to create beautiful arch) */}
              <div className="absolute inset-0 bg-slate-beige rounded-t-[160px] overflow-hidden border border-slate-beige shadow-lg group">
                <img
                  src=""
                  alt="Viplav Sangani Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Custom Overlay Subtle Shade */}
                <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply pointer-events-none"></div>
              </div>

              {/* Layer 3: Hand-Drawn SVG Line-Art Overlay */}
              <svg
                viewBox="0 0 384 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none -translate-x-2 -translate-y-2 overflow-visible"
              >
                {/* Border arch path matching rounded corners of 160px on 320/384 width */}
                <motion.path
                  d="M 12,500 L 12,172 A 160,160 0 0,1 372,172 L 372,500"
                  stroke="#B65C45"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="2000"
                  initial={{ strokeDashoffset: 2000 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
                />

                {/* Hand-drawn Star Flourish at the arch peak apex (center-top) */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                  className="origin-[192px_12px]"
                >
                  <path
                    d="M 192,0 L 195,8 L 203,11 L 195,14 L 192,22 L 189,14 L 181,11 L 189,8 Z"
                    fill="#B65C45"
                  />
                </motion.g>

                {/* Small Hand-Drawn Circle / Squiggle Accent at bottom-left */}
                <motion.path
                  d="M 8,485 C 4,492 -4,496 -2,504 C 0,512 12,508 14,500 C 15,492 8,482 4,484"
                  stroke="#B65C45"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="150"
                  initial={{ strokeDashoffset: 150 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Below the Fold: Editorial About Statement & Stats */}
        <div className="mt-32 pt-24 border-t border-slate-beige/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Section label */}
            <div className="lg:col-span-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4 lg:mb-0">
                01 / PHILOSOPHY
              </span>
            </div>

            {/* Editorial statement (large) */}
            <div className="lg:col-span-9">
              <h2 className="font-serif text-3xl md:text-5xl font-normal leading-[1.15] text-ink max-w-4xl mb-12">
                "Code is not just syntax. It is content architecture, speed, and user trust. I bridge the divide between <span className="text-terracotta italic">headless CMS agility</span> and resilient, high-performance web engineering."
              </h2>

              <p className="font-sans text-base text-ink/70 max-w-2xl mb-16 leading-relaxed">
                From developing 8+ live client web projects with Next.js, Astro, Sanity, and Strapi at Codage Habitation to authoring an independent research paper on Model Context Protocol (MCP) integrations — I take ownership of digital systems end-to-end, from database schema and REST API to pixel-accurate delivery.
              </p>

              {/* Animated Stat Counters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-slate-beige/60 pt-12">
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-terracotta mb-2 font-serif font-normal">
                    <StatCounter value={8} suffix="+" />
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-widest text-ink/50 uppercase">
                    Live Client Projects
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-terracotta mb-2 font-serif font-normal">
                    <StatCounter value={100} suffix="%" />
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-widest text-ink/50 uppercase">
                    End-to-End Ownership
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-terracotta mb-2 font-serif font-normal">
                    <StatCounter value={95} suffix="+" />
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-widest text-ink/50 uppercase">
                    Lighthouse & Vitals Score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
