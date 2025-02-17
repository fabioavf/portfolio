import { TimelineItem } from '../../components/TimelineItem';

interface Education {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  description: string;
}

const educationHistory: Education[] = [
  {
    from: '2020',
    to: '2026',
    title: "Bachelor's in Computer Engineering",
    subtitle: 'Universidade Federal de Itajubá',
    description: 'Currently studying computer engineering with a focus on software development.',
  },
  {
    from: '2019',
    to: '2020',
    title: "Bachelor's in Electrical Engineering",
    subtitle: 'Universidade Federal de Itajubá',
    description: 'Studied electrical engineering for one year before switching to computer engineering',
  },
];

const EducationSection = () => {
  return (
    <section id='education' className='py-20 px-6' aria-labelledby='education-heading'>
      <div className='max-w-6xl mx-auto'>
        <h2 id='education-heading' className='text-3xl font-bold mb-12'>
          Academic Background
        </h2>
        <div className='max-w-3xl' role='list' aria-label='Education history timeline'>
          {educationHistory.map((item) => (
            <TimelineItem
              key={`${item.title}-${item.from}`}
              from={item.from}
              to={item.to}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
