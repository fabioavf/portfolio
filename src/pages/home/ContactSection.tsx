import { MapPin, Linkedin, Mail, Phone, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItem {
  icon: LucideIcon;
  text: string;
  href?: string;
  label: string;
}

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    text: 'Itajubá, Minas Gerais, Brazil',
    label: 'Location',
  },
  {
    icon: Linkedin,
    text: 'fabioavf',
    href: 'https://www.linkedin.com/in/fabioavf',
    label: 'LinkedIn Profile',
  },
  {
    icon: Mail,
    text: 'amorelli.ff@gmail.com',
    href: 'mailto:amorelli.ff@gmail.com',
    label: 'Email Address',
  },
  {
    icon: Phone,
    text: '(35) 98887-0037',
    href: 'tel:+5535988870037',
    label: 'Phone Number',
  },
];

const ContactSection = () => {
  return (
    <section id='contact' className='py-20 px-6 bg-zinc-800/50' aria-labelledby='contact-heading'>
      <div className='max-w-6xl mx-auto'>
        <h2 id='contact-heading' className='text-3xl font-bold mb-12'>
          Get in Touch
        </h2>
        <div className='grid md:grid-cols-2 gap-8' role='list' aria-label='Contact information'>
          {contactItems.map((item, index) => (
            <motion.div
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              key={item.text}
              className='bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 
                transition-colors'
              role='listitem'
            >
              {item.href ? (
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4'
                  aria-label={item.label}
                >
                  <item.icon className='flex-shrink-0' aria-hidden='true' />
                  <span>{item.text}</span>
                </a>
              ) : (
                <div className='flex items-center gap-4' aria-label={item.label}>
                  <item.icon className='flex-shrink-0' aria-hidden='true' />
                  <span>{item.text}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
