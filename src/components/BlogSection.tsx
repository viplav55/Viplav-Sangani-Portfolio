import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-mcp",
    title: "Bridging AI Assistants and Headless CMS via Model Context Protocol (MCP)",
    date: "2026",
    category: "Research & AI Architecture",
    excerpt: "An independent research paper detailing how the Model Context Protocol (MCP) enables LLMs to safely inspect, validate, and publish structured content into Sanity and Strapi with strict schema guards.",
    readTime: "14 min paper"
  },
  {
    id: "art-ewaste",
    title: "Deep CNNs & Computer Vision for E-Waste Sorting in Informal Recycling",
    date: "2026",
    category: "Machine Learning & CV",
    excerpt: "Research on developing convolutional neural network classification pipelines to help informal recyclers detect and categorize hazardous electronic components safely.",
    readTime: "12 min paper"
  },
  {
    id: "art-sanity",
    title: "Designing Non-Technical Headless CMS Schemas That Eliminate Code Pushes",
    date: "2025",
    category: "Headless CMS & Next.js",
    excerpt: "Insights from delivering 8+ client projects at Codage Habitation: structuring Sanity Studio desks, custom blocks, and instant client content workflows without redeployments.",
    readTime: "7 min read"
  },
  {
    id: "art-vitals",
    title: "Astro Island Architecture vs. Next.js ISR: Achieving 95+ Core Web Vitals",
    date: "2025",
    category: "Performance Engineering",
    excerpt: "A hands-on analysis of bundle stripping, partial hydration, and caching techniques to guarantee sub-second page loads on production client websites.",
    readTime: "8 min read"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 bg-beige overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 border-b border-slate-beige pb-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/40 block mb-4">
            08 / RESEARCH & WRITING
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink">
            Research papers, <span className="italic text-terracotta">architecture</span> & technical essays.
          </h2>
        </div>

        {/* Magazine / Editorial list layout */}
        <div className="max-w-5xl mx-auto flex flex-col">
          {ARTICLES.map((art, idx) => (
            <motion.a
              href="https://github.com/viplav55"
              target="_blank"
              rel="noopener noreferrer"
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-slate-beige py-8 md:py-10 flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center hover:bg-cream/10 hover:px-4 transition-all duration-300 relative"
            >
              {/* Category & Date Column */}
              <div className="md:col-span-3 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-terracotta uppercase tracking-wider font-semibold">
                  {art.category}
                </span>
                <span className="font-sans text-xs text-ink/40">
                  {art.date}
                </span>
              </div>

              {/* Title & Excerpt Column */}
              <div className="md:col-span-8 flex flex-col gap-2">
                <h3 className="font-serif text-xl md:text-2xl font-normal text-ink group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300 leading-snug">
                  {art.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-ink/60 line-clamp-2 max-w-2xl leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              {/* Read Time & Accent arrow Column */}
              <div className="md:col-span-1 flex md:flex-col md:items-end justify-between w-full md:w-auto items-center pt-2 md:pt-0">
                <span className="font-mono text-[10px] text-ink/40">
                  {art.readTime}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 hidden md:block" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to check out full archive */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/viplav55"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/15 hover:border-ink hover:bg-cream transition-colors font-sans text-xs font-semibold uppercase tracking-widest text-ink group cursor-pointer"
          >
            <span>Explore research & code repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
