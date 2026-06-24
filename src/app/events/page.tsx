"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

// 1. Featured Flagship Event
const featuredEvent = {
  title: "Viaje 2027",
  status: "The Ultimate Fest",
  duration: "Multi-Day Campus Festival",
  location: "Main University Grounds",
  category: "Annual Fest",
  description: "Our legendary annual festival. A multi-day explosion of art, competitive gaming, music, and campus-wide chaos. Prepare for the biggest event of the year.",
  image: "https://images.unsplash.com/photo-1540039155732-d6824b5ce01d?auto=format&fit=crop&q=80&w=2000", 
  gradient: "from-purple-600 via-indigo-600 to-blue-800",
  glow: "rgba(124, 58, 237, 0.5)",
};

// 2. The Inductions
const inductions = [
  { title: "UID Induction", status: "Welcome", category: "Design", description: "The official welcome for the Unitedworld Institute of Design freshers.", image: "/events/Uid.jpg", gradient: "from-rose-400 to-pink-500", glow: "rgba(244, 63, 94, 0.4)" },
  { title: "UWSL Induction", status: "Welcome", category: "Law", description: "The official welcome for the Unitedworld School of Law freshers.", image: "/events/Uwsl.jpg", gradient: "from-blue-400 to-indigo-500", glow: "rgba(59, 130, 246, 0.4)" },
  { title: "UIM (BBA and MBA) Induction", status: "Welcome", category: "Management", description: "The official welcome for the Unitedworld Institute of Management BBA and MBA freshers.", image: "/events/Uim.jpg", gradient: "from-emerald-400 to-teal-500", glow: "rgba(52, 211, 153, 0.4)" },
  { title: "UICA Induction", status: "Welcome", category: "Communication", description: "The official welcome for the Unitedworld Institute of Communication & Advertising.", image: "/events/Uica.jpg", gradient: "from-purple-400 to-fuchsia-500", glow: "rgba(168, 85, 247, 0.4)" },
  { title: "UIBS Induction", status: "Welcome", category: "Behavioral Studies", description: "The official welcome for the Unitedworld Institute of Behavioral Studies.", image: "/events/Uibs.jpg", gradient: "from-cyan-400 to-blue-500", glow: "rgba(34, 211, 238, 0.4)" },
  { title: "The Winchie Film School Induction", status: "Welcome", category: "Film", description: "The official welcome for the next generation of filmmakers at Winchie.", image: "/events/Winchie.jpg", gradient: "from-red-400 to-rose-600", glow: "rgba(248, 113, 113, 0.4)" },
  { title: "UIT (B.Tech) Induction", status: "Welcome", category: "Technology", description: "The official welcome for the Unitedworld Institute of Technology freshers.", image: "/events/UIT.jpg", gradient: "from-slate-400 to-zinc-600", glow: "rgba(148, 163, 184, 0.4)" },
];

// 3. All Other Events
const allEvents = [
  { title: "Freshers 2026", status: "Start of the Era", category: "Celebration", description: "The ultimate welcome to Karnavati University. Massive DJ sets, stunning visual installations, and the beginning of your greatest chapter.", image: "Fresherx.jpg", gradient: "from-cyan-500 to-blue-600", glow: "rgba(34, 211, 238, 0.4)" },
  { title: "Ahmedabad Design Week", status: "Global Convention", category: "Design & Innovation", description: "A masterclass in aesthetics and functionality. Explore physical product design, UI/UX, and architectural marvels.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", gradient: "from-pink-500 to-rose-500", glow: "rgba(244, 63, 94, 0.4)" },
  { title: "KU Garba Mahotsav", status: "Cultural Phenomenon", category: "Festival", description: "The most vibrant night of the year. Traditional beats meet modern energy in an unforgettable celebration of dance and culture.", image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=800", gradient: "from-orange-500 to-amber-500", glow: "rgba(245, 158, 11, 0.4)" },
  { title: "Edge", status: "Stay Tuned", category: "Competition", description: "Push yourself to the absolute limit in this high-stakes campus showdown. Only the sharpest minds will dominate.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", gradient: "from-emerald-500 to-teal-400", glow: "rgba(16, 185, 129, 0.4)" },
  { title: "Halloween", status: "Spooky Season", category: "Party", description: "Costume contests, haunted houses, and a thrilling night of scares and music.", image: "", gradient: "from-orange-500 to-red-600", glow: "rgba(249, 115, 22, 0.4)" },
  { title: "Prom + Farewell", status: "End of an Era", category: "Celebration", description: "A night of elegance and nostalgia. Celebrate the graduating class in style.", image: "", gradient: "from-fuchsia-500 to-purple-600", glow: "rgba(217, 70, 239, 0.4)" },
  { title: "Independence Day", status: "August 15", category: "National", description: "Flag hoisting, patriotic performances, and campus-wide celebrations of freedom.", image: "", gradient: "from-green-500 to-emerald-400", glow: "rgba(34, 197, 94, 0.4)" },
  { title: "Krishna Janmashtami", status: "Cultural", category: "Festival", description: "Traditional Dahi Handi, midnight aarti, and vibrant cultural performances.", image: "", gradient: "from-cyan-500 to-blue-600", glow: "rgba(6, 182, 212, 0.4)" },
  { title: "Ganesh Chaturthi", status: "Cultural", category: "Festival", description: "Welcoming the Vighnaharta with dhol, dance, and a grand campus procession.", image: "", gradient: "from-yellow-400 to-amber-500", glow: "rgba(250, 204, 21, 0.4)" },
  { title: "Durga Pooja", status: "Cultural", category: "Festival", description: "Pandal hopping, traditional dhunuchi naach, and celebrating the divine feminine.", image: "", gradient: "from-red-500 to-rose-600", glow: "rgba(239, 68, 68, 0.4)" },
  { title: "Uttrayan", status: "Cultural", category: "Festival", description: "Kite flying festival on the campus grounds with music, food, and endless skies.", image: "", gradient: "from-sky-400 to-blue-500", glow: "rgba(56, 189, 248, 0.4)" },
  { title: "Holi 2027", status: "Cultural", category: "Festival", description: "The festival of colors. Organic gulal, water fights, rain dance, and DJ sets.", image: "/events/Holi.jpg",  },
  { title: "National Days & Festivals", status: "Ongoing", category: "Observation", description: "Celebrating the diverse tapestry of Indian culture throughout the academic year.", image: "", gradient: "from-zinc-400 to-zinc-600", glow: "rgba(161, 161, 170, 0.4)" },
  { title: "Chatra Niti Aayog / Legal Eagle", status: "Coming Soon", category: "Summit", description: "A clash of intellects. Debate policy, explore legal frameworks, and simulate governance.", image: "", gradient: "from-indigo-500 to-purple-600", glow: "rgba(99, 102, 241, 0.4)" },
  { title: "The Design Masala / Out of Syllabus", status: "Coming Soon", category: "Creative", description: "Step outside the textbook. A showcase of unconventional design and out-of-the-box thinking.", image: "", gradient: "from-pink-500 to-orange-400", glow: "rgba(236, 72, 153, 0.4)" },
  { title: "Convocation", status: "Coming Soon", category: "Ceremony", description: "The culmination of years of hard work. Tossing the caps and stepping into the future.", image: "", gradient: "from-amber-400 to-yellow-600", glow: "rgba(251, 191, 36, 0.4)" },
];

// Reusable Card Component - Now strictly uniform in size with constant glow
const EventCard = ({ event }: { event: any }) => (
  <div 
    className="group relative flex flex-col rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30 h-[420px]"
    style={{ boxShadow: `0 0 15px ${event.glow}` }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 15px 50px ${event.glow}`}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 15px ${event.glow}`}
  >
    <div className={`relative w-full h-48 flex-shrink-0 bg-gradient-to-br ${event.gradient} overflow-hidden flex items-center justify-center`}>
      {event.image ? (
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" 
        />
      ) : (
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
      )}
      
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-center transform transition-transform duration-500 group-hover:scale-105 z-10">
        <span className="block text-[10px] uppercase tracking-widest text-white font-bold whitespace-nowrap">
          {event.status}
        </span>
      </div>

      {/* SYMBOL REMOVED FROM HERE */}
    </div>

    <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/80">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
        {event.category}
      </span>
      <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight line-clamp-2">
        {event.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed flex-grow line-clamp-3">
        {event.description}
      </p>
    </div>
  </div>
);

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black text-white overflow-hidden pb-32">
        
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <AnimatedOrb />
        </div>

        {/* Page Header */}
        <section className="relative z-10 pt-40 pb-12 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Campus Life
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg text-white tracking-tighter">
            Upcoming
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Experiences
            </span>
          </h1>
        </section>

        {/* 1. Featured Event Banner (VIAJE 2027) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
          <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-black/60 rounded-2xl overflow-hidden p-6 lg:p-10">
              
              <div className={`w-full lg:w-1/2 aspect-video rounded-xl bg-gradient-to-br ${featuredEvent.gradient} relative overflow-hidden flex items-center justify-center shadow-2xl`}>
                {featuredEvent.image ? (
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                )}
                
                {/* SYMBOL REMOVED FROM HERE */}
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-purple-400/50 bg-purple-900/30 text-purple-300 text-xs font-bold tracking-widest uppercase">
                    Headline Event
                  </span>
                  <span className="text-zinc-400 text-sm font-semibold tracking-wider">
                    {featuredEvent.category}
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-md tracking-tight">
                  {featuredEvent.title}
                </h2>
                
                <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-xl">
                  {featuredEvent.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{featuredEvent.status}</p>
                      <p className="text-xs uppercase tracking-wider text-cyan-400">{featuredEvent.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Inductions Section - (Now matching the 3-column grid layout of all events) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inductions.map((event, index) => <EventCard key={index} event={event} />)}
          </div>
        </section>

        {/* 3. All Other Events (Seamless flow) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => <EventCard key={index} event={event} />)}
          </div>
        </section>

      </main>

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </>
  );
}