import { GooglePlayBadge, AppStoreBadge } from '../AppBadges';
import { PLAY_STORE_URL } from '../../config/siteConfig';

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
    </div>
  );
}
