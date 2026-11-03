import { motion } from 'framer-motion';
import { Flame, Droplets, Utensils } from 'lucide-react';
import { CalorieCalculations } from './calorieCalculatorData';

interface CalorieMetricsDisplayProps {
  displayName: string;
  calculations: CalorieCalculations;
  animatedMer: number;
  animatedGrams: number;
  animatedWater: number;
}

export default function CalorieMetricsDisplay({
  displayName,
  calculations,
  animatedMer,
  animatedGrams,
  animatedWater
}: CalorieMetricsDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-[#0e3b24] text-white shadow-md relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-300/90 mb-1">
        <span>Daily Target for {displayName}</span>
        <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
          <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
          WSAVA RER {calculations.rer} kcal
        </span>
      </div>

      <div className="flex items-baseline gap-1.5 my-0.5">
        <span className="text-3xl font-black tracking-tight text-white font-mono">
          {animatedMer}
        </span>
        <span className="text-xs font-bold text-emerald-400">kcal / day (MER)</span>
      </div>

      {/* 2-Column Metrics */}
      <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10">
        <div className="bg-white/5 rounded-xl p-2 backdrop-blur-xs">
          <div className="flex items-center gap-1 text-[10px] text-slate-300 font-medium">
            <Utensils className="w-3 h-3 text-emerald-400" />
            <span>Feed / Meal</span>
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="text-base font-extrabold text-white font-mono">{animatedGrams}</span>
            <span className="text-[10px] text-slate-400 font-bold">grams</span>
          </div>
          <span className="text-[9px] text-emerald-300/80 font-mono block">
            ≈ {calculations.cupsPerMeal} cups
          </span>
        </div>

        <div className="bg-white/5 rounded-xl p-2 backdrop-blur-xs">
          <div className="flex items-center gap-1 text-[10px] text-slate-300 font-medium">
            <Droplets className="w-3 h-3 text-cyan-400" />
            <span>Daily Fresh Water</span>
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="text-base font-extrabold text-white font-mono">{animatedWater}</span>
            <span className="text-[10px] text-slate-400 font-bold">ml</span>
          </div>
          <span className="text-[9px] text-cyan-300/80 font-mono block">
            ≈ {(calculations.dailyWaterMl / 236.5).toFixed(1)} cups
          </span>
        </div>
      </div>
    </motion.div>
  );
}
