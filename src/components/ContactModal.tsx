import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ nombre: '', contacto: '', detalles: '' });
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${formData.nombre}. Detalles: ${formData.detalles}. Contacto: ${formData.contacto}`;
    window.open(`https://wa.me/584244969432?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#111] to-[#050505] p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-[#d0aa5b]">
          <X size={24} />
        </button>
        <h4 className="text-2xl font-light text-white mb-8 tracking-widest uppercase text-center">Reserva tu Serenata</h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input required className="w-full bg-white/5 p-4 text-white rounded-lg border border-white/10 focus:border-[#d0aa5b] outline-none transition-colors" placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
          <input required className="w-full bg-white/5 p-4 text-white rounded-lg border border-white/10 focus:border-[#d0aa5b] outline-none transition-colors" placeholder="Email o Teléfono" value={formData.contacto} onChange={(e) => setFormData({...formData, contacto: e.target.value})} />
          <textarea required className="w-full bg-white/5 p-4 text-white rounded-lg border border-white/10 focus:border-[#d0aa5b] outline-none transition-colors h-32" placeholder="Detalles de tu evento" value={formData.detalles} onChange={(e) => setFormData({...formData, detalles: e.target.value})} />
          <button type="submit" className="w-full bg-accent-gradient py-4 text-white font-light tracking-widest uppercase text-sm rounded-lg hover:opacity-90 transition-opacity">
            Solicitar Información
          </button>
        </form>
      </div>
    </div>
  );
}
