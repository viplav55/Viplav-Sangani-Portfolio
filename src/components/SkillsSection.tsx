import { useState } from "react";
import { motion } from "motion/react";

const TECH_MARQUEE_1 = [
  "React.js",
  "Next.js",
  "Astro",
  "Sanity CMS",
  "Strapi",
  "Node.js",
  "Express.js",
  "TypeScript",
  "MongoDB Atlas",
  "Tailwind CSS",
  "Model Context Protocol (MCP)",
  "REST APIs",
  "Python & CNN",
  "Git & GitHub",
  "Postman",
];

const VALUE_MARQUEE_2 = [
  "Headless CMS Architecture",
  "Astro Island Architecture",
  "Next.js SSR & ISR",
  "Core Web Vitals Optimization",
  "Pixel-Accurate Breakpoints",
  "Model Context Protocol Integrations",
  "Client Independent Content Control",
  "Computer Vision & Deep Learning",
];

interface SkillDetail {
  name: string;
  proficiency: string;
  note: string;
}

interface SkillCategory {
  title: string;
  skills: SkillDetail[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", proficiency: "Expert", note: "Reusable UI components, modular custom hooks, and dynamic client-state management." },
      { name: "Next.js", proficiency: "Expert", note: "Server-side rendering (SSR), static generation (SSG/ISR), and image optimization." },
      { name: "Astro", proficiency: "Advanced", note: "Static site generation using Island Architecture for blistering page speed and minimal JS." },
      { name: "Tailwind CSS", proficiency: "Expert", note: "Translating client design files into pixel-accurate, fully responsive production layouts." },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js & Express", proficiency: "Expert", note: "Building structured REST APIs, secure routing controllers, and simulated sensor backends." },
      { name: "RESTful APIs", proficiency: "Expert", note: "Designing endpoint contracts, CMS webhooks, and seamless frontend integrations." },
      { name: "TypeScript", proficiency: "Advanced", note: "Type-safe controllers, interfaces, strict domain schemas, and clean architectural patterns." },
      { name: "JavaScript (ES6+)", proficiency: "Expert", note: "Async/await paradigms, DOM APIs, event-driven loops, and modular codebases." },
    ],
  },
  {
    title: "CMS & Databases",
    skills: [
      { name: "Sanity CMS", proficiency: "Expert", note: "Custom schemas for blogs, products, and pages, empowering non-technical client publishing." },
      { name: "Strapi CMS", proficiency: "Advanced", note: "Configuring custom collection types, relations, RBAC permissions, and API delivery." },
      { name: "MongoDB & Atlas", proficiency: "Advanced", note: "Document modeling, cloud cluster administration, aggregation queries, and IoT event stores." },
      { name: "Headless Workflows", proficiency: "Expert", note: "Decoupled architecture enabling instant client updates without triggering full rebuilds." },
    ],
  },
  {
    title: "AI Integration & Tools",
    skills: [
      { name: "Model Context Protocol (MCP)", proficiency: "Researcher", note: "Author of research on connecting AI assistants to headless CMS platforms via MCP SDK." },
      { name: "Python & CNN", proficiency: "Intermediate", note: "Built convolutional neural network and computer vision pipelines for e-waste categorization." },
      { name: "Git & GitHub", proficiency: "Expert", note: "Git-based version control, feature branches, pull requests, and collaborative code reviews." },
      { name: "Postman & CRM", proficiency: "Advanced", note: "Endpoint testing, automated API collections, client handoffs, and workflow management." },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-beige overflow-hidden">
      {/* Curved SVG Divider - Place it at the very top of this beige section connecting back to the cream section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 fill-cream">
          <path d="M0,0 C320,80 720,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-8">
        <div className="mb-16">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
            02 / EXPERTISE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
            A tools directory built for <span className="italic">fluidity</span> & speed.
          </h2>
        </div>
      </div>

      {/* INFINITE MARQUEES ROW 1: Forward */}
      <div className="relative border-y border-slate-beige/60 py-6 mb-4 bg-cream/30 marquee-container overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-lg md:text-xl font-sans tracking-widest uppercase font-medium text-ink/80 select-none">
          {/* First loop */}
          {TECH_MARQUEE_1.map((tech, idx) => (
            <span key={`t1-${idx}`} className="flex items-center gap-12">
              <span>{tech}</span>
              <span className="text-terracotta">•</span>
            </span>
          ))}
          {/* Second duplicated loop for seamless transition */}
          {TECH_MARQUEE_1.map((tech, idx) => (
            <span key={`t2-${idx}`} className="flex items-center gap-12">
              <span>{tech}</span>
              <span className="text-terracotta">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* INFINITE MARQUEES ROW 2: Reverse */}
      <div className="relative border-b border-slate-beige/60 py-6 mb-16 bg-cream/30 marquee-container overflow-hidden">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 text-lg md:text-xl font-serif italic text-terracotta/90 select-none">
          {/* First loop */}
          {VALUE_MARQUEE_2.map((val, idx) => (
            <span key={`v1-${idx}`} className="flex items-center gap-12">
              <span>{val}</span>
              <span className="text-ink/30 font-sans font-normal not-italic">•</span>
            </span>
          ))}
          {/* Second duplicated loop */}
          {VALUE_MARQUEE_2.map((val, idx) => (
            <span key={`v2-${idx}`} className="flex items-center gap-12">
              <span>{val}</span>
              <span className="text-ink/30 font-sans font-normal not-italic">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 items-start">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="border border-slate-beige/60 p-6 md:p-8 bg-cream/40 rounded-2xl backdrop-blur-sm shadow-sm hover:border-slate-beige transition-all duration-300 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-medium border-b border-slate-beige/60 pb-3 mb-6 text-ink flex justify-between items-center">
                  <span>{category.title}</span>
                  <span className="text-xs font-sans font-normal opacity-50">[{category.skills.length}]</span>
                </h3>

                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center font-sans text-sm mb-1">
                        <span className="font-medium text-ink group-hover:text-terracotta transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-ink/40 bg-slate-beige/30 px-2 py-0.5 rounded-full group-hover:bg-terracotta/10 group-hover:text-terracotta transition-all duration-300">
                          {skill.proficiency}
                        </span>
                      </div>

                      {/* Expanding responsive helper note on click/hover */}
                      <div
                        className={`overflow-hidden transition-all duration-300 font-sans text-xs text-ink/60 ${
                          hoveredSkill === skill.name
                            ? "max-h-24 opacity-100 mt-2 border-l-2 border-terracotta/30 pl-2 py-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {skill.note}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
