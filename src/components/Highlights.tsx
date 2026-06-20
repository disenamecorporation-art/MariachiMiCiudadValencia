import { Award, Music, Users, Camera } from 'lucide-react';

export default function Highlights() {
  const stats = [
    { icon: Award, label: "Años de Trayectoria", value: "20+" },
    { icon: Music, label: "Repertorio de Temas", value: "500+" },
    { icon: Users, label: "Eventos Exitosos", value: "1000+" },
    { icon: Camera, label: "Producciones Premium", value: "50+" },
  ];

  return (
    <section className="py-20 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
                <div key={i} className="text-center group">
                    <s.icon className="mx-auto mb-6 text-[#d0aa5b] group-hover:scale-110 transition-transform duration-500" size={36} />
                    <div className="text-4xl font-bold text-white mb-2 tracking-tighter">{s.value}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
            ))}
        </div>
    </section>
  );
}
