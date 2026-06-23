import { Music, Star, Mic, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Music, title: "Repertorio Amplio", desc: "Desde clásicos rancheros hasta adaptaciones modernas para todo tipo de gustos." },
    { icon: Star, title: "Profesionalismo", desc: "Músicos de alto nivel con años de experiencia en grandes escenarios y eventos exclusivos." },
    { icon: Mic, title: "Calidad de Audio", desc: "Equipamiento de primer nivel para asegurar una experiencia sonora impecable en cada serenata." },
    { icon: Heart, title: "Pasión Real", desc: "Sentimos cada nota, entregando alma y corazón en cada actuación." }
  ];

  return (
    <section className="py-32 px-6 bg-[#01050a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-accent-gradient mb-20 text-center tracking-widest uppercase">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
                <div key={i} className="bg-[#01050a] p-10 border border-white/5 rounded-sm hover:-translate-y-2 transition-all duration-300 group">
                    <f.icon size={48} className="text-[#d0aa5b] mb-8 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white text-xl font-bold mb-4">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
