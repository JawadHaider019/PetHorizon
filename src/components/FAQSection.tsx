import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What is the Digital Pet Health Card and Emergency Vet Mode?',
    a: 'Pet Horizon’s Digital Health Card brings together your pet’s verified vaccination history (DHPP, Rabies, Bordetella), microchip ID, sterilization status, vitals, allergies, and veterinary clinic records into a single digital passport. Tapping "Show to Vet" launches a high-contrast emergency clinical sheet with immediate contacts and treatment notes that vets or boarding facilities can inspect or export to PDF.'
  },
  {
    q: 'How does the Anti-Collision Care Lock prevent double-feeding or double-dosing?',
    a: 'When any household member opens a task (such as pouring breakfast kibble or administering heartworm medication), Pet Horizon instantly displays an active "In-Progress Care Lock" across all connected family devices. When marked "Done", it updates with a live timestamp, eliminating conflicting chore attempts or dangerous accidental double-dosing.'
  },
  {
    q: 'How does Family Sharing work with household QR codes?',
    a: 'From the Family Hub, you can generate an instant 6-character household code or show a scannable QR pass. Your partner, roommates, or pet sitters simply tap "Join Family", scan the code, and gain instant, synchronized co-parenting access without cumbersome account setup or password sharing.'
  },
  {
    q: 'Can I track pet expenses and set monthly spending limits?',
    a: 'Yes! The built-in Wallet and Expense Tracker allows you to define custom monthly budgets and itemize costs across Food, Veterinary Care, Grooming, Medications, and Accessories. You can log expenses with merchant tags, keep a digital receipt vault, and track real-time visual progress of your monthly spending allowance.'
  },
  {
    q: 'Which companion species and measurement units does Pet Horizon support?',
    a: 'Pet Horizon provides dedicated, species-tailored profiles for Dogs, Cats, Birds, Rabbits, Hamsters, and other exotic companions. You can record species-specific breeds, track life-stage age calculators, and seamlessly toggle weight metrics between Kilograms (KG) and Pounds (LBS).'
  },
  {
    q: 'Does Pet Horizon work offline during walks or remote trail trips?',
    a: 'Yes. All walk routes, potty breaks, water logs, and chore completions logged while outside cellular reception are safely timestamped and stored in an offline queue. As soon as your device reconnects to Wi-Fi or cellular data, all changes automatically sync to your household in the background.'
  },
  {
    q: 'Will I receive native notifications and routine chimes if the app is closed?',
    a: 'Yes. Pet Horizon schedules native device push notifications and distinctive routine audio chimes for scheduled meal hours, time-sensitive medications, and upcoming veterinary booster shots so your pet’s daily rhythm is always protected.'
  },
  {
    q: 'What is the difference between the Free Standard plan and Premium?',
    a: 'The Free Standard Plan is free forever and includes 1 pet profile, complete daily feeding routines, medication reminders, expense logging, and 1 daily health photo upload. The Premium Plan unlocks unlimited pet profiles, full Family Hub co-parenting with Admin/Member permissions, up to 5 daily journal photos, advanced exportable Health Passports, and priority support.'
  },
  {
    q: 'Is Pet Horizon available on Android and iOS?',
    a: 'Pet Horizon is currently live on Android via the Google Play Store with full feature parity. The iOS version is currently in active development for the Apple App Store, with cross-platform household synchronization built right in.'
  },
  {
    q: 'How is our pet’s veterinary and personal data protected?',
    a: 'All veterinary medical documents, medication schedules, and family co-parenting logs are encrypted in transit via TLS 1.3 and stored in secure cloud infrastructure. We never sell your personal contact information or pet health telemetry to advertisers or third parties.'
  }
];

import { fadeInUp, staggerCard } from '../config/animationVariants';

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
    <section id="faq" className="py-12 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
            Common Questions About Pet Horizon
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 font-normal max-w-xl mx-auto">
            Everything you need to know about the product, platform compatibility, and features.
          </p>
        </motion.div>

        {/* FAQ Accordion List (Multi-open enabled) */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            const isHiddenOnMobile = !showAllMobile && idx > 2;

            return (
              <motion.div
                key={idx}
                {...staggerCard(idx, idx % 2 === 0 ? 'left' : 'right', 0.05)}
                className={`${isHiddenOnMobile ? 'hidden sm:block' : 'block'} rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-black/[0.12] bg-white shadow-sm'
                    : 'border-black/[0.06] bg-white hover:border-black/[0.12]'
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
                        ? 'bg-slate-900 text-white rotate-180'
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
                      <div className="px-4 sm:px-6 pb-5 text-slate-600 text-xs sm:text-base leading-relaxed border-t border-black/[0.05] pt-3 sm:pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View More Toggle */}
        <div className="sm:hidden text-center pt-3">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-black/[0.08] px-4 py-2 rounded-full transition-all cursor-pointer shadow-2xs"
          >
            {showAllMobile ? 'Show Fewer Questions ↑' : `View ${FAQS.length - 3} More Questions ↓`}
          </button>
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Reach out to our support team and we will be happy to assist.</p>
          </div>
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full shrink-0 transition-colors shadow-xs"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
