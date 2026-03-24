export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#030408] rounded-t-[4rem] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
        
        {/* Brand Col */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-bold text-3xl mb-4 tracking-wider flex items-center gap-2">
              LIRA
            </h3>
            <p className="font-sans text-grayText max-w-md">
              Transformamos tráfego, automações e inteligência artificial em crescimento real para empresas.
            </p>
          </div>
          <div className="mt-12">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse drop-shadow-[0_0_8px_rgba(0,194,255,1)]"></div>
              <span className="font-mono text-xs text-secondary uppercase tracking-widest">System Operational</span>
            </div>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">Plataforma</h4>
          <a href="#services" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Serviços</a>
          <a href="#philosophy" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Visão</a>
          <a href="#protocol" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Protocolo</a>
        </div>

        {/* Links Col 2 */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">Legal</h4>
          <a href="#" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Privacidade</a>
          <a href="#" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Termos de Uso</a>
          <a href="#" className="font-sans text-grayText hover:text-accent transition-colors link-lift w-fit">Contato</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-grayText">
          &copy; {new Date().getFullYear()} Lira Agency. CNPJ: 65.375.742/0001-47. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs text-glow/60 tracking-widest uppercase">
          Encrypted for high growth
        </p>
      </div>
    </footer>
  );
}
