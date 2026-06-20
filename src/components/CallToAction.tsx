interface CallToActionProps {
  onOpenContact: () => void;
}

export default function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="py-24 px-6 bg-[#030303] text-center border-y border-white/5">
      <h3 className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase mb-10">
        ¿Listo para tu evento especial?
      </h3>
      <button
        onClick={onOpenContact}
        className="px-12 py-5 rounded-sm border border-[#d0aa5b] text-white hover:bg-accent-gradient transition-all duration-500 uppercase tracking-widest text-xs font-light shadow-[0_0_20px_rgba(208,170,91,0.3)] hover:shadow-[0_0_40px_rgba(208,170,91,0.6)] animate-pulse relative group"
      >
        <span className="group-hover:opacity-0 transition-opacity duration-300">Reservar Actuación</span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click aquí</span>
      </button>
    </section>
  );
}
