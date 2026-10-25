import { Home, Compass, ArrowLeft, RefreshCw, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateBlog?: () => void;
}

function PawPrint({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="25" cy="33" rx="10" ry="9" fill="currentColor" />
      <ellipse cx="12" cy="22" rx="5" ry="6.5" fill="currentColor" />
      <ellipse cx="38" cy="22" rx="5" ry="6.5" fill="currentColor" />
      <ellipse cx="18" cy="13" rx="4.5" ry="5.5" fill="currentColor" />
      <ellipse cx="32" cy="13" rx="4.5" ry="5.5" fill="currentColor" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'Home', action: 'home' },
  { label: 'Features', action: 'home' },
  { label: 'Pet Care Blog', action: 'blog' },
  { label: 'Download App', action: 'home' },
] as const;

export default function NotFoundPage({ onNavigateHome, onNavigateBlog }: NotFoundPageProps) {
  const handleLink = (action: string) => {
    if (action === 'blog' && onNavigateBlog) onNavigateBlog();
    else onNavigateHome();
  };

  return (
    <div className="min-h-screen bg-[#FAFDF9] antialiased relative overflow-hidden flex flex-col items-center justify-center px-4 pt-28 sm:pt-36 pb-16">

      {/* ── Ghost 404 background text ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-black leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(120px, 22vw, 280px)',
            color: 'transparent',
            WebkitTextStroke: '1.5px #bbf7d0',
          }}
        >
          404
        </span>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-emerald-300/[0.07] rounded-full blur-3xl pointer-events-none" />

      {/* Floating paw prints */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] left-[6%] sm:left-[10%] text-emerald-200 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none"
      >
        <PawPrint className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-[28%] right-[6%] sm:right-[10%] text-emerald-200 w-8 h-8 sm:w-12 sm:h-12 pointer-events-none"
      >
        <PawPrint className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-[25%] left-[8%] sm:left-[14%] text-emerald-100 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none"
      >
        <PawPrint className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute bottom-[30%] right-[8%] sm:right-[14%] text-emerald-200 w-9 h-9 pointer-events-none"
      >
        <PawPrint className="w-full h-full" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-xl w-full text-center">

        {/* ─── Detective mascot — no container, white JPG bg blends into white page ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-col items-center mb-4"
        >
          <motion.img
            src="/mascots/404-detective.jpg"
            alt="Pet Horizon Detective Puppy"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
            style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.13)) drop-shadow(0 8px 16px rgba(46,125,50,0.10))' }}
          />
          {/* Breathing ground shadow */}
          <motion.div
            animate={{ scaleX: [1, 0.78, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="w-28 sm:w-36 h-3 bg-slate-400/30 rounded-full blur-xl -mt-4"
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            404 · Page Not Found
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Sniffing for clues,
          <br />
          <span className="text-emerald-600">but nothing&apos;s here.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-sm mx-auto"
        >
          This page has wandered off — it may have been moved, renamed, or the trail has gone cold.
          Our detective is already on the case.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <button
            id="not-found-home-btn"
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.97] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 cursor-pointer group"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Back to Homepage</span>
            <MoveRight className="w-4 h-4 shrink-0 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {onNavigateBlog ? (
            <button
              id="not-found-blog-btn"
              onClick={onNavigateBlog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-white hover:bg-slate-50 active:scale-[0.97] text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all duration-200 border border-slate-200 hover:border-slate-300 shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Pet Care Guides</span>
            </button>
          ) : null}
        </motion.div>

        {/* Quick nav chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="mb-10"
        >
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Quick Navigation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLink(link.action)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 transition-all duration-150 cursor-pointer active:scale-95 shadow-xs"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bottom utility row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="flex items-center justify-center gap-5 sm:gap-6 border-t border-slate-100 pt-6"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Go back
          </button>
          <span className="w-px h-4 bg-slate-200 shrink-0" />
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer group"
          >
            <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
            Reload page
          </button>
          <span className="w-px h-4 bg-slate-200 shrink-0" />
          <a
            href="mailto:pethorizon2026@gmail.com"
            className="text-xs font-semibold text-slate-400 hover:text-emerald-700 transition-colors"
          >
            Report issue
          </a>
        </motion.div>
      </div>
    </div>
  );
}
