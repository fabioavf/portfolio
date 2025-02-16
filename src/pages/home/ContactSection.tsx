import { MapPin, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const ContactSection = () => {
  const contact = [
    {
      icon: MapPin,
      text: 'Itajubá, Minas Gerais, Brazil',
    },
    {
      icon: Linkedin,
      text: 'fabioavf',
    },
    {
      icon: Mail,
      text: 'amorelli.ff@gmail.com',
    },
    {
      icon: Phone,
      text: '(35) 98887-0037',
    },
  ];

  return (
    <section className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Contact</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {contact.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              key={item.text}
              className='bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors'
            >
              <div className='flex items-center gap-4'>
                <item.icon />
                <span>{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
