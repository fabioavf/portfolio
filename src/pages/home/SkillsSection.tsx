import { motion } from "motion/react";
import { useState } from "react";
import { Package, Download, Sparkles } from "lucide-react";

interface SkillPackage {
  name: string;
  version: string;
  description: string;
  category: "frontend" | "backend" | "tools" | "methodologies";
  popularity?: "high" | "medium" | "specialized";
  dependencies?: string[];
  featured?: boolean;
}

const skillPackages: SkillPackage[] = [
  // Frontend - Main stack
  {
    name: "react",
    version: "^18.2.0",
    description: "Frontend library for building UIs",
    category: "frontend",
    popularity: "high",
    featured: true,
  },
  {
    name: "typescript",
    version: "^5.0.0",
    description: "Typed superset of JavaScript",
    category: "frontend",
    popularity: "high",
    featured: true,
  },
  {
    name: "nextjs",
    version: "^15.0.0",
    description: "React framework for production",
    category: "frontend",
    popularity: "high",
    featured: true,
  },
  {
    name: "tailwindcss",
    version: "^4.0.0",
    description: "Utility-first CSS framework",
    category: "frontend",
    popularity: "high",
  },
  {
    name: "styled-components",
    version: "^6.0.0",
    description: "CSS-in-JS styling solution",
    category: "frontend",
    popularity: "medium",
  },
  {
    name: "context-api",
    version: "built-in",
    description: "React state management",
    category: "frontend",
    popularity: "medium",
  },
  {
    name: "framer-motion",
    version: "^12.0.0",
    description: "Animation library for React",
    category: "frontend",
    popularity: "medium",
  },

  // Backend - Learning and applying
  {
    name: "nodejs",
    version: "^20.0.0",
    description: "JavaScript runtime for server-side",
    category: "backend",
    popularity: "high",
    featured: true,
  },
  {
    name: "prisma",
    version: "^6.0.0",
    description: "Modern database toolkit",
    category: "backend",
    popularity: "high",
    featured: true,
  },
  {
    name: "postgresql",
    version: "^16.0.0",
    description: "Relational database system",
    category: "backend",
    popularity: "medium",
  },
  {
    name: "stripe-api",
    version: "^14.0.0",
    description: "Payment processing integration",
    category: "backend",
    popularity: "medium",
  },
  {
    name: "jwt-auth",
    version: "^9.0.0",
    description: "JSON Web Token authentication",
    category: "backend",
    popularity: "medium",
  },
  {
    name: "express",
    version: "^4.18.0",
    description: "Web framework for Node.js",
    category: "backend",
    popularity: "medium",
  },

  // Tools & Technologies
  {
    name: "git",
    version: "^2.40.0",
    description: "Version control system",
    category: "tools",
    popularity: "high",
    featured: true,
  },
  {
    name: "linux",
    version: "arch",
    description: "Open source operating system",
    category: "tools",
    popularity: "high",
  },
  {
    name: "vite",
    version: "^6.0.0",
    description: "Build tool for modern web projects",
    category: "tools",
    popularity: "medium",
  },
  {
    name: "ai-prompting",
    version: "proficient",
    description: "Effective AI tool utilization and prompting",
    category: "tools",
    popularity: "high",
    featured: true,
  },

  // Learning & Growth Areas
  {
    name: "problem-solving",
    version: "developing",
    description: "Breaking down complex problems",
    category: "methodologies",
    popularity: "high",
  },
  {
    name: "agile-basics",
    version: "learning",
    description: "Agile development practices",
    category: "methodologies",
    popularity: "medium",
  },
  {
    name: "team-collaboration",
    version: "growing",
    description: "Working effectively in teams",
    category: "methodologies",
    popularity: "high",
  },
  {
    name: "continuous-learning",
    version: "always-on",
    description: "Staying updated with tech trends",
    category: "methodologies",
    popularity: "high",
    featured: true,
  },
];

const SkillsSection = () => {
  const [installingSkill, setInstallingSkill] = useState<string | null>(null);
  const [installedSkills, setInstalledSkills] = useState<Set<string>>(
    new Set(),
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "frontend", "backend", "tools", "methodologies"];
  const filteredSkills =
    selectedCategory === "all"
      ? skillPackages
      : skillPackages.filter((skill) => skill.category === selectedCategory);

  const handleInstall = async (skillName: string) => {
    setInstallingSkill(skillName);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setInstalledSkills((prev) => new Set([...prev, skillName]));
    setInstallingSkill(null);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "text-blue-400";
      case "backend":
        return "text-green-400";
      case "tools":
        return "text-yellow-400";
      case "methodologies":
        return "text-purple-400";
      default:
        return "text-zinc-400";
    }
  };

  const getPopularityIcon = (popularity?: string) => {
    switch (popularity) {
      case "high":
        return "🚀";
      case "medium":
        return "📚";
      default:
        return "📚";
    }
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-zinc-900/50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Package className="w-8 h-8 text-blue-400" />
            Skills & Tools
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </h2>
          <p className="text-zinc-400 text-lg">
            Technologies I work with and areas I'm learning
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                (
                {
                  skillPackages.filter(
                    (s) => category === "all" || s.category === category,
                  ).length
                }
                )
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured Skills Banner */}
        {selectedCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-blue-300">
                Main Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillPackages
                .filter((skill) => skill.featured)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-600/50"
                  >
                    {skill.name}@{skill.version}
                  </span>
                ))}
            </div>
          </motion.div>
        )}

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-zinc-400 text-sm font-mono">
              npm install @fabio/skills
            </span>
          </div>

          <div className="p-6 font-mono text-sm space-y-3 max-h-96 overflow-y-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800 transition-colors group ${
                  skill.featured
                    ? "bg-blue-600/10 border border-blue-600/20"
                    : "bg-zinc-800/50"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={getCategoryColor(skill.category)}>
                      {skill.name}@{skill.version}
                    </span>
                    <span className="text-xs">
                      {getPopularityIcon(skill.popularity)}
                    </span>
                    {skill.featured && (
                      <span className="text-yellow-400 text-xs">⭐ MAIN</span>
                    )}
                    {installedSkills.has(skill.name) && (
                      <span className="text-green-400 text-xs">
                        ✓ installed
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-xs mt-1">
                    {skill.description}
                  </p>
                </div>

                <motion.button
                  onClick={() => handleInstall(skill.name)}
                  disabled={
                    installingSkill === skill.name ||
                    installedSkills.has(skill.name)
                  }
                  className={`px-3 py-1 rounded text-xs hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                    skill.featured
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {installingSkill === skill.name ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ⟳
                    </motion.span>
                  ) : installedSkills.has(skill.name) ? (
                    "✓"
                  ) : (
                    <Download className="w-3 h-3" />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Installation Summary */}
          <div className="px-6 py-4 bg-zinc-800/30 border-t border-zinc-700">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">
                {installedSkills.size}/{skillPackages.length} packages installed
              </span>
              <span className="text-green-400">
                Ready for production deployment ✓
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
