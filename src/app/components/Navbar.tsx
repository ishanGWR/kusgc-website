"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthUser, KUSGCUser } from "@/app/utils/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<KUSGCUser | null>(null);

  useEffect(() => {
    setUser(getAuthUser());
    // Listen for custom auth events or storage changes
    const checkUser = () => setUser(getAuthUser());
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Council", href: "/council" },
    { name: "Committees", href: "/departments" },
    { name: "Events", href: "/events" },
    { name: "Grievance", href: "/grievance" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      {/* 1. The Header Bar */}
      <header className="fixed top-0 left-0 w-full z-[9999] h-20 bg-black/60 backdrop-blur-lg border-b border-white/10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-[10001]">
            <img src="/logo.png" alt="KUSGC Logo" loading="eager" decoding="async" className="h-14 sm:h-16 md:h-[74px] w-auto object-contain invert drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <Link href="/login" className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{user.enrollment}</span>
              </Link>
            ) : (
              <Link href="/login" className="text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors">
                Login
              </Link>
            )}

            <Link href="/join" className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase hover:bg-cyan-400 transition-colors shadow-md">Join Us</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden z-[10001] px-3 py-2 text-white border border-white/20 rounded-xl bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest uppercase active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* 2. The Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9990] bg-black/95 backdrop-blur-2xl overflow-y-auto pt-28 pb-12 px-6 flex flex-col items-center justify-center gap-6 sm:gap-8 min-h-screen">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-mono text-cyan-400 border border-cyan-500/30 px-6 py-2.5 rounded-full bg-cyan-950/40"
            >
              🟢 ID: {user.enrollment}
            </Link>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-cyan-400 uppercase tracking-widest"
            >
              Student Login
            </Link>
          )}

          <Link 
            href="/join" 
            onClick={() => setIsOpen(false)}
            className="mt-2 px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-black uppercase rounded-full tracking-wider shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-95 transition-transform"
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
}

