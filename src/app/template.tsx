export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* PURE CSS SPLASH SCREEN - Re-mounts on every single page change! */}
      <div id="splash-screen" className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black pointer-events-none">
        <div className="relative mb-8 flex flex-col items-center">
          
          <div className="relative flex items-center justify-center">
            <div className="absolute w-40 h-40 bg-cyan-500/30 blur-[70px] rounded-full animate-pulse"></div>
            <img 
              src="/logo.png" 
              alt="KUSGC Logo" 
              className="relative z-10 w-48 h-48 md:w-56 md:h-56 object-contain invert mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            />
          </div>
          
          <p className="mt-4 text-zinc-400 text-sm md:text-base uppercase tracking-[0.6em] font-bold animate-pulse">
            KUSGC
          </p>
        </div>

        <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-lg mt-4">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.8)] splash-bar-fill"></div>
        </div>
      </div>

      {/* The actual page content loads underneath */}
      {children}
    </>
  );
}