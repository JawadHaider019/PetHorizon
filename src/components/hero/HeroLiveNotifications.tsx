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
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[88%] z-40 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNotifIndex}
          initial={{ opacity: 0, y: -14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.94 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-200/90 flex items-center gap-2.5 text-left"
        >
          <div className={`w-7 h-7 rounded-lg ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
            <IconComponent className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{item.title}</p>
              <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded shrink-0">{item.tag}</span>
            </div>
            <p className="text-[11px] font-bold text-slate-900 truncate leading-snug">{item.message}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
