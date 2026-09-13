import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Download, Calendar, FileText, CheckCircle2, GraduationCap, Languages } from "lucide-react";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    id: "exp1",
    role: "Full Stack Web Developer",
    company: "Codage Habitation",
    location: "Ahmedabad, India",
    period: "Sep 2025 – June 2026",
    description: "Led full-stack architecture and frontend delivery across 8+ live client web projects, bridging custom Sanity and Strapi headless CMS data models with high-speed React, Next.js, and Astro frontends.",
    highlights: [
      "Delivered 8+ production web applications end-to-end with React, Next.js, Astro, Strapi, Sanity CMS, and Tailwind CSS.",
      "Designed and configured custom Sanity CMS schemas (custom pages, blogs, and product catalogs), empowering non-technical clients to update and publish content without developer intervention or redeployment.",
      "Built modular, reusable React components and SEO-friendly pages with Next.js (SSR/SSG) and Astro's static site generation.",
      "Optimized page speed and Core Web Vitals to 95+ scores through aggressive image optimization, code splitting, lazy loading, and caching.",
      "Implemented fully responsive, pixel-accurate UIs with Tailwind CSS, ensuring smooth cross-browser and cross-device performance."
    ]
  },
  {
    id: "exp2",
    role: "Full Stack Web Developer",
    company: "InfoLabz",
    location: "Ahmedabad, India",
    period: "July 2024 – June 2025",
    description: "Engineered MERN stack applications with React, Node.js, Express, and MongoDB Atlas, collaborating across development teams on prototype development, code reviews, and API testing.",
    highlights: [
      "Built full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Developed the Safety First SOS System prototype, a real-time IoT fire safety monitoring dashboard simulating flame, smoke, MQ4, and MQ135 sensor telemetry.",
      "Designed and documented RESTful APIs with Node.js and Express, implementing threshold-based debounce logic to eliminate false alerts.",
      "Collaborated with developers on Git-based version control, code reviews, and comprehensive API endpoint testing using Postman."
    ]
  }
];

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
}

const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gujarat Technological University",
    location: "Ahmedabad, India",
    period: "Expected 2027",
    focus: "Advanced software architecture, cloud platforms, machine learning, and distributed computing systems."
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Lokmanya College (Gujarat University)",
    location: "Ahmedabad, India",
    period: "July 2022 – July 2025",
    focus: "Computer science foundations, data structures, DBMS, web engineering, and object-oriented programming."
  }
];

export default function ExperienceSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloadCompleted, setDownloadCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const handleDownload = () => {
    setDownloading(true);
    setDownloadCompleted(false);
    
    // Generate real formatted resume download
    setTimeout(() => {
      setDownloading(false);
      setDownloadCompleted(true);
      
      const resumeContent = `VIPLAV SANGANI
Full Stack Web Developer
Ahmedabad, India
Phone: +91 8780160399
Email: viplavsangani500@gmail.com
LinkedIn: https://linkedin.com/in/viplavsangani
GitHub: https://github.com/viplav55

========================================
PROFESSIONAL SUMMARY
========================================
Full-stack web developer specializing in the MERN stack, Next.js, Astro, and headless CMS architectures (Sanity & Strapi). Experienced in delivering 8+ live client projects end-to-end, writing custom CMS schemas, and researching Model Context Protocol (MCP) integrations.

========================================
TECHNICAL SKILLS
========================================
- Frontend: React.js, Next.js, Astro, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, TypeScript
- Database: MongoDB, MongoDB Atlas
- CMS: Sanity CMS (Custom Schemas), Strapi (Custom Content Types & RBAC)
- AI Integration: Model Context Protocol (MCP), MCP SDK, Claude Desktop, Python (CNN, Computer Vision)
- Tools & Platforms: Git, GitHub, Postman, CRM
- Languages: English (Advanced), Hindi (Native), Gujarati (Native)

========================================
WORK EXPERIENCE
========================================
Full Stack Web Developer | Codage Habitation
Ahmedabad, India (Sep 2025 – June 2026)
- Delivered 8+ production web applications end-to-end with React, Next.js, Astro, Strapi, Sanity CMS, and Tailwind CSS.
- Designed and maintained custom Sanity CMS schemas (pages, blogs, product catalogs) giving non-technical clients independent control over content without developer intervention or redeployment.
- Built reusable React components and SEO-friendly, high-performance pages with Next.js (SSR/SSG) and Astro's static site generation.
- Improved page speed and Core Web Vitals to 95+ scores through aggressive image optimization, code splitting, lazy loading, and caching.
- Implemented fully responsive, pixel-accurate UIs with Tailwind CSS.

Full Stack Web Developer | InfoLabz
Ahmedabad, India (July 2024 – June 2025)
- Built full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
- Developed Safety First SOS System prototype, a real-time IoT fire safety monitoring dashboard simulating flame, smoke, MQ4, and MQ135 sensor telemetry.
- Designed and documented RESTful APIs with Node.js and Express, implementing threshold-based debounce logic to eliminate false alerts.
- Collaborated with development teams on Git-based version control, REST API testing with Postman, and code reviews.

========================================
KEY PROJECTS & RESEARCH
========================================
1. Full-Stack Web Applications & Headless CMS Platforms (2025 – 2026)
   - Technologies: React, Next.js, Astro, Strapi, Sanity CMS, Node.js, Tailwind CSS
   - Delivered 8+ client websites end-to-end with custom schemas and high Core Web Vitals.

2. AI-Based E-Waste Sorting Classifier for Informal Recyclers (2026)
   - Technologies: Python, CNN, Transfer Learning, Machine Learning, Computer Vision
   - Developed an AI-powered e-waste classification and sorting system to assist informal recyclers in identifying hazardous electronic components safely. Accompanied by a research paper.

3. Safety First SOS System (IoT Fire Safety Prototype) (2024 – 2025)
   - Technologies: React, Node.js, Express.js, MongoDB Atlas, IoT
   - Real-time fire safety monitoring dashboard with simulated sensor telemetry and automated alert workflows.

4. Model Context Protocol (MCP) for Headless CMS (2025 – 2026)
   - Technologies: MCP SDK, Claude Desktop, Sanity, Strapi, TypeScript
   - Authored independent research paper and reference architecture connecting AI assistants directly to headless CMS platforms.

========================================
EDUCATION
========================================
- Master of Computer Applications (MCA) | Gujarat Technological University (Expected 2027)
- Bachelor of Computer Application (BCA) | Lokmanya College, Gujarat University (July 2022 – July 2025)
`;

      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Viplav_Sangani_Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setTimeout(() => setDownloadCompleted(false), 4000);
    }, 1200);
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      
      {/* Curved SVG Divider - Top connection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 fill-ink">
          <path d="M0,0 C320,80 720,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 border-b border-slate-beige/60 pb-10">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
              05 / CHRONOLOGY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
              Professional history & <span className="italic">technical</span> trajectory.
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Download resume with interactive loading animation */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`px-6 py-3.5 rounded-full font-sans font-semibold text-xs uppercase tracking-widest border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                downloadCompleted
                  ? "bg-olive text-cream border-olive"
                  : downloading
                  ? "bg-slate-beige/50 text-ink/50 border-slate-beige/60"
                  : "bg-transparent text-ink border-ink/30 hover:border-ink hover:bg-beige"
              }`}
            >
              {downloadCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-bounce" />
                  <span>Resume Copied!</span>
                </>
              ) : downloading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-ink/30 border-t-ink animate-spin"></div>
                  <span>Assembling PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          
          {/* Vertical axis line (Underlay) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-beige/50 -translate-x-[0.75px]"></div>

          {/* Active Dynamic Scroll line progress */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-terracotta -translate-x-[1px] z-10"
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Axis Node Bubble (with scroll reaction animation) */}
                  <motion.div 
                    initial={{ scale: 0.6, backgroundColor: "#ECE4D8", borderColor: "#D7CDC1" }}
                    whileInView={{ scale: 1.1, backgroundColor: "#B65C45", borderColor: "#B65C45" }}
                    viewport={{ once: false, margin: "-120px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-2 top-1.5 z-20 shadow-sm"
                  />

                  {/* Left Column Spacer / Node Time text for large screens */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="hidden md:block w-1/2 px-12 text-right"
                  >
                    <span className={`font-mono text-xs font-semibold uppercase tracking-wider text-terracotta flex items-center gap-2 justify-end ${
                      isEven ? "justify-start" : ""
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs font-sans text-ink/40 mt-1 block font-medium">
                      {item.location}
                    </span>
                  </motion.div>

                  {/* Right Column Box Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-12 md:px-12"
                  >
                    
                    {/* Mobile-only date indicator */}
                    <div className="flex md:hidden items-center gap-2 font-mono text-xs text-terracotta font-semibold uppercase tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period} | {item.location}
                    </div>

                    <div className="border border-slate-beige/60 p-6 md:p-8 bg-beige/30 rounded-2xl shadow-sm hover:border-slate-beige hover:bg-beige/40 transition-all duration-300 group">
                      
                      <h3 className="font-serif text-lg md:text-xl font-medium text-ink mb-1 group-hover:text-terracotta transition-colors duration-300">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-3.5 h-3.5 text-ink/40" />
                        <span className="font-sans text-sm font-semibold text-ink/75">
                          {item.company}
                        </span>
                      </div>

                      <p className="font-sans text-xs md:text-sm text-ink/70 leading-relaxed mb-6 border-b border-slate-beige/40 pb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-ink/65 font-sans leading-relaxed">
                            <span className="text-terracotta mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Education & Academic Credentials */}
        <div className="mt-24 pt-16 border-t border-slate-beige/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-3">
                Academic Background
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-4">
                Education & Languages
              </h3>
              <p className="font-sans text-sm text-ink/70 leading-relaxed max-w-sm mb-6">
                Rooted in formal computer applications coursework, software design principles, and multi-lingual team communication.
              </p>

              {/* Language badges */}
              <div className="p-4 rounded-xl bg-beige/40 border border-slate-beige/50">
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-ink/60 font-sans">
                  <Languages className="w-3.5 h-3.5 text-terracotta" />
                  <span>Language Proficiencies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cream rounded-full border border-slate-beige/60 text-xs font-medium text-ink">
                    English <span className="text-ink/40">(Advanced)</span>
                  </span>
                  <span className="px-3 py-1 bg-cream rounded-full border border-slate-beige/60 text-xs font-medium text-ink">
                    Hindi <span className="text-ink/40">(Native)</span>
                  </span>
                  <span className="px-3 py-1 bg-cream rounded-full border border-slate-beige/60 text-xs font-medium text-ink">
                    Gujarati <span className="text-ink/40">(Native)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl bg-beige/30 border border-slate-beige/60 hover:border-slate-beige hover:bg-beige/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-9 h-9 rounded-full bg-cream border border-slate-beige/50 flex items-center justify-center text-terracotta">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-terracotta font-semibold">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-medium text-ink mb-1">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-ink/60 mb-4">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="font-sans text-xs text-ink/70 leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
