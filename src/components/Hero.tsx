import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const roles = ["Data Analyst", "Python Developer", "BI Specialist", "Student"];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = React.useState(0);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoSrc = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
    const video = videoRef.current;

    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      // Cleanup handled by React unmount
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      const tl = gsap.timeline({ ease: "power3.out" });

      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.1,
      })
      .to(eyebrowRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
      }, "-=0.8");

      // Set initial states
      if (nameRef.current) {
        gsap.set(nameRef.current, { opacity: 0, y: 50 });
      }
      if (eyebrowRef.current) {
        gsap.set(eyebrowRef.current, { opacity: 0, filter: "blur(10px)", y: 20 });
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Eyebrow */}
        <motion.div
          ref={eyebrowRef}
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8 blur-in"
        >
          COLLECTION '26
        </motion.div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 name-reveal"
        >
          Alfaz Nawaz
        </h1>

        {/* Role line */}
        <div className="text-lg md:text-xl text-muted mb-6">
          A{' '}
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </motion.span>{' '}
          based in Bangladesh
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Aspiring Diploma Graduate with a focus on real-world data projects and
          vibecoded web applications. Designing seamless digital interactions by
          focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('Work')}
            className="rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-colors relative group accent-gradient-border-hover"
          >
            See Works
          </motion.button>
          <motion.a
            href="mailto:alfaz.nawaz.khan@outlook.com"
            whileHover={{ scale: 1.05 }}
            className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-colors relative group accent-gradient-border-hover"
          >
            Reach out...
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">SCROLL</div>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
