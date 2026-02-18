import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Star, Zap, Code, Layout, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// --- Components ---

interface MarqueeProps {
  text: string;
  direction?: number;
  speed?: number;
}

const Marquee = ({ text, direction = 1, speed = 20 }: MarqueeProps) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap bg-brand-black text-brand-lime py-4 border-y-4 border-black">
      <motion.div
        className="flex gap-8 text-4xl font-display uppercase tracking-widest"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {Array(10).fill(text).map((t, i) => (
          <span key={i} className="flex items-center gap-4">
            {t} <Star className="fill-brand-lime text-brand-lime" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

const Sticker = ({ children, className = "", rotate = 0 }: StickerProps) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: rotate + 10 }}
    className={`absolute inline-flex items-center justify-center p-4 bg-white border-2 border-black hard-shadow ${className}`}
    style={{ rotate: rotate }}
  >
    {children}
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, category, description, link }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="group relative block bg-white border-4 border-black p-6 hard-shadow-lg transition-all duration-200"
    >
      <div className="absolute top-0 right-0 p-2 bg-brand-pink border-l-4 border-b-4 border-black">
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <span className="inline-block bg-brand-blue text-xs font-bold uppercase px-2 py-1 border-2 border-black mb-4">
        {category}
      </span>
      <h3 className="text-4xl font-display uppercase mb-2 leading-none">{title}</h3>
      <p className="font-body text-lg border-t-2 border-black pt-4 mt-2">
        {description}
      </p>
    </motion.a>
  );
};

// --- Sections ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20">
      {/* Decorative Stickers */}
      <Sticker className="top-20 right-[10%] bg-brand-pink rotate-12 hidden md:flex" rotate={12}>
        <Zap className="w-8 h-8" />
      </Sticker>
      <Sticker className="bottom-40 left-[5%] bg-brand-blue -rotate-6 hidden md:flex" rotate={-6}>
        <Code className="w-8 h-8" />
      </Sticker>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <h2 className="text-xl md:text-3xl font-bold font-body uppercase tracking-widest mb-4">
            Welcome to
          </h2>
          <h1 className="text-[12vw] leading-[0.85] font-display uppercase mb-4 text-black drop-shadow-sm">
            Cornett<br/>
            <span className="text-transparent text-stroke-2">Labs</span>
          </h1>
          
          <div className="bg-brand-black text-brand-lime inline-block px-8 py-4 transform -rotate-2 mt-8 border-4 border-transparent hover:border-white transition-all hard-shadow">
            <h2 className="text-2xl md:text-4xl font-display uppercase">
              Katie Cornett
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Strava Labs",
      category: "Web App",
      description: "A framework pitch listening to the voices of the Strava community and giving athletes the PR they deserve.",
      link: "https://stravalabs.com"
    },
    {
      title: "Type Bold",
      category: "Design System",
      description: "Typography-focused component library for loud interfaces.",
      link: "#"
    },
    {
      title: "Green Room",
      category: "Social",
      description: "Real-time chat application for creative communities.",
      link: "#"
    },
    {
      title: "Glitch UI",
      category: "Experiment",
      description: "CSS-only glitch effects and brutalist components.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 border-y-4 border-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-8xl font-display uppercase leading-none">
            Selected<br/><span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Work</span>
          </h2>
          <div className="bg-white border-4 border-black p-4 max-w-xs rotate-3 hard-shadow">
            <p className="font-bold font-body uppercase">
              Here's what I've been cooking up lately in the lab.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 bg-brand-blue border-b-4 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
        </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-display uppercase mb-8">
            Make it<br/>Make Sense.
          </h2>
          <p className="text-2xl md:text-3xl font-body font-medium leading-relaxed bg-white border-4 border-black p-8 hard-shadow-lg transform rotate-1">
            I’m Katie, an SF local, open water swimmer, traveler, and lover of trying new things.
            <br /><br />
            This space is for me to explore new skills, experiment with AI workflows, and build ideas from scratch, just to see what’s possible.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [secretText, setSecretText] = useState("Psst! Down Here");
  
  useEffect(() => {
    const texts = ["Psst! Down Here", "Yeah You! Down Here"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setSecretText(texts[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-brand-black text-brand-lime py-20 border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[10vw] font-display uppercase leading-none mb-12 opacity-90">
          Let's Talk
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a 
            href="https://www.linkedin.com/in/katiecornett/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-lime text-black px-8 py-4 text-xl font-bold font-display uppercase border-4 border-transparent hover:border-white transition-all transform hover:-translate-y-2"
          >
            <Linkedin className="w-6 h-6" /> LinkedIn
          </a>
          <a 
            href="mailto:hello@cornettlabs.com" 
            className="flex items-center gap-2 bg-white text-black px-8 py-4 text-xl font-bold font-display uppercase border-4 border-transparent hover:border-brand-pink transition-all transform hover:-translate-y-2"
          >
            <Mail className="w-6 h-6" /> Email Me
          </a>
        </div>

        <div className="mb-12">
          <Link href="/secret-projects">
            <a className="inline-block text-2xl font-display uppercase tracking-tighter text-brand-lime hover:text-brand-pink transition-colors">
              {secretText}
            </a>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-lime/30 pt-8 text-sm font-body uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Cornett Labs</p>
          <p>Designed & Built by Katie Cornett</p>
        </div>
      </div>
    </footer>
  );
};

function Home() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#ccff00", "#ff00ff", "#00ffff", "#a855f7"]
  );

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="min-h-screen transition-colors duration-500">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 pointer-events-none">
        <div className="bg-white border-4 border-black px-4 py-2 font-display uppercase text-xl hard-shadow pointer-events-auto">
          CL
        </div>
        <a 
            href="#projects"
            className="bg-brand-black text-white border-4 border-black px-6 py-2 font-display uppercase text-xl hover:bg-brand-pink hover:text-black transition-colors pointer-events-auto hard-shadow"
        >
          Work
        </a>
      </nav>

      <Hero />
      <Projects />
      
      {/* Toilet Paper Section */}
      <section className="py-24 flex justify-center items-center overflow-hidden">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="relative"
        >
          <img src="/tp-roll-v2.png" alt="Toilet Paper" className="w-64 h-auto" />
          <div className="absolute -right-32 top-10 bg-white border-4 border-black p-4 hard-shadow rotate-6">
            <p className="font-display uppercase text-xl text-black">Keep Scrolling!</p>
          </div>
        </motion.div>
      </section>

      <About />
      <Footer />
    </motion.div>
  );
}

export default Home;
