import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ArrowRight, Check } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { TOUR_SCREENS } from '../data/tourData';

export default function InteractiveTour() {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const current = TOUR_SCREENS.find(s => s.id === selectedScreen) || TOUR_SCREENS[0];

  return (
    <section id="tour" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive App Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Take a Tour of the Pet Horizon Experience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Click through the primary screens below to preview the exact user experience waiting for you on the mobile app.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {TOUR_SCREENS.map((sc) => {
            const Icon = sc.icon;
            const isSelected = selectedScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScreen(sc.id)}
                className={`relative flex items-center gap-2 px-4.5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/25 scale-105'
                    : 'bg-[#F5F6F8] text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{sc.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-2xl bg-emerald-600 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Canvas */}
        <div className="bg-[#F5F6F8] border border-slate-200/90 rounded-3xl sm:rounded-[2.8rem] p-6 sm:p-10 lg:p-14 shadow-lg relative overflow-hidden">
          {/* Subtle green ambient lighting */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Phone Display (5 Cols) with Floating Pulse Marker */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
              
              {/* Floating Pulse Marker Tag */}
              <div className="absolute -top-3 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 px-3 py-1.5 rounded-2xl shadow-md flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>Active Screen Preview</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PhoneFrame
                    src={current.screenshot}
                    alt={current.title}
                    frameClassName="w-[260px] sm:w-[290px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Details (7 Cols) */}
            <div className="lg:col-span-7 text-left flex flex-col gap-5 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3.5 py-1 rounded-full w-fit shadow-xs">
                    {current.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 pt-2">
                    {current.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium leading-relaxed">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all text-sm"
                    >
                      <span>Install App From Google Play</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
