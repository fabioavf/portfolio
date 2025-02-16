import { TimelineItem } from '../../components/TimelineItem';

const EducationSection = () => {
  return (
    <section className='py-20 px-6 bg-zinc-800/50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Education</h2>
        <div className='max-w-3xl'>
          <TimelineItem
            from='2020'
            to='2026'
            title="Bachelor's in Computer Engineering"
            subtitle='Universidade Federal de Itajubá'
            description='Currently studying computer engineering with a focus on software development.'
          />
          <TimelineItem
            from='2019'
            to='2020'
            title="Bachelor's in Electrical Engineering"
            subtitle='Universidade Federal de Itajubá'
            description='Studied electrical engineering for one year before switching to computer engineering.'
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
