"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

export default function GrievancePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // This line is CRUCIAL: It stops the default "GET" request you saw in the terminal
    e.preventDefault(); 
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to our secure, private Next.js API
      const response = await fetch("/api/grievance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Secure transmission failed. Please try again.");
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
        {/* Dynamic Background */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50">
          <AnimatedOrb />
        </div>

        {/* Page Header */}
        <section className="relative z-10 pt-40 pb-12 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span className="text-xs font-bold uppercase tracking-widest">Strictly Confidential</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg text-white tracking-tighter">
            Grievance
            <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]">
              Redressal
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Your voice matters. If you are facing any issues regarding academics, infrastructure, or campus life, let us know. Submissions are sent directly to the council's official inbox.
          </p>
        </section>

        {/* Grievance Form Section */}
        <section className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* THE FORM TAG: Notice the onSubmit handler here! */}
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Full Name <span className="text-zinc-600">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-white/10"
                  />
                </div>
                
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="enrollment" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Enrollment No. <span className="text-zinc-600">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="enrollment" 
                    name="enrollment_number"
                    placeholder="e.g., KU2026123"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder="Where should we send updates?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Issue Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    id="category" 
                    name="grievance_category"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-white/10"
                  >
                    <option value="" disabled className="bg-zinc-900 text-zinc-400">Select the type of issue...</option>
                    <option value="Academics & Faculty" className="bg-zinc-900 text-white">Academics & Faculty</option>
                    <option value="Infrastructure & Facilities" className="bg-zinc-900 text-white">Infrastructure & Facilities</option>
                    <option value="Hostel & Mess" className="bg-zinc-900 text-white">Hostel & Mess</option>
                    <option value="Disciplinary Issue" className="bg-zinc-900 text-white">Disciplinary Issue</option>
                    <option value="Events & Council" className="bg-zinc-900 text-white">Events & Council</option>
                    <option value="Other" className="bg-zinc-900 text-white">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-zinc-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Detailed Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  placeholder="Please describe the issue in detail..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-white/10"
                ></textarea>
              </div>

              {error && <p className="text-red-400 text-sm font-bold">{error}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`mt-2 relative w-full overflow-hidden rounded-xl px-8 py-5 font-bold tracking-widest uppercase transition-all duration-300 ${
                  isSubmitted 
                    ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]" 
                    : "bg-white text-black hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                       <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       Sending Report...
                    </>
                  ) : isSubmitted ? (
                    <>
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                       Grievance Submitted Securely
                    </>
                  ) : (
                    "Submit Grievance"
                  )}
                </span>
                {!isSubmitted && !isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 transition-opacity duration-300 hover:opacity-100 mix-blend-multiply"></div>
                )}
              </button>
            </form>
          </div>
        </section>

      </main>

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </>
  );
}