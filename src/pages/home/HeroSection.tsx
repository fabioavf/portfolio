import { motion } from 'motion/react';
import { FloatingBalls } from '../../components/FloatingBalls';

const HeroSection = () => {
  return (
    <section className='min-h-screen flex items-center pt-20'>
      <FloatingBalls />
      <div className='max-w-6xl mx-auto px-6 py-20 z-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-5xl md:text-7xl font-bold mb-6'
        >
          Hello! <br />
          I'm <span className='text-fuchsia-600'>Fabio</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className='text-xl text-zinc-400 max-w-xl mb-8'
        >
          I'm a full-stack developer based in Brazil. I specialize in building web applications with modern
          technologies.
        </motion.p>
        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='group flex items-center gap-2 bg-fuchsia-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-fuchsia-700 transition-colors'
        >
          View My Work
          <ArrowRight className='group-hover:translate-x-1 transition-transform' />
        </motion.button> */}
      </div>
    </section>
  );
};

export default HeroSection;
