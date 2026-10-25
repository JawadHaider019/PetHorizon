import { motion } from 'framer-motion';

export default function HeroMobilePets() {
  return (
    <div className="lg:hidden w-full flex flex-col items-center justify-center relative">
      <div className="w-72 h-72 bg-gradient-to-tr from-emerald-500/25 via-emerald-400/15 to-transparent rounded-full blur-3xl pointer-events-none absolute -top-4 -z-10" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex flex-col items-center"
      >
        <img
          src="/3d-pets-transparent.png"
          alt="Pet Horizon 3D Companions"
          className="w-64 sm:w-72 h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
        />

        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-emerald-200/90 shadow-md text-xs font-bold text-slate-800 -mt-3 relative z-10 whitespace-nowrap shrink-0">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="whitespace-nowrap">Luna &amp; Milo • Synced Family Care</span>
        </div>
      </motion.div>
    </div>
  );
}
