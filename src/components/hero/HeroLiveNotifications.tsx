import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Pill, Users } from 'lucide-react';

const LIVE_NOTIFICATIONS = [
  {
    title: 'Family Care Sync • Just now',
    message: 'Michael logged Breakfast (2 cups)',
    tag: 'Morning Routine',
    icon: Clock,
    color: 'text-amber-700',
    bg: 'bg-amber-100'
  },
  {
    title: 'Clinical Dosage • 08:00 AM',
    message: 'Heartgard Plus administered to Luna',
    tag: 'Verified',
    icon: Pill,
    color: 'text-emerald-700',
    bg: 'bg-emerald-100'
  },
  {
    title: 'Household Pass • 07:50 AM',
    message: 'Maya R. (Pet Sitter) scanned QR code',
    tag: 'Connected',
    icon: Users,
    color: 'text-emerald-700',
    bg: 'bg-emerald-100'
  }
];

export default function HeroLiveNotifications() {
  const [activeNotifIndex, setActiveNotifIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotifIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const item = LIVE_NOTIFICATIONS[activeNotifIndex];
  const IconComponent = item.icon;

  return (
    <div className="absolute top-16 -left-16 xl:-left-20 w-64 z-30 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNotifIndex}
          initial={{ opacity: 0, x: -12, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 10, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 shadow-[0_16px_32px_-6px_rgba(0,0,0,0.14)] border border-black/[0.08] flex items-center gap-2.5 text-left"
        >
          <div className={`w-8 h-8 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-2xs`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{item.title}</p>
              <span className="text-[9px] font-bold text-emerald-950 bg-emerald-950/5 border border-emerald-900/10 px-1.5 py-0.5 rounded-full shrink-0">{item.tag}</span>
            </div>
            <p className="text-[11px] font-bold text-[#17191C] truncate leading-snug">{item.message}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
