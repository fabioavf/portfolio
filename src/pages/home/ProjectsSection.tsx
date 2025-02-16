import { motion } from 'motion/react';

const ProjectsSection = () => {
  return (
    <section className='py-20 px-6 bg-zinc-800/50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Featured Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              key={item}
              className='bg-zinc-800 rounded-lg p-6 h-64 hover:bg-zinc-700 transition-colors'
            >
              <div className='h-full flex flex-col justify-between'>
                <h3 className='text-xl font-semibold'>Project {item}</h3>
                <div className='text-zinc-400'>Project description placeholder</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
