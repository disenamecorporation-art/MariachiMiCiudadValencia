import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  { img: "https://i.postimg.cc/MZm9JK7R/wall1.jpg", title: "Tradición y Elegancia", sub: "Mariachi Show Premium" },
  { img: "https://i.postimg.cc/CLMmhT73/wall2.jpg", title: "Pasión en cada acorde", sub: "Eventos Especiales" },
  { img: "https://i.postimg.cc/RVCXS5dY/wall3.jpg", title: "Excelencia Artística", sub: "Interpretación Profesional" },
  { img: "https://i.postimg.cc/zvHDWPFq/image.png", title: "El Alma de México", sub: "La mejor música para ti" },
];

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={slides[index].img} alt="Mariachi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
        <motion.h1 
          key={`title-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-light text-white tracking-widest uppercase"
        >
          {slides[index].title}
        </motion.h1>
        <motion.p 
          key={`sub-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#d0aa5b] mt-8 text-sm tracking-[0.4em] uppercase font-light"
        >
          {slides[index].sub}
        </motion.p>
        <motion.button
          onClick={onOpenContact}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 px-12 py-5 rounded-sm border border-[#d0aa5b] text-white hover:bg-accent-gradient transition-all duration-500 uppercase tracking-widest text-xs font-light shadow-[0_0_20px_rgba(208,170,91,0.3)] hover:shadow-[0_0_40px_rgba(208,170,91,0.6)] animate-pulse relative group"
        >
          <span className="group-hover:opacity-0 transition-opacity duration-300">Reservar Actuación</span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click aquí</span>
        </motion.button>
      </div>
    </section>
  );
}
