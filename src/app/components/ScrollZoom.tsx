"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const scrollDistance = -top;
      const maxScroll = height - windowHeight;
      let progress = scrollDistance / maxScroll;
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to scale (starts at 1, zooms up to 30 to cover screen)
      const newScale = 1 + progress * 29; 
      setScale(newScale);

      // Fade out the content inside the box as it gets huge
      const newOpacity = 1 - progress * 2;
      setOpacity(Math.max(0, newOpacity));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The container is 300vh tall to give the user plenty of room to scroll
    <section ref={containerRef} className="relative h-[300vh] bg-black border-y border-white/5">
      
      {/* Sticky container that stays on screen while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Optional Title above the zoom */}
        <div className="absolute top-20 z-10 text-center pointer-events-none transition-opacity duration-300" style={{ opacity }}>
          <h2 className="text-3xl font-bold text-white tracking-widest uppercase">
            Experience KUSGC
          </h2>
          <p className="text-zinc-500 mt-2">Keep scrolling</p>
        </div>

        {/* The zooming element */}
        <div
          style={{ transform: `scale(${scale})` }}
          className="relative flex items-center justify-center w-[300px] h-[200px] md:w-[500px] md:h-[300px] rounded-3xl bg-gradient-to-br from-cyan-950/40 via-black to-purple-950/40 border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)] will-change-transform ease-out"
        >
          {/* Inner content that fades out as it zooms */}
          <div style={{ opacity }} className="absolute inset-0 flex items-center justify-center flex-col">
             {/* You can replace this div with an actual <img src="..." /> later */}
             <div className="w-16 h-16 rounded-full bg-cyan-500/20 animate-pulse flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <div className="w-4 h-4 bg-cyan-400 rounded-full" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}