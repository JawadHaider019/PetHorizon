import { CheckCircle2, Watch, Bell } from 'lucide-react';

export default function IosWaitlistBenefits() {
  return (
    <div className="my-5 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
      <div className="flex items-start gap-3 text-xs text-slate-700">
        <div className="w-5 h-5 rounded-md bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="font-bold text-slate-900 block">Direct TestFlight Invitation</span>
          <span className="text-slate-500 text-[11px]">Install via Apple TestFlight app with one tap</span>
        </div>
      </div>

      <div className="flex items-start gap-3 text-xs text-slate-700">
        <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
          <Watch className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="font-bold text-slate-900 block">Apple Watch &amp; Lockscreen Widgets</span>
          <span className="text-slate-500 text-[11px]">Real-time feeding timers on your wrist and lockscreen</span>
        </div>
      </div>

      <div className="flex items-start gap-3 text-xs text-slate-700">
        <div className="w-5 h-5 rounded-md bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
          <Bell className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="font-bold text-slate-900 block">Complimentary Premium Beta Trial</span>
          <span className="text-slate-500 text-[11px]">Free full feature access for verified beta testers</span>
        </div>
      </div>
    </div>
  );
}
