import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";
import { image } from "framer-motion/m";

// Rotating neon themes for the dynamic cards
const themes = [
  { color: "from-cyan-400 to-blue-500", glow: "rgba(34,211,238,0.5)" },
  { color: "from-purple-500 to-fuchsia-600", glow: "rgba(168,85,247,0.5)" },
  { color: "from-blue-500 to-indigo-500", glow: "rgba(99,102,241,0.5)" },
  { color: "from-pink-500 to-rose-500", glow: "rgba(236,72,153,0.5)" },
];

const councilData = [
  {
    section: "Executive Leadership",
    hideHeading: true, 
    rows: [
      [
        // EXAMPLE: Add the 'image' property exactly like this when you have their photo
        { role: "President", name: "Arya Soni", dept: "UIT", image: "/council/arya.jpg" }
      ],
      [
        { role: "Vice President I", name: "Zeel Dewasi", dept: "UWSL", image: "/council/zeel.jpg" },
        { role: "Vice President II", name: "Rhytm Gupta", dept: "UID", image: "/council/rhythm.jpg" }
      ],
      [
        { role: "Secretary I", name: "Sanskar Shinde", dept: "UID", image: "/council/sanskar.jpg" },
        { role: "Secretary II", name: "Vanshika Choudhary", dept: "UWSL", image: "/council/vanshika1.jpg" }
      ]
    ]
  },
  {
    section: "Core",
    hideHeading: false, 
    rows: [
      [
        { role: "Public Relations Officer I", name: "Gopesh Jha", dept: "UIT", image: "/council/gopesh.jpg" },
        { role: "Public Relations Officer II", name: "Jay Malu", dept: "UIT", image: "/council/jay.jpg" },
        { role: "Core Coordinator I", name: "Dhwanit Shah", dept: "UIM", image: "/council/dhwanit.jpg" },
        { role: "Core Coordinator II", name: "Dev Vyas", dept: "UWSL", image: "/council/devc.jpg" },
        { role: "Treasurer I", name: "Dev Gadhvi", dept: "UIT", image: "/council/dev.jpg" },
        { role: "Treasurer II", name: "Parth Patel", dept: "UIM", image: "/council/parth.jpg" },
        { role: "NCC/NSS Head I", name: "Vipul Singh Adhikari", dept: "UIT", image: "/council/vipul.jpg" },
        { role: "NCC/NSS Head II", name: "Vansh Dodiya", dept: "UIT", image: "/council/vansh1.jpg" },
        { role: "Marketing Head I", name: "Vanshika Aggarwal", dept: "KSD", image: "/council/vanshika.jpg" },
        { role: "Marketing Head II", name: "Daisy Gupta", dept: "UID", image: "/council/daisy.jpg" },
        { role: "Head CSR I", name: "Keval Ramani", dept: "UIT", image: "/council/keval.jpg" },
        { role: "Head CSR II", name: "Ananya Sharma", dept: "UID", image: "/council/ananya.jpg" },
        { role: "Student Grievance Heads I", name: "Kashak Agarwal", dept: "UWSL", image: "/council/kashak.jpg" },
        { role: "Student Grievance Heads II", name: "Paras Bharadiya", dept: "UIT", image: "/council/paras.jpg" },
        { role: "Head KCEIL I", name: "Kushagra Dave", dept: "UIM", image: "/council/kushagra.jpg" },
        { role: "Head KCEIL II", name: "Neel Tailor", dept: "UIM", image: "/council/neel.jpg" },
      ]
    ]
  },
  {
    section: "General Secretaries",
    hideHeading: false,
    rows: [
      [
        // EXAMPLE: Added your photo path here!
        { role: "Tech Head I", name: "Ishan Chouhan", dept: "UIT", image: "/council/ishan.jpg" },
        { role: "Tech Head II", name: "Maun", dept: "UIT", image: "/council/maun.jpg" },
        { role: "Operation I", name: "Maahi Agarwal", dept: "UID", image: "/council/maahi.jpg" },
        { role: "Operation II", name: "Vanshika Gupta", dept: "UID", image: "/council/vanshikag.jpg" },
        { role: "Creative I", name: "Kanishk rathi", dept: "UID", image: "/council/kanishk.jpg" },
        { role: "Creative II", name: "Amatrra Adal sengupta", dept: "UID", image: "/council/amatrra.jpg" },
        { role: "Communication I", name: "Tanya Desai", dept: "UIM", image: "/council/tanya.jpg" },
        { role: "Communication II", name: "Ujjval Thakkar", dept: "UIT", image: "/council/ujjval.jpg" },
        { role: "Radio I", name: "Mansoor", dept: "UIT", image: "/council/mansoor.jpg" },
        { role: "Radio II", name: "Sehaj", dept: "UID", image: "/council/sehaj.jpg" },
        { role: "Nazariya I", name: "Marmik Patel", dept: "UIT", image: "/council/marmik.jpg" },
        { role: "Nazariya II", name: "Kushali Bhagat", dept: "UID", image: "/council/kushali.jpg" },
        { role: "Digital Outreach I", name: "Johannica Flora", dept: "UID", image: "/council/johannica.jpg" },
        { role: "Digital Outreach II", name: "Dhani Padmani", dept: "UID", image: "/council/dhani.jpg" },
        { role: "Academics I", name: "Mary Krissana Hashley", dept: "UID", image: "/council/mary.jpg" },
        { role: "Academics II", name: "Shashwat Choudhary", dept: "UIT", image: "/council/shashwat.jpg" },
        { role: "Alumni I", name: "Shatakshi kapoor", dept: "UID", image: "/council/shatakshi.jpg" },
        { role: "Alumni II", name: "Mehul", dept: "UIT", image: "/council/mehul.jpg" },
        { role: "HOS", name: "Lakshit gupta", dept: "UID", image: "/council/lakshit.jpg" },
        { role: "Sports I", name: "Jinal", dept: "UIT", image: "/council/jinal.jpg" },
        { role: "Sports II", name: "Himanshu Kumar", dept: "UWSL", image: "/council/himanshu.jpg" },
        { role: "HTWF I", name: "Avadh goswami", dept: "UIT", image: "/council/avadh.jpg" },
        { role: "HTWF II", name: "Bhavya Metha", dept: "UIT", image: "/council/bhavya.jpg" },
        { role: "Culturals I", name: "Shambhavi Huddar", dept: "UID", image: "/council/shambhavi.jpg" },
        { role: "Culturals II", name: "Sahana Iyer", dept: "UID", image: "/council/sahana.jpg" },
      ]
    ]
  },
  {
    section: "Joint Secretary",
    hideHeading: false,
    rows: [
      [
        { role: "UID I", name: "Bhoomi Rajhans", dept: "UID", image: "/council/bhoomi.jpg" },
        { role: "UID II", name: "Simanthani wable", dept: "UID", image: "/council/simanthani.jpg" },
        { role: "UID III", name: "Isha Chopra", dept: "UID", image: "/council/isha.jpg" },
        { role: "UIT I", name: "Sejpalsinh Rayjada", dept: "UIT", image: "/council/sejpalsinh.jpg" },
        { role: "UIT II", name: "Vansh Thakkar", dept: "UIT", image: "/council/vansh.jpg" },
        { role: "UIT III", name: "Jugal Prajapati", dept: "UIT", image: "/council/jugal.jpg" },
        { role: "UIM I", name: "Milan desai", dept: "UIM", image: "/council/milan.jpg" },
        { role: "UIM II", name: "Smit Patel", dept: "UIM", image: "/council/smit.jpg" },
        { role: "UWSL I", name: "Krish Patel", dept: "UWSL", image: "/council/krish.jpg" },
        { role: "UWSL II", name: "Avantika Dhanwani", dept: "UWSL", image: "/council/avantika.jpg" },
        { role: "KSD I", name: "Aarva jamadar", dept: "KSD", image: "/council/aarva.jpg" },
      ]
    ]
  }
];

export default function CouncilPage() {
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const getHandle = (name: string, dept: string) => `${name.split(' ')[0].toLowerCase()}_${dept.toLowerCase()}`;

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
            Meet the Leaders
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white">
            The Student
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Governing Council
            </span>
          </h1>
        </section>

        {/* Iterate through each Section */}
        {councilData.map((group, groupIndex) => (
          <section key={groupIndex} className="relative z-10 max-w-[90rem] mx-auto px-6 mb-32">
            
            {/* Section Title */}
            {!group.hideHeading && (
              <div className="flex items-center justify-center mb-16">
                <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent to-white/20" />
                <h2 className="mx-6 text-3xl font-black uppercase tracking-[0.2em] text-zinc-200 drop-shadow-md whitespace-nowrap">
                  {group.section}
                </h2>
                <div className="h-[1px] w-full max-w-xs bg-gradient-to-l from-transparent to-white/20" />
              </div>
            )}

            {/* Render the Rows */}
            <div className="flex flex-col gap-16">
              {group.rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={
                    row.length <= 2 
                      ? "flex flex-wrap justify-center gap-10 md:gap-16"
                      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 justify-items-center"
                  }
                >
                  {row.map((member, memberIndex) => {
                    const theme = themes[(rowIndex + memberIndex) % themes.length];

                    return (
                      <div key={memberIndex} className="group flex flex-col items-center transition-transform duration-500 hover:-translate-y-2 w-full max-w-[280px]">
                        
                        {/* 1. Main Portrait Frame */}
                        <div 
                          className={`relative p-[3px] bg-gradient-to-b ${theme.color} [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)] w-full`}
                          style={{ boxShadow: `0 0 30px ${theme.glow}` }}
                        >
                          <div className="aspect-square bg-zinc-900 flex items-center justify-center [clip-path:polygon(18px_0,calc(100%-18px)_0,100%_18px,100%_calc(100%-18px),calc(100%-18px)_100%,18px_100%,0_calc(100%-18px),0_18px)] overflow-hidden">
                              
                              {/* SMART IMAGE RENDERER */}
                              {member.image ? (
                                <img 
                                  src={member.image} 
                                  alt={member.name} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              ) : (
                                <span className="text-6xl font-black text-zinc-800 transition-transform duration-500 group-hover:scale-110">
                                  {getInitials(member.name)}
                               </span>
                              )}

                          </div>
                        </div>

                        {/* 2. Overlapping Name Plate */}
                        <div className="relative z-10 -mt-6 flex flex-col items-center justify-center w-[110%] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-[2px] [clip-path:polygon(15px_0,calc(100%-15px)_0,100%_50%,calc(100%-15px)_100%,15px_100%,0_50%)] shadow-2xl">
                          <div className="w-full bg-black/90 py-3 px-2 text-center [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,14px_100%,0_50%)]">
                            <h2 className="text-xl font-black uppercase tracking-wider text-white drop-shadow-md truncate w-full">
                              {member.name}
                            </h2>
                            <p className="text-xs text-zinc-400 font-medium mt-0.5">
                              @{getHandle(member.name, member.dept)}
                            </p>
                          </div>
                        </div>

                        {/* 3. Role Plate */}
                        <div className="mt-5 w-[90%] flex flex-col items-center justify-center border border-white/10 bg-black/80 px-4 py-3 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-500 mb-1">
                            APPOINTED AS
                          </span>
                          <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase text-center">
                            {member.role}
                          </span>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

          </section>
        ))}

      </main>

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </>
  );
}