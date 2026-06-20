import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="https://i.postimg.cc/L8TP9gqL/IMAGOTIPO-MARIACHIVALENCIA-WEB.png" 
            alt="Logo" 
            className="h-20 md:h-24 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex gap-12 text-sm tracking-[0.2em] uppercase text-white font-medium">
          {['Inicio', 'Videos', 'Equipo', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#d0aa5b] transition-all duration-300">
              {item}
            </a>
          ))}
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 absolute top-28 left-0 w-full p-10 flex flex-col gap-6 text-white text-center">
          {['Inicio', 'Videos', 'Equipo', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xl tracking-widest uppercase hover:text-[#d0aa5b]" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
