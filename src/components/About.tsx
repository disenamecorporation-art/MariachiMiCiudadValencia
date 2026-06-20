export default function About() {
  return (
    <section id="inicio" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">La Excelencia en Mariachi en Valencia</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-[#d0aa5b] pl-8">
              En <strong>Mariachi Mi Ciudad de Valencia</strong>, nos dedicamos a llevar la tradición, el color y la alegría de la música mexicana a cada uno de tus eventos. Con años de experiencia y un repertorio amplio y profesional, garantizamos la máxima calidad artística.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-[#563f30] pl-8">
              Nos adaptamos a todo tipo de ocasiones especiales: desde románticas serenatas y bodas íntimas hasta grandes eventos corporativos. Nuestra misión es crear momentos inolvidables a través de la pasión, el respeto por nuestras raíces y una ejecución musical impecable.
            </p>
        </div>
      </div>
    </section>
  );
}
