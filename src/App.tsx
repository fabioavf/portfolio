import { Github, Linkedin, Mail } from "lucide-react";
import { FC } from "react";
import { AnimatePresence, motion } from "motion/react";

// Components
import { TypeWriter } from "./components/TypeWriter";
import { useScrollTo } from "./hooks/useScrollTo";

// Page Sections
import HeroSection from "./pages/home/HeroSection";
import SkillsSection from "./pages/home/SkillsSection";
import ExperienceSection from "./pages/home/ExperienceSection";
import EducationSection from "./pages/home/EducationSection";
import ContactSection from "./pages/home/ContactSection";

// Navigation configuration
const navigationItems = [
  { label: "Home", href: "home" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
] as const;

// Social links configuration
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/fabioavf",
    label: "GitHub Profile",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/fabioavf",
    label: "LinkedIn Profile",
  },
  {
    icon: Mail,
    href: "mailto:amorelli.ff@gmail.com",
    label: "Email Contact",
  },
] as const;

const App: FC = () => {
  const scrollTo = useScrollTo();

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed w-full p-4 md:p-6 backdrop-blur-sm bg-zinc-900/80 z-50 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <TypeWriter
              text="amorelli.dev"
              className="flex items-center text-lg md:text-xl font-bold text-blue-400"
            />
          </motion.div>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden lg:flex gap-6">
            <AnimatePresence>
              {navigationItems.map(({ label, href }, index) => (
                <motion.button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-zinc-400 hover:text-blue-400 cursor-pointer transition-colors font-mono text-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "rgb(96 165 250)", // blue-400
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ./{label.toLowerCase()}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              className="text-zinc-400 hover:text-blue-400 transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open navigation menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              className="text-zinc-400 text-sm font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} amorelli.dev • Fabio Amorelli • All
              rights reserved
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-400 transition-colors"
                  whileHover={{
                    scale: 1.2,
                    y: -2,
                    color: "rgb(96 165 250)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Terminal-style footer info */}
          <motion.div
            className="mt-8 pt-6 border-t border-zinc-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-zinc-500 text-xs font-mono">
              $ echo "Built with React, TypeScript, Tailwind CSS & ❤️"
            </div>
            <div className="text-zinc-600 text-xs font-mono mt-1">
              Located in Itajubá, MG, Brazil 🇧🇷 • Available for freelance work
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
