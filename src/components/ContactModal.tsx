import { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, Music, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    fecha: '',
    hora: '',
    evento: 'Serenata Estándar',
    ubicacion: '',
    detalles: ''
  });
  
  if (!isOpen) return null;

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
    onClose();
  };

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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Glass Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Glassmorphic Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#030712]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 my-8">
        
        {/* Subtle top gold glow bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#d0aa5b] via-[#f3e3be] to-[#d0aa5b]" />
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-white/60 hover:text-[#d0aa5b] transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#d0aa5b]">
              Reserva de Excelencia
            </span>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Agenda tu Serenata
            </h4>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Completa los datos de tu evento y te enviaremos una propuesta personalizada al instante.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  Tu Nombre
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <User size={18} className="text-[#d0aa5b] absolute left-4" />
                  <input 
                    required 
                    type="text"
                    className="w-full bg-transparent p-4 pl-12 text-white placeholder-gray-500 outline-none text-sm" 
                    placeholder="Ej. Juan Pérez" 
                    value={formData.nombre} 
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})} 
                  />
                </div>
              </div>

              {/* Contacto */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  WhatsApp o Teléfono
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <Phone size={18} className="text-[#d0aa5b] absolute left-4" />
                  <input 
                    required 
                    type="tel"
                    className="w-full bg-transparent p-4 pl-12 text-white placeholder-gray-500 outline-none text-sm" 
                    placeholder="Ej. +58 412 1234567" 
                    value={formData.contacto} 
                    onChange={(e) => setFormData({...formData, contacto: e.target.value})} 
                  />
                </div>
              </div>

              {/* Fecha */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  Fecha del Evento
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <Calendar size={18} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                  <input 
                    required 
                    type="date"
                    className="w-full bg-transparent p-4 pl-12 text-white outline-none text-sm [color-scheme:dark]" 
                    value={formData.fecha} 
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})} 
                  />
                </div>
              </div>

              {/* Hora */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  Hora Sugerida
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <Clock size={18} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                  <input 
                    required 
                    type="time"
                    className="w-full bg-transparent p-4 pl-12 text-white outline-none text-sm [color-scheme:dark]" 
                    value={formData.hora} 
                    onChange={(e) => setFormData({...formData, hora: e.target.value})} 
                  />
                </div>
              </div>

              {/* Tipo de Evento */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  Tipo de Celebración
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <Music size={18} className="text-[#d0aa5b] absolute left-4 pointer-events-none" />
                  <select 
                    required 
                    className="w-full bg-transparent p-4 pl-12 text-white outline-none text-sm appearance-none cursor-pointer"
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

              {/* Ubicación / Zona */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                  Ubicación / Municipio
                </label>
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                  <MapPin size={18} className="text-[#d0aa5b] absolute left-4" />
                  <input 
                    required 
                    type="text"
                    className="w-full bg-transparent p-4 pl-12 text-white placeholder-gray-500 outline-none text-sm" 
                    placeholder="Ej. San Diego, Valencia Norte" 
                    value={formData.ubicacion} 
                    onChange={(e) => setFormData({...formData, ubicacion: e.target.value})} 
                  />
                </div>
              </div>

            </div>

            {/* Detalles / Notas */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                Detalles Adicionales (Opcional)
              </label>
              <div className="relative flex bg-white/[0.03] border border-white/10 focus-within:border-[#d0aa5b] focus-within:ring-1 focus-within:ring-[#d0aa5b] rounded-xl transition-all duration-300">
                <MessageSquare size={18} className="text-[#d0aa5b] absolute left-4 top-4" />
                <textarea 
                  className="w-full bg-transparent p-4 pl-12 text-white placeholder-gray-500 outline-none text-sm h-28 resize-none" 
                  placeholder="Escribe aquí si tienes canciones especiales o especificaciones adicionales..." 
                  value={formData.detalles} 
                  onChange={(e) => setFormData({...formData, detalles: e.target.value})} 
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-accent-gradient py-4 text-white font-bold tracking-widest uppercase text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#d0aa5b]/10"
            >
              Confirmar Reservación por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
