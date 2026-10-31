import { Calendar, ShieldCheck } from 'lucide-react';

export default function AgeMatrixTable() {
  const MATRIX_ROWS = [
    { age: '1 Year', small: '15 Yrs', medium: '15 Yrs', large: '15 Yrs', giant: '12 Yrs', cat: '15 Yrs' },
    { age: '2 Years', small: '24 Yrs', medium: '24 Yrs', large: '24 Yrs', giant: '22 Yrs', cat: '24 Yrs' },
    { age: '3 Years', small: '28 Yrs', medium: '29 Yrs', large: '31 Yrs', giant: '31 Yrs', cat: '28 Yrs' },
    { age: '4 Years', small: '32 Yrs', medium: '34 Yrs', large: '37 Yrs', giant: '39 Yrs', cat: '32 Yrs' },
    { age: '5 Years', small: '36 Yrs', medium: '39 Yrs', large: '44 Yrs', giant: '48 Yrs', cat: '36 Yrs' },
    { age: '6 Years (Senior Giant)', small: '40 Yrs', medium: '44 Yrs', large: '50 Yrs', giant: '56 Yrs', cat: '40 Yrs' },
    { age: '7 Years (Mature Adult)', small: '44 Yrs', medium: '49 Yrs', large: '57 Yrs', giant: '65 Yrs', cat: '44 Yrs' },
    { age: '8 Years', small: '48 Yrs', medium: '54 Yrs', large: '63 Yrs', giant: '73 Yrs', cat: '48 Yrs' },
    { age: '10 Years', small: '56 Yrs', medium: '64 Yrs', large: '76 Yrs', giant: '89 Yrs', cat: '56 Yrs' },
    { age: '12 Years (Senior Stage)', small: '64 Yrs', medium: '74 Yrs', large: '89 Yrs', giant: '105 Yrs', cat: '64 Yrs' },
    { age: '14 Years (Geriatric)', small: '72 Yrs', medium: '84 Yrs', large: '102 Yrs', giant: '120 Yrs', cat: '72 Yrs' },
    { age: '16 Years (Super Senior)', small: '80 Yrs', medium: '94 Yrs', large: '115 Yrs', giant: '135 Yrs', cat: '80 Yrs' }
  ];

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          AAHA Life Stage Standards
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight mt-3">
          Veterinary Conversion Matrix
        </h2>
        <p className="text-slate-600 text-xs sm:text-base mt-2">
          Comparative biological aging milestones across canine breed weights and feline life stages.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs max-w-5xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Calendar Age</th>
                <th className="py-3.5 px-4">Small (&lt;20 lbs)</th>
                <th className="py-3.5 px-4">Medium (21–50 lbs)</th>
                <th className="py-3.5 px-4">Large (51–90 lbs)</th>
                <th className="py-3.5 px-4">Giant (90+ lbs)</th>
                <th className="py-3.5 px-4 bg-emerald-50 text-emerald-900">Domestic Cat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {MATRIX_ROWS.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="py-2.5 px-4 font-bold text-slate-900">{row.age}</td>
                  <td className="py-2.5 px-4">{row.small}</td>
                  <td className="py-2.5 px-4">{row.medium}</td>
                  <td className="py-2.5 px-4">{row.large}</td>
                  <td className="py-2.5 px-4 text-amber-900 font-semibold">{row.giant}</td>
                  <td className="py-2.5 px-4 bg-emerald-50/40 font-bold text-emerald-900">{row.cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Source: American Animal Hospital Association (AAHA) Canine and Feline Life Stage Guidelines.</span>
        </div>
      </div>
    </section>
  );
}

