import { Users, QrCode, CheckCircle, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';

export default function FamilyHubSection() {
  const steps = [
    {
      num: '01',
      title: 'Create Your Pet Family',
      desc: 'Set up your household in seconds. Add your pet companions and configure routine care parameters.',
      icon: Users
    },
    {
      num: '02',
      title: 'Generate QR or Invite Code',
      desc: 'Create an instant invitation code or display a QR code directly from your Family Hub tab.',
      icon: QrCode
    },
    {
      num: '03',
      title: 'Scan & Join in 1 Tap',
      desc: 'Your spouse, roommate, or pet sitter scans the code from their own phone to join the care team.',
      icon: Smartphone
    },
    {
      num: '04',
      title: 'Live Shared Care Updates',
      desc: 'When anyone checks off a morning walk or medicine dose, everyone sees the status immediately.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="family-hub" className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Device Screenshot (comes in from left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative"
          >
            <div className="relative">
              <PhoneFrame
                src="/screenshots/family-screen.png"
                alt="Pet Horizon Family Hub Co-Parenting Screen"
                frameClassName="w-[270px] sm:w-[300px]"
              />

              {/* Floating Companion Avatar Pill */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute -top-5 -left-6 sm:-left-12 bg-white text-slate-900 rounded-2xl p-2.5 shadow-xl border border-emerald-200/90 items-center gap-2.5 z-30 text-left"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-100 shadow-2xs shrink-0">
                  <img src="/cute-3d-pets.jpg" alt="Pet Companions" className="w-full h-full object-cover" />
                </div>
                <div className="pr-1.5">
                  <p className="text-[9px] font-black uppercase tracking-wider text-emerald-800">Shared Pet Profile</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Luna &amp; Milo Synced</p>
                </div>
              </motion.div>

              {/* Floating QR Code Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-4 sm:-right-14 lg:-right-16 bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-xl border border-emerald-200 flex items-center gap-3 z-30 w-[190px] sm:w-[210px] text-left"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-700">QR Deep Linking</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Instant Caretaker Sync</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Explanatory Copy & 4 Steps (comes in from right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left flex flex-col gap-6 order-1 lg:order-2"
          >
            
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
              Caretaker Collaboration
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pet Care is a Team Effort. Manage It Together.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              No more texting <span className="italic font-medium text-slate-800">"Did you feed the dog?"</span> or wondering if evening medications were administered. Pet Horizon keeps everyone on the exact same page in real-time.
            </p>

            {/* 4 Step Timeline with Responsive Cards & Scroll Entrances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? -25 : 25 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -4, boxShadow: '0 14px 28px -6px rgba(46, 125, 50, 0.12)' }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                    className="bg-[#F5F6F8] border border-slate-200/80 rounded-2xl p-4.5 flex flex-col gap-2 hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors shadow-xs cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-emerald-700 font-mono tracking-wider">
                        {st.num}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all text-sm"
              >
                <span>Try Family Hub on Android</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 font-medium">
                Included in Free Plan • 1 Family &amp; Caretaker connection
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
