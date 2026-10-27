import { Calendar, Users, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GooglePlayBadge, AppStoreBadge, QrScanButton } from '../AppBadges';
import { PLAY_STORE_URL } from '../../config/siteConfig';

interface HeroContentProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function HeroContent({ onOpenQrModal, onOpenIosModal }: HeroContentProps) {
  return (
    <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-3.5 sm:gap-4.5">
      {/* Top Badges Row: Live Google Play & Social Proof */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <div className="inline-flex items-center space-x-2.5 bg-emerald-950/[0.04] border border-emerald-900/10 text-emerald-950 px-3.5 py-1.5 rounded-full w-fit shadow-2xs whitespace-nowrap shrink-0">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Live on Google Play
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white border border-black/[0.06] rounded-full px-3 py-1 shadow-2xs">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[9px] font-bold flex items-center justify-center ring-1 ring-white">🐾</div>
            <div className="w-5 h-5 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center ring-1 ring-white">🐕</div>
            <div className="w-5 h-5 rounded-full bg-amber-600 text-white text-[9px] font-bold flex items-center justify-center ring-1 ring-white">🐈</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
            <span className="text-amber-500">★★★★★</span>
            <span>5.0</span>
            <span className="text-slate-400 font-normal hidden sm:inline">• 1,200+ Pet Families</span>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black text-[#17191C] tracking-tight leading-[1.12]">
        The Complete Daily Care &amp;{' '}
        <span className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent">
          Family Hub
        </span>{' '}
        For Your Pets
      </h1>

      {/* Subheadline */}
      <p className="sm:hidden text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
        Track daily feedings, walk times, and medication alarms with real time alerts. Invite family members and pet sitters to coordinate care, log photo memories, and keep your companion healthy.
      </p>
      <p className="hidden sm:block text-sm sm:text-base lg:text-[15px] xl:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
        Organize daily routines, medication alarms, and vet vaccinations. Invite family members and caretakers with QR codes to share care duties, log photo memories on your activity timeline, and keep pet expenses in check.
      </p>

      {/* Core Pillars Bullet Points */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5 w-full max-w-xl">
        {[
          { icon: Calendar, text: 'Routine & medicine reminders' },
          { icon: Users, text: 'Family Hub & QR caretaker invites' },
          { icon: Camera, text: 'Daily photo journal & walk tracking' },
          { icon: ShieldCheck, text: 'Dogs, Cats, Birds, Rabbits & more' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-950/[0.06] rounded-xl px-3 py-1.5 shadow-2xs text-slate-700 font-semibold text-xs sm:text-[13px] hover:border-emerald-700/20 transition-colors"
          >
            <div className="w-4.5 h-4.5 rounded-full bg-emerald-600/10 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <span className="truncate">{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 sm:pt-2">
        <GooglePlayBadge href={PLAY_STORE_URL} className="px-5 py-2.5 rounded-full shadow-lg" />
        <AppStoreBadge onClick={onOpenIosModal} className="px-5 py-2.5 rounded-full shadow-lg" />
        {onOpenQrModal && (
          <div className="hidden sm:block">
            <QrScanButton onClick={onOpenQrModal} className="px-4 py-2.5 rounded-full shadow-sm" />
          </div>
        )}
      </div>

      {/* Free Tier Callout */}
      <div className="hidden sm:flex items-center gap-2.5 pt-1 text-xs text-slate-500 font-medium">
        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free to Start
        </span>
        <span>•</span>
        <span>No credit card required</span>
        <span>•</span>
        <span>Sync across your household</span>
      </div>
    </div>
  );
}
