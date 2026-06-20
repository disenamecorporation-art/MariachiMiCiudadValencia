export default function VideoGrid() {
  const videos = [1, 2, 3];
  return (
    <section id="videos" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-light text-accent-gradient mb-20 text-center tracking-widest uppercase">Nuestra Esencia en Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((v) => (
          <div key={v} className="group relative rounded-xl overflow-hidden cursor-pointer">
            <div className="aspect-[4/3] bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1543783207-ec64e4d95d10?q=80&w=2670&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"/>
            </div>
            {/* Borde animado aplicado al contenedor superior */}
            <div className="absolute inset-0 border border-[#563f30] rounded-xl group-hover:border-[#d0aa5b] transition-colors duration-500" />
            <div className="p-6">
                <h3 className="text-white font-medium">Actuación {v}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
