import { motion } from 'framer-motion'; // Fix import path

interface SkillGroup {
  category: string;
  items: string[];
}

const skills: SkillGroup[] = [
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

const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SkillsSection = () => {
  return (
    <section id='skills' className='py-20 px-6' aria-labelledby='skills-heading'>
      <div className='max-w-6xl mx-auto'>
        <h2 id='skills-heading' className='text-3xl font-bold mb-12'>
          Technical Skills & Expertise
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              {...fadeInUpAnimation}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              className='bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 
                transition-colors'
            >
              <h3 className='text-xl font-semibold mb-4 text-fuchsia-600'>{skillGroup.category}</h3>
              <ul className='flex flex-wrap gap-2' aria-label={`${skillGroup.category} skills`}>
                {skillGroup.items.map((skill) => (
                  <li key={skill}>
                    <span
                      className='px-3 py-1 bg-zinc-700 text-zinc-100 
                        rounded-full text-sm hover:bg-fuchsia-600 
                        transition-colors'
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
