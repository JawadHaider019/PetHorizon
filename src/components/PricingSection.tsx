import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_PLANS } from '../data/pricingData';
import { PLAY_STORE_URL } from '../config/siteConfig';

import { defaultViewport, scrollTransition } from '../config/animationVariants';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const playStoreUrl = PLAY_STORE_URL;

  return (
    <section id="pricing" className="py-12 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-700/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={scrollTransition}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-950/[0.04] border border-emerald-900/10 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            Pricing &amp; Plans
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
            Free to Start, Premium When You Need It
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 font-normal max-w-2xl mx-auto">
            Every core feature is available completely free for your companion. Upgrade anytime in the app to support unlimited pets and household sharing.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 max-w-full px-2">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                billingCycle === 'monthly' ? 'text-slate-900 bg-white shadow-2xs border border-black/[0.06]' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-11 sm:w-14 h-6 sm:h-8 rounded-full bg-slate-200 p-0.5 sm:p-1 flex items-center transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-700/40 shrink-0"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 shadow-md transform transition-transform duration-200 ${
                  billingCycle === 'yearly' ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full cursor-pointer text-left focus:outline-none whitespace-nowrap shrink-0 ${
                billingCycle === 'yearly' ? 'bg-white shadow-2xs border border-black/[0.06]' : ''
              }`}
            >
              <span className={`text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}>
                Annual Billing
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-950/10 text-emerald-950 border border-emerald-900/20 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
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
                viewport={defaultViewport}
                transition={{ ...scrollTransition, delay: idx * 0.08 }}
                whileHover={{ y: isFeatured ? -12 : -8 }}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left relative transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-white to-[#F5F2EB]/50 border-2 border-slate-900 shadow-xl'
                    : 'bg-white border border-black/[0.06] shadow-sm hover:shadow-xl hover:border-black/[0.12]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-sm whitespace-nowrap shrink-0">
                    {billingCycle === 'yearly' && plan.id === 'yearly' ? 'Best Value' : 'Recommended'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all whitespace-nowrap shrink-0 ${currentBadgeStyle}`}>
                      {currentBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-5 min-h-[32px] flex items-center">{plan.description}</p>

                  <div className="mb-6 min-h-[76px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-1.5">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl sm:text-5xl font-black text-[#17191C] tracking-tight"
                        >
                          {currentPrice}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-slate-500 text-xs sm:text-sm font-semibold">{currentPeriod}</span>
                    </div>
                    {currentSubnote && (
                      <p className="text-[11px] text-emerald-800 font-semibold mt-1">
                        {currentSubnote}
                      </p>
                    )}
                  </div>

                  <div className={`space-y-3.5 border-t pt-6 ${isFeatured ? 'border-black/[0.08]' : 'border-black/[0.05]'}`}>
                    {plan.features.map((feat, i) => {
                      const isHeaderHighlight = feat.toLowerCase().startsWith('everything in pro');
                      return (
                        <div key={i} className="flex items-start gap-2.5">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isFeatured
                                ? 'bg-slate-900 text-white'
                                : 'bg-emerald-950/[0.05] text-emerald-800'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span
                            className={`text-xs sm:text-sm leading-snug transition-colors ${
                              isHeaderHighlight
                                ? 'text-emerald-950 font-bold'
                                : isFeatured
                                ? 'text-slate-900 font-semibold'
                                : 'text-slate-700 font-medium'
                            }`}
                          >
                            {feat}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-8 mt-auto">
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center block py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                      isFeatured
                        ? 'bg-slate-900 hover:bg-black text-white shadow-md hover:scale-[1.02]'
                        : idx === 0
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                        : 'bg-white hover:bg-slate-50 text-slate-900 border border-black/[0.1] hover:scale-[1.01]'
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
