"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

// GALLERY DATA (Removed categories, added 8 items for perfect 4-column rows)
const galleryData = [
  { id: 1, src: "/event gallery/Fresher.jpg", title: "Fresher 2k24" },
  { id: 2, src: "/event gallery/Holi.jpg", title: "Holi Celebration" },
  { id: 3, src: "/event gallery/3.jpg", title: "Inter-College Finals" },
  { id: 4, src: "/event gallery/4.jpg", title: "EDM Night" },
  { id: 5, src: "/event gallery/5.jpg", title: "Stage Setup" },
  { id: 6, src: "/event gallery/6.jpg", title: "Robotics Workshop" },
  { id: 7, src: "/event gallery/7.jpg", title: "Trophy Ceremony" },
  { id: 8, src: "/event gallery/8.jpg", title: "Fashion Show" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);

  // Lock scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#05050A] text-white overflow-hidden pb-32">
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <AnimatedOrb />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Header Section */}
        <section className="relative z-10 pt-40 pb-12 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            OUR LEGACY IN PIXELS
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
            Event
          </h1>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-4">
            Gallery
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Relive the most unforgettable nights, intense competitions, and behind-the-scenes moments that define the KUSGC experience.
          </p>
        </section>

        {/* --- MAIN GALLERY SECTION --- */}
        <section className="relative z-10 max-w-[1600px] mx-auto px-6">
          
          {/* 1. THE BIG POSTER CARD */}
          <div className="group relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 mb-6 cursor-pointer shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:border-cyan-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img 
              src="/event gallery/Fresherx.jpg" 
              alt="Council 2K24 - 2K25" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523580494112-071dcb849ae4?q=80&w=2000&auto=format&fit=crop"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <p className="text-cyan-400 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-2 drop-shadow-md">
                The Legacy
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">
                Council 2K24 - 2K25
              </h2>
            </div>
          </div>

          {/* 2. STRICT 4-COLUMN GRID FOR PHOTOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryData.map((img) => (
              <div 
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(34,211,238,0.2)] hover:border-cyan-500/50"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <div className="relative z-10 bg-[#05050A]">
        <Footer />
      </div>

      {/* --- FULLSCREEN LIGHTBOX POPUP --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:rotate-90 transition-all duration-300 z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop";
              }}
            />
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-black text-white">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}