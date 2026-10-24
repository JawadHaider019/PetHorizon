import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { FEATURES_DATA } from '../data/appFeaturesData';

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState<string>('schedules');
  const activeFeature = FEATURES_DATA.find(f => f.id === activeTab) || FEATURES_DATA[0];

  return (
    <section id="features" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2.5">
            Core App Modules
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Designed to Make Daily Pet Care Feel Effortless
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2.5 sm:mt-4 font-normal">
            Every feature on this website is genuinely inside the Pet Horizon mobile app. Discover how our modules keep your pets healthy and your household aligned.
          </p>
        </div>

        {/* Feature Navigation Tabs: Swipeable on mobile, flex-wrap on desktop */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-14 px-1">
          {FEATURES_DATA.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                <span>{tab.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Feature Copy & Points (7 Cols - Slides in from Left) */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 text-left flex flex-col gap-5"
              >
                <div className="inline-flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full w-fit">
                  <span>{activeFeature.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  {activeFeature.title}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* 2x2 Feature Details Grid with Staggered Left/Right Slide and Hover Elevation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  {activeFeature.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-1.5 hover:border-emerald-400 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-sm">{pt.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal pl-6">
                        {pt.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm group"
                  >
                    <span>Download Pet Horizon to use {activeFeature.tag}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Feature Phone Device Frame (5 Cols - Slides in from Right) */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex justify-center items-center relative"
              >
                <div className="relative">
                  <PhoneFrame
                    src={activeFeature.screenshot}
                    alt={activeFeature.screenshotAlt}
                    frameClassName="w-[215px] sm:w-[290px]"
                  />

                  {/* Ambient Decorative Badge (Positioned outside) */}
                  <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-4 -right-6 lg:-right-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-emerald-100 shadow-lg text-xs font-bold text-slate-800 z-20">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Real App Interface</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
