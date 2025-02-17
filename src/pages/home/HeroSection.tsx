import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingBalls } from '../../components/FloatingBalls';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HeroSection = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center pt-20' aria-label='Introduction'>
      <FloatingBalls />
      <div className='max-w-6xl mx-auto px-6 py-20 relative z-10'>
        <motion.div {...fadeInAnimation} transition={{ duration: 0.6 }}>
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            Hello! <br />
            I'm <span className='text-fuchsia-600'>Fabio</span>
          </h1>
        </motion.div>

        <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.3 }}>
          <p className='text-xl text-zinc-400 max-w-xl mb-8'>
            A full-stack developer based in Brazil, specializing in building modern web applications with cutting-edge
            technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
