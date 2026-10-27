import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Users, ShieldCheck, Wallet, Check, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerCard } from '../config/animationVariants';

interface CareModule {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof UtensilsCrossed;
  medallionBg: string;
  medallionGlow: string;
  cardBorder: string;
  featured?: boolean;
  perspectiveAngle: string;
  highlights: string[];
}

const CARE_MODULES: CareModule[] = [
  {
    id: 'routines',
    step: 'MODULE 01',
    title: 'Precision Feeding & Daily Alarms',
    subtitle: 'Routines & Alarms',
    description: 'Set custom cup portions, scheduled meal hours, and outdoor walk timers. Caregivers tap "Done" in 1 tap—synced live to every phone.',
    icon: UtensilsCrossed,
    medallionBg: 'bg-[#166534] text-white',
    medallionGlow: 'shadow-lg shadow-emerald-950/25',
    cardBorder: 'border-black/[0.08] hover:border-emerald-600/50',
    perspectiveAngle: 'rotateY(4deg)',
    highlights: ['1-Tap Done & Skip', 'Push Routine Chimes', 'Cup Portions (KG/LBS)']
  },
  {
    id: 'family',
    step: 'MODULE 02',
    title: 'One QR Code Connects Everyone',
    subtitle: 'Anti-Collision Sync',
    description: 'Invite partners, roommates, or sitters in 1 tap. Active care locks prevent accidental double-feeding, keeping everyone in sync.',
    icon: Users,
    medallionBg: 'bg-amber-500 text-white',
    medallionGlow: 'shadow-[0_0_26px_rgba(245,158,11,0.65)] ring-4 ring-amber-400/20',
    cardBorder: 'border-2 border-amber-400/90 shadow-xl shadow-amber-500/10',
    featured: true,
    perspectiveAngle: 'rotateY(0deg)',
    highlights: ['Instant QR Household Pass', 'Active Care Lock', 'Live Caregiver Status']
  },
  {
    id: 'clinical',
    step: 'MODULE 03',
    title: 'Official Pet Health Passport',
    subtitle: 'Vaccines & Microchip',
    description: 'Store verified vaccination records (DHPP & Rabies), microchip IDs, and medical notes. Tap "Show to Vet" for instant clinic check-in.',
    icon: ShieldCheck,
    medallionBg: 'bg-emerald-900 text-white',
    medallionGlow: 'shadow-lg shadow-emerald-950/25',
    cardBorder: 'border-black/[0.08] hover:border-[#166534]/50',
    perspectiveAngle: 'rotateY(-2deg)',
    highlights: ['Vaccination History Vault', 'Emergency Vet Mode', 'Microchip & Vitals']
  },
  {
    id: 'budget',
    step: 'MODULE 04',
    title: 'Smart Care Expenses & Limits',
    subtitle: 'Budget & Limits',
    description: 'Set monthly care limits, itemize spending across Food, Vet, and Grooming, and log receipts on the go with real-time visual progress.',
    icon: Wallet,
    medallionBg: 'bg-slate-900 text-white',
    medallionGlow: 'shadow-lg shadow-slate-950/25',
    cardBorder: 'border-black/[0.08] hover:border-slate-700/50',
    perspectiveAngle: 'rotateY(-4deg)',
    highlights: ['Monthly Spending Cap', 'Food & Vet Categories', 'Itemized Receipt Vault']
  }
];

export default function BentoFeatures() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.05]">
      <div id="why-pet-horizon" className="absolute -top-20 pointer-events-none" />
      <div id="features-bento" className="absolute -top-20 pointer-events-none" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-emerald-700/[0.03] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#EADECE]/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#166534] bg-emerald-900/[0.05] border border-emerald-800/15 mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#166534] shrink-0" />
              <span>How Pet Horizon Works</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17191C] tracking-tight leading-tight">
              4 Native Care Modules. Zero Guesswork.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
              Every feature below is built genuinely into the Pet Horizon mobile app. Designed to make shared family pet care effortless, transparent, and joyful.
            </p>
          </motion.div>
        </div>

        {/* 3D PERSPECTIVE DECK CARDS (Inspired by Reference Design) */}
        <div className="relative [perspective:1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 items-stretch pt-2 pb-6 pl-5 sm:pl-6 lg:pl-0">
            {CARE_MODULES.map((module, idx) => {
              const Icon = module.icon;
              const isHovered = hoveredCard === module.id;

              return (
                <motion.div
                  key={module.id}
                  {...staggerCard(idx, 'up')}
                  onMouseEnter={() => setHoveredCard(module.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 0,
                    scale: module.featured ? 1.04 : 1.02,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                  className={`relative bg-white rounded-[2rem] p-6 sm:p-7 pt-9 flex flex-col justify-between transition-all duration-300 text-left shadow-sm hover:shadow-2xl ${module.cardBorder} ${
                    module.featured ? 'lg:-translate-y-2 lg:scale-[1.02]' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isHovered 
                      ? 'none' 
                      : (window.innerWidth >= 1024 ? module.perspectiveAngle : 'none')
                  }}
                >
                  {/* Floating Circular Medallion Pinned to Left Edge (Matching Reference) */}
                  <div className={`absolute -left-5 sm:-left-6 top-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${module.medallionBg} ${module.medallionGlow} transition-transform duration-300 group-hover:scale-110 z-20`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  </div>

                  <div>
                    {/* Step Label */}
                    <div className="flex items-center justify-between mb-4 pl-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-slate-100/90 px-2.5 py-0.5 rounded-full border border-black/[0.04]">
                        {module.step}
                      </span>
                      {module.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/25">
                          Most Loved
                        </span>
                      )}
                    </div>

                    {/* Module Title */}
                    <h3 className="text-lg sm:text-xl font-black text-[#17191C] tracking-tight leading-snug mb-3 pl-2">
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-6 pl-2">
                      {module.description}
                    </p>
                  </div>

                  {/* Feature Highlights Pills */}
                  <div className="pt-4 border-t border-black/[0.06] pl-2 space-y-2">
                    {module.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-900/[0.08] text-[#166534] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Assurance */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 font-medium inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-black/[0.06] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#166534] animate-pulse" />
            All 4 modules connect natively through your shared Pet Horizon family profile.
          </p>
        </div>
      </div>
    </section>
  );
}
