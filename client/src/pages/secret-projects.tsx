import { motion } from "framer-motion";

const SillyGoose = () => (
  <svg viewBox="0 0 160 200" width="160" height="200" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="80" cy="140" rx="52" ry="45" fill="white" stroke="#111" strokeWidth="4"/>
    {/* Wing detail */}
    <path d="M38 130 Q55 110 75 125 Q55 140 38 130 Z" fill="#f0f0f0" stroke="#111" strokeWidth="2.5"/>
    {/* Tail */}
    <path d="M125 130 Q148 115 150 135 Q140 150 120 148 Z" fill="white" stroke="#111" strokeWidth="3"/>
    {/* Neck */}
    <path d="M72 100 Q60 75 65 50 Q70 30 82 28" fill="white" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
    {/* Head */}
    <ellipse cx="90" cy="28" rx="22" ry="18" fill="white" stroke="#111" strokeWidth="4"/>
    {/* Eye */}
    <circle cx="96" cy="22" r="5" fill="#111"/>
    <circle cx="97.5" cy="20.5" r="1.5" fill="white"/>
    {/* Beak - open, silly */}
    <path d="M108 28 L128 24 L125 32 L108 32 Z" fill="#ff8c00" stroke="#111" strokeWidth="2.5"/>
    <path d="M108 30 L125 28" stroke="#111" strokeWidth="1.5"/>
    {/* Beak inner / mouth open */}
    <path d="M110 32 Q118 38 124 33" fill="#cc5500" stroke="#111" strokeWidth="1.5"/>
    {/* Left foot */}
    <path d="M60 182 L55 200 M55 200 L42 198 M55 200 L55 210 M55 200 L68 198" stroke="#ff8c00" strokeWidth="4" strokeLinecap="round" fill="none"/>
    {/* Right foot */}
    <path d="M85 185 L80 203 M80 203 L67 201 M80 203 L80 213 M80 203 L93 201" stroke="#ff8c00" strokeWidth="4" strokeLinecap="round" fill="none"/>
    {/* Chaotic little motion lines around head for silly energy */}
    <line x1="118" y1="10" x2="126" y2="4" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
    <line x1="122" y1="16" x2="132" y2="14" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
    <line x1="115" y1="4" x2="118" y2="-4" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function SecretProjects() {
  return (
    <div className="bg-[#a855f7] min-h-screen text-black p-8 font-display uppercase">
      <nav className="mb-20">
        <a href="/" className="bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black transition-all hard-shadow">Back Home</a>
      </nav>
      <div className="container mx-auto">
        <h1 className="text-[15vw] leading-[0.8] mb-12 tracking-tighter">Secret<br/>Stash</h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 border-8 border-black aspect-video bg-gray-900 hard-shadow-lg overflow-hidden">
             {/* Placeholder for project image */}
             <div className="w-full h-full bg-gradient-to-br from-red-600 to-orange-600 opacity-50 flex items-center justify-center">
                <span className="text-white text-4xl">Classified</span>
             </div>
          </div>
          <div className="w-full md:w-1/3 relative">
            <p className="text-xl font-body normal-case mb-8 font-medium">
              You found my secret space!<br/><br/>
              Home to some works in progress, unfinished business, or just plain silly goose tomfoolery.
            </p>
            <div className="flex items-center gap-4 bg-white border-4 border-black px-6 py-3 rounded-full hard-shadow inline-flex">
              <span className="text-2xl">↓</span>
              <span className="text-xl">Scroll</span>
            </div>

            <motion.div
              animate={{ rotate: [8, 14, 8] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -bottom-64 -right-20"
            >
              <SillyGoose />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
