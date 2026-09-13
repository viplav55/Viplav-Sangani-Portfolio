import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Step {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  illustration: ReactNode;
}

const STEPS: Step[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover & Scope",
    short: "Unearthing core objectives & system boundary limits.",
    description: "Every product starts with deep analysis. I sit down with you to map out user flows, detail performance requirements, audit security boundaries, and define a rigid technical specification before a single line of code is ever written. This prevents scope creep and ensures perfect alignment.",
    illustration: (
      <svg className="w-full h-full text-terracotta" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="160" rx="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="180" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="100" r="4" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <circle cx="140" cy="140" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "design",
    number: "02",
    title: "System & CMS Architecture",
    short: "Drafting MongoDB models, Sanity/Strapi schemas & API pathways.",
    description: "I translate the product requirements into a technical framework. This means designing MongoDB data collections, configuring custom Sanity Studio or Strapi headless content schemas, mapping out REST API endpoints, and defining TypeScript contracts to serve as our architectural source of truth.",
    illustration: (
      <svg className="w-full h-full text-olive" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="160" height="50" rx="6" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="110" width="160" height="60" rx="6" stroke="currentColor" strokeWidth="2" />
        <path d="M100,80 L100,110" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <polygon points="100,110 96,102 104,102" fill="currentColor" />
        <circle cx="50" cy="55" r="5" fill="currentColor" opacity="0.4" />
        <circle cx="70" cy="55" r="5" fill="currentColor" opacity="0.4" />
        <circle cx="150" cy="140" r="6" fill="currentColor" opacity="0.3" />
        <line x1="40" y1="135" x2="110" y2="135" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="145" x2="90" y2="145" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "build",
    number: "03",
    title: "Full-Stack Development",
    short: "Executing robust, modular code across React, Next.js, and Astro.",
    description: "The core phase. I build client applications using React, Next.js (SSR/SSG), or Astro island architecture for blistering speed, and link them to clean Node.js/Express REST APIs. Code is kept highly modular, responsive with Tailwind CSS, and optimized for non-technical CMS content updates.",
    illustration: (
      <svg className="w-full h-full text-terracotta" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,70 L70,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30,130 L70,170" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M170,70 L130,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M170,130 L130,170" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="115" y1="40" x2="85" y2="160" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="100" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "ship",
    number: "04",
    title: "Vitals Audit & Deployment",
    short: "Core Web Vitals optimization, lazy loading, & production release.",
    description: "Before going live, I perform a thorough audit of the code. This involves minimizing client JavaScript payloads, achieving 95+ Lighthouse performance scores, fine-tuning Core Web Vitals through image optimization, lazy loading, and caching, and deploying for zero-downtime reliability.",
    illustration: (
      <svg className="w-full h-full text-olive" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" />
        <path d="M100,30 L100,170" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30,100 L170,100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M65,75 L135,135" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polygon points="140,140 128,135 133,128" fill="currentColor" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5" fill="var(--color-cream)" />
        <path d="M92,100 L98,106 L112,92" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -35% 0px", // Targets the visual sweet spot in the viewport center
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Pinned/Sticky Header & Visualizers */}
          <div className="md:col-span-5 md:sticky md:top-20 flex flex-col items-start gap-8 self-start">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
                03 / WORKFLOW
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
                How I build <span className="italic text-terracotta">ideas</span> into production systems.
              </h2>
            </div>

            {/* Pinned visual display card */}
            <div className="w-full h-[320px]
    sm:h-[380px]
    bg-beige rounded-3xl border border-slate-beige/40 p-8 md:p-8 flex flex-col justify-between items-center shadow-inner relative overflow-hidden">
              {/* Subtle background coordinate markings to look hand-sketched */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex flex-col justify-between items-center"
                >
                  {/* Huge step indicator */}
                  <div className="w-full flex justify-between items-start">
                    <span className="font-serif text-6xl md:text-7xl font-bold text-ink/10 select-none">
                      {STEPS[activeStep].number}
                    </span>

                    {/* Status indicator */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-ink/15 bg-cream/50 text-ink/60 font-sans text-[10px] font-semibold tracking-wider uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse"></span>
                      Active Phase
                    </div>
                  </div>

                  {/* Animated illustration container */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center my-4 text-terracotta">
                    <div className="w-full h-full">
                      {STEPS[activeStep].illustration}
                    </div>
                  </div>

                  {/* Step name caption & progress indicator */}
                  <div className="w-full text-center flex flex-col items-center gap-3">
                    <h4 className="font-serif text-lg md:text-xl font-medium text-ink">
                      {STEPS[activeStep].title}
                    </h4>
                    {/* Progress dots */}
                    <div className="flex gap-1.5">
                      {STEPS.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === i ? "w-6 bg-terracotta" : "w-1.5 bg-ink/10"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: High Scrolling Text blocks */}
          <div className="md:col-span-7 flex flex-col md:pl-8 lg:pl-12">
            {STEPS.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`flex flex-col justify-center min-h-[60vh] md:min-h-[80vh] items-start py-12 md:py-24 first:pt-4 last:pb-24 md:last:pb-48 transition-all duration-700 border-b border-slate-beige/40 md:border-none ${activeStep === idx
                  ? "opacity-100 translate-x-2"
                  : "opacity-25 translate-x-0"
                  }`}
              >
                {/* Mobile-only Step Number Indicator */}
                <div className="flex md:hidden items-center gap-3 mb-4">
                  <span className="font-serif text-3xl font-bold text-terracotta/40">
                    {step.number}
                  </span>
                  <span className="h-[1px] w-6 bg-slate-beige"></span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-3 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="font-sans text-sm md:text-base font-semibold text-terracotta mb-6 max-w-xl">
                  {step.short}
                </p>

                <p className="font-sans text-sm md:text-base text-ink/75 leading-relaxed max-w-2xl">
                  {step.description}
                </p>

                {/* Subtle horizontal dividers for visual rhythm */}
                <div className="w-20 h-[1.5px] bg-slate-beige mt-8 hidden md:block"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
