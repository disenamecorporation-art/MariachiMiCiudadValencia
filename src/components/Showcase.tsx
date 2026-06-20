export default function Showcase() {
  return (
    <section className="py-24 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden border border-white/5 shadow-2xl">
          <iframe 
            src="https://www.youtube.com/embed/S6nCY_t8WuM" 
            title="Mariachi Performance" 
            className="w-full h-full object-cover"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-accent-gradient tracking-tighter">Pasión Elevada a Arte</h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light italic">
            "No solo interpretamos canciones, creamos atmósferas. Cada acorde es un susurro a la tradición, cada nota una invitación a celebrar la vida con la elegancia y el respeto que merece la auténtica música mexicana."
          </p>
          <div className="flex items-center gap-4 text-[#d0aa5b] font-bold tracking-widest uppercase text-xs">
            <span className="w-12 h-[2px] bg-[#d0aa5b]"></span>
            EXPERIENCIA PREMIUM
          </div>
        </div>
      </div>
    </section>
  );
}
