import { useState } from 'react';
import { Play, Film, Smartphone } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  type: 'video' | 'short';
  description: string;
}

export default function VideoGrid() {
  const [filter, setFilter] = useState<'all' | 'video' | 'short'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: "S6nCY_t8WuM",
      title: "Gran Serenata de Gala",
      type: "video",
      description: "Presentación en vivo con todo el poder y la elegancia del auténtico mariachi."
    },
    {
      id: "FFmoU0608JA",
      title: "Emoción de Cerca",
      type: "short",
      description: "Capturando sonrisas y momentos únicos con nuestro público."
    },
    {
      id: "UHplFlFl5_I",
      title: "Clásicos Mexicanos",
      type: "video",
      description: "Interpretación impecable de los temas que tocan el corazón."
    },
    {
      id: "AXty7zd3tIc",
      title: "El Ritmo de la Fiesta",
      type: "short",
      description: "Alegría contagiosa que pone a todos a cantar y bailar."
    },
    {
      id: "-2SkOybltDI",
      title: "Son de la Negra & Tradición",
      type: "video",
      description: "La fuerza del folklore mexicano directo en tu celebración."
    },
    {
      id: "zVA6Kt0_z4c",
      title: "Serenata Sorpresa",
      type: "short",
      description: "Ese momento mágico e inolvidable donde inicia la celebración."
    },
    {
      id: "lFVUWF5Dt6c",
      title: "Repertorio de Oro",
      type: "video",
      description: "Canciones eternas interpretadas con la máxima excelencia musical."
    }
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(v => v.type === filter);

  return (
    <section id="videos" className="py-32 px-6 bg-[#01050a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-light text-accent-gradient tracking-widest uppercase">
            Nuestra Esencia en Video
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Vive la experiencia, la energía y la elegancia de Mariachi Mi Ciudad de Valencia en cada presentación.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => { setFilter('all'); setPlayingId(null); }}
            className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#d0aa5b] text-black shadow-lg shadow-[#d0aa5b]/20'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => { setFilter('video'); setPlayingId(null); }}
            className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              filter === 'video'
                ? 'bg-[#d0aa5b] text-black shadow-lg shadow-[#d0aa5b]/20'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Film size={16} />
            Presentaciones
          </button>
          <button
            onClick={() => { setFilter('short'); setPlayingId(null); }}
            className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              filter === 'short'
                ? 'bg-[#d0aa5b] text-black shadow-lg shadow-[#d0aa5b]/20'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Smartphone size={16} />
            Momentos en Vivo
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredVideos.map((video) => {
            const isShort = video.type === 'short';
            return (
              <div 
                key={video.id} 
                className={`group relative rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-[#d0aa5b]/30 transition-all duration-500 flex flex-col ${
                  isShort ? 'lg:col-span-1 max-w-[340px] mx-auto w-full' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-gray-950 w-full ${
                  isShort ? 'aspect-[9/16]' : 'aspect-video'
                }`}>
                  {playingId === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      onClick={() => setPlayingId(video.id)}
                      className="absolute inset-0 cursor-pointer group/thumb"
                    >
                      {/* High quality thumbnail fetch */}
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#d0aa5b] text-black flex items-center justify-center shadow-2xl shadow-[#d0aa5b]/40 group-hover/thumb:scale-110 group-hover/thumb:bg-white transition-all duration-300">
                          <Play size={28} className="fill-current ml-1 text-black" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                      isShort ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-[#d0aa5b]'
                    }`}>
                      {isShort ? 'Short' : 'Video'}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#d0aa5b] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
