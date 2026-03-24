import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-[90%] max-w-5xl ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border border-primary/10 text-primary shadow-2xl'
          : 'bg-transparent text-white border-transparent'
      }`}
    >
      <div className="font-heading font-bold text-xl tracking-wide flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-accent" />
        LIRA
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
        <a href="#features" className="hover:text-accent transition-colors link-lift">Sistemas</a>
        <a href="#philosophy" className="hover:text-accent transition-colors link-lift">Visão</a>
        <a href="#protocol" className="hover:text-accent transition-colors link-lift">Protocolo</a>
      </div>

      <button className="hidden md:flex btn-magnetic slide-bg-container items-center justify-center bg-accent text-white border border-accent px-6 py-2 rounded-full overflow-hidden text-sm font-heading shadow-[0_0_15px_rgba(123,97,255,0.4)]">
        <span className="slide-bg-layer bg-white"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Iniciar Sequência</span>
      </button>

      {/* Mobile Menu Button Mock */}
      <button className="md:hidden p-2 text-current">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </nav>
  );
}
