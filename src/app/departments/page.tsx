"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

const departments = [
  {
    name: "Tech",
    description: "Building the digital infrastructure, managing web platforms, and driving technological innovation across the campus.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
  },
  {
    name: "Operation",
    description: "The backbone of the council. Handling logistics, event execution, and ensuring seamless day-to-day management.",
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  },
  {
    name: "Cultural",
    description: "Curating unforgettable experiences, from massive annual fests to intimate celebrations of art, music, and dance.",
    color: "from-fuchsia-500 to-pink-500",
    glow: "rgba(236,72,153,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  },
  {
    name: "Creatives",
    description: "The visionary artists designing UI/UX, crafting posters, and maintaining the stunning visual identity of the council.",
    color: "from-purple-500 to-indigo-500",
    glow: "rgba(168,85,247,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  },
  {
    name: "Alumni",
    description: "Bridging the gap between past and present. Fostering lifelong networks and bringing industry insights back to campus.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  },
  {
    name: "Nazariya",
    description: "Capturing the perspective. The official photography and videography team documenting every core memory of university life.",
    color: "from-teal-400 to-emerald-500",
    glow: "rgba(16,185,129,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  },
  {
    name: "Digital Outreach",
    description: "Amplifying our voice. Managing social media, digital campaigns, and ensuring the council's message reaches everyone.",
    color: "from-blue-400 to-cyan-400",
    glow: "rgba(56,189,248,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  },
  {
    name: "Academics",
    description: "Supporting educational excellence. Organizing workshops, guest lectures, and student mentorship programs.",
    color: "from-indigo-400 to-purple-500",
    glow: "rgba(129,140,248,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  },
  {
    name: "Sports",
    description: "Fueling the competitive spirit. Organizing tournaments, managing athletic teams, and promoting fitness on campus.",
    color: "from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    name: "Communication",
    description: "The voice of the council. Handling PR, internal communications, newsletters, and official student broadcasts.",
    color: "from-pink-400 to-rose-500",
    glow: "rgba(244,63,94,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  },
  {
    name: "Heal the World",
    description: "HTWF drives social responsibility. Leading community service, environmental initiatives, and charitable campaigns.",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  },
  {
    name: "Radio",
    description: "Tuning into the student frequency. Running campus podcasts, live broadcasts, and audio entertainment.",
    color: "from-red-400 to-pink-500",
    glow: "rgba(239,68,68,0.4)",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  }
];

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black text-white overflow-hidden pb-32">
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedOrb />
        </div>

        {/* Page Header */}
        <section className="relative z-10 pt-40 pb-16 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Our Core Pillars
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white">
            Council
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Committees
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Discover the specialized teams working behind the scenes to engineer incredible experiences, drive innovation, and elevate campus life.
          </p>
        </section>

        {/* Departments Grid */}
        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                style={{ boxShadow: `0 0 0px ${dept.glow}` }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 40px ${dept.glow}`}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${dept.glow}`}
              >
                
                {/* Dynamic Neon Top Accent Line */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${dept.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} p-[2px] mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                      {dept.icon}
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                  {dept.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>

                {/* Interactive 'Learn More' trigger */}
                <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r ${dept.color} opacity-70 group-hover:opacity-100`}>
                  Explore Team
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </>
  );
}