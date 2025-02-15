import { motion } from 'framer-motion';

interface TimelineItemProps {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    descriptionList?: string[];
}

export const TimelineItem = ({ year, title, subtitle, description, descriptionList }: TimelineItemProps) => {
    return (
        <motion.div
            className='flex gap-6 mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col items-center'>
                <div className='text-fuchsia-600 font-bold'>{year}</div>
                <div className='w-[2px] h-full bg-zinc-800 mt-2'></div>
            </div>
            <div>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='text-fuchsia-600 mb-2'>{subtitle}</div>
                {description && <p className='text-zinc-400 mb-4'>{description}</p>}
                {descriptionList && (
                    <ul className='list-disc list-inside text-zinc-400 space-y-1'>
                        {descriptionList.map((desc, index) => (desc ? <li key={index}>{desc}</li> : <br />))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};
