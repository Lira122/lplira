export default function Clients() {
  const clients = [
    "SPETIALIST",
    "Excursão da Adriane",
    "Dr. Guilherme Mesquita",
    "Le Festin Aderis",
    "Dr. Vitor Campos",
    "AMO MAKE"
  ];

  // Duplicate array items multiple times for seamless infinite scroll
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="w-full relative z-20 bg-primary py-12 border-b border-glow/10 overflow-hidden flex flex-col items-center justify-center">
      <p className="font-mono text-xs text-secondary uppercase tracking-[0.2em] mb-8 bg-secondary/10 px-4 py-1 rounded-full border border-secondary/20">
        Empresas que confiam em nosso ecossistema
      </p>
      
      <div className="relative w-full max-w-[100vw] flex overflow-hidden">
        
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee items-center group">
          {repeatedClients.map((client, index) => (
            <div 
              key={index} 
              className="px-8 md:px-16 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110 cursor-default"
            >
              <h4 className="font-heading font-black text-2xl md:text-3xl text-white/20 whitespace-nowrap hover:text-white transition-colors duration-300">
                {client}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
