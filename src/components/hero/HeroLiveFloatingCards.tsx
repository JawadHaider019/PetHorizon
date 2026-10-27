import { Pill, Footprints, Users, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';

export default function HeroLiveFloatingCards() {
  return (
    <>
      {/* CARD 1: TOP-LEFT — Medication Routine Alarm */}
      <div className="hidden xl:block absolute -left-[220px] 2xl:-left-[260px] top-[18%] -translate-y-1/2 pointer-events-none select-none z-20">
        <div className="animate-hero-card-float [animation-delay:0s]">
          <div className="w-[245px] rounded-[24px] bg-white/95 backdrop-blur-md p-3.5 border border-black/[0.06] shadow-[0_12px_36px_rgba(18,91,70,0.12)]">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#125B46] flex items-center justify-center shrink-0">
                  <Pill className="w-4 h-4 text-[#125B46]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Daily Routine</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Heartworm Pill</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                8:00 AM
              </span>
            </div>
            <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Logged by Mom</span>
              <span className="inline-flex items-center gap-1 font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                <Flame className="w-3 h-3 text-amber-500" />
                14-Day Streak
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2: BOTTOM-LEFT — GPS Walk & Activity Tracker */}
      <div className="hidden xl:block absolute -left-[230px] 2xl:-left-[270px] bottom-[18%] pointer-events-none select-none z-20">
        <div className="animate-hero-card-float [animation-delay:1.2s]">
          <div className="w-[248px] rounded-[24px] bg-white/95 backdrop-blur-md p-3.5 border border-black/[0.06] shadow-[0_12px_36px_rgba(18,91,70,0.12)]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#EAF5EE] text-[#125B46] flex items-center justify-center shrink-0">
                <Footprints className="w-4 h-4 text-[#125B46]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Morning Park Route</p>
                <p className="text-[11px] text-slate-500 font-medium">2.4 km • 32 mins</p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FBF9F5] p-2 flex items-center justify-between border border-black/[0.03]">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🐕</span>
                <span className="text-[11px] font-bold text-slate-800">Milo &amp; Luna</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#125B46]">
                <CheckCircle2 className="w-3 h-3 text-[#125B46]" /> Complete
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3: TOP-RIGHT — Family Hub Caretaker QR Sync */}
      <div className="hidden xl:block absolute -right-[220px] 2xl:-right-[260px] top-[18%] -translate-y-1/2 pointer-events-none select-none z-20">
        <div className="animate-hero-card-float [animation-delay:0.7s]">
          <div className="w-[245px] rounded-[24px] bg-white/95 backdrop-blur-md p-3.5 border border-black/[0.06] shadow-[0_12px_36px_rgba(18,91,70,0.12)]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-amber-600">Family Caretaker</p>
                <p className="text-xs font-bold text-slate-900">Sarah joined household</p>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Synced via QR Code</span>
              <span className="inline-flex items-center gap-1 font-bold text-[#125B46] bg-[#EAF5EE] px-2 py-0.5 rounded-full text-[10px]">
                ⚡ Live Sync
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 4: BOTTOM-RIGHT — Pro Health & Vaccine Records */}
      <div className="hidden xl:block absolute -right-[230px] 2xl:-right-[270px] bottom-[30%] pointer-events-none select-none z-20">
        <div className="animate-hero-card-float [animation-delay:1.9s]">
          <div className="w-[248px] rounded-[24px] bg-white/95 backdrop-blur-md p-3.5 border border-black/[0.06] shadow-[0_12px_36px_rgba(18,91,70,0.12)]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#125B46] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#125B46]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Rabies &amp; DHPP Record</p>
                <p className="text-[11px] text-emerald-700 font-semibold">Verified Safe • PDF Ready</p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FBF9F5] p-2 flex items-center justify-between border border-black/[0.03] text-[11px]">
              <span className="text-slate-500 font-medium">Next Due in 11 Mos</span>
              <span className="font-extrabold text-slate-800 bg-white border border-slate-200/60 px-2 py-0.5 rounded-md shadow-2xs text-[10px]">
                Vault 📁
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
