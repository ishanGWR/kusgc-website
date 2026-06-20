export default function AnimatedOrb() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      
      {/* Scaled Down Top-Left Cyan Glow */}
      <div className="absolute -top-[10%] left-[5%] h-[30vw] w-[30vw] rounded-full bg-cyan-500/40 blur-[100px] md:blur-[140px] animate-blob mix-blend-screen" />
      
      {/* Scaled Down Top-Right Purple Glow */}
      <div className="absolute top-[15%] right-[5%] h-[40vw] w-[40vw] rounded-full bg-purple-600/40 blur-[100px] md:blur-[160px] animate-blob animation-delay-2000 mix-blend-screen" />
      
      {/* Scaled Down Bottom-Left Blue Glow */}
      <div className="absolute -bottom-[10%] left-[15%] h-[50vw] w-[50vw] rounded-full bg-blue-600/30 blur-[120px] md:blur-[180px] animate-blob animation-delay-4000 mix-blend-screen" />

      {/* Scaled Down Center/Moving Fuchsia Glow */}
      <div className="absolute top-[35%] left-[40%] h-[25vw] w-[25vw] rounded-full bg-fuchsia-500/30 blur-[100px] md:blur-[120px] animate-blob animation-delay-6000 mix-blend-screen" />

      {/* Full-Screen Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)]" />
      
    </div>
  );
}