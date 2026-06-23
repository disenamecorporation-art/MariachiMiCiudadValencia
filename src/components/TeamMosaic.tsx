import { motion } from 'motion/react';

const members = [
    { name: 'Carlos', role: 'Violinista', img: 'https://i.postimg.cc/xjRTZdZr/CARLOS-VIOLINISTA.jpg' },
    { name: 'Eyleen', role: 'Cantante', img: 'https://i.postimg.cc/bYTN5v5f/EYLEEN-CANTANTE.jpg' },
    { name: 'Lenin', role: 'Director-Trompeta', img: 'https://i.postimg.cc/h4rPYGYq/LENIN-DIRECTOR-TROMPETA.jpg' },
    { name: 'Nixon', role: 'Acordeonista', img: 'https://i.postimg.cc/05f24N4s/NIXON-ACORDEONISTA.jpg' },
    { name: 'Oscar', role: 'Guitarronista', img: 'https://i.postimg.cc/Ghg3c5rX/OSCAR-GUITARRONISTA.jpg' },
    { name: 'Oswaldo', role: 'Vihuelista', img: 'https://i.postimg.cc/zvX5NnQm/OSWALDO-VIHUELISTA.jpg' },
];

export default function TeamMosaic() {
  return (
    <section id="equipo" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light text-white mb-16 text-center tracking-widest uppercase">Nuestros Integrantes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {members.map((m, i) => (
          <motion.div 
            key={m.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#d0aa5b] mb-4">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-white text-md font-light tracking-tight">{m.name}</h3>
            <p className="text-[#d0aa5b] text-xs uppercase tracking-widest font-light mt-1">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
