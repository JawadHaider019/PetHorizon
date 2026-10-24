import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_PLANS } from '../data/pricingData';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F5F6F8] relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">
            Pricing &amp; Plans
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Free to Start, Premium When You Need It
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Every core feature is available completely free for your companion. Upgrade anytime in the app to support unlimited pets and household sharing.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3.5 mt-8">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`text-sm font-bold cursor-pointer transition-colors ${
                billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-200 p-1 flex items-center transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-600 shadow-md transform transition-transform duration-200 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className="flex items-center gap-1.5 cursor-pointer text-left focus:outline-none"
            >
              <span className={`text-sm font-bold transition-colors ${
                billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}>
                Annual Billing
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = plan.featuredIn === billingCycle;
            const xOffset = idx === 0 ? -60 : idx === 2 ? 60 : 0;
            const yOffset = idx === 1 ? 60 : 0;

            const currentPrice = plan.price[billingCycle];
            const currentPeriod = plan.period[billingCycle];
            const currentBadge = plan.badge[billingCycle];
            const currentBadgeStyle = plan.badgeStyle[billingCycle];
            const currentSubnote = plan.subnote?.[billingCycle];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: xOffset, y: yOffset }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: isFeatured ? -12 : -8 }}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left relative transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-500 shadow-xl shadow-emerald-500/15'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {billingCycle === 'yearly' && plan.id === 'yearly' ? 'Best Value' : 'Recommended'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full transition-all ${currentBadgeStyle}`}>
                      {currentBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-5">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl sm:text-5xl font-black text-slate-900"
                        >
                          {currentPrice}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-slate-500 text-xs sm:text-sm font-semibold">{currentPeriod}</span>
                    </div>
                    {currentSubnote && (
                      <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                        {currentSubnote}
                      </p>
                    )}
                  </div>

                  <div className={`space-y-3.5 border-t pt-6 ${isFeatured ? 'border-emerald-100' : 'border-slate-100'}`}>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-emerald-600 text-white'
                              : idx === 2
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={`text-xs sm:text-sm leading-tight ${isFeatured ? 'text-slate-800 font-bold' : 'text-slate-700 font-medium'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center block py-3.5 rounded-2xl font-bold text-sm transition-all ${
                      isFeatured
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/30 hover:scale-[1.02]'
                        : idx === 0
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 hover:scale-[1.01]'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-10">
          In-app purchases are securely processed through Google Play. Cancel anytime with a single tap in your Google Play Store subscriptions.
        </p>
      </div>
    </section>
  );
}
