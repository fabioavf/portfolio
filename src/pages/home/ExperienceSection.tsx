import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Terminal,
  Play,
  Calendar,
  MapPin,
  ChevronRight,
  Briefcase,
} from "lucide-react";

interface Experience {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  location: string;
  type: string;
  description?: string;
  descriptionList?: string[];
  technologies?: string[];
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    from: "mar 2025",
    to: "present",
    title: "Full-Stack Developer Freelancer",
    subtitle: "RIO Services",
    location: "Cork, Ireland",
    type: "Freelance • Remote",
    description:
      "Developed complete booking platform for cleaning services company in Cork, Ireland. Delivered MVP in 1 month using AI-assisted development methodologies.",
    descriptionList: [
      "Developed complete booking platform for cleaning services company",
      "Architected and implemented system with Next.js, React, TypeScript, Node.js, Prisma and PostgreSQL",
      "Integrated Stripe payment system for international transaction processing",
      "Built admin dashboard with analytics, team management and booking control",
      "Utilized AI-assisted development to accelerate delivery while maintaining high code quality",
      "Delivered functional MVP in 1 month, demonstrating independent development capabilities",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Stripe API",
      "SEO técnico",
      "AI-assisted development",
    ],
    highlights: [
      "MVP delivered in just 1 month",
      "International payment processing implementation",
      "AI-assisted development workflow",
      "Independent full-stack architecture",
    ],
  },
  {
    from: "feb 2023",
    to: "sep 2023",
    title: "Software Engineer Trainee",
    subtitle: "LEVTY",
    location: "Itajubá, MG",
    type: "Trainee • Remote",
    description:
      "Developed enterprise solutions for clients using SYDLE One Platform (low-code/no-code). Worked with multifunctional teams following agile methodologies.",
    descriptionList: [
      "Developed enterprise solutions for clients using SYDLE One Platform (low-code/no-code)",
      "Collaborated with multifunctional teams following agile methodologies (Scrum) for corporate software delivery",
      "Acquired experience in development for large teams and structured corporate processes",
      "Applied JavaScript knowledge and development best practices in professional context",
    ],
    technologies: [
      "JavaScript",
      "Scrum",
      "SYDLE One Platform",
      "Enterprise development",
    ],
    highlights: [
      "Enterprise-level development experience",
      "Agile methodology implementation",
      "Corporate software delivery",
    ],
  },
  {
    from: "jan 2022",
    to: "jan 2023",
    title: "Vice-President Director",
    subtitle: "byron.solutions",
    location: "Itajubá, MG",
    type: "Leadership • Junior Enterprise",
    description:
      "Led 5-person team implementing agile methodologies (PDCA, OKR, SWOT) to improve project quality and delivery processes.",
    descriptionList: [
      "Led 5-person team, implementing agile methodologies (PDCA, OKR e SWOT) to improve project quality",
      "Managed technical and administrative operations of junior enterprise, establishing more robust development processes",
      "Represented company in meetings with university administration and external stakeholders",
      "Balanced technical leadership responsibilities with project management and strategic decisions",
      "Implemented strategic planning that resulted in significant improvement in delivery quality",
    ],
    technologies: [
      "Agile methodologies",
      "Project management",
      "Technical leadership",
    ],
    highlights: [
      "Team leadership and strategic planning",
      "Process improvement implementation",
      "University and stakeholder representation",
    ],
  },
  {
    from: "feb 2021",
    to: "jan 2023",
    title: "Software Developer",
    subtitle: "byron.solutions",
    location: "Itajubá, MG",
    type: "Developer • Junior Enterprise",
    description:
      "Led frontend development of complete real estate platform using React.js, TypeScript and Next.js. Conducted technical transition from WordPress to modern React stack.",
    descriptionList: [
      "Led frontend development of complete real estate platform using React.js, TypeScript and Next.js",
      "Implemented JWT authentication system, Context API for state management and styled-components",
      "Conducted technical transition of company from WordPress to React/Next.js stack, modernizing architecture",
      "Provided technical training for team members on React, TypeScript and modern development methodologies",
      "Represented byron.solutions in intensive course at UNIFEI (4h, 100+ students) on frontend development",
      "Collaborated with designers to ensure faithful UI/UX implementation across all applications",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Context API",
      "Styled-components",
      "WordPress",
    ],
    highlights: [
      "Led WordPress to React migration",
      "Technical training and mentorship",
      "University course representation",
      "Full-stack platform development",
    ],
  },
];

const ExperienceSection = () => {
  const [activeCommand, setActiveCommand] = useState<number>(0);
  const [showingOutput, setShowingOutput] = useState<number[]>([]);

  const executeCommand = (index: number) => {
    setActiveCommand(index);
    if (!showingOutput.includes(index)) {
      setShowingOutput((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    // Auto-execute first command (current role)
    const timer = setTimeout(() => executeCommand(0), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getExperienceTypeColor = (type: string) => {
    if (type.includes("Freelance")) return "text-green-400";
    if (type.includes("Leadership")) return "text-purple-400";
    if (type.includes("Trainee")) return "text-blue-400";
    return "text-yellow-400";
  };

  return (
    <section
      id="experience"
      className="py-20 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-green-400" />
            git log --professional-experience
          </h2>
          <p className="text-zinc-400 text-lg">
            Commit history of professional growth and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Command List */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden sticky top-8">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-zinc-400 text-sm font-mono">
                  experience.sh
                </span>
              </div>
              <div className="p-4 space-y-2">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    onClick={() => executeCommand(index)}
                    className={`w-full text-left p-3 rounded-lg font-mono text-sm transition-colors ${
                      activeCommand === index
                        ? "bg-green-600/20 border border-green-600/30"
                        : "bg-zinc-800/50 hover:bg-zinc-800"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Play className="w-3 h-3 text-green-400" />
                      <span className="text-green-400">
                        ./show_role_{index + 1}.sh
                      </span>
                      {index === 0 && (
                        <span className="text-xs bg-green-600 text-white px-1 rounded">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-zinc-300 text-xs font-medium truncate">
                      {exp.title}
                    </div>
                    <div className="text-zinc-400 text-xs truncate">
                      {exp.subtitle} • {exp.from}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Display */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-zinc-400 text-sm font-mono">output</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-6 min-h-[500px]">
                <AnimatePresence mode="wait">
                  {showingOutput.includes(activeCommand) && (
                    <motion.div
                      key={activeCommand}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <div className="text-green-400">
                        $ ./show_role_{activeCommand + 1}.sh
                        {activeCommand === 0 && (
                          <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <div className="border-l-2 border-blue-400 pl-4 space-y-3">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400 font-semibold">
                            {experiences[activeCommand].from} →{" "}
                            {experiences[activeCommand].to}
                          </span>
                          <span className="text-zinc-500">•</span>
                          <span
                            className={getExperienceTypeColor(
                              experiences[activeCommand].type,
                            )}
                          >
                            {experiences[activeCommand].type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white">
                          {experiences[activeCommand].title}
                        </h3>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400">
                              {experiences[activeCommand].subtitle}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400">
                              {experiences[activeCommand].location}
                            </span>
                          </div>
                        </div>

                        {experiences[activeCommand].description && (
                          <p className="text-zinc-300 leading-relaxed">
                            {experiences[activeCommand].description}
                          </p>
                        )}

                        {experiences[activeCommand].descriptionList && (
                          <div className="space-y-2">
                            <div className="text-zinc-400">
                              Key responsibilities and achievements:
                            </div>
                            <ul className="space-y-1">
                              {experiences[activeCommand].descriptionList!.map(
                                (item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-2 text-zinc-300"
                                  >
                                    <ChevronRight className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                                    {item}
                                  </motion.li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                        {experiences[activeCommand].highlights && (
                          <div className="space-y-2">
                            <div className="text-zinc-400">Highlights:</div>
                            <ul className="space-y-1">
                              {experiences[activeCommand].highlights!.map(
                                (highlight, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.3 }}
                                    className="flex items-start gap-2 text-green-400"
                                  >
                                    <span className="text-green-400">★</span>
                                    {highlight}
                                  </motion.li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                        {experiences[activeCommand].technologies && (
                          <div className="space-y-2">
                            <div className="text-zinc-400">
                              Technologies used:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experiences[activeCommand].technologies!.map(
                                (tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 + 0.5 }}
                                    className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-xs"
                                  >
                                    {tech}
                                  </motion.span>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-green-400 text-xs">
                        Process completed with exit code 0
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
