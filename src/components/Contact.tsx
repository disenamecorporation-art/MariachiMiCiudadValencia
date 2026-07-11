import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Calendar, Clock, User, Music, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    fecha: '',
    hora: '',
    evento: 'Serenata Estándar',
    ubicacion: '',
    detalles: ''
  });

  const socials = [
    { name: 'Facebook', icon: Facebook, href: "https://www.facebook.com/share/14YFo1hREXM/" },
    { name: 'YouTube', icon: Youtube, href: "https://youtube.com/@mariachienvalenciacarabobo?si=cgOLlMhpV1-5VGMe" },
    { name: 'Instagram', icon: Instagram, href: "https://www.instagram.com/mariachi_miciudad_valencia?igsh=bG1uMjZxemZwMXdh" },
  ];

  const eventTypes = [
    'Serenata Estándar',
    'Cumpleaños / Quinceaños',
    'Boda / Aniversario',
    'Día de las Madres / Padres',
    'Bienvenida / Despedida',
    'Reunión Familiar / Corporativo',
    'Homenaje / Velorio',
    'Otro Evento Especial'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `✨ *NUEVA SOLICITUD DE RESERVA* ✨\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📞 *Contacto:* ${formData.contacto}\n` +
      `📅 *Fecha:* ${formData.fecha}\n` +
      `⏰ *Hora:* ${formData.hora}\n` +
      `🎶 *Tipo de Evento:* ${formData.evento}\n` +
      `📍 *Ubicación:* ${formData.ubicacion}\n` +
      `📝 *Detalles:* ${formData.detalles || 'Sin detalles adicionales'}`;
      
    window.open(`https://wa.me/584244969432?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-[#01050a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-accent-gradient mb-20 text-center tracking-widest uppercase">Reserva tu Serenata</h2>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10">
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
            
            <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                    <h4 className="text-2xl font-bold text-white tracking-tight">Solicitud de Reserva</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nombre */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          Tu Nombre
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <User size={16} className="text-[#d0aa5b] absolute left-4" />
                          <input 
                            required 
                            type="text"
                            className="w-full bg-transparent p-3.5 pl-11 text-white placeholder-gray-500 outline-none text-sm" 
                            placeholder="Ej. Juan Pérez" 
                            value={formData.nombre} 
                            onChange={(e) => setFormData({...formData, nombre: e.target.value})} 
                          />
                        </div>
                      </div>

                      {/* Contacto */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          WhatsApp o Teléfono
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <Phone size={16} className="text-[#d0aa5b] absolute left-4" />
                          <input 
                            required 
                            type="tel"
                            className="w-full bg-transparent p-3.5 pl-11 text-white placeholder-gray-500 outline-none text-sm" 
                            placeholder="Ej. +58 412 1234567" 
                            value={formData.contacto} 
                            onChange={(e) => setFormData({...formData, contacto: e.target.value})} 
                          />
                        </div>
                      </div>

                      {/* Fecha */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          Fecha
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <Calendar size={16} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                          <input 
                            required 
                            type="date"
                            className="w-full bg-transparent p-3.5 pl-11 text-white outline-none text-sm [color-scheme:dark]" 
                            value={formData.fecha} 
                            onChange={(e) => setFormData({...formData, fecha: e.target.value})} 
                          />
                        </div>
                      </div>

                      {/* Hora */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          Hora
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <Clock size={16} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                          <input 
                            required 
                            type="time"
                            className="w-full bg-transparent p-3.5 pl-11 text-white outline-none text-sm [color-scheme:dark]" 
                            value={formData.hora} 
                            onChange={(e) => setFormData({...formData, hora: e.target.value})} 
                          />
                        </div>
                      </div>

                      {/* Tipo de Evento */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          Celebración
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <Music size={16} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                          <select 
                            required 
                            className="w-full bg-transparent p-3.5 pl-11 text-white outline-none text-sm appearance-none cursor-pointer"
                            value={formData.evento} 
                            onChange={(e) => setFormData({...formData, evento: e.target.value})}
                          >
                            {eventTypes.map((type) => (
                              <option key={type} value={type} className="bg-neutral-950 text-white">
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Ubicación */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                          Ubicación
                        </label>
                        <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                          <MapPin size={16} className="text-[#d0aa5b] absolute left-4" />
                          <input 
                            required 
                            type="text"
                            className="w-full bg-transparent p-3.5 pl-11 text-white placeholder-gray-500 outline-none text-sm" 
                            placeholder="Ej. San Diego" 
                            value={formData.ubicacion} 
                            onChange={(e) => setFormData({...formData, ubicacion: e.target.value})} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Detalles / Notas */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-medium text-gray-400 tracking-wider uppercase block">
                        Detalles Adicionales (Opcional)
                      </label>
                      <div className="relative flex bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                        <MessageSquare size={16} className="text-[#d0aa5b] absolute left-4 top-4" />
                        <textarea 
                          className="w-full bg-transparent p-3.5 pl-11 text-white placeholder-gray-500 outline-none text-sm h-24 resize-none" 
                          placeholder="Canciones especiales o comentarios..." 
                          value={formData.detalles} 
                          onChange={(e) => setFormData({...formData, detalles: e.target.value})} 
                        />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-accent-gradient py-4 text-white font-bold tracking-widest uppercase text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#d0aa5b]/10">
                        Solicitar Reservación por WhatsApp
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
