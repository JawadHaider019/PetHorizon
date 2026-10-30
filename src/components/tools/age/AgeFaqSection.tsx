import { Calendar, HelpCircle, Activity, HeartPulse, Clock } from 'lucide-react';
import { AGE_FAQS } from './ageCalculatorData';

export default function AgeFaqSection() {
  const FAQ_ICONS = [Clock, ScaleIcon, HeartPulse, Calendar, Activity];

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Veterinary Science Explained
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17191C] tracking-tight mt-3">
          How Pet Age Conversion Works
        </h2>
        <p className="text-slate-600 text-xs sm:text-base mt-2">
          Everything dog and cat parents need to know about life-stage maturation, breed size differences, and preventative care.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {AGE_FAQS.map((faq, idx) => {
          const Icon = FAQ_ICONS[idx % FAQ_ICONS.length] || HelpCircle;
          return (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {faq.a}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-emerald-700 shrink-0"
      {...props}
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

