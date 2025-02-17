import { Github, Linkedin, Mail } from 'lucide-react';
import { TypeWriter } from './components/TypeWriter';
import HeroSection from './pages/home/HeroSection';
import SkillsSection from './pages/home/SkillsSection';
import ExperienceSection from './pages/home/ExperienceSection';
import EducationSection from './pages/home/EducationSection';
import ContactSection from './pages/home/ContactSection';

function App() {
  return (
    <div className='min-h-screen bg-zinc-900 text-zinc-100 -z-10'>
      {/* Navbar */}
      <nav className='fixed w-full p-6 backdrop-blur-sm bg-zinc-900/80'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <TypeWriter text='amorelli.dev' className='flex items-center text-xl font-bold' />
        </div>
      </nav>

      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      {/* <ProjectsSection /> */}
      <ContactSection />

      <footer className='py-12 px-6 border-t border-zinc-800'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-zinc-400'>© 2025 amorelli.dev. All rights reserved.</div>
          <div className='flex gap-6'>
            <Github className='hover:text-blue-400 transition-colors cursor-pointer' />
            <Linkedin className='hover:text-blue-400 transition-colors cursor-pointer' />
            <Mail className='hover:text-blue-400 transition-colors cursor-pointer' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
