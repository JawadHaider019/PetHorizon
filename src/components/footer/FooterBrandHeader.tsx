import { GooglePlayBadge, AppStoreBadge } from '../AppBadges';
import { PLAY_STORE_URL } from '../../config/siteConfig';

export default function FooterBrandHeader() {
  return (
    <div className="pb-8 sm:pb-10 border-b border-slate-200/80">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left">
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#166534] flex items-center justify-center p-2 shadow-sm shadow-emerald-900/20">
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
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mt-1">
                Smart Companion Care
              </span>
            </div>
          </div>

          <span className="hidden sm:block h-8 w-px bg-slate-200 mx-2" />

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Synchronizing daily feedings, walk routines, medication alarms, and veterinary milestones for companion families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto shrink-0 max-w-sm sm:max-w-none">
          <GooglePlayBadge href={PLAY_STORE_URL} className="w-full justify-center shadow-xs" />
          <AppStoreBadge className="w-full justify-center shadow-xs" />
        </div>
      </div>
    </div>
  );
}
