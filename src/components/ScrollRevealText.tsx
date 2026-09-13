import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  
  // Track scroll position of the text container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 30%"],
  });

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap gap-x-[0.25em] gap-y-[0.05em]`}>
      {words.map((word, index) => {
        // Calculate a staggered step for each word
        const start = index / words.length;
        const end = Math.min((index + 1.5) / words.length, 1.0);
        
        // Map scroll percentage to word opacity and scale
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const y = useTransform(scrollYProgress, [start, end], [4, 0]);

        return (
          <motion.span
            key={index}
            style={{ opacity, y }}
            className="inline-block font-serif text-ink"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
