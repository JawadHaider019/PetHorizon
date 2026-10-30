import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, HelpCircle, ChevronDown, Award, Download } from 'lucide-react';
import { AGE_FAQS } from './ageCalculatorData';

interface AgeMatrixAndFaqProps {
  onOpenQrModal: () => void;
  onNavigateHome: () => void;
}

export default function AgeMatrixAndFaq({ onOpenQrModal, onNavigateHome }: AgeMatrixAndFaqProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* AAHA Reference Conversion Table */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex items-center gap-2.5 mb-2">
          <Calendar className="w-5 h-5 text-emerald-700" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Veterinary Life Stage Conversion Matrix (AAHA Reference)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          The American Animal Hospital Association (AAHA) and AVMA define canine and feline life stages by biological maturation:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3 px-3.5">Calendar Age</th>
                <th className="py-3 px-3.5">Small Breed (&lt;20 lbs)</th>
                <th className="py-3 px-3.5">Medium (21-50 lbs)</th>
                <th className="py-3 px-3.5">Large (51-90 lbs)</th>
                <th className="py-3 px-3.5">Giant (90+ lbs)</th>
                <th className="py-3 px-3.5 bg-emerald-50 text-emerald-900">Domestic Cat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">1 Year</td>
                <td className="py-2.5 px-3.5">15 Human Yrs</td>
                <td className="py-2.5 px-3.5">15 Human Yrs</td>
                <td className="py-2.5 px-3.5">15 Human Yrs</td>
                <td className="py-2.5 px-3.5">15 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">15 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">2 Years</td>
                <td className="py-2.5 px-3.5">24 Human Yrs</td>
                <td className="py-2.5 px-3.5">24 Human Yrs</td>
                <td className="py-2.5 px-3.5">24 Human Yrs</td>
                <td className="py-2.5 px-3.5">24 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">24 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">3 Years</td>
                <td className="py-2.5 px-3.5">28 Human Yrs</td>
                <td className="py-2.5 px-3.5">29 Human Yrs</td>
                <td className="py-2.5 px-3.5">30 Human Yrs</td>
                <td className="py-2.5 px-3.5">32 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">28 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">5 Years</td>
                <td className="py-2.5 px-3.5">36 Human Yrs</td>
                <td className="py-2.5 px-3.5">39 Human Yrs</td>
                <td className="py-2.5 px-3.5">42 Human Yrs</td>
                <td className="py-2.5 px-3.5">48 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">36 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">8 Years (Senior)</td>
                <td className="py-2.5 px-3.5">48 Human Yrs</td>
                <td className="py-2.5 px-3.5">54 Human Yrs</td>
                <td className="py-2.5 px-3.5">60 Human Yrs</td>
                <td className="py-2.5 px-3.5 font-bold text-rose-700">72 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">48 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">12 Years</td>
                <td className="py-2.5 px-3.5">64 Human Yrs</td>
                <td className="py-2.5 px-3.5">74 Human Yrs</td>
                <td className="py-2.5 px-3.5 font-bold text-rose-700">84 Human Yrs</td>
                <td className="py-2.5 px-3.5 font-bold text-rose-700">104 Human Yrs</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">64 Human Yrs</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 font-bold text-slate-900">15 Years</td>
                <td className="py-2.5 px-3.5">76 Human Yrs</td>
                <td className="py-2.5 px-3.5 font-bold text-rose-700">89 Human Yrs</td>
                <td className="py-2.5 px-3.5 font-bold text-rose-700">102 Human Yrs</td>
                <td className="py-2.5 px-3.5 text-slate-400">—</td>
                <td className="py-2.5 px-3.5 bg-emerald-50/50 font-bold text-emerald-900">76 Human Yrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex items-center gap-2.5 mb-2">
          <HelpCircle className="w-5 h-5 text-emerald-700" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions: Pet Age &amp; Lifespans
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          Clinical facts debunking common pet aging myths and guidelines for preventative veterinary care.
        </p>

        <div className="divide-y divide-slate-100">
          {AGE_FAQS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer text-sm sm:text-base gap-4"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaqIndex === idx ? 'rotate-180 text-emerald-700' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaqIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Promo Banner */}
      <div className="bg-linear-to-br from-emerald-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Never Miss a Life-Stage Screening</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Automate Your Pet’s Care Routine in PetHorizon
          </h3>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-6">
            Track vaccinations, dental cleanings, medication timers, and weight progress with family-synced alerts. Completely free on Google Play.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenQrModal}
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-slate-900 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all cursor-pointer text-sm"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Get PetHorizon Free App</span>
            </button>
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-2xl border border-white/20 transition-all cursor-pointer text-sm"
            >
              <span>Explore App Features</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
