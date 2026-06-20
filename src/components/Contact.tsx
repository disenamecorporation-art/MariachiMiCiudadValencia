import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', contacto: '', detalles: '' });
  const socials = [
    { name: 'Facebook', icon: Facebook, href: "https://www.facebook.com/share/14YFo1hREXM/" },
    { name: 'YouTube', icon: Youtube, href: "https://youtube.com/@mariachienvalenciacarabobo?si=cgOLlMhpV1-5VGMe" },
    { name: 'Instagram', icon: Instagram, href: "https://www.instagram.com/mariachi_miciudad_valencia?igsh=bG1uMjZxemZwMXdh" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${formData.nombre}. Detalles: ${formData.detalles}. Contacto: ${formData.contacto}`;
    window.open(`https://wa.me/584244969432?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-accent-gradient mb-20 text-center tracking-widest uppercase">Reserva tu Serenata</h2>
        <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
                <h3 className="text-white text-3xl font-bold tracking-tight">Mariachi Mi Ciudad de Valencia</h3>
                <p className="text-gray-300 leading-relaxed italic border-l-2 border-[#d0aa5b] pl-6 text-lg">
                    "Mariachi Mi Ciudad de Valencia lleva la tradición y pasión a cada celebración alegrando los corazones de nuestros clientes."
                </p>
                <div className="space-y-6 pt-4">
                    <a href="mailto:mariachimiciudadvalencia@gmail.com" className="flex items-center gap-4 text-white hover:text-[#d0aa5b] transition-colors">
                        <Mail className="text-[#d0aa5b]" /> mariachimiciudadvalencia@gmail.com
                    </a>
                    <a href="tel:+584244969432" className="flex items-center gap-4 text-white hover:text-[#d0aa5b] transition-colors">
                        <Phone className="text-[#d0aa5b]" /> +58 424 4969432
                    </a>
                    <div className="flex items-center gap-4 text-white">
                        <MapPin className="text-[#d0aa5b]" /> Valencia, Carabobo, Venezuela
                    </div>
                </div>
                <div className='flex gap-4 pt-10 border-t border-white/5'>
                    {socials.map((s, i) => (
                        <a key={i} href={s.href} target="_blank" className='p-4 bg-white/5 rounded-full hover:bg-accent-gradient transition-all text-white group' title={s.name}>
                            <s.icon size={24} className="group-hover:text-white" />
                        </a>
                    ))}
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#050505] p-10 border border-white/10 rounded-sm">
                <h4 className="text-xl font-bold text-white mb-8">Solicitud de Reserva</h4>
                <input required className="w-full bg-[#111] p-5 text-white border-b border-white/20 focus:border-[#d0aa5b] outline-none transition-colors" placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
                <input required className="w-full bg-[#111] p-5 text-white border-b border-white/20 focus:border-[#d0aa5b] outline-none transition-colors" placeholder="Email o Teléfono" value={formData.contacto} onChange={(e) => setFormData({...formData, contacto: e.target.value})} />
                <textarea required className="w-full bg-[#111] p-5 text-white border-b border-white/20 focus:border-[#d0aa5b] outline-none transition-colors h-40" placeholder="Detalles de tu evento (Fecha, lugar, tipo de evento...)" value={formData.detalles} onChange={(e) => setFormData({...formData, detalles: e.target.value})} />
                <button type="submit" className="w-full bg-accent-gradient py-5 text-white font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity">
                    Solicitar Información
                </button>
            </form>
        </div>
      </div>
    </section>
  )
}
