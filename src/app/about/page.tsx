"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

// Leadership Data (2026-27)
const topLeadership = [
  {
    name: "Mr. Ritesh Hada",
    role: "Chief Patron",
    title: "President, Karnavati University",
    image: "/council/riteshsir.jpg", 
    gradient: "from-amber-400 to-yellow-600",
    glow: "rgba(251, 191, 36, 0.4)",
  },
  {
    name: "Dr. Tariq Ali Saiyed",
    role: "Patron",
    title: "Registrar, Karnavati University",
    image: "/council/tariqsir.jpg", 
    gradient: "from-blue-400 to-cyan-600",
    glow: "rgba(56, 189, 248, 0.4)",
  }
];

const advisors = [
  {
    name: "Mr. Shivendra Shrivastava",
    role: "Faculty Advisor",
    title: "KUSGC",
    image: "", 
    gradient: "from-purple-500 to-indigo-600",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  {
    name: "Mr. Karan Kalia",
    role: "Faculty Advisor",
    title: "KUSGC",
    image: "", 
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "rgba(236, 72, 153, 0.4)",
  },
  {
    name: "Mr. Param Lodaya",
    role: "Chief Advisor",
    title: "KUSGC",
    image: "", 
    gradient: "from-emerald-400 to-teal-600",
    glow: "rgba(52, 211, 153, 0.4)",
  }
];

// Reusable Profile Card Component
const ProfileCard = ({ person, isLarge = false }: { person: any, isLarge?: boolean }) => (
  <div 
    className="group relative flex flex-col rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
    style={{ boxShadow: `0 0 0px ${person.glow}` }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 40px ${person.glow}`}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${person.glow}`}
  >
    {/* Photo Area */}
    <div className={`relative w-full ${isLarge ? 'h-72' : 'h-64'} bg-gradient-to-br ${person.gradient} overflow-hidden flex items-center justify-center`}>
      {person.image ? (
        <img 
          src={person.image} 
          alt={person.name} 
          /* FIXED: Removed opacity, mix-blend, and grayscale classes so the photo shows in its original colors */
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
          {/* Avatar Placeholder */}
          <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </>
      )}
      
      {/* Role Badge */}
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-lg text-center transform transition-transform duration-500 group-hover:scale-105 z-10">
        <span className={`block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${person.gradient} font-bold whitespace-nowrap`}>
          {person.role}
        </span>
      </div>
    </div>

    {/* Text Info */}
    <div className="p-8 flex flex-col flex-grow relative z-10 text-center bg-gradient-to-b from-black/40 to-black/80">
      <h3 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-black text-white mb-2 tracking-tight`}>
        {person.name}
      </h3>
      <p className="text-zinc-400 text-sm font-semibold tracking-widest uppercase">
        {person.title}
      </p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black text-white overflow-hidden pb-32">
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <AnimatedOrb />
        </div>

        {/* Page Header */}
        <section className="relative z-10 pt-40 pb-12 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Our Identity
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg text-white tracking-tighter">
            About the
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Council
            </span>
          </h1>
        </section>

        {/* 1. About KUSGC Statement */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 mb-32">
          <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-black/80 backdrop-blur-2xl rounded-[23px] p-8 md:p-16 border border-white/5 shadow-2xl">
              
              {/* Decorative Quotes */}
              <div className="absolute top-8 left-8 text-white/5 text-8xl font-serif select-none pointer-events-none">"</div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
                  Empowering Students, Engineering Experiences.
                </h2>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    The <span className="text-cyan-300 font-semibold">Karnavati University Student Governing Council (KUSGC)</span> is the apex student body dedicated to fostering leadership, innovation, and unity across the campus. We act as the vital bridge between the student community and the university administration, ensuring that every voice is heard and every idea has the potential to become reality.
                  </p>
                  <p>
                    Composed of passionate leaders from diverse departments, KUSGC is the driving force behind the university's most iconic flagship events, cultural festivals, tech summits, and social initiatives. Beyond organizing events, KUSGC is committed to creating opportunities that empower students to grow personally and professionally. Through collaboration, advocacy, and community engagement, we strive to cultivate an inclusive campus culture where creativity thrives, leadership is nurtured, and meaningful connections are built. As the voice of the student community, we continue to inspire positive change and contribute to shaping a vibrant, dynamic, and future-ready university experience for all.
                  </p>
                  <p className="text-white/80 font-medium italic border-l-4 border-purple-500 pl-4 mt-8">
                    "We do not just host events; we shape the culture, push boundaries, and leave a legacy that outlasts our time on campus."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Leadership Board (2026-27) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">The Visionaries</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Top Row: Patrons (Centered, 2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {topLeadership.map((person, index) => (
              <ProfileCard key={index} person={person} isLarge={true} />
            ))}
          </div>

          {/* Bottom Row: Advisors (Centered, 3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisors.map((person, index) => (
              <ProfileCard key={index} person={person} />
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