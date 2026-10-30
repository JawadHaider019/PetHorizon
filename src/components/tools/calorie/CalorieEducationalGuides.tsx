import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Clock,
  Scale,
  Droplets,
  Activity,
  Utensils,
  Download,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import { fadeInUp } from '../../../config/animationVariants';
import { PLAY_STORE_URL } from '../../../config/siteConfig';

interface CalorieEducationalGuidesProps {
  onOpenQrModal: () => void;
}

export default function CalorieEducationalGuides({ onOpenQrModal }: CalorieEducationalGuidesProps) {
  const [activeBcsTab, setActiveBcsTab] = useState<'under' | 'ideal' | 'over'>('ideal');

  return (
    <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6 order-2 lg:order-1">
      {/* Desktop-Only Header Badge & Title */}
      <div className="hidden lg:block space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.06] border border-emerald-800/15">
          <Calculator className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>WSAVA Veterinary Nutritional Standards</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#17191C] tracking-tight leading-[1.15]">
          Precision Pet Calorie &amp; Daily Portion Calculator
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          Calculate exact resting metabolic energy (RER) and maintenance calories (MER) for dogs and cats. Use veterinary gram measurements to prevent obesity, malnutrition, and accidental double-feeding.
        </p>
      </div>

      {/* Core Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
            <Clock className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">Anti-Collision Lock</h4>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
            Family sync prevents pets getting fed twice when you aren&apos;t home.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
            <Scale className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">Gram Precision</h4>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
            Weighing food in grams eliminates the 25% error margin of cups.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
            <Droplets className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">Hydration Target</h4>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
            Auto-calculated fresh water goals protect companion renal health.
          </p>
        </div>
      </div>

      {/* Interactive Body Condition Score Guide */}
      <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-700" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
              Body Condition Score (BCS) Guidance
            </h3>
          </div>
          <span className="text-[10px] font-bold text-slate-400">Clinical Scale</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setActiveBcsTab('under')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBcsTab === 'under'
                ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">BCS 1–3</span>
            <span className="text-[10px] text-slate-500">Underweight</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveBcsTab('ideal')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBcsTab === 'ideal'
                ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">BCS 4–5</span>
            <span className="text-[10px] text-emerald-700">Ideal Body Shape</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveBcsTab('over')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBcsTab === 'over'
                ? 'border-rose-500 bg-rose-50/70 text-rose-950 font-bold shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="text-xs font-bold block">BCS 6–9</span>
            <span className="text-[10px] text-slate-500">Overweight</span>
          </button>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
          {activeBcsTab === 'under' && (
            <p>
              <strong className="text-amber-800">Underweight:</strong> Ribs, spine, and pelvic bones are easily visible without palpable fat. Recommend selecting the <em>&quot;Active&quot;</em> multiplier to gradually rebuild healthy muscle mass with veterinary guidance.
            </p>
          )}
          {activeBcsTab === 'ideal' && (
            <p>
              <strong className="text-emerald-800">Ideal Body Condition:</strong> Ribs are easily palpable with a slight fat cover. Well-proportioned waist is visible behind the ribs from above. Maintain your current calculated daily portions.
            </p>
          )}
          {activeBcsTab === 'over' && (
            <p>
              <strong className="text-rose-800">Overweight:</strong> Heavy fat cover over ribs, absence of visible waistline, and distended abdomen. Recommend switching the calculator multiplier to <em>&quot;Weight Loss&quot;</em> (1.0x RER for dogs, 0.9x RER for cats) to ensure a safe, steady caloric deficit.
            </p>
          )}
        </div>
      </div>

      {/* 90/10 Veterinary Rule Callout */}
      <div className="p-4 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-emerald-300 flex items-center justify-center shrink-0">
          <Utensils className="w-6 h-6" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-xs sm:text-sm font-bold text-white">The 90/10 Calorie Allocation Rule</h4>
          <p className="text-xs text-emerald-100/80 mt-1 leading-snug">
            Veterinary nutritionists advise that training treats and dental sticks should never exceed <strong>10%</strong> of daily calories. The remaining <strong>90%</strong> must come from nutritionally complete meals.
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

      <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Evidence-based clinical formulas verified against WSAVA &amp; AAHA guidelines.</span>
      </div>
    </motion.div>
  );
}
