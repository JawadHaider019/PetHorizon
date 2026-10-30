import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';
import { defaultViewport, scrollTransition } from '../config/animationVariants';

export default function DailyJournalSection() {
  const activities = [
    {
      time: '11:25 AM',
      title: 'Completed DHPP Vaccination',
      category: 'Vaccination',
      status: 'Completed',
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      time: '11:18 AM',
      title: 'Completed Morning Walk',
      detail: 'Duration: 35 mins • Distance tracked',
      category: 'Walk',
      status: 'Completed',
      color: 'bg-amber-100 text-amber-700 border-amber-200',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      time: '08:00 AM',
      title: 'Morning Feeding (Breakfast)',
      detail: '2 cups balanced kibble portion',
      category: 'Food',
      status: 'Completed',
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section id="journal" className="py-12 sm:py-24 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20 border-t border-black/[0.05]">
      {/* Anchor for #daily-journal */}
      <div id="daily-journal" className="absolute -top-20 pointer-events-none" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-700/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Explanatory Copy & Activity Highlights (comes in from left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={scrollTransition}
            className="lg:col-span-7 text-left flex flex-col gap-5 sm:gap-6"
          >

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
              Pet Journal &amp; Memories
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
              A Living Memory &amp; Health Timeline for Every Day
            </h2>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-normal">
              Pet Horizon automatically arranges completed feedings, medical administrations, and outdoor walks into a clear daily timeline. Attach daily photos so you can look back on moments and celebrate every healthy milestone.
            </p>

            {/* Simulated Activity Timeline Cards (Compact on mobile: 2 items on phones, 3 on sm+) */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pt-1">
              {activities.map((act, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, boxShadow: '0 10px 20px -4px rgba(0, 0, 0, 0.06)' }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                  className={`${index === 2 ? 'hidden sm:flex' : 'flex'} bg-white p-3.5 sm:p-4 rounded-2xl border border-black/[0.06] shadow-sm items-center justify-between gap-3 sm:gap-4 cursor-default transition-all hover:border-black/[0.12]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-bold text-slate-400 font-mono w-14 sm:w-16">
                      {act.time}
                    </div>
                    <div className="w-1.5 h-7 sm:h-8 rounded-full bg-emerald-600" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">{act.title}</h3>
                      {act.detail && (
                        <p className="text-[11px] sm:text-xs text-slate-600 font-medium">{act.detail}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-950/[0.04] text-emerald-950 border border-emerald-900/10 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                    {act.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Photo memories callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/90 border border-black/[0.06] shadow-xs rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/[0.05] border border-emerald-900/10 text-emerald-800 flex items-center justify-center shrink-0">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                <strong className="font-bold text-slate-900">Daily Photo Album:</strong> Capture your companion’s cuteness every day. Free users enjoy 1 daily photo; Premium members can upload up to 5 daily memories!
              </p>
            </motion.div>

          </motion.div>

          {/* Right Column: Screenshot Phone Frame (comes in from right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={scrollTransition}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative">
              <PhoneFrame
                src="/screenshots/journal-screen.webp"
                alt="Pet Horizon Pet Daily Journal Timeline Screen"
                frameClassName="w-[220px] sm:w-[300px]"
              />

              {/* Floating Today's Photos Indicator */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl p-3 shadow-xl border border-black/[0.06] items-center gap-2.5 z-30 max-w-[200px] text-left"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950/[0.05] text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <Camera className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Journal Memories</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Photo Saved to Timeline</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
