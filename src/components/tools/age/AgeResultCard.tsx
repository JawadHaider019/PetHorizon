import { motion } from 'framer-motion';
import {
  Stethoscope,
  CheckCircle2,
  HeartPulse,
  QrCode,
  Share2
} from 'lucide-react';
import { PetType, DogBreedSize, LifeStageDetails, DOG_SIZES } from './ageCalculatorData';

interface AgeResultCardProps {
  petType: PetType;
  dogSize: DogBreedSize;
  petName: string;
  humanAge: number;
  stageDetails: LifeStageDetails;
  copied: boolean;
  onOpenQrModal: () => void;
  onShareResult: () => void;
}

export default function AgeResultCard({
  petType,
  dogSize,
  petName,
  humanAge,
  stageDetails,
  copied,
  onOpenQrModal,
  onShareResult
}: AgeResultCardProps) {
  return (
    <motion.div
      layout
      className={`rounded-3xl p-6 sm:p-8 border-2 transition-all shadow-lg ${stageDetails.borderColor} bg-linear-to-br from-white via-slate-50/50 to-emerald-50/20`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${stageDetails.badgeColor}`}
            >
              {stageDetails.stage} Stage
            </span>
            <span className="text-xs font-bold text-slate-500">
              • {petType === 'dog' ? `${DOG_SIZES.find((s) => s.id === dogSize)?.label}` : 'Domestic Feline'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {petName.trim()
              ? `${petName}’s Biological Age`
              : `${petType === 'dog' ? 'Your Dog' : 'Your Cat'}’s Human Equivalent`}
          </h2>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Human Years Equivalent
          </div>
          <div className="text-4xl sm:text-5xl font-black text-emerald-800 tracking-tight flex items-baseline sm:justify-end gap-1.5">
            <span>{humanAge}</span>
            <span className="text-lg font-bold text-slate-600">Years Old</span>
          </div>
        </div>
      </div>

      {/* Biological Progress Gauge */}
      <div className="py-6 border-b border-slate-200/60">
        <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
          <span>Relative Lifespan Spectrum</span>
          <span className="text-emerald-800 font-extrabold">{stageDetails.lifePercentage}% Life Stage</span>
        </div>
        <div className="h-3 w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-linear-to-r from-emerald-500 via-teal-500 to-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${stageDetails.lifePercentage}%` }}
          />
        </div>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {stageDetails.description}
        </p>
      </div>

      {/* Health Milestones Checklist */}
      <div className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Stethoscope className="w-4 h-4 text-emerald-700" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
            Recommended Health Milestones for {stageDetails.stage}s
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {stageDetails.milestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
            >
              <div className="flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-extrabold text-slate-900 leading-tight">
                  {item.title}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Veterinary Advice Callout */}
        <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-4 flex items-start gap-3 mb-6">
          <HeartPulse className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-950 leading-relaxed">
            <span className="font-extrabold text-emerald-900">Veterinary Clinical Advice: </span>
            {stageDetails.vetAdvice}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onOpenQrModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-700/20 transition-all cursor-pointer text-sm"
          >
            <QrCode className="w-4 h-4" />
            <span>Sync Milestones to PetHorizon App</span>
          </button>

          <button
            type="button"
            onClick={onShareResult}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold px-5 py-3.5 rounded-2xl border border-slate-200 transition-all cursor-pointer text-sm shadow-2xs"
          >
            <Share2 className="w-4 h-4 text-slate-500" />
            <span>{copied ? 'Copied to Clipboard! 🎉' : 'Share Milestone Card'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
