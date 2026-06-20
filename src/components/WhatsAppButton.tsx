import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/584244969432" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={32} />
    </a>
  );
}
