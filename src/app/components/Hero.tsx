import AnimatedOrb from "./AnimatedOrb";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 text-center bg-black overflow-hidden">
      
      {/* Neon RGB Background */}
      <AnimatedOrb />

      <div className="relative z-10 max-w-6xl">
        
        {/* Subtitle with slight cyan glow */}
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
        
        </p>

        {/* Main Title with massive text drop-shadow for neon effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
          Karnavati University
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            Student Governing Council
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-300 drop-shadow-md">
          KUSGC is the elected body of students driving leadership,
          culture, and innovation across campus — building experiences
          that define student life.
        </p>

        {/* Buttons with Neon Hover States */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button className="rounded-full bg-white px-8 py-3 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
            Join the Council
          </button>

          <button className="rounded-full border border-cyan-500/50 bg-cyan-950/30 px-8 py-3 text-cyan-50 backdrop-blur-md transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            Explore Events
          </button>
        </div>

      </div>
    </section>
  );
}