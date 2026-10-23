import { ArrowUpRight } from 'lucide-react';
import { GooglePlayIcon, AppleIcon } from './AppBadges';

export default function Footer() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <footer className="bg-[#F5F6F8] text-slate-700 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-200">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 text-left flex flex-col gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center p-1 shadow-md shadow-emerald-600/20">
                <img
                  src="/app-icon.png"
                  alt="Pet Horizon"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/applogo.png';
                  }}
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Pet<span className="text-emerald-600 font-extrabold">Horizon</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              The complete pet companion assistant. Manage daily feeding routines, medication alerts, vaccination dates, shared family caretaking, and photo memories all in one app.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live on Google Play
              </span>
              <span className="text-xs text-slate-500">Android &bull; Worldwide</span>
            </div>
          </div>

          {/* Product Links (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Care Schedules
                </a>
              </li>
              <li>
                <a href="#family-hub" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Family Hub
                </a>
              </li>
              <li>
                <a href="#journal" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Daily Journal
                </a>
              </li>
              <li>
                <a href="#tour" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Interactive Tour
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Community (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#faq" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:support@pethorizon.app" className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  Email Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* App Download (3 Cols) */}
          <div className="md:col-span-3 text-left flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Download App
            </h4>
            
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between transition-all shadow-xs hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <GooglePlayIcon className="w-6 h-6 shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Get it on</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">Google Play Store</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between shadow-xs select-none">
              <div className="flex items-center gap-3">
                <AppleIcon className="w-6 h-6 text-slate-800 shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Download on</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">Apple App Store</span>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded-full shrink-0">
                Coming Soon
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
            <a href="#faq" className="hover:text-emerald-700 transition-colors">Privacy</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">Terms</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Help</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
