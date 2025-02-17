import { Github, Linkedin, Mail } from 'lucide-react';
import { FC } from 'react';

// Components
import { TypeWriter } from './components/TypeWriter';

// Pages
import ContactSection from './pages/home/ContactSection';
import EducationSection from './pages/home/EducationSection';
import ExperienceSection from './pages/home/ExperienceSection';
import HeroSection from './pages/home/HeroSection';
import SkillsSection from './pages/home/SkillsSection';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub Profile',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn Profile',
  },
  {
    icon: Mail,
    href: 'mailto:your@email.com',
    label: 'Email Contact',
  },
];

const App: FC = () => {
  return (
    <div className='min-h-screen bg-zinc-900 text-zinc-100'>
      <nav className='fixed w-full p-6 backdrop-blur-sm bg-zinc-900/80 z-50'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <TypeWriter text='amorelli.dev' className='flex items-center text-xl font-bold' />
          <div className='hidden md:flex gap-6'>
            {navigationItems.map(({ label, href }) => (
              <a key={href} href={href} className='text-zinc-400 hover:text-zinc-100 transition-colors'>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className='py-12 px-6 border-t border-zinc-800'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-zinc-400'>© {new Date().getFullYear()} amorelli.dev. All rights reserved.</div>
          <div className='flex gap-6'>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors'
              >
                <Icon className='w-5 h-5' />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
