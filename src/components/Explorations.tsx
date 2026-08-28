import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const explorations = [
  { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop", rotation: -3 },
  { image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop", rotation: 2 },
  { image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=600&fit=crop", rotation: -1 },
  { image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop", rotation: 4 },
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop", rotation: -2 },
  { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop", rotation: 3 },
];

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the center content
    if (contentRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300vh',
        pin: contentRef.current,
        pinSpacing: false,
      });
    }

    // Parallax effect for columns
    if (columnsRef.current) {
      gsap.to(columnsRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[300vh] bg-bg relative">
      {/* Layer 1: Pinned Center Content */}
      <div
        ref={contentRef}
        className="h-screen flex items-center justify-center relative z-10"
      >
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display italic mb-6">
              Visual <span className="italic">playground</span>
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              A collection of visual experiments and creative explorations in data visualization and design.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-text-primary text-bg text-sm hover:bg-bg hover:text-text-primary transition-colors"
            >
              Explore on Dribbble
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div
        ref={columnsRef}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full">
          <div className="grid grid-cols-2 gap-12 md:gap-40 pt-20">
            {/* Left Column */}
            <div className="space-y-20">
              {explorations.slice(0, 3).map((item, index) => (
                <motion.div
                  key={`left-${index}`}
                  initial={{ opacity: 0, rotate: item.rotation }}
                  whileInView={{ opacity: 1, rotate: item.rotation }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square max-w-[320px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={`Exploration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-20 pt-40">
              {explorations.slice(3).map((item, index) => (
                <motion.div
                  key={`right-${index}`}
                  initial={{ opacity: 0, rotate: item.rotation }}
                  whileInView={{ opacity: 1, rotate: item.rotation }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square max-w-[320px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={`Exploration ${index + 4}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
