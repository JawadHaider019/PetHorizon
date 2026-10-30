import { Calculator, Scale, Utensils, Droplets } from 'lucide-react';

export default function CalorieFaqSection() {
  return (
    <section className="mt-16 pt-14 border-t border-slate-200">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Veterinary Science Explained
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight mt-3">
          How Pet Caloric Formulas Work
        </h2>
        <p className="text-slate-600 text-xs sm:text-base mt-2">
          Everything dog and cat parents need to know about RER, MER, and kitchen scale accuracy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            What is the WSAVA formula for Resting Energy Requirement (RER)?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            RER represents the calories an animal expends at rest in a comfortable room. The World Small Animal Veterinary Association (WSAVA) standard scientific equation is:
            <br />
            <code className="inline-block my-2 px-2.5 py-1 bg-slate-100 rounded text-emerald-900 font-mono text-xs">
              RER = 70 × (Body Weight in Kilograms)^0.75
            </code>
            <br />
            This exponential curve reflects that smaller animals have faster surface-area-to-mass metabolic rates than larger dogs.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-700" />
            Why should I measure in grams rather than measuring cups?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Studies show volumetric measuring cups can have an error margin of up to 25% depending on kibble shape, settled density, and scooper bias. Over months, an extra 20 kibbles per meal leads to insidious canine and feline obesity. Weighing in grams on an inexpensive digital kitchen scale eliminates all guesswork.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
            <Utensils className="w-4 h-4 text-emerald-700" />
            How should treats be accounted for in daily calories?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Treats, dental chews, and table scraps should never exceed <strong>10% of total daily calories (MER)</strong>. The remaining 90% must come from a complete, AAFCO or FEDIAF-balanced kibble or wet food formula.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-emerald-700" />
            Why does Pet Horizon calculate daily water intake?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Hydration is the single most critical preventative metric against feline chronic kidney disease (CKD) and canine urinary stones. Dogs and cats need roughly 50 to 60 ml of fresh water per kilogram of body weight each day.
          </p>
        </div>
      </div>
    </section>
  );
}
