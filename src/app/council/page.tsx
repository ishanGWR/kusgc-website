import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

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
        { role: "President", name: "Arya Soni", dept: "UIT", image: "/council/Arya.jpg", insta: "aryasoni612" }
      ],
      [
        { role: "Vice President ", name: "Zeel Dewasi", dept: "UWSL", image: "/council/Zeel.jpg", insta: "__zeel_18__" },
        { role: "Vice President ", name: "Rhytm Gupta", dept: "UID", image: "/council/Rythm.jpg", insta: "Rhythmguptaaaaa" }
      ],
      [
        { role: "Secretary ", name: "Sanskar Shinde", dept: "UID", image: "/council/Sanskar.jpg", insta: "__sanskar_shinde" },
        { role: "Secretary ", name: "Vanshika Choudhary", dept: "UWSL", image: "/council/Vanshika1.jpg", insta: "_vanshika_.jpg" }
      ]
    ]
  },
  {
    section: "Core",
    hideHeading: false, 
    rows: [
      [
        { role: "Public Relations Officer ", name: "Gopesh Jha", dept: "UIT", image: "/council/Gopesh.jpg", insta: "gopesh_008" },
        { role: "Public Relations Officer ", name: "Jay Malu", dept: "UIT", image: "/council/Jay.jpg", insta: "jaymaluu" },
        { role: "Student Grievance Heads ", name: "Kashak Agarwala", dept: "UWSL", image: "/council/Kashak.jpg", insta: "agxkashakk " },
        { role: "Student Grievance Heads", name: "Paras Bharadiya", dept: "UIT", image: "/council/Paras.jpg", insta: "paras_9_" },
        { role: "Core Coordinator ", name: "Dhwanit Shah", dept: "UIM", image: "/council/Dhwanit.jpg", insta: "Dhwanit_shah_10" },
        { role: "Core Coordinator ", name: "Dev Vyas", dept: "UWSL", image: "/council/Devc.jpg", insta: "devvyas_2116" },
        { role: "Treasurer ", name: "Dev Gadhvi", dept: "UIT", image: "/council/Dev.jpg", insta: "dev_gadhvi12" },
        { role: "Treasurer ", name: "Parth Patel", dept: "UIM", image: "/council/Parth.jpg", insta: "parthh.93" },
        { role: "NCC/NSS Head ", name: "Vipul Singh Adhikari", dept: "UIT", image: "/council/Vipul.jpg", insta: "viishuu._.24" },
        { role: "NCC/NSS Head ", name: "Vansh Dodiya", dept: "UIT", image: "/council/Vansh.jpg", insta: "vansh._34" },
        { role: "Marketing Head ", name: "Vanshika Agrawal ", dept: "KSD", image: "/council/Vanshikam.jpg", insta: "vanshika_agrawal_08" },
        { role: "Marketing Head ", name: "Daisy Gupta", dept: "UID", image: "/council/Daisy.jpg", insta: "daisy.gupta_" },
        { role: "Head CSR ", name: "Keval Ramani", dept: "UIT", image: "/council/Keval.jpg", insta: "kev3reverie" },
        { role: "Head CSR ", name: "Ananya Sharma", dept: "UID", image: "/council/Ananya.jpg", insta: "Notsoocoolananya " },
        { role: "Head KCEIL", name: "Kushagra Dave", dept: "UIM", image: "/council/Kushagra.jpg", insta: "kushagradave2295" },
        { role: "Head KCEIL", name: "Neel Tailor", dept: "UIM", image: "/council/Neel.jpg", insta: "Neel_NT" }
      ]
    ]
  },
  {
    section: "General Secretaries",
    hideHeading: false,
    rows: [
      [
        // EXAMPLE: Added your photo path here!
        { role: "Tech ", name: "Ishan Chouhan", dept: "UIT", image: "/council/Ishan.jpg", insta:"ishann_412" },
        { role: "Tech  ", name: "Maun", dept: "UIT", image: "/council/Maun.jpg" ,insta:"maun_glorious" },
        { role: "Operation ", name: "Maahi Agrawal", dept: "UID", image: "/council/Maahi.jpg", insta:"maahi.agr" },
        { role: "Operation ", name: "Vanshika Gupta", dept: "UID", image: "/council/Vanshika.jpg", insta:"vanshikagupta.22" },
        { role: "Creative ", name: "Kanishk rathi", dept: "UID", image: "/council/Kanishk.jpg" ,insta:"kanishkrathi" },
        { role: "Creative ", name: "Amatrra Adal sengupta", dept: "UID", image: "/council/Amatrra.jpg" ,insta:"23_amatrra_" },
        { role: "Communication ", name: "Tanaya Desai", dept: "UIM", image: "/council/Tanaya.jpg" ,insta:"tanaya_desai14" },
        { role: "Communication ", name: "Ujjval Thakkar", dept: "UIT", image: "/council/Ujjval.jpg" ,insta:"ujjval6428" },
        { role: "Radio ", name: "Mansoor", dept: "UIT", image: "/council/Mansoor.jpg" ,insta:"mansoor_anas.23" },
        { role: "Radio ", name: "Sehaj", dept: "UID", image: "/council/Sehaj.jpg" ,insta:"sehajssaluja" },
        { role: "Nazariya ", name: "Marmik Patel", dept: "UIT", image: "/council/Marmik.jpg" ,insta:"mxrmik.27" },
        { role: "Nazariya ", name: "Kushali Bhagat", dept: "UID", image: "/council/Kushali.jpg" ,insta:"kushali_bhagat" },
        { role: "Digital Outreach ", name: "Johannica Flora", dept: "UID", image: "/council/Johannica.jpg" ,insta:"johannica_flora05" },
        { role: "Digital Outreach ", name: "Dhani Padmani", dept: "UID", image: "/council/Dhani.jpg" ,insta:"dhani1547" },
        { role: "Academics ", name: "Mary Krissana Hashley", dept: "UID", image: "/council/Mary.jpg" ,insta:"krisstastrophe__" },
        { role: "Academics ", name: "Shashwat Choudhary", dept: "UIT", image: "/council/Shashwat.jpg" ,insta:"shashwhatttf" },
        { role: "Alumni ", name: "Shatakshi kapoor", dept: "UID", image: "/council/Shatakshi.jpg" ,insta:"shatakshi._kapoor" },
        { role: "Alumni ", name: "Mehul", dept: "UIT", image: "/council/Mehul.jpg" ,insta:"mehul_2403" },
        { role: "HOS", name: "Lakshit gupta", dept: "UID", image: "/council/Lakshit.jpg" ,insta:"lakkkshit_" },
        { role: "Sports ", name: "Jinal", dept: "UIT", image: "/council/Jinal.jpg" ,insta:"jinaljayswall" },
        { role: "Sports ", name: "Himanshu Kumar", dept: "UWSL", image: "/council/Himanshu.jpg" ,insta:"__kumarhimanshu" },
        { role: "HTWF ", name: "Avadh goswami", dept: "UIT", image: "/council/Avadh.jpg" ,insta:"avadh_______0_0" },
        { role: "HTWF ", name: "Bhavya Metha", dept: "UIT", image: "/council/Bhavya.jpg" ,insta:"_bhavyaamehtaa_" },
        { role: "Culturals ", name: "Shambhavi Huddar", dept: "UID", image: "/council/Shambhavi.jpg" ,insta:"shambhavi_huddar" },
        { role: "Culturals ", name: "Sahana Iyer", dept: "UID", image: "/council/Sahana.jpg" ,insta:"w.l.i.t.h_sahana" },
      ]
    ]
  },
  {
    section: "Joint Secretary",
    hideHeading: false,
    rows: [
      [
        { role: "UID ", name: "Bhoomi Rajhans", dept: "UID", image: "/council/Bhoomi.jpg" , insta:"bhoomi.rajhans"},
        { role: "UID ", name: "Simanthi wable", dept: "UID", image: "/council/Simanthi.jpg" , insta:"simii.07_"},
        { role: "UID ", name: "Isha Chopra", dept: "UID", image: "/council/Isha.jpg" , insta:"ish_ishx"},
        { role: "UIT ", name: "Sejpalsinh Rayjada", dept: "UIT", image: "/council/Sejpal.jpg" , insta:"sejpaalrayjada"},
        { role: "UIT ", name: "Vansh Thakkar", dept: "UIT", image: "/council/Vansht1.jpg" , insta:"thakkarvansh18"},
        { role: "UIT ", name: "Jugal Prajapati", dept: "UIT", image: "/council/Jugal.jpg" , insta:"jugal_jpeg"},
        { role: "UIM ", name: "Milan desai", dept: "UIM", image: "/council/Milan.jpg" , insta:"f1.milan" },
        { role: "UIM ", name: "Smit Patel", dept: "UIM", image: "/council/Smit.jpg" , insta:"smaikk___" },
        { role: "UWSL ", name: "Krish Patel", dept: "UWSL", image: "/council/Krish.jpg" , insta:"krrrish09" },
        { role: "UWSL ", name: "Avantika Dhanwani", dept: "UWSL", image: "/council/Avantika.jpg" , insta:"avantikaaa_05" },
        { role: "KSD ", name: "Aarva jamadar", dept: "KSD", image: "/council/Aarva.jpg" , insta:"aarva.jamadar" },
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
            Meet the Leaders of 2K26
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
                        {/* 2. Overlapping Name Plate */}
                        <div className="relative z-10 -mt-6 flex flex-col items-center justify-center w-[110%] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-[2px] [clip-path:polygon(15px_0,calc(100%-15px)_0,100%_50%,calc(100%-15px)_100%,15px_100%,0_50%)] shadow-2xl">
                        <div className="w-full bg-black/90 py-3 px-2 text-center [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,14px_100%,0_50%)]">
                        <h2 className="text-xl font-black uppercase tracking-wider text-white drop-shadow-md truncate w-full">
                        {member.name}
                        </h2>
    
                       {/* INSTAGRAM LOGIC */}
                      {member.insta ? (
                      <a href={`https://instagram.com/${member.insta}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs text-cyan-400 font-bold hover:text-white transition-colors mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.168.053 1.8.252 2.223.417.561.217.962.476 1.382.896.42.42.679.821.896 1.382.165.423.364 1.055.417 2.223.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.168-.252 1.8-.417 2.223-.217.561-.476.962-.896 1.382-.42.42-.821.679-1.382.896-.423.165-1.055.364-2.223.417-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.168-.053-1.8-.252-2.223-.417-.561-.217-.962-.476-1.382-.896-.42-.42-.679-.821-.896-1.382-.165-.423-.364-1.055-.417-2.223-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.168.252-1.8.417-2.223.217-.561.476-.962.896-1.382.42-.42.821-.679 1.382-.896.423-.165 1.055-.364 2.223-.417 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.261-2.91.558-.787.305-1.455.714-2.126 1.385-.671.671-1.08 1.339-1.385 2.126-.297.762-.5 1.633-.558 2.91-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.91.305.787.714 1.455 1.385 2.126.671.671 1.339 1.08 2.126 1.385.762.297 1.633.5 2.91.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.91-.558.787-.305 1.455-.714 2.126-1.385.671-.671 1.08-1.339 1.385-2.126.297-.762.5-1.633.558-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.91-.305-.787-.714-1.455-1.385-2.126-.671-.671-1.339-1.08-2.126-1.385-.762-.297-1.633-.5-2.91-.558-.787-.058-1.28-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      @{member.insta}
                      </a>) : (<p className="text-xs text-zinc-600 font-medium mt-1">
                      @{getHandle(member.name, member.dept)}
                      </p>)}
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