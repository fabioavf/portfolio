import { TimelineItem } from '../../components/TimelineItem';

const EducationSection = () => {
  const education = [
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
  return (
    <section className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Education</h2>
        <div className='max-w-3xl'>
          {education.map((item, index) => (
            <TimelineItem
              key={index}
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
