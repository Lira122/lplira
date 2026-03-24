import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing({ onOpenModal }) {
  const ctaRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%'
        },
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-32 bg-primary flex items-center justify-center px-6 relative z-10">
      <div 
        ref={ctaRef}
        className="w-full max-w-5xl bg-gradient-to-br from-[#121221] to-primary border border-accent/20 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow/10 blur-[120px] rounded-full point-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6">
            Pronto para escalar seu negócio?
          </h2>
          <p className="font-sans text-grayText text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Pare de depender de indicação e comece a gerar clientes todos os dias.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onOpenModal('consultoria')}
              className="btn-magnetic w-full sm:w-auto slide-bg-container inline-flex items-center justify-center border border-accent bg-accent text-white px-10 py-5 rounded-full text-lg font-heading tracking-wide overflow-hidden shadow-[0_0_20px_#8A7CFF]"
            >
              <span className="slide-bg-layer bg-white"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary font-bold">Agendar consultoria</span>
            </button>
            <button 
              onClick={() => onOpenModal('whatsapp')}
              className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 px-8 py-5 rounded-full text-lg font-heading tracking-wide transition-colors"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
