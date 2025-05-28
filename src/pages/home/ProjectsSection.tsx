import { motion } from "motion/react";
import { useState } from "react";
import {
  Code,
  ExternalLink,
  Github,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: "RIO Services",
      description:
        "Complete booking platform for services provider company in Cork, Ireland",
      longDescription:
        "Full-scale business platform with online booking system, international payment processing, admin dashboard with analytics, and team management. MVP delivered in 1 month using AI-assisted development.",
      tech: [
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
      url: "https://rioservices.ie",
      github: null, // Private client project
      status: "production",
      period: "Mar 2025 - Present",
      location: "Cork, Ireland",
      role: "Full-Stack Freelancer",
      features: [
        "Complete booking platform with payment processing",
        "Stripe integration for international transactions",
        "Admin dashboard with analytics and team management",
        "SEO optimization and technical implementation",
        "AI-assisted development for rapid delivery",
        "MVP functional delivery in 1 month",
        "Independent development and architecture",
      ],
      highlights: [
        "Live business platform serving real customers",
        "International payment processing",
        "Delivered MVP in just 1 month",
        "AI-assisted development workflow",
      ],
    },
    {
      name: "Portfolio Terminal",
      description:
        "Interactive developer portfolio with immersive terminal interface",
      longDescription:
        "Modern portfolio website featuring interactive terminal interfaces, particle networking systems, and smooth animations. Designed to showcase technical skills through engaging user interactions.",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
      url: "#",
      github: "https://github.com/fabioavf/portfolio",
      status: "development",
      period: "2025",
      location: "Personal Project",
      role: "Developer & Designer",
      features: [
        "Interactive terminal interfaces",
        "Particle networking system with mouse interaction",
        "Package manager-style skills showcase",
        "Git log-inspired experience timeline",
        "File system browser for education",
        "Terminal-based contact system",
        "Smooth animations and micro-interactions",
      ],
      highlights: [
        "Cohesive terminal-inspired design system",
        "Advanced particle physics animations",
        "Interactive command execution",
        "Performance-optimized animations",
      ],
    },
    {
      name: "Real Estate Platform",
      description:
        "Complete real estate website with property management system",
      longDescription:
        "Led frontend development of comprehensive real estate platform using modern React ecosystem. Implemented authentication, state management, and responsive design.",
      tech: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Context API",
        "JWT Auth",
        "Styled-components",
      ],
      url: null,
      github: null, // Client project at byron.solutions
      status: "completed",
      period: "2021-2023",
      location: "byron.solutions",
      role: "Frontend Lead Developer",
      features: [
        "Property listing and search functionality",
        "User authentication and authorization",
        "Responsive design for all devices",
        "State management with Context API",
        "JWT-based authentication system",
        "Component-based architecture",
      ],
      highlights: [
        "Led technical transition from WordPress to React",
        "Mentored team members in modern development",
        "Established component design system",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "production":
        return "text-green-400";
      case "development":
        return "text-blue-400";
      case "completed":
        return "text-purple-400";
      default:
        return "text-zinc-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "production":
        return "🟢";
      case "development":
        return "🔵";
      case "completed":
        return "✅";
      default:
        return "📁";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Code className="w-8 h-8 text-purple-400" />
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg">
            Live business platforms and technical showcases
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                layoutId={`project-${index}`}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-xl border cursor-pointer ${
                  selectedProject === index
                    ? "bg-purple-600/20 border-purple-600/30"
                    : "bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  layout: { duration: 0.2 },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  // Force hardware acceleration to prevent flickering
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  perspective: 1000,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">
                      {getStatusIcon(project.status)}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full bg-zinc-900 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{project.period}</span>
                  <span>•</span>
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                </div>

                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-zinc-600 text-zinc-400 rounded text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Demo */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden"
              style={{
                // Force hardware acceleration
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-zinc-400 text-sm font-mono">
                  {projects[selectedProject].name
                    .toLowerCase()
                    .replace(" ", "-")}
                  .project
                </span>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">
                      {projects[selectedProject].name}
                    </h3>
                    <span
                      className={`text-sm px-3 py-1 rounded-full bg-zinc-800 ${getStatusColor(projects[selectedProject].status)}`}
                    >
                      {projects[selectedProject].status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{projects[selectedProject].period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{projects[selectedProject].location}</span>
                    </div>
                  </div>

                  <div className="text-purple-400 text-sm mb-3 font-medium">
                    {projects[selectedProject].role}
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    {projects[selectedProject].longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-zinc-400 text-sm"
                      >
                        <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].highlights.map(
                      (highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-green-400 text-sm"
                        >
                          <span className="text-green-400">•</span>
                          {highlight}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {projects[selectedProject].url && (
                    <motion.a
                      href={projects[selectedProject].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ transition: "background-color 0.2s ease" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Platform
                    </motion.a>
                  )}
                  {projects[selectedProject].github && (
                    <motion.a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-zinc-600 text-zinc-300 rounded-lg hover:bg-zinc-800"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ transition: "background-color 0.2s ease" }}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
