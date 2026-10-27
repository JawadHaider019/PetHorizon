export default function HeroPulseRings() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 size-[min(700px,110vw)] select-none">
      {/* Ambient Breathing Radial Glow */}
      <div className="animate-hero-ambient-breathe absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(18,91,70,0.18)_0%,rgba(248,193,82,0.12)_38%,rgba(251,249,245,0)_72%)]" />

      {/* Concentric Pulsing Orbit Ring 1 (Immediate) */}
      <div
        className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-[#125B46]/30 shadow-[0_0_32px_rgba(18,91,70,0.15)]"
        style={{ animationDelay: '0s' }}
      />

      {/* Concentric Pulsing Orbit Ring 2 (+1.5s delay) */}
      <div
        className="animate-hero-radius-pulse absolute inset-0 rounded-full border-2 border-[#F8C152]/35 shadow-[0_0_32px_rgba(248,193,82,0.18)]"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Concentric Pulsing Orbit Ring 3 (+3.0s delay) */}
      <div
        className="animate-hero-radius-pulse absolute inset-0 rounded-full border border-[#125B46]/20 shadow-[0_0_24px_rgba(18,91,70,0.1)]"
        style={{ animationDelay: '3s' }}
      />

      {/* Soft Base Shadow under device */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-8 bg-[#125B46]/15 blur-2xl rounded-full" />
    </div>
  );
}
