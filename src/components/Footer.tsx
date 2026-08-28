import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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
  }, []);

  useEffect(() => {
    const gsap = require('gsap');

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/share/1CtKbFbs4C/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alfaz-nawaz-012961237/" },
    { name: "GitHub", url: "https://github.com/alfaznawaz2016-hub" },
  ];

  return (
    <footer className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background Video (flipped) */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-y-[-1]"
        />
        {/* Heavier overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array(10).fill("BUILDING THE FUTURE • ").map((text, index) => (
              <span key={index} className="text-4xl md:text-6xl font-display italic text-text-primary/20 mx-4">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:alfaz.nawaz.khan@outlook.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-text-primary text-bg text-lg hover:bg-bg hover:text-text-primary transition-colors relative group accent-gradient-border-hover"
          >
            alfaz.nawaz.khan@outlook.com
            <span>↗</span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm text-muted">Available for projects</span>
            </div>

            {/* Copyright */}
            <div className="text-xs text-muted">
              © 2024 Alfaz Nawaz. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
