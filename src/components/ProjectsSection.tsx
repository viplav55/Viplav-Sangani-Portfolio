import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  imageSrc: string;
}

const PROJECTS: Project[] = [
  {
    id: "headless-cms-ecosystem",
    number: "01",
    title: "Full-Stack Web Ecosystem & Headless CMS",
    description: "Delivered 8+ production websites end-to-end, pairing tailored Sanity and Strapi schemas (custom pages, blogs, and product listings) with React, Next.js, and Astro frontends. Employed Next.js ISR/SSG, Astro island architecture, and image optimization to ensure high Lighthouse scores and Core Web Vitals, while integrating REST APIs so clients publish without redeployments.",
    tags: ["React.js", "Next.js", "Astro", "Sanity CMS", "Strapi", "Node.js", "Tailwind CSS"],
    year: "2025 – 2026",
    role: "Full Stack Web Developer (Codage Habitation)",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ai-ewaste-classifier",
    number: "02",
    title: "AI E-Waste Sorting Classifier for Informal Recyclers",
    description: "An AI-powered computer vision system that helps informal recyclers identify and categorize electronic waste safely. Developed a deep convolutional neural network (CNN) pipeline with transfer learning, image preprocessing, and unknown-object differentiation, paired with risk-assessment guidance to mitigate toxic exposure. Fully documented in an academic research paper.",
    tags: ["Python", "CNN", "Transfer Learning", "Computer Vision", "Machine Learning", "Research Paper"],
    year: "2026",
    role: "Computer Vision & ML Researcher",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "safety-first-sos",
    number: "03",
    title: "Safety First SOS System (IoT Fire Safety)",
    description: "A real-time fire safety monitoring dashboard simulating flame, smoke, MQ4 (combustible gas), and MQ135 (air quality) sensor telemetry with historical event logs. Built a Node.js/Express REST API backed by MongoDB Atlas to store simulated sensor events, execute threshold debounce logic to reduce false alerts, and trigger buzzer and email alert workflows.",
    tags: ["React", "Node.js", "Express.js", "MongoDB Atlas", "IoT", "REST APIs"],
    year: "2024 – 2025",
    role: "Full Stack & IoT Developer (InfoLabz)",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mcp-headless-bridge",
    number: "04",
    title: "Model Context Protocol for Headless CMS",
    description: "An independent research paper and architectural framework connecting LLM AI assistants (Claude Desktop and custom agents) directly to headless CMS platforms via MCP. Built MCP servers enabling agents to perform structured querying, schema validation, and guided content publication into Sanity and Strapi with strict access boundaries.",
    tags: ["Model Context Protocol (MCP)", "MCP SDK", "Claude Desktop", "Sanity CMS", "Strapi", "TypeScript"],
    year: "2025 – 2026",
    role: "Independent Researcher & Systems Architect",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Monitor scroll position of projects in desktop mode
      const threshold = window.innerHeight * 0.45;
      
      projectRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        
        if (rect.top < threshold && rect.bottom > threshold) {
          setActiveProject(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      
      {/* Decorative background visual grids (darker ink tones) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-between max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[1px] h-full bg-cream"></div>
        <div className="w-[1px] h-full bg-cream hidden md:block"></div>
        <div className="w-[1px] h-full bg-cream"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="mb-20 border-b border-cream/10 pb-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-cream/40 block mb-4">
            04 / SELECTED WORKS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight">
            Case studies in digital <span className="italic text-terracotta">integrity</span>.
          </h2>
        </div>

        {/* Desktop Sticky Grid & Mobile Flow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Pinned Mockup Window (Desktop Sticky, hidden on mobile in favor of in-line media) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-32 self-start">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#24211D] border border-cream/10 p-6 flex items-center justify-center overflow-hidden shadow-2xl group">
              
              {/* Hand-crafted technical coordinates markings inside image frame */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-cream/20">viplav_sangani_engineering_showcase</div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-cream/20">W_SCALE: 800px</div>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-cream/20">SYS_INDEX: 0{activeProject + 1}</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full rounded-2xl overflow-hidden relative border border-cream/5"
                >
                  <img
                    src={PROJECTS[activeProject].imageSrc}
                    alt={PROJECTS[activeProject].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-125 saturate-0 hover:saturate-50 hover:scale-105 transition-all duration-700"
                  />
                  {/* Subtle color cast */}
                  <div className="absolute inset-0 bg-terracotta/5 mix-blend-color-burn pointer-events-none"></div>
                  
                  {/* Floating Year Tag */}
                  <div className="absolute bottom-4 right-4 bg-ink/80 backdrop-blur-md border border-cream/15 px-3 py-1 rounded-full font-mono text-xs text-cream/80">
                    Est. {PROJECTS[activeProject].year}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Right Side: Scrollable Details */}
          <div className="lg:col-span-6 flex flex-col gap-16 lg:gap-0 lg:pl-12">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[idx] = el;
                }}
                className={`flex flex-col items-start lg:py-24 first:lg:pt-0 last:lg:pb-32 transition-opacity duration-500 border-b border-cream/10 lg:border-none pb-12 ${
                  activeProject === idx ? "opacity-100" : "opacity-30"
                }`}
              >
                {/* Project Number Indicator */}
                <div className="flex items-center gap-3 mb-6 font-mono text-xs text-terracotta tracking-widest font-semibold uppercase">
                  <span>{project.number} / PROJECT</span>
                  <span className="h-[1px] w-8 bg-terracotta/40"></span>
                  <span>{project.year}</span>
                </div>

                {/* Mobile-only inline mockup (Displays on small screens instead of sticky left) */}
                <div className="block lg:hidden w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-[#24211D] border border-cream/10 relative">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-125 saturate-0"
                  />
                  <div className="absolute inset-0 bg-terracotta/5 mix-blend-color-burn pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-md px-2.5 py-0.5 rounded-full font-mono text-[10px] text-cream/80">
                    {project.year}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-3xl md:text-4xl font-normal leading-none tracking-tight mb-4 text-cream">
                  {project.title}
                </h3>

                {/* Project Metadata (Role) */}
                <span className="font-sans text-xs uppercase tracking-wider text-cream/40 mb-6 block font-medium">
                  Role: <span className="text-cream/80 font-semibold">{project.role}</span>
                </span>

                {/* Project Description */}
                <p className="font-sans text-sm md:text-base text-cream/70 leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-cream/80 border border-cream/20 bg-cream/5 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link with Magnetic Feeling */}
                <a
                  href="https://github.com/viplav55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-terracotta hover:text-cream group transition-colors duration-300"
                >
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Subtle visual divider */}
                <div className="w-16 h-[1px] bg-cream/15 mt-10 hidden lg:block"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
