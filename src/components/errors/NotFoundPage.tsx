import { Home, Compass, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateBlog?: () => void;
}

// Animated floating paw print decoration
function PawPrint({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="20" cy="26" rx="8" ry="7" fill="currentColor" opacity="0.7" />
      <ellipse cx="10" cy="17" rx="4" ry="5" fill="currentColor" opacity="0.7" />
      <ellipse cx="30" cy="17" rx="4" ry="5" fill="currentColor" opacity="0.7" />
      <ellipse cx="15" cy="11" rx="3.5" ry="4.5" fill="currentColor" opacity="0.7" />
      <ellipse cx="25" cy="11" rx="3.5" ry="4.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default function NotFoundPage({ onNavigateHome, onNavigateBlog }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FDF8] via-[#FDFDFC] to-emerald-50/60 text-slate-800 antialiased flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 relative overflow-hidden">

      {/* Ambient background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-400/8 rounded-full blur-3xl" />

        {/* Floating paw prints */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[8%] text-emerald-300/40 w-10 h-10 sm:w-14 sm:h-14"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-[25%] right-[10%] text-emerald-300/30 w-8 h-8 sm:w-11 sm:h-11"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] left-[12%] text-emerald-200/50 w-6 h-6 sm:w-9 sm:h-9"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[30%] right-[8%] text-emerald-300/35 w-12 h-12 sm:w-16 sm:h-16"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-[60%] left-[5%] text-emerald-200/40 w-7 h-7"
        >
          <PawPrint className="w-full h-full" />
        </motion.div>
      </div>

      {/* Main glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-white/75 backdrop-blur-xl rounded-[2.5rem] border border-white/90 shadow-2xl shadow-emerald-950/8 p-8 sm:p-12 text-center relative overflow-hidden">

          {/* Glass card inner glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-emerald-50/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating detective mascot (mix-blend-mode removes white bg) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative inline-block mb-2"
          >
            <img
              src="/mascots/404-detective.jpg"
              alt="Pet Horizon Detective Puppy"
              className="w-44 h-44 sm:w-52 sm:h-52 object-contain mx-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
            {/* Shadow beneath the floating mascot */}
            <div className="w-24 sm:w-28 h-4 bg-emerald-900/10 rounded-full blur-md mx-auto -mt-3" />
          </motion.div>

          {/* Big typographic 404 */}
          <div className="relative mb-2">
            <span
              className="text-[6rem] sm:text-[7.5rem] font-black leading-none tracking-tighter text-transparent select-none pointer-events-none"
              style={{
                WebkitTextStroke: '2px #2E7D32',
                color: 'transparent',
                opacity: 0.12,
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 0,
              }}
            >
              404
            </span>
          </div>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-black uppercase tracking-widest mb-4 border border-emerald-200/80 shadow-xs"
          >
            <Search className="w-3 h-3" />
            404 &bull; Page Not Found
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3 leading-tight"
          >
            Our detective is on the case!
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-500 leading-relaxed mb-7 max-w-sm mx-auto font-normal"
          >
            The page you&apos;re looking for seems to have wandered off. It may have been moved,
            renamed, or the trail has gone cold. Let&apos;s get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6"
          >
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.97] text-white font-bold text-sm transition-all shadow-sm shadow-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/20 cursor-pointer"
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Return to Homepage</span>
            </button>

            {onNavigateBlog ? (
              <button
                onClick={onNavigateBlog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/60 active:scale-[0.97] text-slate-700 hover:text-emerald-800 font-semibold text-sm transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Pet Care Guides</span>
              </button>
            ) : null}
          </motion.div>

          {/* Divider + back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-5 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-700 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Go back to previous page</span>
            </button>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer group"
            >
              <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
              <span>Reload page</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
