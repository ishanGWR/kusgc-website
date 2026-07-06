"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";
import { getAuthUser, getCooldownStatus, recordSubmission, KUSGCUser } from "@/app/utils/auth";

export default function JoinUsPage() {
  const [user, setUser] = useState<KUSGCUser | null>(null);
  const [cooldown, setCooldown] = useState<{ canSubmit: boolean; daysRemaining: number; hoursRemaining: number } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const u = getAuthUser();
    setUser(u);
    if (u) {
      setCooldown(getCooldownStatus("join", u.enrollment));
    }
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        if (user) {
          recordSubmission("join", user.enrollment);
          setCooldown(getCooldownStatus("join", user.enrollment));
        }
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to submit application. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black text-white overflow-hidden pb-32">
        <div className="fixed inset-0 z-0 opacity-70">
          <AnimatedOrb />
        </div>

        <section className="relative z-10 pt-40 pb-16 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Recruitment 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white">
            Shape the
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Future
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Become a part of the Student Governing Council. Build your network, develop real-world leadership skills, and engineer experiences that define university life.
          </p>
        </section>

        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Perks */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 mt-8">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">Why Join KUSGC?</h2>
              
              <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-World Impact</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Don't just attend events—create them. From massive hackathons to cultural fests, you will directly shape the campus experience.</p>
              </div>

              <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/50">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Elite Networking</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">Work alongside top students across all departments, connect with university leadership, and build relationships with industry professionals.</p>
              </div>
            </div>

            {/* Right Column: Secure Form */}
            <div className="w-full lg:w-7/12">
              <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Application Form</h2>

                {!isLoaded ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center relative z-10">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest">Checking Authentication Status...</p>
                  </div>
                ) : !user ? (
                  /* LOGIN GATE CARD */
                  <div className="py-10 px-4 text-center flex flex-col items-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Student Login Required</h3>
                    <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
                      To ensure authentic candidate profiles and maintain fair evaluation, recruitment applications require KUSGC Student Authentication. Verified students can apply once every 2 weeks.
                    </p>
                    <Link href="/login?redirect=/join" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
                        Login with Student ID &rarr;
                      </button>
                    </Link>
                  </div>
                ) : cooldown && !cooldown.canSubmit ? (
                  /* COOLDOWN CARD */
                  <div className="py-10 px-4 text-center flex flex-col items-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Application Cooldown Active</h3>
                    <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
                      You have already submitted an application to KUSGC recently. To ensure quality candidate review and prevent duplicate submissions, students may apply once every 14 days.
                    </p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8 inline-block">
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Next Application Available In</p>
                      <p className="text-xl font-black text-purple-400 font-mono">
                        {cooldown.daysRemaining} Days, {cooldown.hoursRemaining} Hours
                      </p>
                    </div>

                    <Link href="/login">
                      <button className="text-xs text-zinc-500 hover:text-white uppercase tracking-widest font-bold underline transition-colors cursor-pointer">
                        Switch Student ID &rarr;
                      </button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                    {/* Authenticated Banner */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        <div>
                          <span className="text-zinc-400 font-medium">Verified Applicant: </span>
                          <strong className="text-white">{user.name}</strong>
                          <span className="text-zinc-500 font-mono ml-1">({user.enrollment})</span>
                        </div>
                      </div>
                      <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest text-[10px] underline shrink-0">
                        Switch ID
                      </Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Full Name <span className="text-cyan-400">(Verified)</span>
                        </label>
                        <input type="text" id="name" name="name" defaultValue={user.name} readOnly className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-300 outline-none cursor-not-allowed font-medium" />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="enrollment" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Enrollment No. <span className="text-cyan-400">(Verified)</span>
                        </label>
                        <input type="text" id="enrollment" name="enrollment" defaultValue={user.enrollment} readOnly className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-300 outline-none cursor-not-allowed font-mono uppercase font-bold" />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Email Address <span className="text-cyan-400">(Verified)</span>
                        </label>
                        <input type="email" id="email" name="email" defaultValue={user.email} readOnly className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-300 outline-none cursor-not-allowed font-medium" />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number <span className="text-purple-400">*</span></label>
                        <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-500/50" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="department" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Target Department <span className="text-cyan-400">*</span></label>
                      <select id="department" name="department" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-500/50">
                        <option value="" disabled className="bg-zinc-900 text-zinc-400">Select your preferred team...</option>
                        <option value="Tech" className="bg-zinc-900">Tech</option>
                        <option value="Operation" className="bg-zinc-900">Operation</option>
                        <option value="Cultural" className="bg-zinc-900">Cultural</option>
                        <option value="Creatives" className="bg-zinc-900">Creatives</option>
                        <option value="Digital Outreach" className="bg-zinc-900">Digital Outreach</option>
                        <option value="Nazariya (Media)" className="bg-zinc-900">Nazariya (Media)</option>
                        <option value="Communication" className="bg-zinc-900">Communication</option>
                        <option value="Sports" className="bg-zinc-900">Sports</option>
                        <option value="Academics" className="bg-zinc-900">Academics</option>
                        <option value="Alumni" className="bg-zinc-900">Alumni</option>
                        <option value="Heal The World Foundation" className="bg-zinc-900">Heal The World Foundation</option>
                        <option value="Radio" className="bg-zinc-900">Radio</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="pitch" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Why do you want to join this team? <span className="text-purple-400">*</span></label>
                      <textarea id="pitch" name="pitch" required rows={4} placeholder="Tell us about your skills and vision..." className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-500/50"></textarea>
                    </div>

                    {error && <p className="text-red-400 text-sm font-bold">{error}</p>}

                    <button type="submit" disabled={isSubmitting || isSubmitted} className={`mt-4 w-full rounded-xl px-8 py-5 font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${isSubmitted ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]" : "bg-white text-black hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"}`}>
                      {isSubmitting ? "Submitting Application..." : isSubmitted ? "Application Received!" : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </>
  );
}