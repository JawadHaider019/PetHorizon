import React from 'react';
import { 
  Users, 
  Pill, 
  Calendar, 
  ShieldCheck, 
  Camera, 
  MapPin, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

const MARQUEE_ITEMS = [
  { text: 'Sync Across Household', icon: Users },
  { text: 'Smart Medicine Alarms', icon: Pill },
  { text: 'Daily Feeding Logs', icon: Calendar },
  { text: '100% Private & Ad-Free', icon: ShieldCheck },
  { text: 'Shared Photo Memories', icon: Camera },
  { text: 'Walk GPS Tracker', icon: MapPin },
  { text: 'Dogs, Cats, Birds & Rabbits', icon: HeartHandshake },
  { text: '1,200+ Active Pet Families', icon: Sparkles },
];

export default function HeroMarquee() {
  const fullList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#FAF5EB] border-y border-amber-900/[0.08] py-2 sm:py-2.5 overflow-hidden select-none relative z-20">
      {/* Side gradient fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF5EB] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF5EB] to-transparent z-10 pointer-events-none" />

      <div className="animate-hero-marquee flex items-center">
        {fullList.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 mx-4 sm:mx-6 text-[11px] sm:text-xs font-bold text-[#144917] tracking-wide whitespace-nowrap shrink-0 hover:text-emerald-950 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-700/10 border border-emerald-700/20 flex items-center justify-center text-[#166534] shrink-0">
                <Icon className="w-3 h-3 shrink-0" />
              </div>
              <span>{item.text}</span>
              <span className="text-amber-500/70 ml-2 font-black">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
