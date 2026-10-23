import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import googlePlayImg from '../assets/google-play.svg';
import appStoreImg from '../assets/app-store.svg';

export default function Hero() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  useEffect(() => {
    document.title = 'Pet Horizon – Smart Pet Care, Family Hub & Daily Routine Tracker';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Track pet care schedules, daily feeding routines, medication reminders, shared family caretaking via QR codes, and daily journal logs. Available now on Android.';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50/40"
    >
      {/* Background ambient light blobs */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-teal-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Authentic Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-left flex flex-col gap-6"
          >
            {/* Live Play Store Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-emerald-100/70 border border-emerald-200/80 text-emerald-900 px-4 py-1.5 rounded-full w-fit shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Now Live on Google Play Store
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              The Complete Daily Care &amp;{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Family Hub
              </span>{' '}
              For Your Pets
            </h1>

            {/* Subheadline accurately describing real app features */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Organize daily routines, medication alarms, and vet vaccinations. Invite family members and caretakers with QR codes to share care duties, log photo memories on your activity timeline, and keep pet expenses in check.
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { icon: Calendar, text: 'Routine & medicine reminders' },
                { icon: Users, text: 'Family Hub & QR caretaker invites' },
                { icon: Sparkles, text: 'Daily photo journal & walk tracking' },
                { icon: ShieldCheck, text: 'Dogs, Cats, Birds, Rabbits & more' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl shadow-slate-900/15 border border-slate-700 transition-all duration-200"
              >
                <img src={googlePlayImg} alt="Google Play" className="h-6 w-auto" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Get it on</span>
                  <span className="text-sm font-black text-white leading-tight">Google Play</span>
                </div>
              </motion.a>

              <div className="relative group cursor-not-allowed">
                <div className="bg-slate-100 text-slate-400 font-bold px-6 py-3.5 rounded-2xl flex items-center gap-3.5 border border-slate-200 opacity-80">
                  <img src={appStoreImg} alt="App Store" className="h-6 w-auto grayscale opacity-60" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Download on</span>
                    <span className="text-sm font-bold text-slate-600 leading-tight">App Store</span>
                  </div>
                  <span className="text-[9px] font-black uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-1">
                    Coming Soon
                  </span>
                </div>
              </div>

              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <span>Explore App Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Free Tier Callout */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free to Start
              </span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Sync across your devices</span>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Realistic App Device Frame & 3D Pet Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
          >
            {/* Background 3D Pet Mascot Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-8 w-44 sm:w-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20"
            >
              <img
                src="/3d-pets-hero.jpg"
                alt="3D Puppy and Kitten Pet Horizon Mascots"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-gradient-to-t from-emerald-950/90 to-emerald-900/70 text-white text-left">
                <p className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                  All Companions Welcome
                </p>
                <p className="text-xs font-bold leading-tight mt-0.5">
                  Dogs, Cats, Birds, Rabbits &amp; More
                </p>
              </div>
            </motion.div>

            {/* Central Phone Mockup showcasing the authentic Play Store Schedule Screen */}
            <div className="relative w-[280px] sm:w-[310px] rounded-[3rem] p-3 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.25)] border-4 border-slate-800">
              {/* Phone Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Screen Frame */}
              <div className="relative rounded-[2.3rem] overflow-hidden bg-emerald-600 aspect-[9/19.5] shadow-inner">
                <img
                  src="/screenshots/schedule-screen.png"
                  alt="Pet Horizon Care Schedule App Screen"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Live Card: Schedule Task Status */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-emerald-100 flex items-center gap-3 max-w-[240px] text-left z-30"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shrink-0">
                  🥣
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Daily Routine</p>
                  <p className="text-xs font-bold text-slate-900">Breakfast (2 cups) • Completed</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Logged at 11:20 AM</p>
                </div>
              </motion.div>

              {/* Floating Live Card: Family Hub Connection */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-6 sm:-right-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-emerald-100 flex items-center gap-2.5 max-w-[210px] text-left z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Family Hub</p>
                  <p className="text-xs font-bold text-slate-900">Care Team Synced</p>
                  <p className="text-[10px] text-slate-500">QR Code Joined</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}