"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Council", href: "/council" },
    { name: "Departments", href: "/departments" },
    { name: "Events", href: "/events" },
    { name: "Grievance", href: "/grievance" },
  ];

  return (
    <>
      {/* 1. The Header Bar */}
      <header className="fixed top-0 left-0 w-full z-[9999] h-20 bg-black/60 backdrop-blur-lg border-b border-white/10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-[10001]">
            <div className="w-20 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center font-black text-black">KUSGC</div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/join" className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase">Join Us</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden z-[10001] p-2 text-white border border-white/20 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* 2. The Mobile Overlay (Simplified for testing) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9990] bg-black flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/join" 
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 bg-white text-black font-bold uppercase"
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
}

