export default function Footer() {
  const links = [
    { name: 'Facebook', href: "https://www.facebook.com/share/14YFo1hREXM/" },
    { name: 'YouTube', href: "https://youtube.com/@mariachienvalenciacarabobo?si=cgOLlMhpV1-5VGMe" },
    { name: 'TikTok', href: "https://www.tiktok.com/@mariachimiciudadvalencia?_r=1&_t=ZS-97LUyjc0emL" },
    { name: 'Instagram', href: "https://www.instagram.com/mariachi_miciudad_valencia?igsh=bG1uMjZxemZwMXdh" },
  ];

  return (
    <footer className="py-20 bg-[#030303] text-center border-t border-white/10">
         <div className="text-white text-2xl font-bold mb-6 tracking-tighter">Mariachi Mi Ciudad de Valencia</div>
         <div className="flex justify-center gap-8 text-gray-500 text-xs uppercase tracking-widest mb-10 flex-wrap">
            {links.map((link) => (
                <a key={link.name} href={link.href} target="_blank" className="hover:text-[#d0aa5b] transition-colors">{link.name}</a>
            ))}
         </div>
         <div className="text-gray-600 text-xs">
           © 2026 Mariachi Mi Ciudad de Valencia. Todos los derechos reservados.
           <div className="mt-2">
             Hecho por <a href="https://instagram.com/legaint.ve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legaint Corporation</a>
           </div>
         </div>
    </footer>
  )
}
