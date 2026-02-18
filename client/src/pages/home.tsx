import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Star, Zap, Code, Layout, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// --- Lab Icons ---
const BRAND_COLORS = ["#ccff00", "#ff00ff", "#00ffff", "#ff4500", "#a855f7", "#ffcc00", "#ff6eb4"];

const IconFlask = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8 L22 30 L10 52 L54 52 L42 30 L42 8 Z" fill={color} stroke="#111" strokeWidth="3.5" strokeLinejoin="round"/>
    <rect x="18" y="6" width="28" height="6" rx="2" fill="#fff" stroke="#111" strokeWidth="3"/>
    <circle cx="20" cy="44" r="4" fill="white" opacity="0.6"/>
    <circle cx="32" cy="47" r="3" fill="white" opacity="0.5"/>
    <circle cx="42" cy="43" r="2.5" fill="white" opacity="0.5"/>
  </svg>
);

const IconTestTube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="6" width="12" height="38" rx="0" fill={color} stroke="#111" strokeWidth="3.5"/>
    <path d="M26 44 Q26 58 32 58 Q38 58 38 44 Z" fill={color} stroke="#111" strokeWidth="3.5" strokeLinejoin="round"/>
    <rect x="22" y="4" width="20" height="6" rx="2" fill="#fff" stroke="#111" strokeWidth="3"/>
    <circle cx="30" cy="50" r="3" fill="white" opacity="0.6"/>
  </svg>
);

const IconMicroscope = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="6" width="8" height="22" rx="3" fill={color} stroke="#111" strokeWidth="3"/>
    <rect x="22" y="26" width="20" height="8" rx="2" fill={color} stroke="#111" strokeWidth="3"/>
    <rect x="26" y="34" width="12" height="12" rx="1" fill={color} stroke="#111" strokeWidth="3"/>
    <ellipse cx="32" cy="10" rx="8" ry="5" fill={color} stroke="#111" strokeWidth="3"/>
    <rect x="14" y="52" width="36" height="6" rx="3" fill={color} stroke="#111" strokeWidth="3"/>
    <line x1="32" y1="46" x2="32" y2="52" stroke="#111" strokeWidth="3.5"/>
  </svg>
);

const IconAtom = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke={color} strokeWidth="3.5"/>
    <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke={color} strokeWidth="3.5" transform="rotate(60 32 32)"/>
    <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke={color} strokeWidth="3.5" transform="rotate(120 32 32)"/>
    <circle cx="32" cy="32" r="6" fill={color} stroke="#111" strokeWidth="2.5"/>
  </svg>
);

const IconPetriDish = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="36" rx="26" ry="14" fill={color} stroke="#111" strokeWidth="3.5"/>
    <ellipse cx="32" cy="32" rx="26" ry="10" fill="#fff" stroke="#111" strokeWidth="3"/>
    <ellipse cx="32" cy="32" rx="16" ry="6" fill={color} stroke="#111" strokeWidth="2.5" opacity="0.5"/>
    <circle cx="24" cy="31" r="3" fill="#111" opacity="0.3"/>
    <circle cx="36" cy="29" r="2" fill="#111" opacity="0.3"/>
    <circle cx="30" cy="33" r="2.5" fill="#111" opacity="0.3"/>
  </svg>
);

const IconDNA = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6 Q44 16 20 32 Q44 48 20 58" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <path d="M44 6 Q20 16 44 32 Q20 48 44 58" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <line x1="20" y1="15" x2="44" y2="19" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
    <line x1="21" y1="25" x2="43" y2="25" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
    <line x1="20" y1="39" x2="44" y2="39" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
    <line x1="21" y1="49" x2="43" y2="45" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const IconBeaker = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8 L16 40 Q16 58 32 58 Q48 58 48 40 L48 8 Z" fill={color} stroke="#111" strokeWidth="3.5" strokeLinejoin="round"/>
    <rect x="12" y="6" width="40" height="6" rx="2" fill="#fff" stroke="#111" strokeWidth="3"/>
    <path d="M16 40 Q16 54 32 54 Q48 54 48 40 Z" fill="white" opacity="0.25"/>
    <circle cx="24" cy="46" r="4" fill="white" opacity="0.5"/>
    <circle cx="36" cy="49" r="3" fill="white" opacity="0.4"/>
  </svg>
);

const IconMagnify = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="18" fill={color} stroke="#111" strokeWidth="4"/>
    <circle cx="26" cy="26" r="12" fill="white" opacity="0.3" stroke="#111" strokeWidth="2"/>
    <line x1="39" y1="39" x2="56" y2="56" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const LAB_ICONS = [
  IconFlask, IconTestTube, IconMicroscope, IconAtom, IconPetriDish, IconDNA, IconBeaker, IconMagnify
];

// --- Floating Icon Popper ---
interface FloatingIconState {
  id: number;
  Icon: typeof IconFlask;
  color: string;
  x: number;
  y: number;
  rotate: number;
}

const FloatingIcons = () => {
  const [active, setActive] = useState<FloatingIconState | null>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const spawn = () => {
      const Icon = LAB_ICONS[Math.floor(Math.random() * LAB_ICONS.length)];
      const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
      const x = 5 + Math.random() * 80; // 5-85% from left
      const y = 5 + Math.random() * 80; // 5-85% from top
      const rotate = -20 + Math.random() * 40;
      counterRef.current += 1;
      setActive({ id: counterRef.current, Icon, color, x, y, rotate });
    };

    spawn();
    const interval = setInterval(spawn, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.3, rotate: active.rotate - 15 }}
            animate={{ opacity: 1, scale: 1, rotate: active.rotate }}
            exit={{ opacity: 0, scale: 0.3, rotate: active.rotate + 15 }}
            transition={{ duration: 0.45, ease: "backOut" }}
            style={{ position: "absolute", left: `${active.x}%`, top: `${active.y}%` }}
            className="drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
          >
            <active.Icon color={active.color} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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

const ComingSoonCard = () => {
  return (
    <div className="relative block bg-white border-4 border-black p-6 hard-shadow-lg opacity-60">
      <div className="absolute top-0 right-0 p-2 bg-brand-black border-l-4 border-b-4 border-black">
        <span className="text-brand-lime text-xs font-bold font-display uppercase">Soon</span>
      </div>
      <span className="inline-block bg-brand-black text-brand-lime text-xs font-bold uppercase px-2 py-1 border-2 border-black mb-4">
        ???
      </span>
      <h3 className="text-4xl font-display uppercase mb-2 leading-none text-brand-black/40">Coming Soon</h3>
      <p className="font-body text-lg border-t-2 border-black pt-4 mt-2 text-brand-black/40">
        Something's brewing in the lab. Stay tuned.
      </p>
    </div>
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
  ];

  return (
    <section className="py-24 border-y-4 border-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-8xl font-display uppercase leading-none">
            My<br/><span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Experiments</span>
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
          <ComingSoonCard />
          <ComingSoonCard />
          <ComingSoonCard />
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
      <FloatingIcons />
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
          <img src="/tp-cute.svg" alt="Toilet Paper" className="w-64 h-auto" />
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
