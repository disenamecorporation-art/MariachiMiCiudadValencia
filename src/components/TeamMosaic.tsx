import { motion } from 'motion/react';

const members = [
    { name: 'Alejandro', role: 'Director Musical', bio: 'Virtuoso y líder con más de 20 años de trayectoria garantizando la excelencia artística.' },
    { name: 'Enrique', role: 'Vocalista Principal', bio: 'Poseedor de un registro potente y una interpretación que llega al alma en cada ranchera.' },
    { name: 'Javier', role: 'Violín', bio: 'Técnica impecable y sensibilidad única que define el sonido sofisticado de nuestro conjunto.' },
    { name: 'Ricardo', role: 'Trompetista', bio: 'El alma de nuestras piezas festivas, aportando energía y precisión técnica magistral.' },
];

export default function TeamMosaic() {
  return (
    <section id="equipo" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-light text-accent-gradient mb-20 text-center tracking-widest uppercase">Nuestra Alineación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <motion.div 
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#0a0a0a] p-1 rounded-sm overflow-hidden border border-white/5 hover:border-[#d0aa5b] transition-colors"
          >
            <div className="relative bg-[#050505] p-6 h-full">
                <div className="w-full aspect-[4/5] bg-gray-900 mb-8 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1543783207-ec64e4d95d10?q=80&w=2670&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h3 className="text-white text-xl font-bold tracking-tight">{m.name}</h3>
                <p className="text-[#d0aa5b] text-xs uppercase tracking-[0.2em] font-medium mt-1 mb-4">{m.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{m.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
