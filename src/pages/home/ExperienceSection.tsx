import { TimelineItem } from '../../components/TimelineItem';

interface Experience {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  description?: string;
  descriptionList?: string[];
}

const experiences: Experience[] = [
  {
    from: 'feb 2023',
    to: 'set 2023',
    title: 'Software Engineer Trainee',
    subtitle: 'LEVTY',
    description:
      'Developed client solutions using SYDLE One Platform. Worked with a team of engineers to deliver high-quality software.',
  },
  {
    from: 'feb 2021',
    to: 'jan 2023',
    title: 'Software Developer',
    subtitle: 'byron.solutions',
    descriptionList: [
      'Developed and published a Flutter app with Firebase backend',
      'Led frontend development of a real estate website using React.js, TypeScript, and Next.js',
      'Implemented key features using Context API, JWT Auth, and styled-components',
      'Led company stack transition from WordPress to React.js and Next.js',
      'Conducted technical training for team members in React and Strapi',
    ],
  },
  {
    from: 'jan 2022',
    to: 'jan 2023',
    title: 'Vice-President Director',
    subtitle: 'byron.solutions',
    descriptionList: [
      'Led 5-person team and managed company operations',
      'Oversaw administrative and financial responsibilities',
      'Implemented strategic planning using PDCA, OKR, and SWOT',
      'Represented company to university administration',
      'Participated in executive decision-making',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-20 px-6 bg-zinc-800/50' aria-labelledby='experience-heading'>
      <div className='max-w-6xl mx-auto'>
        <h2 id='experience-heading' className='text-3xl font-bold mb-12'>
          Professional Experience
        </h2>
        <div className='max-w-3xl' role='list' aria-label='Work experience timeline'>
          {experiences.map((experience) => (
            <TimelineItem
              key={`${experience.title}-${experience.from}`}
              from={experience.from}
              to={experience.to}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description || ''}
              descriptionList={experience.descriptionList}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
