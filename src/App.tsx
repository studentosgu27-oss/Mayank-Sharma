/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  ChevronRight,
  Menu,
  X,
  Send
} from 'lucide-react';

const projects = [
  {
    title: "EcoTrack AI",
    description: "An AI-powered sustainability dashboard that tracks carbon footprints in real-time using machine learning models.",
    image: "https://picsum.photos/seed/ecotrack/800/600",
    tags: ["React", "TensorFlow", "Node.js"],
    link: "#"
  },
  {
    title: "Nebula Chat",
    description: "A decentralized messaging platform with end-to-end encryption and custom protocol for low-latency communication.",
    image: "https://picsum.photos/seed/nebula/800/600",
    tags: ["WebRTC", "Socket.io", "Redis"],
    link: "#"
  },
  {
    title: "Quantum Ledger",
    description: "A high-performance financial tracking application with advanced data visualization and predictive analytics.",
    image: "https://picsum.photos/seed/quantum/800/600",
    tags: ["D3.js", "Next.js", "PostgreSQL"],
    link: "#"
  }
];

const skills = [
  { name: "Frontend", icon: <Palette className="w-5 h-5" />, level: 90, items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, level: 85, items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { name: "Languages", icon: <Code2 className="w-5 h-5" />, level: 95, items: ["JavaScript", "TypeScript", "Python", "C++"] },
  { name: "Tools", icon: <Cpu className="w-5 h-5" />, level: 80, items: ["Git", "Docker", "AWS", "Vercel"] }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            MAYANK<span className="text-orange-500">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#resume"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a href="#resume" className="text-3xl font-bold text-orange-500">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          
          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Available for new opportunities
              </motion.span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">DIGITAL</span> <br />
                EXPERIENCES.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Mayank</span>. A full-stack developer and UI/UX enthusiast crafting high-performance web applications with precision and passion.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="group px-8 py-4 bg-orange-500 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-orange-600 transition-all active:scale-95"
                >
                  View My Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://picsum.photos/seed/mayank-dev/800/800" 
                  alt="Mayank" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-500/30 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">About Me</h2>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    I am a passionate technologist who thrives at the intersection of design and engineering. With a strong foundation in computer science, I specialize in building scalable web architectures and intuitive user interfaces.
                  </p>
                  <p>
                    My journey in tech began with a curiosity for how things work under the hood, which evolved into a career dedicated to creating tools that solve real-world problems. I believe in clean code, continuous learning, and the power of collaborative innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                      <h4 className="text-white font-bold mb-2">Strengths</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Problem Solving</li>
                        <li>• Rapid Prototyping</li>
                        <li>• System Architecture</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Passion</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Open Source</li>
                        <li>• UI/UX Design</li>
                        <li>• Emerging Tech</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl bg-zinc-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/code1/400/600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-40 rounded-2xl bg-orange-500 flex items-center justify-center p-6">
                    <p className="text-black font-black text-4xl leading-none tracking-tighter">5+ YEARS EXP.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-40 rounded-2xl bg-zinc-800 flex items-center justify-center p-6 border border-white/5">
                    <p className="text-white font-black text-4xl leading-none tracking-tighter">50+ PROJECTS</p>
                  </div>
                  <div className="h-64 rounded-2xl bg-zinc-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/code2/400/600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
              <p className="text-zinc-400">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-orange-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skill.items.map(item => (
                      <span key={item} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-orange-500" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">Selected Works</h2>
                <p className="text-zinc-400 max-w-md">A collection of projects that showcase my technical skills and design philosophy.</p>
              </div>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:underline">
                View All Projects <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-orange-500 transition-colors">
                      Case Study <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 blur-[150px] -z-10" />
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">READY TO START A PROJECT?</h2>
            <p className="text-xl text-zinc-400 mb-12">
              Download my full CV to see my detailed experience, education, and technical certifications.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5"
            >
              <Download className="w-6 h-6" />
              DOWNLOAD CV
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Get In Touch</h2>
                <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                  Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                      <p className="text-xl font-bold">hello@mayank.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                      <p className="text-xl font-bold">linkedin.com/in/mayank</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-orange-500">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">GitHub</p>
                      <p className="text-xl font-bold">github.com/mayank</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project Inquiry"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full py-5 bg-orange-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-all active:scale-[0.98]">
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2026 Mayank. Built with React & Tailwind.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

