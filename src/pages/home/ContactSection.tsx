import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import {
  Terminal,
  Send,
  MapPin,
  Linkedin,
  Mail,
  Phone,
  Github,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

interface ContactCommand {
  command: string;
  description: string;
  action: () => void;
}

const ContactSection = () => {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Welcome to contact terminal",
    'Type "help" to see available commands',
    "Ready to connect...",
    "",
  ]);
  const [input, setInput] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const contactInfo = {
    location: "Itajubá, Minas Gerais, Brazil",
    email: "amorelli.ff@gmail.com",
    phone: "(35) 98887-0037",
    linkedin: "https://www.linkedin.com/in/fabioavf",
    github: "https://github.com/fabioavf",
  };

  const commands: ContactCommand[] = [
    {
      command: "help",
      description: "Show available commands",
      action: () => showHelp(),
    },
    {
      command: "email",
      description: "Show email address",
      action: () => showContact("email", contactInfo.email),
    },
    {
      command: "phone",
      description: "Show phone number",
      action: () => showContact("phone", contactInfo.phone),
    },
    {
      command: "location",
      description: "Show current location",
      action: () => showContact("location", contactInfo.location),
    },
    {
      command: "linkedin",
      description: "Open LinkedIn profile",
      action: () => openLink("linkedin", contactInfo.linkedin),
    },
    {
      command: "github",
      description: "Open GitHub profile",
      action: () => openLink("github", contactInfo.github),
    },
    {
      command: "all",
      description: "Show all contact information",
      action: () => showAllContacts(),
    },
    {
      command: "clear",
      description: "Clear terminal",
      action: () => clearTerminal(),
    },
  ];

  const showHelp = () => {
    const helpText = [
      "Available contact commands:",
      ...commands.map(
        (cmd) => `  ${cmd.command.padEnd(12)} - ${cmd.description}`,
      ),
      "",
    ];
    setTerminalHistory((prev) => [...prev, "$ help", ...helpText]);
  };

  const showContact = (type: string, value: string) => {
    const messages = [
      `$ ${type}`,
      `${type.toUpperCase()}: ${value}`,
      `Copied to clipboard ✓`,
      "",
    ];
    setTerminalHistory((prev) => [...prev, ...messages]);
    copyToClipboard(value, type);
  };

  const openLink = (platform: string, url: string) => {
    const messages = [
      `$ ${platform}`,
      `Opening ${platform} profile...`,
      `URL: ${url}`,
      "",
    ];
    setTerminalHistory((prev) => [...prev, ...messages]);
    window.open(url, "_blank");
  };

  const showAllContacts = () => {
    const allContactsText = [
      "$ all",
      "CONTACT INFORMATION:",
      "==================",
      `📧 Email:     ${contactInfo.email}`,
      `📱 Phone:     ${contactInfo.phone}`,
      `📍 Location:  ${contactInfo.location}`,
      `💼 LinkedIn:  ${contactInfo.linkedin}`,
      `💻 GitHub:    ${contactInfo.github}`,
      "",
      "All information copied to clipboard ✓",
      "",
    ];
    setTerminalHistory((prev) => [...prev, ...allContactsText]);

    const allInfo = `
Contact: Fabio Amorelli
Email: ${contactInfo.email}
Phone: ${contactInfo.phone}
Location: ${contactInfo.location}
LinkedIn: ${contactInfo.linkedin}
GitHub: ${contactInfo.github}
    `.trim();

    copyToClipboard(allInfo, "all");
  };

  const clearTerminal = () => {
    setTerminalHistory([
      "Welcome to contact terminal",
      'Type "help" to see available commands',
      "Ready to connect...",
      "",
    ]);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = commands.find((cmd) => cmd.command === input.toLowerCase());

    if (command) {
      command.action();
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        `$ ${input}`,
        `Command not found: ${input}`,
        'Type "help" for available commands',
        "",
      ]);
    }

    setInput("");
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      command: "email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:+5535988870037`,
      command: "phone",
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      command: "location",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "fabioavf",
      href: contactInfo.linkedin,
      command: "linkedin",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "fabioavf",
      href: contactInfo.github,
      command: "github",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-zinc-900/50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            ./contact.sh
          </h2>
          <p className="text-zinc-400 text-lg">
            Execute commands to get in touch
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-300 mb-6">
              Quick Actions
            </h3>
            {contactCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
                      <card.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-200">
                        {card.label}
                      </div>
                      <div className="text-zinc-400 font-mono text-sm">
                        {card.value}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={() =>
                        copyToClipboard(card.href || card.value, card.command)
                      }
                      className="p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copy to clipboard"
                    >
                      {copiedItem === card.command ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-zinc-400" />
                      )}
                    </motion.button>

                    {card.href && (
                      <motion.a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`Open ${card.label}`}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Interface */}
          <div className="lg:sticky lg:top-8">
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
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-zinc-400 text-sm font-mono">
                  contact@amorelli.dev
                </span>
              </div>

              <div className="p-6">
                <div className="font-mono text-sm h-80 overflow-y-auto mb-4 space-y-1">
                  {terminalHistory.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className={`${
                        line.startsWith("$")
                          ? "text-cyan-400 font-medium"
                          : line.includes("✓")
                            ? "text-green-400"
                            : "text-zinc-300"
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2"
                >
                  <span className="text-cyan-400 font-mono font-medium">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a command..."
                    className="flex-1 bg-transparent text-zinc-100 outline-none font-mono placeholder-zinc-500"
                    autoFocus
                  />
                  <motion.button
                    type="submit"
                    className="p-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
