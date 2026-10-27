import { motion } from 'framer-motion';
import HeroContent from './hero/HeroContent';
import HeroDesktopDevice from './hero/HeroDesktopDevice';
import HeroMobilePets from './hero/HeroMobilePets';

import { defaultViewport, scrollTransition } from '../config/animationVariants';

interface HeroProps {
  onOpenQrModal?: () => void;
  onOpenIosModal?: () => void;
}

export default function Hero({ onOpenQrModal, onOpenIosModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-26 lg:pb-6 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F2EB]"
    >
      {/* Background ambient light blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-700/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-8 right-1/4 w-[450px] h-[450px] bg-[#EADECE]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          {/* LEFT COLUMN: Authentic Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={scrollTransition}
            className="lg:col-span-7"
          >
            <HeroContent onOpenQrModal={onOpenQrModal} onOpenIosModal={onOpenIosModal} />
          </motion.div>

          {/* RIGHT COLUMN: Desktop Phone Device Showcase (lg:flex) & Mobile Organic 3D Pets (<lg) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ ...scrollTransition, delay: 0.1 }}
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