import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import heroBread from '@/assets/hero-bread.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBread}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="heading-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-stroke text-4xl font-bold">
            Há mais de 60 anos
            <br />
            <span className="italic font-normal">com você!</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-white/80 text-sm tracking-[0.2em] uppercase text-stroke text-4xl font-bold"
        >
          Tradição que passa de geração á geração · Portugal
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={24} className="scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
