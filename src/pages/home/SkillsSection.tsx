import { motion } from 'motion/react';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Linux', 'Agile/Scrum'],
    },
  ];

  return (
    <section className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Skills</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {skills.map((skillGroup, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              key={skillGroup.category}
              className='bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors'
            >
              <h3 className='text-xl font-semibold mb-4 text-fuchsia-600'>{skillGroup.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-zinc-700 text-zinc-100 rounded-full text-sm hover:bg-fuchsia-600 transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
