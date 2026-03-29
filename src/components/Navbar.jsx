import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, X, Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ onOpenModal }) {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-[92%] max-w-5xl ${
          scrolled || mobileOpen
            ? 'bg-[#0d0d18]/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl'
            : 'bg-transparent text-white border-transparent'
        }`}
      >
        <div className="font-heading font-bold text-lg md:text-xl tracking-wide flex items-center gap-2">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          LIRA
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#services" className="hover:text-accent transition-colors link-lift">Serviços</a>
          <a href="#philosophy" className="hover:text-accent transition-colors link-lift">Visão</a>
          <a href="#protocol" className="hover:text-accent transition-colors link-lift">Protocolo</a>
        </div>

        <button onClick={() => onOpenModal('consultoria')} className="hidden md:flex btn-magnetic items-center justify-center bg-accent text-white border border-accent px-6 py-2 rounded-full overflow-hidden text-sm font-heading shadow-[0_0_15px_rgba(108,77,255,0.4)]">
          Iniciar Sequência
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-current" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-[#0d0d18]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#services" onClick={() => setMobileOpen(false)} className="font-mono text-sm text-white uppercase tracking-widest hover:text-accent transition-colors py-2 border-b border-white/5">Serviços</a>
          <a href="#philosophy" onClick={() => setMobileOpen(false)} className="font-mono text-sm text-white uppercase tracking-widest hover:text-accent transition-colors py-2 border-b border-white/5">Visão</a>
          <a href="#protocol" onClick={() => setMobileOpen(false)} className="font-mono text-sm text-white uppercase tracking-widest hover:text-accent transition-colors py-2 border-b border-white/5">Protocolo</a>
          <button 
            onClick={() => { setMobileOpen(false); onOpenModal('consultoria'); }}
            className="mt-2 w-full bg-accent text-white py-3 rounded-full font-heading font-bold shadow-[0_0_15px_rgba(108,77,255,0.4)]"
          >
            Agende uma consultoria
          </button>
        </div>
      )}
    </>
  );
}
