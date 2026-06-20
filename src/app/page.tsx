import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Footer from "@/app/components/Footer";

const keywords = [
  "Leadership",
  "Innovation",
  "Culture",
  "Community",
  "Sports",
  "Technology",
  "Creativity",
  "Impact",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white overflow-hidden">
        
        {/* HERO SECTION */}
        <Hero />

        {/* STATS SECTION */}
        <Stats />

        {/* MARQUEE SECTION (Restored and Scrolling Seamlessly) */}
        <section className="border-b border-white/10 py-8 overflow-hidden flex">
          <div className="animate-marquee text-xl font-semibold text-zinc-500">
            {/* 4 sets of keywords ensures it fills the screen, and moving by -50% hides the reset jump perfectly. */}
            {[...keywords, ...keywords, ...keywords, ...keywords].map((item, index) => (
              <span key={index} className="mx-8 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mx-auto max-w-6xl px-6 py-28 relative z-10 bg-black">
          <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            About KUSGC
          </p>

          <h2 className="mb-8 text-5xl font-bold drop-shadow-md">
            Built by students,
            <br />
            for students
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            The Karnavati University Student Governing Council is the
            elected representative body that bridges the gap between
            students and the institution — turning collective voices into
            action.
          </p>
        </section>

        {/* MISSION CARDS */}
        <section className="mx-auto max-w-7xl px-6 pb-28 relative z-10 bg-black">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-zinc-400">
                To represent every student voice, champion their interests,
                and create an environment where ambition meets opportunity.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-zinc-400">
                A future-ready student community where leadership,
                creativity, and collaboration shape an iconic campus culture.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Values</h3>
              <p className="text-zinc-400">
                Integrity, inclusivity, and accountability guide every
                decision we make on behalf of the student body.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Impact</h3>
              <p className="text-zinc-400">
                From flagship fests to policy reform, we turn student ideas
                into landmark experiences that last a lifetime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}