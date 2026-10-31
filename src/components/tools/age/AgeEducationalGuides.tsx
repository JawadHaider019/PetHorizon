import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Scale,
  HeartPulse,
  Activity,
  Download,
  QrCode,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { fadeInUp } from '../../../config/animationVariants';
import { PLAY_STORE_URL } from '../../../config/siteConfig';

interface AgeEducationalGuidesProps {
  onOpenQrModal: () => void;
}

export default function AgeEducationalGuides({ onOpenQrModal }: AgeEducationalGuidesProps) {
  const [activeStageTab, setActiveStageTab] = useState<'pediatric' | 'young' | 'mature' | 'senior'>('young');

  return (
    <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6 order-2 lg:order-1">
      {/* Desktop-Only Header Badge & Title */}
      <div className="hidden lg:block space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
          <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>AAHA Canine &amp; Feline Life Stage Guidelines</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#17191C] tracking-tight leading-[1.15]">
          Official Pet Age in Human Years Calculator
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          Convert your dog or cat&apos;s age into precise human years using official AAHA veterinary maturation curves. Understand breed weight divergence and schedule life-stage health milestones.
        </p>
      </div>

      {/* Core Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Non-Linear Curve</h3>
          <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
            Year 1 equals 15 human years. Maturation slows down as skeletal plates fuse.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Breed Size Scaling</h3>
          <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
            Large &amp; giant breeds age significantly faster than small companion dogs.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
            <HeartPulse className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Clinical Milestones</h3>
          <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
            Know exactly when to begin bi-annual blood screens and joint support.
          </p>
        </div>
      </div>

      {/* Interactive Life Stage Clinical Guidance */}
      <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-700" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
              AAHA Life Stage Clinical Benchmarks
            </h3>
          </div>
          <span className="text-[10px] font-bold text-slate-500">Veterinary Protocol</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => setActiveStageTab('pediatric')}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStageTab === 'pediatric'
                ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">0 – 1 Year</span>
            <span className="text-[10px] text-slate-500">Puppy / Kitten</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStageTab('young')}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStageTab === 'young'
                ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">1 – 6 Years</span>
            <span className="text-[10px] text-emerald-700">Young Adult</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStageTab('mature')}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStageTab === 'mature'
                ? 'border-blue-500 bg-blue-50/70 text-blue-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">7 – 10 Years</span>
            <span className="text-[10px] text-slate-500">Mature Adult</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStageTab('senior')}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStageTab === 'senior'
                ? 'border-purple-500 bg-purple-50/70 text-purple-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">11+ Years</span>
            <span className="text-[10px] text-purple-700">Senior / Geriatric</span>
          </button>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
          {activeStageTab === 'pediatric' && (
            <p>
              <strong className="text-amber-800">Pediatric Phase (0–1 Year):</strong> Corresponds to human infancy through age 15. Prioritize the core vaccine series (DHPP/FVRCP), microchipping, rabies immunization, and high-protein growth nutrition before growth plates close.
            </p>
          )}
          {activeStageTab === 'young' && (
            <p>
              <strong className="text-emerald-800">Young Adult Phase (1–6 Years):</strong> Prime physical vitality and metabolic stability (human ~15–40). Focus on daily dental plaque prevention, weight control after spay/neuter, annual wellness exams, and parasite protection.
            </p>
          )}
          {activeStageTab === 'mature' && (
            <p>
              <strong className="text-blue-800">Mature Adult Phase (7–10 Years):</strong> Corresponds to human middle age (~44–56). Establish baseline geriatric blood chemistry (liver enzymes, creatinine, SDMA, and thyroid panels) to detect subclinical changes early.
            </p>
          )}
          {activeStageTab === 'senior' && (
            <p>
              <strong className="text-purple-800">Senior &amp; Geriatric Phase (11+ Years):</strong> Twilight golden years (human 60+). Shift to bi-annual (every 6 months) veterinary exams, orthopedic heated bedding, kidney and blood pressure surveillance, and cognitive support.
            </p>
          )}
        </div>
      </div>

      {/* Debunking the 7:1 Myth Callout */}
      <div className="p-4 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-emerald-300 flex items-center justify-center shrink-0">
          <Stethoscope className="w-6 h-6" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xs sm:text-sm font-bold text-white">Why the Traditional &quot;7:1&quot; Rule is Inaccurate</h3>
          <p className="text-xs text-emerald-100/80 mt-1 leading-snug">
            Multiplying by 7 overlooks that pets mature 15 times faster than humans during infancy, and ignores that a 100 lb Mastiff ages over twice as quickly as a 10 lb Chihuahua in adulthood.
          </p>
        </div>
      </div>

      {/* Download Action CTAs */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-sm shadow-md shadow-emerald-900/15 transition-all hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4" />
          <span>Get Pet Horizon on Google Play</span>
        </a>

        <button
          type="button"
          onClick={onOpenQrModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-xs cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-emerald-700" />
          <span>Scan QR Code</span>
        </button>
      </div>

      <div className="text-[11px] text-slate-600 flex items-center gap-2 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Evidence-based life stage calculations backed by AAHA and AVMA veterinary clinical standards.</span>
      </div>
    </motion.div>
  );
}

