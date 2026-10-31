import { GooglePlayBadge, AppStoreBadge } from '../AppBadges';
import { PLAY_STORE_URL, INSTAGRAM_URL } from '../../config/siteConfig';

export default function FooterBrandHeader() {
  return (
    <div className="flex flex-col gap-4 text-left">
      {/* Brand Identity */}
      <div className="flex items-center space-x-3 shrink-0">
        <div className="w-10 h-10 rounded-2xl bg-[#166534] flex items-center justify-center p-2 shadow-xs shadow-emerald-900/20">
          <img
            src="/ph-logo-white.png"
            alt="Pet Horizon"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/ph-logo-mark.png';
            }}
          />
        </div>
        <div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none block">
            Pet<span className="text-[#166534] font-extrabold">Horizon</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-bold block mt-1">
            Smart Companion Care
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
        Synchronizing daily feedings, walk routines, medication alarms, and veterinary milestones for companion families worldwide.
      </p>

      {/* Badges */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-1 max-w-xs sm:max-w-none">
        <GooglePlayBadge href={PLAY_STORE_URL} className="shadow-xs" />
        <AppStoreBadge className="shadow-xs" />
      </div>

      {/* Official Social Channel */}
      <div className="pt-0.5">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Follow Pet Horizon on Instagram (@pethorizon.app)"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white border border-emerald-900/10 hover:border-emerald-700/30 text-xs font-semibold text-slate-700 hover:text-[#166534] shadow-2xs transition-all duration-200 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform shrink-0"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span>Follow <strong className="font-bold text-slate-900 group-hover:text-[#166534]">@pethorizon.app</strong> on Instagram</span>
        </a>
      </div>
    </div>
  );
}
