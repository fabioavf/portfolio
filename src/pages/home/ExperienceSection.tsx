import { TimelineItem } from '../../components/TimelineItem';

const ExperienceSection = () => {
  const experiences = [
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
      description: '',
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
      description: '',
      descriptionList: [
        'Led 5-person team and managed company operations',
        'Oversaw administrative and financial responsibilities',
        'Implemented strategic planning using PDCA, OKR, and SWOT',
        'Represented company to university administration',
        'Participated in executive decision-making',
      ],
    },
  ];
  return (
    <section className='py-20 px-6 bg-zinc-800/50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Experience</h2>
        <div className='max-w-3xl'>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              from={experience.from}
              to={experience.to}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              descriptionList={experience.descriptionList}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
