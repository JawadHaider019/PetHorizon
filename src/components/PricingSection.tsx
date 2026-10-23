import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon';

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Honest &amp; Transparent Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Free to Start, Premium When You Need It
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Every core feature is available completely free for your companion. Upgrade anytime in the app to support unlimited pets and household sharing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-slate-200 p-1 flex items-center transition-colors duration-200 cursor-pointer"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-600 shadow-md transform transition-transform duration-200 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Yearly
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Free Plan */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between text-left hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Free Forever
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Standard Plan</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Everything you need to give one beloved companion full care.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">$0</span>
                <span className="text-slate-500 text-sm font-semibold">/ forever</span>
              </div>

              <div className="space-y-3.5 border-t border-slate-100 pt-6">
                {[
                  'Single pet profile support (1 pet)',
                  'Complete daily care & feeding schedule',
                  'Medication alerts & vaccination tracking',
                  '1 daily photo upload in activity journal',
                  'Basic family caretaker connection',
                  'Expense logging and cost tracking'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
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
                className="w-full text-center block bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 rounded-2xl font-bold text-sm transition-colors"
              >
                Download Free App
              </a>
            </div>
          </div>

          {/* Card 2: Monthly / Featured Plan */}
          <div className="bg-gradient-to-b from-white to-emerald-50/50 rounded-3xl p-7 sm:p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col justify-between text-left relative transform md:-translate-y-2">
            
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Monthly Premium
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Pet Horizon Pro</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Ideal for multi-pet families and collaborative households.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">$4.99</span>
                <span className="text-slate-500 text-sm font-semibold">/ month</span>
              </div>

              <div className="space-y-3.5 border-t border-emerald-100 pt-6">
                {[
                  'Unlimited pet profile registrations',
                  'Multi-caretaker family hub with QR code sync',
                  'Admin & Member access control permissions',
                  'Up to 5 daily photo uploads in journal',
                  'Smart custom push notifications & reminders',
                  'Unlimited schedule alarms & vaccination tracking'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-bold leading-tight">
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
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                Get Premium on Google Play
              </a>
            </div>
          </div>

          {/* Card 3: Yearly Plan */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between text-left hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Annual Plan</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Get 2 months free with complete uninterrupted peace of mind.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">$49.99</span>
                <span className="text-slate-500 text-sm font-semibold">/ year</span>
              </div>

              <div className="space-y-3.5 border-t border-slate-100 pt-6">
                {[
                  'All Monthly Premium benefits included',
                  'Equivalent of 2 months free (Save 17%)',
                  'Unlimited pets & shared family hubs',
                  'Up to 5 daily photo uploads in journal',
                  'Dedicated Priority Customer Support agent',
                  'Restore anytime on new devices'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
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
                className="w-full text-center block bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-2xl font-bold text-sm transition-colors"
              >
                Subscribe Annually
              </a>
            </div>
          </div>

        </div>

        {/* Honest guarantee note */}
        <p className="text-center text-xs text-slate-500 mt-10">
          In-app purchases are securely processed through Google Play. Cancel anytime with a single tap in your Google Play Store subscriptions.
        </p>

      </div>
    </section>
  );
}
