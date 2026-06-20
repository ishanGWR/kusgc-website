"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// THE COMPLETE DATA FOR ALL 12 TEAMS
const committeesData = [
  {
    id: "tech",
    name: "Tech",
    description: "Building the digital infrastructure, managing web platforms, and driving technological innovation across the campus.",
    themeColor: "text-cyan-400",
    borderColor: "border-cyan-400",
    shadowColor: "shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    glow: "rgba(34, 211, 238, 0.5)", // Added Glow Color
    heads: [{ name: "John Doe", role: "Technical Director", image: "" }],
    members: [{ name: "Alex Kumar", role: "Full Stack Developer", image: "" }, { name: "Sarah Connor", role: "UI/UX Designer", image: "" }, { name: "Mike Ross", role: "Security Analyst", image: "" }]
  },
  {
    id: "operation",
    name: "Operation",
    description: "The backbone of the council. Handling logistics, event execution, and ensuring seamless day-to-day management.",
    themeColor: "text-indigo-400",
    borderColor: "border-indigo-400",
    shadowColor: "shadow-[0_0_15px_rgba(129,140,248,0.4)]",
    glow: "rgba(129, 140, 248, 0.5)",
    heads: [{ name: "Vikram Singh", role: "Head of Operations", image: "" }],
    members: [{ name: "Rohan Gupta", role: "Logistics Coordinator", image: "" }, { name: "Neha Verma", role: "Resource Manager", image: "" }]
  },
  {
    id: "cultural",
    name: "Cultural",
    description: "Curating unforgettable experiences, from massive annual fests to intimate celebrations of art, music, and dance.",
    themeColor: "text-purple-400",
    borderColor: "border-purple-400",
    shadowColor: "shadow-[0_0_15px_rgba(192,132,252,0.4)]",
    glow: "rgba(192, 132, 252, 0.5)",
    heads: [{ name: "Priya Patel", role: "Cultural Secretary", image: "" }],
    members: [{ name: "Rahul Sharma", role: "Event Manager", image: "" }, { name: "Anita Desai", role: "Stage Director", image: "" }]
  },
  {
    id: "creatives",
    name: "Creatives",
    description: "The visionary artists designing UI/UX, crafting posters, and maintaining the stunning visual identity of the council.",
    themeColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-400",
    shadowColor: "shadow-[0_0_15px_rgba(232,121,249,0.4)]",
    glow: "rgba(232, 121, 249, 0.5)",
    heads: [{ name: "Aisha Khan", role: "Creative Director", image: "" }],
    members: [{ name: "Kabir Das", role: "Video Editor", image: "" }, { name: "Zoya Ali", role: "Graphic Designer", image: "" }]
  },
  {
    id: "outreach",
    name: "Digital Outreach",
    description: "Amplifying our voice. Managing social media, PR campaigns, and connecting the council with the entire student body online.",
    themeColor: "text-blue-400",
    borderColor: "border-blue-400",
    shadowColor: "shadow-[0_0_15px_rgba(96,165,250,0.4)]",
    glow: "rgba(96, 165, 250, 0.5)",
    heads: [{ name: "Ananya Panday", role: "PR Head", image: "" }],
    members: [{ name: "Ishaan Khatter", role: "Social Media Manager", image: "" }, { name: "Tara Sutaria", role: "Content Writer", image: "" }]
  },
  {
    id: "nazariya",
    name: "Nazariya",
    description: "The official lens of the university. Capturing every core memory, conducting interviews, and documenting the KUSGC legacy.",
    themeColor: "text-rose-400",
    borderColor: "border-rose-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,113,133,0.4)]",
    glow: "rgba(251, 113, 133, 0.5)",
    heads: [{ name: "Media Head", role: "Director of Photography", image: "" }],
    members: [{ name: "Member 1", role: "Photographer", image: "" }, { name: "Member 2", role: "Videographer", image: "" }]
  },
  {
    id: "communication",
    name: "Communication",
    description: "The voice of the council. Drafting official statements, managing emails, and ensuring clear dialogue between students and faculty.",
    themeColor: "text-sky-400",
    borderColor: "border-sky-400",
    shadowColor: "shadow-[0_0_15px_rgba(56,189,248,0.4)]",
    glow: "rgba(56, 189, 248, 0.5)",
    heads: [{ name: "Comm Head", role: "Communications Director", image: "" }],
    members: [{ name: "Member 1", role: "Writer", image: "" }, { name: "Member 2", role: "Spokesperson", image: "" }]
  },
  {
    id: "sports",
    name: "Sports",
    description: "Fostering athleticism and team spirit. Organizing tournaments, leagues, and maintaining the competitive edge of KU.",
    themeColor: "text-orange-400",
    borderColor: "border-orange-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,146,60,0.4)]",
    glow: "rgba(251, 146, 60, 0.5)",
    heads: [{ name: "Arjun Reddy", role: "Sports Captain", image: "" }],
    members: [{ name: "Karan Johar", role: "League Manager", image: "" }, { name: "Simran Kaur", role: "Athletics Coordinator", image: "" }]
  },
  {
    id: "academics",
    name: "Academics",
    description: "Bridging the gap between students and curriculum. Organizing educational seminars, study groups, and academic grievances.",
    themeColor: "text-emerald-400",
    borderColor: "border-emerald-400",
    shadowColor: "shadow-[0_0_15px_rgba(52,211,153,0.4)]",
    glow: "rgba(52, 211, 153, 0.5)",
    heads: [{ name: "Academic Head", role: "Director of Education", image: "" }],
    members: [{ name: "Member 1", role: "Seminar Coordinator", image: "" }, { name: "Member 2", role: "Student Liaison", image: "" }]
  },
  {
    id: "alumni",
    name: "Alumni",
    description: "Building lifelong connections. Maintaining the alumni network and organizing mentorship programs with graduated students.",
    themeColor: "text-teal-400",
    borderColor: "border-teal-400",
    shadowColor: "shadow-[0_0_15px_rgba(45,212,191,0.4)]",
    glow: "rgba(45, 212, 191, 0.5)",
    heads: [{ name: "Alumni Head", role: "Network Director", image: "" }],
    members: [{ name: "Member 1", role: "Event Coordinator", image: "" }, { name: "Member 2", role: "Database Manager", image: "" }]
  },
  {
    id: "heal-the-world",
    name: "Heal The World",
    description: "Our dedicated foundation for social impact. Driving charity drives, environmental campaigns, and community service.",
    themeColor: "text-green-400",
    borderColor: "border-green-400",
    shadowColor: "shadow-[0_0_15px_rgba(74,222,128,0.4)]",
    glow: "rgba(74, 222, 128, 0.5)",
    heads: [{ name: "Foundation Head", role: "Charity Director", image: "" }],
    members: [{ name: "Member 1", role: "Volunteer Lead", image: "" }, { name: "Member 2", role: "Campaign Organizer", image: "" }]
  },
  {
    id: "radio",
    name: "Radio",
    description: "The sound of the campus. Running podcasts, live broadcasts, and audio entertainment for the university community.",
    themeColor: "text-pink-400",
    borderColor: "border-pink-400",
    shadowColor: "shadow-[0_0_15px_rgba(244,114,182,0.4)]",
    glow: "rgba(244, 114, 182, 0.5)",
    heads: [{ name: "Radio Head", role: "Station Manager", image: "" }],
    members: [{ name: "Member 1", role: "Radio Jockey", image: "" }, { name: "Member 2", role: "Audio Producer", image: "" }]
  }
];

export default function DepartmentsPage() {
  const [activeTeam, setActiveTeam] = useState<typeof committeesData[0] | null>(null);

  useEffect(() => {
    if (activeTeam) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeTeam]);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#05050A] text-white overflow-hidden pb-32">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute top-60 -right-32 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <section className="relative z-10 pt-40 pb-16 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            OUR CORE PILLARS
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
            Council
          </h1>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-4">
            Committees
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Discover the specialized teams working behind the scenes to engineer incredible experiences, drive innovation, and elevate campus life.
          </p>
        </section>

        <section className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeesData.map((team) => {
              return (
                <div 
                  key={team.id}
                  onClick={() => setActiveTeam(team)}
                  /* UPGRADED: Added dynamic inline styles for the glowing hover effect */
                  className="group flex flex-col rounded-2xl bg-[#0F0F16]/80 backdrop-blur-md border border-white/5 p-8 h-[360px] transition-all duration-500 hover:bg-[#151520] cursor-pointer relative z-20 hover:-translate-y-2"
                  style={{ 
                    boxShadow: `0 0 15px ${team.glow.replace('0.5', '0.08')}` // Subtle constant glow
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 15px 50px ${team.glow}`; // Massive glow on hover
                    e.currentTarget.style.borderColor = team.glow.replace('0.5', '0.4'); // Light up the border
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${team.glow.replace('0.5', '0.08')}`; // Return to normal
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <div className={`w-12 h-12 rounded-[14px] bg-black border-2 ${team.borderColor} flex-shrink-0 ${team.shadowColor} mb-8`}></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{team.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow pr-4">{team.description}</p>
                  <div className={`mt-4 w-fit flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${team.themeColor} group-hover:opacity-70 transition-opacity`}>
                    EXPLORE TEAM <span className="text-lg leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <div className="relative z-10 bg-[#05050A]">
        <Footer />
      </div>

      {activeTeam !== null && (
        <div className="fixed inset-0 z-[99999] bg-[#05050A] text-white overflow-y-auto">
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col">
            <button 
              onClick={() => setActiveTeam(null)}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors w-fit mb-12 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Back to Committees</span>
            </button>

            <div className="mb-16">
              <div className={`w-16 h-16 rounded-[18px] bg-black border-2 ${activeTeam.borderColor} ${activeTeam.shadowColor} mb-6`}></div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                {activeTeam.name} Team
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl">{activeTeam.description}</p>
            </div>

            <div className="mb-16">
              <h3 className={`text-sm font-bold uppercase tracking-[0.3em] ${activeTeam.themeColor} mb-8 border-b border-white/10 pb-4`}>
                Team Leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {activeTeam.heads.map((head, idx) => {
                  return (
                    <div key={idx} className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0F0F16]/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
                      <div className="relative w-full h-64 bg-zinc-900 overflow-hidden flex items-center justify-center">
                        {head.image ? (
                          <img src={head.image} alt={head.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                        )}
                        {!head.image && <span className="text-6xl font-black text-zinc-700 z-10">{head.name.charAt(0)}</span>}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F16] via-[#0F0F16]/20 to-transparent"></div>
                      </div>
                      <div className="p-6 relative z-10 flex flex-col items-center text-center -mt-6">
                        <h4 className="text-xl font-black text-white mb-1 tracking-tight">{head.name}</h4>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${activeTeam.themeColor}`}>{head.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {activeTeam.members && activeTeam.members.length > 0 && (
              <div className="mb-12 flex-grow">
                <h3 className={`text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 border-b border-white/10 pb-4`}>
                  Core Members
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {activeTeam.members.map((member, idx) => {
                    return (
                      <div key={idx} className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0F0F16]/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-[#0F0F16]/80">
                        <div className="relative w-full h-56 bg-zinc-900 overflow-hidden flex items-center justify-center">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                          ) : (
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                          )}
                          {!member.image && <span className="text-5xl font-black text-zinc-700 z-10">{member.name.charAt(0)}</span>}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F16] via-[#0F0F16]/40 to-transparent"></div>
                        </div>
                        <div className="p-6 relative z-10 flex flex-col items-center text-center -mt-6">
                          <h4 className="text-lg font-bold text-white mb-1 tracking-tight">{member.name}</h4>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{member.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}