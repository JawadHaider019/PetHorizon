import { motion } from 'framer-motion';
import PhoneFrame from '../PhoneFrame';
import HeroLiveNotifications from './HeroLiveNotifications';

export default function HeroDesktopDevice() {
  return (
    <div className="hidden lg:block relative">
      {/* Floating Phone Container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <PhoneFrame
          src="/screenshots/home-screen.webp"
          alt="Pet Horizon Home Dashboard Screen"
          frameClassName="w-[245px] lg:w-[255px] xl:w-[275px]"
          priority={true}
        />
        <HeroLiveNotifications />
      </motion.div>

      {/* 3D Pet Companions Cutout */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 lg:-bottom-3 left-[78%] xl:left-[80%] w-36 lg:w-40 xl:w-44 pointer-events-none z-20 select-none drop-shadow-md"
      >
        <img
          src="/3d-pets-transparent.webp"
          alt="Pet Horizon Puppy and Kitten Companions"
          width={1024}
          height={1024}
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchPriority="high"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
}
