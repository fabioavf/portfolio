import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronRight, Terminal } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  velocity: { x: number; y: number };
  connections: number[];
}

interface Command {
  name: string;
  description: string;
  action: () => void;
}

const EnhancedParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [connections, setConnections] = useState<
    Array<{ from: Particle; to: Particle; opacity: number }>
  >([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const generateParticles = () => {
      // Reduced particle count for better performance and less visual noise
      const numberOfParticles = window.innerWidth < 768 ? 80 : 200;
      const newParticles: Particle[] = [];

      for (let i = 0; i < numberOfParticles; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 3,
          duration: Math.random() * 20 + 30,
          velocity: {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3,
          },
          connections: [],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  // Create fewer, more selective connections
  useEffect(() => {
    const updateConnections = () => {
      const newConnections: Array<{
        from: Particle;
        to: Particle;
        opacity: number;
      }> = [];
      const maxDistance = 100; // Reduced from 120
      const maxConnections = 50; // Limit total connections

      for (
        let i = 0;
        i < particles.length && newConnections.length < maxConnections;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length && newConnections.length < maxConnections;
          j++
        ) {
          const dx =
            ((particles[i].x - particles[j].x) * window.innerWidth) / 100;
          const dy =
            ((particles[i].y - particles[j].y) * window.innerHeight) / 100;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = Math.max(0, 1 - distance / maxDistance) * 0.15; // More subtle
            newConnections.push({
              from: particles[i],
              to: particles[j],
              opacity,
            });
          }
        }
      }
      setConnections(newConnections);
    };

    if (particles.length > 0) {
      updateConnections();
      const interval = setInterval(updateConnections, 150);
      return () => clearInterval(interval);
    }
  }, [particles]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particle connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="rgb(59 130 246)"
            strokeWidth="0.5"
            opacity={connection.opacity}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </svg>

      {/* Particles */}
      {particles.map((particle) => {
        const distance = Math.hypot(
          mousePosition.x - (particle.x * window.innerWidth) / 100,
          mousePosition.y - (particle.y * window.innerHeight) / 100,
        );
        const maxDistance = 120;
        const influence = Math.max(0, 1 - distance / maxDistance);
        const scale = 1 + influence * 1.2;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(59, 130, 246, ${0.4 + influence * 0.3}) 0%, rgba(59, 130, 246, 0.05) 70%)`,
              boxShadow:
                influence > 0.4
                  ? `0 0 ${influence * 15}px rgba(59, 130, 246, 0.4)`
                  : "none",
            }}
            animate={{
              x: [
                0,
                particle.velocity.x * 40,
                -particle.velocity.x * 25,
                particle.velocity.x * 30,
                0,
              ],
              y: [
                0,
                -particle.velocity.y * 30,
                particle.velocity.y * 40,
                -particle.velocity.y * 25,
                0,
              ],
              scale: scale,
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              scale: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
          />
        );
      })}
    </div>
  );
};

const TerminalInterface = ({
  onCommand,
}: {
  onCommand: (cmd: string) => void;
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to amorelli.dev terminal",
    'Type "help" to see available commands',
    "",
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      name: "help",
      description: "Show available commands",
      action: () => showHelp(),
    },
    {
      name: "about",
      description: "About Fabio Amorelli",
      action: () => showAbout(),
    },
    {
      name: "skills",
      description: "Navigate to skills section",
      action: () => onCommand("skills"),
    },
    {
      name: "projects",
      description: "Navigate to projects section",
      action: () => onCommand("projects"),
    },
    {
      name: "experience",
      description: "Navigate to experience section",
      action: () => onCommand("experience"),
    },
    {
      name: "contact",
      description: "Navigate to contact section",
      action: () => onCommand("contact"),
    },
    {
      name: "clear",
      description: "Clear terminal",
      action: () => clearTerminal(),
    },
    {
      name: "ls",
      description: "List available sections",
      action: () => listSections(),
    },
    {
      name: "whoami",
      description: "Current user info",
      action: () => whoami(),
    },
  ];

  const showHelp = () => {
    const helpText = [
      "Available commands:",
      ...commands.map((cmd) => `  ${cmd.name.padEnd(12)} - ${cmd.description}`),
      "",
    ];
    setHistory((prev) => [...prev, "$ help", ...helpText]);
  };

  const showAbout = () => {
    const aboutText = [
      "Full-stack developer based in Brazil",
      "Specializing in modern web applications",
      "Technologies: React, Next.js, TypeScript, Node.js",
      "Passionate about frontend magic and performance",
      "",
    ];
    setHistory((prev) => [...prev, "$ about", ...aboutText]);
  };

  const clearTerminal = () => {
    setHistory([
      "Welcome to amorelli.dev terminal",
      'Type "help" to see available commands',
      "",
    ]);
  };

  const listSections = () => {
    const sections = ["home", "skills", "experience", "education", "contact"];
    setHistory((prev) => [
      ...prev,
      "$ ls",
      ...sections.map((s) => `  ${s}/`),
      "",
    ]);
  };

  const whoami = () => {
    setHistory((prev) => [...prev, "$ whoami", "fabio@amorelli.dev", ""]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      const filtered = commands
        .filter((cmd) => cmd.name.toLowerCase().startsWith(value.toLowerCase()))
        .map((cmd) => cmd.name);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0 && value !== filtered[0]);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = commands.find((cmd) => cmd.name === input.toLowerCase());
    setHistory((prev) => [...prev, `$ ${input}`]);

    if (command) {
      command.action();
    } else {
      setHistory((prev) => [
        ...prev,
        `Command not found: ${input}`,
        'Type "help" for available commands',
        "",
      ]);
    }

    setInput("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="font-mono relative w-full max-w-2xl">
      <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-3 bg-zinc-800/60 border-b border-zinc-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Terminal className="w-4 h-4" />
            <span>amorelli@dev:~</span>
          </div>
        </div>

        <div className="p-5 min-h-[400px] max-h-[500px] overflow-y-auto text-base leading-relaxed">
          {history.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`mb-1 ${line.startsWith("$") ? "text-blue-400 font-medium" : "text-zinc-300"}`}
            >
              {line}
            </motion.div>
          ))}

          <div className="flex items-center gap-3 mt-3">
            <span className="text-blue-400 font-medium">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                handleKeyDown(e);
                if (e.key === "Enter") {
                  handleSubmit(e as any);
                }
              }}
              className="flex-1 bg-transparent text-zinc-100 outline-none text-base placeholder-zinc-500"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Autocomplete suggestions */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-zinc-800/95 backdrop-blur-sm border border-zinc-700 rounded-lg overflow-hidden z-10"
          >
            {suggestions.map((suggestion) => (
              <motion.button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left text-zinc-300 hover:bg-zinc-700/50 transition-colors flex items-center gap-3 text-sm"
                whileHover={{ x: 4 }}
              >
                <ChevronRight className="w-3 h-3" />
                <span className="font-medium">{suggestion}</span>
                <span className="text-xs text-zinc-500 ml-auto">
                  {commands.find((cmd) => cmd.name === suggestion)?.description}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const EnhancedHeroSection = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleCommand = (cmd: string) => {
    // Here you would integrate with your scroll navigation
    console.log(`Navigating to: ${cmd}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTerminal(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      aria-label="Introduction"
    >
      <EnhancedParticles />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero content - now taking full width with better spacing */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-start">
          {/* Left side - Text content (3/5 of width on xl screens) */}
          <div className="xl:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-zinc-100"
                >
                  Hello!
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="block"
                >
                  I'm{" "}
                  <span className="text-blue-500 relative">
                    Fabio
                    <motion.div
                      className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="space-y-6"
            >
              <p className="text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                A full-stack developer based in Brazil, specializing in building
                modern web applications with cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  View Projects
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-zinc-600 text-zinc-300 rounded-xl font-medium hover:bg-zinc-800 transition-colors text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Download CV
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Terminal (2/5 of width on xl screens) */}
          <div className="xl:col-span-2 flex justify-center xl:justify-end">
            <AnimatePresence>
              {showTerminal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full max-w-lg"
                >
                  <TerminalInterface onCommand={handleCommand} />
                </motion.div>
              )}
            </AnimatePresence>

            {!showTerminal && (
              <motion.div
                className="flex items-center justify-center h-96 text-zinc-500 w-full max-w-lg"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Terminal className="w-20 h-20" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
