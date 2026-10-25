import { motion } from 'framer-motion';
import HeroContent from './hero/HeroContent';
import HeroDesktopDevice from './hero/HeroDesktopDevice';
import HeroMobilePets from './hero/HeroMobilePets';

interface HeroProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function Hero({ onOpenQrModal, onOpenIosModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-20 lg:pb-6 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50/40"
    >
      {/* Background ambient light blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-8 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          {/* LEFT COLUMN: Authentic Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <HeroContent onOpenQrModal={onOpenQrModal} onOpenIosModal={onOpenIosModal} />
          </motion.div>

          {/* RIGHT COLUMN: Desktop Phone Device Showcase (lg:flex) & Mobile Organic 3D Pets (<lg) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-1 pb-2 lg:py-0"
          >
            <HeroMobilePets />
            <HeroDesktopDevice />
          </motion.div>
        </div>
      </div>
    </section>
  );
}