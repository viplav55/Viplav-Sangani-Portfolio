import { ReactNode } from "react";
import { motion } from "motion/react";
import { Layers, Terminal, Sparkles, Zap, ArrowRight, Check } from "lucide-react";

interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  price: string;
  turnaround: string;
}

const SERVICES: Service[] = [
  {
    id: "fullstack",
    icon: <Layers className="w-5 h-5 text-terracotta" />,
    title: "Full-Stack Web Development",
    tagline: "End-to-end web applications with custom databases & responsive UIs.",
    description: "Complete web product delivery from design handoff to cloud deployment. I build dynamic client interfaces in React and Next.js, design MongoDB/REST backends in Node.js/Express, and optimize responsive layouts with Tailwind CSS.",
    deliverables: ["Custom React / Next.js / Astro frontends", "Node.js & Express REST API architecture", "MongoDB Atlas database modeling", "Cross-device responsive UI & Tailwind CSS"],
    price: "Custom Scope",
    turnaround: "2–6 weeks"
  },
  {
    id: "headless-cms",
    icon: <Sparkles className="w-5 h-5 text-olive" />,
    title: "Headless CMS Architecture",
    tagline: "Decoupled content platforms with non-technical client autonomy.",
    description: "Empower non-technical teams to write, edit, and publish blogs, pages, and catalog items instantly. I design custom Sanity Studio schemas and Strapi collections, linking them directly to lightning-fast frontend pages without code redeployments.",
    deliverables: ["Custom Sanity & Strapi schemas", "Content validation & RBAC rules", "Instant preview & live publishing", "Zero-downtime decoupled updates"],
    price: "Custom Scope",
    turnaround: "2–4 weeks"
  },
  {
    id: "performance",
    icon: <Zap className="w-5 h-5 text-terracotta" />,
    title: "Core Web Vitals & Performance",
    tagline: "Boosting Lighthouse scores, reducing latency & asset payloads.",
    description: "Maximize search ranking and user engagement. I audit slow rendering, implement Next.js ISR/SSR or Astro Island Architecture, configure lazy loading, split bundles, and fine-tune image delivery for consistent 95+ scores.",
    deliverables: ["Core Web Vitals audit & remediation", "Astro / Next.js SSG migration", "Image optimization & code splitting", "Lighthouse 95+ score target"],
    price: "Custom Scope",
    turnaround: "1–2 weeks"
  },
  {
    id: "ai-mcp",
    icon: <Terminal className="w-5 h-5 text-olive" />,
    title: "AI & Model Context Protocol (MCP)",
    tagline: "Bridging AI assistant capabilities with your software stack.",
    description: "Integrate LLMs and autonomous agents with your operational workflows. Leveraging the Model Context Protocol (MCP) and custom API tools, I connect AI assistants to headless CMS platforms and databases with safety boundaries.",
    deliverables: ["Custom MCP server implementations", "Claude Desktop & AI tool schemas", "Headless CMS assistant pipelines", "API integration & security auditing"],
    price: "Custom Scope",
    turnaround: "2–3 weeks"
  }
];

export default function ServicesSection() {
  const handleEnquiry = (serviceTitle: string) => {
    // Send a custom client event that the contact form component will capture
    const event = new CustomEvent("select-service", { detail: serviceTitle });
    window.dispatchEvent(event);

    // Smooth scroll down to contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-beige overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 border-b border-slate-beige/60 pb-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
            06 / CONSULTING SERVICES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
            A partnership built on <span className="italic text-terracotta">clarity</span> & results.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="border border-slate-beige/60 p-8 bg-cream/40 rounded-3xl flex flex-col justify-between hover:border-slate-beige shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6 border-b border-slate-beige/40 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cream border border-slate-beige/60">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-ink">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-xs text-ink/40 block">Est. Budget</span>
                    <span className="font-mono text-sm font-semibold text-terracotta">{service.price}</span>
                  </div>
                </div>

                {/* Subtagline & Description */}
                <p className="font-sans text-sm font-medium text-ink/80 mb-3">
                  {service.tagline}
                </p>
                <p className="font-sans text-sm text-ink/65 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet List */}
                <div className="mb-8">
                  <span className="font-sans text-xs text-ink/40 block uppercase tracking-widest mb-4 font-semibold">
                    Core Deliverables
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2 text-xs text-ink/75 font-sans">
                        <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row Controls */}
              <div className="border-t border-slate-beige/40 pt-6 flex justify-between items-center mt-auto font-sans">
                <div className="text-left">
                  <span className="text-xs text-ink/40 block">Turnaround</span>
                  <span className="text-sm font-medium text-ink">{service.turnaround}</span>
                </div>
                
                <button
                  onClick={() => handleEnquiry(service.title)}
                  className="px-5 py-2.5 rounded-full bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs font-semibold uppercase tracking-wider"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Small Notice block on scheduling/availability */}
        <div className="border border-slate-beige p-6 rounded-2xl bg-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-olive"></span>
            </span>
            <span className="text-ink/80">
              Currently booking projects for <strong>Late Q3 / Early Q4 2026</strong>. Only 2 openings remaining.
            </span>
          </div>
          <button
            onClick={() => handleEnquiry("General Inquiry / Freelance Collaboration")}
            className="text-xs font-bold uppercase tracking-widest text-terracotta hover:text-ink transition-colors cursor-pointer"
          >
            Check scheduling slots →
          </button>
        </div>

      </div>
    </section>
  );
}
