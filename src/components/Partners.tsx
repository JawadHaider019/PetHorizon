import { 
  Calendar, 
  Pill, 
  Syringe, 
  QrCode, 
  Users, 
  Camera, 
  Footprints, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const HIGHLIGHT_ITEMS = [
  { text: 'Zero Missed Medication Alarms', icon: Pill },
  { text: 'Family Hub QR Caretaker Invites', icon: QrCode },
  { text: 'Live Feeding & Routine Schedules', icon: Calendar },
  { text: 'GPS Walk & Activity Tracker', icon: Footprints },
  { text: 'Pro Health & Vaccine Vault', icon: Syringe },
  { text: 'Multi-Pet Household Sync', icon: Users },
  { text: 'Daily Photo Journal & Notes', icon: Camera },
  { text: 'Dogs, Cats, Birds & Small Companions', icon: ShieldCheck },
  { text: '100% Free to Start on Android', icon: CheckCircle2 }
];

export default function Partners() {
  // Triple the items for perfectly seamless infinite continuous scrolling
  const marqueeList = [...HIGHLIGHT_ITEMS, ...HIGHLIGHT_ITEMS, ...HIGHLIGHT_ITEMS];

  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] border-y border-[#F3E7C4] py-4 select-none z-20">
      {/* Horizontal mask overlay to fade bounds smoothly */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FFF8E7] via-[#FFF8E7]/90 to-transparent z-10 pointer-events-none" />

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-infinite">
          {marqueeList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3.5 mx-5 sm:mx-7 text-[#125B46] font-bold text-xs sm:text-[13px] tracking-wide shrink-0 transition-opacity hover:opacity-80"
              >
                <span className="w-6 h-6 rounded-full bg-[#125B46]/10 text-[#125B46] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="whitespace-nowrap">{item.text}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#E8A020] opacity-70 shrink-0 ml-1.5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
