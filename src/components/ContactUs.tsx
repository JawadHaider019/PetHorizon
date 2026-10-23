import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Check,
  Copy,
  Clock,
  MessageSquare,
  ShieldCheck,
  LifeBuoy,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Smartphone
} from 'lucide-react';

interface ContactCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  displayEmail: string;
  subject: string;
  responseTime: string;
  icon: typeof Mail;
  quickLink: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const BACKEND_EMAIL = 'pethorizon2026@gmail.com';

const CONTACT_CARDS: ContactCard[] = [
  {
    id: 'general-support',
    badge: 'General & Family Hub',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    title: 'General Inquiries & App Help',
    description:
      'Questions regarding routine setup, medication schedule alerts, multi-caretaker sync, or subscription queries.',
    displayEmail: 'support@pethorizon.app',
    subject: '[Pet Horizon Support] Assistance Request',
    responseTime: 'Typically responds within 24 hours',
    icon: LifeBuoy,
    quickLink: {
      label: 'Read FAQs',
      href: '#faq'
    }
  },
  {
    id: 'feedback-bugs',
    badge: 'Product Feedback',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    title: 'Feature Ideas & Bug Reports',
    description:
      'Have an idea for a new pet tracker feature or encountered an issue in the Android app? Share your direct feedback with our engineering team.',
    displayEmail: 'feedback@pethorizon.app',
    subject: '[Pet Horizon Feedback] Feature Idea / Bug Report',
    responseTime: 'Responds within 24–48 hours',
    icon: MessageSquare,
    quickLink: {
      label: 'Explore Guides',
      href: '/blog'
    }
  },
  {
    id: 'privacy-data',
    badge: 'Privacy & Safety',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    title: 'Privacy & Data Rights',
    description:
      'Submit formal data export requests, account deletion verification, or questions regarding Google Play Data Safety compliance.',
    displayEmail: 'privacy@pethorizon.app',
    subject: '[Pet Horizon Privacy] Data or Account Deletion Request',
    responseTime: 'Priority handling (< 24 hours)',
    icon: ShieldCheck,
    quickLink: {
      label: 'Privacy Policy',
      href: '/privacy-policy'
    }
  }
];

export default function ContactUs() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyEmail = (cardId: string, emailToCopy: string) => {
    navigator.clipboard.writeText(emailToCopy);
    setCopiedId(cardId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Developer &amp; User Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With Our Team Directly
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3.5 font-normal leading-relaxed">
            No endless contact forms or automated bots. Send an email straight to our dedicated inboxes and a real member of the Pet Horizon team will respond.
          </p>
        </motion.div>

        {/* 3 Dedicated Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {CONTACT_CARDS.map((card, index) => {
            const Icon = card.icon;
            const isCopied = copiedId === card.id;
            const mailtoUrl = `mailto:${BACKEND_EMAIL}?subject=${encodeURIComponent(
              card.subject
            )}`;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 text-left group"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>

                  {/* Display Email Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 mb-5 flex items-center justify-between gap-2">
                    <div className="truncate">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Direct Inbox
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                        {card.displayEmail}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyEmail(card.id, card.displayEmail)}
                      title="Copy email address"
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shrink-0 shadow-2xs"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  {/* Response time */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{card.responseTime}</span>
                  </div>

                  {/* Primary Direct Mail Button */}
                  <a
                    href={mailtoUrl}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors shadow-xs shadow-emerald-700/10 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email Us Directly</span>
                  </a>

                  {/* Quick Reference Link */}
                  <a
                    href={card.quickLink.href}
                    className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 hover:text-emerald-700 transition-colors pt-1"
                  >
                    <span>{card.quickLink.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplementary Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left">
            
            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Support Coverage
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM (UTC). Weekend emails are reviewed for critical service inquiries.
                </p>
              </div>
            </div>

            {/* Google Play Store Direct Support */}
            <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Google Play Official App
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Rate us or request assistance directly through our verified Google Play listing.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline mt-1"
                >
                  Visit Store Listing <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Emergency Vet Reminder */}
            <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Pet Health Emergencies
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Pet Horizon is a wellness companion app. In any acute medical emergency, please contact your nearest 24/7 veterinary clinic.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
