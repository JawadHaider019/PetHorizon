import { Heart, Smartphone, ArrowUpRight } from 'lucide-react';
import googlePlayImg from '../assets/google-play.svg';
import appStoreImg from '../assets/app-store.svg';

export default function Footer() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-900">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 text-left flex flex-col gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center p-1 shadow-md shadow-emerald-500/20">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon"
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Pet<span className="text-emerald-500 font-extrabold">Horizon</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              The complete pet companion assistant. Manage daily feeding routines, medication alerts, vaccination dates, shared family caretaking, and photo memories all in one app.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Google Play
              </span>
              <span className="text-xs text-slate-500">Android &bull; Worldwide</span>
            </div>
          </div>

          {/* Product Links (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Care Schedules
                </a>
              </li>
              <li>
                <a href="#family-hub" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Family Hub
                </a>
              </li>
              <li>
                <a href="#journal" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Daily Journal
                </a>
              </li>
              <li>
                <a href="#tour" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Interactive Tour
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Community (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:support@pethorizon.app" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Email Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* App Download (3 Cols) */}
          <div className="md:col-span-3 text-left flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Download App
            </h4>
            
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-3 flex items-center gap-3 transition-all"
            >
              <img src={googlePlayImg} alt="Google Play" className="h-6 w-auto" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-bold text-slate-400">Get it on</span>
                <span className="text-xs font-black text-white">Google Play Store</span>
              </div>
            </a>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex items-center justify-between opacity-75">
              <div className="flex items-center gap-3">
                <img src={appStoreImg} alt="App Store" className="h-6 w-auto grayscale" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase font-bold text-slate-500">App Store</span>
                  <span className="text-xs font-bold text-slate-300">iOS Edition</span>
                </div>
              </div>
              <span className="text-[9px] font-bold uppercase bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded-full">
                Soon
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-medium text-center sm:text-left">
            Pet Horizon &copy; {new Date().getFullYear()} &bull; All Rights Reserved. Built for pet lovers worldwide.
          </p>
          <div className="flex items-center gap-4 font-medium">
            <a href="#faq" className="hover:text-slate-400 transition-colors">Privacy</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Terms</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Help</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
