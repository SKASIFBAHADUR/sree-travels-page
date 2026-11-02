'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax on hero background
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      if (window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px) scale(1.08)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero" id="home">
      <div
        className="bg"
        data-p="0.15"
        ref={bgRef}
        role="img"
        aria-label="Sree Travel Deals artwork of Dubai, Thailand, Singapore and Malaysia"
      />

      <div className="wrap">
        {/* Text column */}
        <div>
          <span className="tag r">Dubai · Thailand · Singapore · Malaysia</span>
          <h1 className="r" style={{ '--d': '.1s' } as React.CSSProperties}>
            We frame your <em>memories</em> across the world.
          </h1>
          <p className="r" style={{ '--d': '.2s' } as React.CSSProperties}>
            From the glow of Downtown Dubai at night to desert sunsets and skyline selfies —
            Sree Travel Deals turns your family holiday into a story worth retelling.
          </p>
          <div className="cta r" style={{ '--d': '.3s' } as React.CSSProperties}>
            <a className="btn o" href="#destinations">
              Explore Destinations{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a className="btn gh" href="#contact">Plan Your Journey</a>
          </div>
        </div>

        {/* Phone mockup column */}
        <div style={{ position: 'relative', justifySelf: 'center' }}>
          <div className="phone r">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/images/p2.webp"
              aria-label="Welcome to Dubai – night walk in Downtown Dubai"
            >
              <source src="/assets/videos/v2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="chip" style={{ left: '-30px', top: '14%' }}>
            ✈️ <b>Dubai</b> 2026
          </div>
          <div className="chip" style={{ right: '-20px', bottom: '12%', animationDelay: '1s' }}>
            📞 <b>+91 85199 69749</b>
          </div>
        </div>
      </div>

      <div className="scroll" aria-hidden="true" />
      <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path fill="#F8F7F2" d="M0 40C240 80 480 0 720 30s480 50 720 0V70H0z" />
      </svg>
    </header>
  );
}

