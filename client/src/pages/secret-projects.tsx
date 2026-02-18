import { motion } from "framer-motion";

export default function SecretProjects() {
  return (
    <div className="bg-[#a855f7] min-h-screen text-black p-8 font-display uppercase">
      <nav className="mb-20">
        <a href="/" className="bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black transition-all hard-shadow">Back Home</a>
      </nav>
      <div className="container mx-auto">
        <h1 className="text-[15vw] leading-[0.8] mb-12 tracking-tighter">Secret<br/>Goods</h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 border-8 border-black aspect-video bg-gray-900 hard-shadow-lg overflow-hidden">
             {/* Placeholder for project image */}
             <div className="w-full h-full bg-gradient-to-br from-red-600 to-orange-600 opacity-50 flex items-center justify-center">
                <span className="text-white text-4xl">Classified</span>
             </div>
          </div>
          <div className="w-full md:w-1/3 relative">
            <p className="text-xl font-body normal-case mb-8 font-medium">
              You found our secret space!<br/><br/>
              Don't know about you, but sometimes we just want to see the beautiful work. Less reading for you, less writing for us. Win-win.
            </p>
            <div className="flex items-center gap-4 bg-white border-4 border-black px-6 py-3 rounded-full hard-shadow inline-flex">
              <span className="text-2xl">↓</span>
              <span className="text-xl">Scroll</span>
            </div>
            
            <img src="/tp-roll-v2.png" alt="TP" className="absolute -bottom-64 -right-20 w-48 h-auto rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
