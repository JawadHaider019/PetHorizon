import { Calendar, Heart, Shield, Cpu, CloudLightning, Activity, Award, Compass } from 'lucide-react';

const PARTNERS = [
  { name: 'Google Calendar', icon: Calendar },
  { name: 'Apple Health Kit', icon: Heart },
  { name: 'Fitbit for Pets', icon: Activity },
  { name: 'Amazon Alexa', icon: Cpu },
  { name: 'Google Home Hub', icon: CloudLightning },
  { name: 'Chewy', icon: Compass },
  { name: 'Petco Veterinary', icon: Award },
  { name: 'Banfield Hospitals', icon: Shield },
];

export default function Partners() {
  // Duplicate the list to ensure seamless looping scroll coverage
  const marqueeList = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-9 bg-white/80 backdrop-blur-xs border-y border-slate-200/80 overflow-hidden relative select-none">
      
      {/* Dynamic isolated CSS Keyframe animation injection */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Horizontal mask overlay to fade bounds */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black inline-flex items-center gap-2">
          <span>Supported Integrations &amp; Pet Care Ecosystems</span>
        </span>
      </div>

      <div className="relative w-full overflow-hidden mt-1">
        <div className="marquee-container">
          {marqueeList.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 mx-7 text-slate-400 hover:text-emerald-700 font-extrabold uppercase tracking-wider text-xs transition-colors duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-emerald-600">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                </div>
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
