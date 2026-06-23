export default function Footer() {
  const links = [
    { name: 'Facebook', href: "https://www.facebook.com/share/14YFo1hREXM/" },
    { name: 'YouTube', href: "https://youtube.com/@mariachienvalenciacarabobo?si=cgOLlMhpV1-5VGMe" },
    { name: 'TikTok', href: "https://www.tiktok.com/@mariachimiciudadvalencia?_r=1&_t=ZS-97LUyjc0emL" },
    { name: 'Instagram', href: "https://www.instagram.com/mariachi_miciudad_valencia?igsh=bG1uMjZxemZwMXdh" },
  ];

  return (
    <footer className="py-20 bg-black border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
        <img src="https://i.postimg.cc/L8TP9gqL/IMAGOTIPO-MARIACHIVALENCIA-WEB.png" alt="Logo Mariachi" className="w-32 h-auto" />
        <p className="text-gray-400 max-w-sm">Llevando la mejor música mexicana a tus eventos especiales en Valencia, Venezuela.</p>
        
        <div className="flex justify-center gap-6 text-gray-400 text-sm flex-wrap">
            {links.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#d0aa5b] transition-colors">{link.name}</a>
            ))}
        </div>

        <div className="text-gray-600 text-xs">
          © 2026 Mariachi Mi Ciudad de Valencia. Todos los derechos reservados.<br/>
          Hecho por <a href="https://instagram.com/legaint.ve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legaint Corporation</a>
        </div>
      </div>
    </footer>
  )
}
