import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  GraduationCap,
  FolderOpen,
  File,
  Calendar,
  MapPin,
  BookOpen,
  ChevronRight,
} from "lucide-react";

interface Education {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  description: string;
  status: "current" | "completed" | "transferred";
  gpa?: string;
  highlights?: string[];
}

const educationHistory: Education[] = [
  {
    from: "2020",
    to: "2026",
    title: "Bachelor's in Computer Engineering",
    subtitle: "Universidade Federal de Itajubá",
    description:
      "Currently studying computer engineering with a focus on software development.",
    status: "current",
    gpa: "8.5/10",
    highlights: [
      "Software Engineering fundamentals",
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development",
      "Software Architecture",
    ],
  },
  {
    from: "2019",
    to: "2020",
    title: "Bachelor's in Electrical Engineering",
    subtitle: "Universidade Federal de Itajubá",
    description:
      "Studied electrical engineering for one year before switching to computer engineering.",
    status: "transferred",
    highlights: [
      "Mathematics fundamentals",
      "Physics and Electronics",
      "Engineering principles",
      "Problem-solving methodology",
    ],
  },
];

const EducationSection = () => {
  const [selectedEducation, setSelectedEducation] = useState<number>(0);
  const [expandedFolder, setExpandedFolder] = useState<boolean>(true);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "text-green-400";
      case "completed":
        return "text-blue-400";
      case "transferred":
        return "text-yellow-400";
      default:
        return "text-zinc-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current":
        return "🟢";
      case "completed":
        return "✅";
      case "transferred":
        return "🔄";
      default:
        return "📁";
    }
  };

  return (
    <section
      id="education"
      className="py-20 px-6"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-orange-400" />
            ~/education
          </h2>
          <p className="text-zinc-400 text-lg">
            File system view of academic journey and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 overflow-x-hidden">
          {/* File Explorer */}
          <div className="lg:col-span-1 w-full">
            <div className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden sticky top-8">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                <FolderOpen className="w-4 h-4 text-orange-400" />
                <span className="text-zinc-400 text-sm font-mono truncate">
                  education/
                </span>
              </div>

              <div className="p-4 space-y-2">
                <motion.div
                  className="flex items-center gap-2 text-zinc-400 text-sm font-mono cursor-pointer"
                  onClick={() => setExpandedFolder(!expandedFolder)}
                  whileHover={{ x: 2 }}
                >
                  <ChevronRight
                    className={`w-3 h-3 transition-transform ${expandedFolder ? "rotate-90" : ""}`}
                  />
                  <FolderOpen className="w-4 h-4 text-orange-400" />
                  <span className="truncate">academic_records/</span>
                </motion.div>

                <AnimatePresence>
                  {expandedFolder && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6 space-y-1"
                    >
                      {educationHistory.map((edu, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedEducation(index)}
                          className={`w-full text-left p-2 rounded font-mono text-xs transition-colors flex items-center gap-2 ${
                            selectedEducation === index
                              ? "bg-orange-600/20 border border-orange-600/30"
                              : "hover:bg-zinc-800"
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <File className="w-3 h-3 text-orange-400 flex-shrink-0" />
                          <span className="truncate min-w-0">
                            comp_eng_{index + 1}.edu
                          </span>
                          <span className="ml-auto text-xs flex-shrink-0">
                            {getStatusIcon(edu.status)}
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-t border-zinc-700 pt-2 mt-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                    <File className="w-3 h-3" />
                    <span className="truncate">transcripts.pdf</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                    <File className="w-3 h-3" />
                    <span className="truncate">certificates.zip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Content Display */}
          <div className="lg:col-span-2 w-full min-w-0">
            <motion.div
              key={selectedEducation}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/90 border border-zinc-700 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-zinc-400 text-sm font-mono truncate">
                  comp_eng_{selectedEducation + 1}.edu
                </span>
              </div>

              <div className="p-4 md:p-6 font-mono text-sm space-y-6 overflow-x-auto">
                {/* File Header */}
                <div className="space-y-2">
                  <div className="text-zinc-500">#!/usr/bin/education</div>
                  <div className="text-zinc-500"># Academic Record File</div>
                  <div className="text-zinc-500">
                    # Generated by Academic Management System v2.0
                  </div>
                </div>

                {/* Education Details */}
                <div className="space-y-4">
                  <div className="border-l-2 border-orange-400 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-orange-400 font-semibold break-all">
                        PERIOD="{educationHistory[selectedEducation].from}-
                        {educationHistory[selectedEducation].to}"
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 break-words">
                      DEGREE="{educationHistory[selectedEducation].title}"
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-400 break-words">
                        INSTITUTION="
                        {educationHistory[selectedEducation].subtitle}"
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span
                        className={getStatusColor(
                          educationHistory[selectedEducation].status,
                        )}
                      >
                        STATUS="{educationHistory[selectedEducation].status}"
                      </span>
                    </div>

                    {educationHistory[selectedEducation].gpa && (
                      <div className="mb-3">
                        <span className="text-green-400 break-all">
                          GPA="{educationHistory[selectedEducation].gpa}"
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="text-zinc-400">DESCRIPTION:</div>
                    <p className="text-zinc-300 leading-relaxed pl-4 break-words">
                      "{educationHistory[selectedEducation].description}"
                    </p>
                  </div>

                  {educationHistory[selectedEducation].highlights && (
                    <div className="space-y-3">
                      <div className="text-zinc-400">KEY_SUBJECTS=( </div>
                      <ul className="pl-4 space-y-1">
                        {educationHistory[selectedEducation].highlights!.map(
                          (highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-zinc-300"
                            >
                              <span className="text-orange-400 flex-shrink-0">
                                "
                              </span>
                              <span className="break-words">{highlight}</span>
                              <span className="text-orange-400 flex-shrink-0">
                                "
                              </span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                      <div className="text-zinc-400">)</div>
                    </div>
                  )}
                </div>

                {/* File Footer */}
                <div className="border-t border-zinc-700 pt-4 text-zinc-500">
                  <div className="break-words">
                    // Last modified: {new Date().toLocaleDateString()}
                  </div>
                  <div className="break-words">
                    // File size: {Math.floor(Math.random() * 1000) + 500} bytes
                  </div>
                  <div className="text-green-400 text-xs mt-2">
                    Education record loaded successfully ✓
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
