import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Star } from "lucide-react";
import { Link } from "wouter";

// ─── Flat Bold Icons ────────────────────────────────────────────────────────

const IFlask = () => (
  <svg viewBox="0 0 80 96" width="80" height="96" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="4" width="24" height="8" rx="3" fill="#fff" stroke="#111" strokeWidth="3.5"/>
    <path d="M28 12 L28 40 L8 80 L72 80 L52 40 L52 12 Z" fill="#ff00ff" stroke="#111" strokeWidth="3.5" strokeLinejoin="round"/>
    <path d="M8 80 L72 80 L56 52 L24 52 Z" fill="#a855f7" stroke="none"/>
    <circle cx="22" cy="67" r="5" fill="white" opacity="0.5"/>
    <circle cx="36" cy="72" r="3.5" fill="white" opacity="0.4"/>
  </svg>
);

const ITestTube = () => (
  <svg viewBox="0 0 48 96" width="48" height="96" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="28" height="58" rx="0" fill="#00ffff" stroke="#111" strokeWidth="3.5"/>
    <path d="M10 62 Q10 88 24 88 Q38 88 38 62 Z" fill="#00ffff" stroke="#111" strokeWidth="3.5" strokeLinejoin="round"/>
    <path d="M10 68 Q10 84 24 84 Q38 84 38 68 Z" fill="#ff00ff" opacity="0.7" stroke="none"/>
    <rect x="6" y="2" width="36" height="8" rx="3" fill="#fff" stroke="#111" strokeWidth="3"/>
    <circle cx="22" cy="78" r="4" fill="white" opacity="0.5"/>
  </svg>
);

const IAtom = () => (
  <svg viewBox="0 0 96 96" width="96" height="96" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="48" cy="48" rx="44" ry="18" fill="none" stroke="#ccff00" strokeWidth="4"/>
    <ellipse cx="48" cy="48" rx="44" ry="18" fill="none" stroke="#ff6eb4" strokeWidth="4" transform="rotate(60 48 48)"/>
    <ellipse cx="48" cy="48" rx="44" ry="18" fill="none" stroke="#00ffff" strokeWidth="4" transform="rotate(120 48 48)"/>
    <circle cx="48" cy="48" r="11" fill="#ff00ff" stroke="#111" strokeWidth="3.5"/>
  </svg>
);

const IMagnify = () => (
  <svg viewBox="0 0 88 88" width="88" height="88" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="30" fill="#ccff00" stroke="#111" strokeWidth="4.5"/>
    <circle cx="36" cy="36" r="20" fill="white" opacity="0.25"/>
    <line x1="57" y1="57" x2="82" y2="82" stroke="#111" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

const IBeaker = () => (
  <svg viewBox="0 0 80 96" width="80" height="96" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8 L16 56 Q16 88 40 88 Q64 88 64 56 L64 8 Z" fill="#ff4500" stroke="#111" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M16 56 Q16 84 40 84 Q64 84 64 56 Z" fill="#ffcc00" stroke="none"/>
    <rect x="10" y="4" width="60" height="10" rx="3" fill="#fff" stroke="#111" strokeWidth="3.5"/>
    <circle cx="28" cy="70" r="6" fill="white" opacity="0.45"/>
    <circle cx="46" cy="75" r="4" fill="white" opacity="0.35"/>
  </svg>
);

const IDrop = () => (
  <svg viewBox="0 0 64 88" width="64" height="88" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4 Q54 32 54 52 Q54 76 32 76 Q10 76 10 52 Q10 32 32 4 Z" fill="#ff6eb4" stroke="#111" strokeWidth="4"/>
    <path d="M32 24 Q46 42 46 54 Q46 68 32 68 Q18 68 18 54 Q18 42 32 24 Z" fill="#a855f7" opacity="0.5" stroke="none"/>
    <circle cx="24" cy="50" r="5" fill="white" opacity="0.5"/>
  </svg>
);

const IStar = () => (
  <svg viewBox="0 0 88 88" width="88" height="88" xmlns="http://www.w3.org/2000/svg">
    <polygon points="44,4 54,34 86,34 61,53 71,82 44,64 17,82 27,53 2,34 34,34" fill="#ccff00" stroke="#111" strokeWidth="3.5"/>
    <polygon points="44,18 50,36 70,36 55,47 60,66 44,55 28,66 33,47 18,36 38,36" fill="#ff00ff" opacity="0.5" stroke="none"/>
  </svg>
);

const IDNA = () => (
  <svg viewBox="0 0 56 96" width="56" height="96" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4 Q44 20 12 48 Q44 76 12 92" fill="none" stroke="#00ffff" strokeWidth="5" strokeLinecap="round"/>
    <path d="M44 4 Q12 20 44 48 Q12 76 44 92" fill="none" stroke="#ff00ff" strokeWidth="5" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="44" y2="24" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="14" y1="34" x2="42" y2="34" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="12" y1="62" x2="44" y2="62" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="14" y1="77" x2="42" y2="71" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);

const IZap = () => (
  <svg viewBox="0 0 56 96" width="56" height="96" xmlns="http://www.w3.org/2000/svg">
    <polygon points="34,4 10,52 28,52 22,92 46,40 28,40 34,4" fill="#ffcc00" stroke="#111" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

const IPetri = () => (
  <svg viewBox="0 0 88 56" width="88" height="56" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="44" cy="32" rx="40" ry="20" fill="#a855f7" stroke="#111" strokeWidth="4"/>
    <ellipse cx="44" cy="24" rx="40" ry="16" fill="#fff" stroke="#111" strokeWidth="3.5"/>
    <ellipse cx="44" cy="24" rx="26" ry="10" fill="#ff6eb4" opacity="0.55" stroke="none"/>
    <circle cx="34" cy="23" r="4.5" fill="#a855f7" opacity="0.6"/>
    <circle cx="50" cy="21" r="3" fill="#a855f7" opacity="0.5"/>
    <circle cx="42" cy="27" r="3.5" fill="#a855f7" opacity="0.55"/>
  </svg>
);

// ─── Bounce wrapper ──────────────────────────────────────────────────────────

interface BounceIconProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  rotate?: number;
  className?: string;
}

const BounceIcon = ({ children, delay = 0, duration = 2.6, rotate = 0, className = "" }: BounceIconProps) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    style={{ rotate }}
    animate={{ y: [0, -14, 0] }}
    transition={{ repeat: Infinity, duration, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

// ─── Toilet Paper ────────────────────────────────────────────────────────────

const CuteTPRoll = () => (
  <svg viewBox="0 0 200 240" width="200" height="240" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="103" cy="233" rx="60" ry="10" fill="rgba(0,0,0,0.12)"/>
    <rect x="58" y="160" width="52" height="65" rx="4" fill="#fff8f0" stroke="#111" strokeWidth="3.5"/>
    <line x1="68" y1="185" x2="100" y2="185" stroke="#ccc" strokeWidth="1.5" strokeDasharray="4,3"/>
    <line x1="68" y1="205" x2="100" y2="205" stroke="#ccc" strokeWidth="1.5" strokeDasharray="4,3"/>
    <path d="M58 225 Q65 232 72 225 Q79 218 86 225 Q93 232 100 225 Q107 218 110 220 L110 225 Z" fill="#fff8f0" stroke="#111" strokeWidth="2"/>
    <rect x="45" y="70" width="115" height="120" rx="12" fill="#fff8f0" stroke="#111" strokeWidth="4"/>
    <ellipse cx="102" cy="70" rx="57" ry="22" fill="#f5ede0" stroke="#111" strokeWidth="4"/>
    <ellipse cx="102" cy="70" rx="22" ry="9" fill="#e8d5b7" stroke="#111" strokeWidth="3"/>
    <line x1="50" y1="100" x2="155" y2="100" stroke="#e8ddd0" strokeWidth="2"/>
    <line x1="50" y1="120" x2="155" y2="120" stroke="#e8ddd0" strokeWidth="2"/>
    <line x1="50" y1="140" x2="155" y2="140" stroke="#e8ddd0" strokeWidth="2"/>
    <line x1="50" y1="160" x2="155" y2="160" stroke="#e8ddd0" strokeWidth="2"/>
    <circle cx="82" cy="115" r="9" fill="#fff" stroke="#111" strokeWidth="3"/>
    <circle cx="84" cy="115" r="4.5" fill="#111"/>
    <circle cx="82" cy="112" r="1.5" fill="#fff"/>
    <circle cx="122" cy="115" r="9" fill="#fff" stroke="#111" strokeWidth="3"/>
    <circle cx="124" cy="115" r="4.5" fill="#111"/>
    <circle cx="122" cy="112" r="1.5" fill="#fff"/>
    <path d="M90 132 Q102 143 114 132" stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <path d="M138 54 L150 44 L154 52 L145 55 Z" fill="#ff6eb4" stroke="#111" strokeWidth="2"/>
    <path d="M158 54 L170 44 L166 52 L157 55 Z" fill="#ff6eb4" stroke="#111" strokeWidth="2"/>
    <circle cx="154" cy="54" r="5" fill="#ff3a9d" stroke="#111" strokeWidth="2"/>
  </svg>
);

// ─── Components ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  link: string;
  external?: boolean;
}

const ProjectCard = ({ title, category, description, link, external = true }: ProjectCardProps) => (
  <motion.a
    href={link}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
    <p className="font-body text-lg border-t-2 border-black pt-4 mt-2">{description}</p>
  </motion.a>
);

const ComingSoonCard = () => (
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

// ─── Sections ────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20">
    {/* Scattered bouncing icons — like goodsecrets.co */}
    <BounceIcon delay={0}    duration={2.4} rotate={-15} className="top-[12%] left-[4%]  hidden md:block"><IFlask /></BounceIcon>
    <BounceIcon delay={0.4}  duration={2.9} rotate={12}  className="top-[8%]  right-[6%] hidden md:block"><IZap /></BounceIcon>
    <BounceIcon delay={0.7}  duration={2.2} rotate={-8}  className="top-[38%] left-[2%] hidden md:block"><IDrop /></BounceIcon>
    <BounceIcon delay={0.2}  duration={3.1} rotate={20}  className="top-[30%] right-[3%] hidden md:block"><ITestTube /></BounceIcon>
    <BounceIcon delay={1.1}  duration={2.7} rotate={-20} className="bottom-[18%] left-[6%] hidden md:block"><IPetri /></BounceIcon>
    <BounceIcon delay={0.9}  duration={2.5} rotate={10}  className="bottom-[22%] right-[5%] hidden md:block"><IStar /></BounceIcon>
    <BounceIcon delay={0.5}  duration={3.3} rotate={-5}  className="top-[60%] left-[14%] hidden lg:block"><IDNA /></BounceIcon>
    <BounceIcon delay={1.3}  duration={2.8} rotate={18}  className="top-[55%] right-[12%] hidden lg:block"><IAtom /></BounceIcon>

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
          <h2 className="text-2xl md:text-4xl font-display uppercase">Katie Cornett</h2>
        </div>
      </motion.div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "Survivor SQL",
      category: "Learning Tool",
      description: "An interactive SQL learning game built around Survivor data. Work through 18 modules from basics to advanced analytics, with live query practice along the way.",
      link: "/sql-survivor",
      external: false,
    },
    {
      title: "Strava Labs",
      category: "Web App",
      description: "A framework pitch listening to the voices of the Strava community and giving athletes the PR they deserve.",
      link: "/stravalabs",
      external: false,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* A couple of icons around this section too */}
      <BounceIcon delay={0.3} duration={2.6} rotate={-12} className="top-8 right-[2%] hidden md:block"><IMagnify /></BounceIcon>
      <BounceIcon delay={0.8} duration={3.0} rotate={15}  className="bottom-8 left-[1%] hidden md:block"><IBeaker /></BounceIcon>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-8xl font-display uppercase leading-none">
            My<br/><span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Experiments</span>
          </h2>
          <div className="bg-white border-4 border-black p-4 max-w-xs rotate-3 hard-shadow">
            <p className="font-bold font-body uppercase">Here's what I've been cooking up lately in the lab.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-24 relative overflow-hidden">
    <BounceIcon delay={0.2} duration={2.7} rotate={10}  className="top-12 left-[3%] hidden md:block"><IStar /></BounceIcon>
    <BounceIcon delay={0.6} duration={3.2} rotate={-18} className="bottom-10 right-[3%] hidden md:block"><IDrop /></BounceIcon>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-display uppercase mb-8">
          Make it<br/>Make Sense.
        </h2>
        <p className="text-2xl md:text-3xl font-body font-medium leading-relaxed bg-white border-4 border-black p-8 hard-shadow-lg transform rotate-1">
          I'm Katie, an SF local, open water swimmer, traveler, and lover of trying new things.
          <br /><br />
          This space is for me to explore new skills, experiment with AI workflows, and build ideas from scratch, just to see what's possible.
        </p>
      </div>
    </div>
  </section>
);

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
    <footer className="bg-brand-black text-brand-lime py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[10vw] font-display uppercase leading-none mb-12 opacity-90">Let's Talk</h2>
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

// ─── Page ────────────────────────────────────────────────────────────────────

function Home() {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#ccff00", "#ff00ff", "#00ffff", "#a855f7"]
  );

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="min-h-screen">
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

      {/* Toilet Paper break */}
      <section className="py-24 flex justify-center items-center overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="relative"
        >
          <CuteTPRoll />
          <div className="absolute -right-36 top-10 bg-white border-4 border-black p-4 hard-shadow rotate-6">
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
