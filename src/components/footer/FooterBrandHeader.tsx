import { GooglePlayBadge, AppStoreBadge } from '../AppBadges';
import { PLAY_STORE_URL } from '../../config/siteConfig';

export default function FooterBrandHeader() {
  return (
    <div className="pb-8 sm:pb-10 border-b border-white/[0.08]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left">
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center p-2 shadow-lg shadow-emerald-900/40 ring-1 ring-emerald-400/30">
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
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none block">
                Pet<span className="text-emerald-400 font-extrabold">Horizon</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-bold block mt-1">
                Smart Companion Care
              </span>
            </div>
          </div>

          <span className="hidden sm:block h-8 w-px bg-white/10 mx-2" />

          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Synchronizing daily feedings, walk routines, medication alarms, and veterinary milestones for companion families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto shrink-0 max-w-sm sm:max-w-none">
          <GooglePlayBadge href={PLAY_STORE_URL} className="w-full justify-center shadow-md shadow-black/40" />
          <AppStoreBadge className="w-full justify-center shadow-md shadow-black/40" />
        </div>
      </div>
    </div>
  );
}
