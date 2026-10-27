import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'Which companion species does Pet Horizon support?',
    a: 'Pet Horizon has dedicated support for Dogs, Cats, Birds, Rabbits, Hamsters, and other household companions. You can record species-specific breeds, birthdates for age calculation, and toggle weight measurements between KG and LBS.'
  },
  {
    q: 'How does Family Sharing work with QR codes?',
    a: 'From the Family Hub tab, you can generate an instant 6-digit invitation code or present a QR code. Your partner, family member, or pet sitter opens their Pet Horizon app, taps "Join Another Family", and scans your QR code to instantly co-manage your pet without manual setup.'
  },
  {
    q: 'Can I use Pet Horizon for free?',
    a: 'Yes! The Standard Plan is completely free forever. It includes 1 pet profile with complete access to daily feeding schedules, medication reminders, vaccination alerts, walk tracking, expense budgeting, and 1 daily journal photo upload.'
  },
  {
    q: 'What extra benefits does Premium unlock?',
    a: 'Premium is designed for multi-pet households and families. It unlocks unlimited pet profiles, collaborative Family Hub with Admin and Member permissions, up to 5 daily photo uploads in the journal, and priority support agent access.'
  },
  {
    q: 'Is Pet Horizon available on iPhone (iOS)?',
    a: 'Pet Horizon is currently live and available worldwide on Android via the Google Play Store. Our iOS version is actively in development and will be launching on the Apple App Store soon.'
  },
  {
    q: 'Will I receive reminders if the app is closed?',
    a: 'Yes. Pet Horizon schedules native device push notifications for scheduled meals, medication intervals, and veterinary vaccinations (like DHPP) so you and your care team never miss an important pet care event.'
  }
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  const toggle = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2.5">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Common Questions About Pet Horizon
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 font-normal max-w-xl mx-auto">
            Everything you need to know about the product, platform compatibility, and features.
          </p>
        </div>

        {/* FAQ Accordion List (Multi-open enabled) */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            const isHiddenOnMobile = !showAllMobile && idx > 2;

            return (
              <div
                key={idx}
                className={`${isHiddenOnMobile ? 'hidden sm:block' : 'block'} rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-300 bg-emerald-50/30 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-emerald-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 sm:px-6 pb-5 text-slate-600 text-xs sm:text-base leading-relaxed border-t border-emerald-100/60 pt-3 sm:pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobile View More Toggle */}
        <div className="sm:hidden text-center pt-3">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
          >
            {showAllMobile ? 'Show Fewer Questions ↑' : 'View 3 More Questions ↓'}
          </button>
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Reach out to our support team and we will be happy to assist.</p>
          </div>
          <a
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shrink-0 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
