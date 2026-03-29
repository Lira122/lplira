import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animation1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 text-accent">
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="origin-center animate-[spin_10s_linear_infinite] opacity-30" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="origin-center animate-[spin_15s_linear_infinite_reverse]" strokeDasharray="10 20" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="origin-center animate-[spin_5s_linear_infinite]" strokeDasharray="30 15" />
    <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-pulse" />
  </svg>
);

const Animation2 = () => (
  <div className="w-full h-full relative overflow-hidden bg-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 left-0 w-full h-px bg-accent shadow-[0_0_15px_rgba(108,77,255,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
    <style>{`@keyframes scan { from { top: 0; } to { top: 100%; } }`}</style>
  </div>
);

const Animation3 = () => (
  <svg viewBox="0 0 200 100" className="w-full h-full opacity-80" preserveAspectRatio="none">
    <path
      d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50"
      fill="none"
      stroke="#00C2FF"
      strokeWidth="2"
      strokeLinecap="round"
      className="dash-anim drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]"
    />
    <style>{`
      .dash-anim {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: pulseWave 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes pulseWave {
        0% { stroke-dashoffset: 200; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -200; }
      }
    `}</style>
  </svg>
);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // skip last card
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(10px)',
            ease: 'none'
          })
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      step: '01',
      title: 'Diagnóstico e Auditoria',
      desc: 'Analisamos seu negócio, identificamos gargalos e oportunidades de crescimento.',
      Animation: Animation1
    },
    {
      step: '02',
      title: 'Estrutura de Conversão',
      desc: 'Criamos páginas, criativos e campanhas focadas em gerar clientes.',
      Animation: Animation2
    },
    {
      step: '03',
      title: 'Escala com Automação',
      desc: 'Implementamos IA e automações para aumentar resultados com menos esforço.',
      Animation: Animation3
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="protocol-container relative w-full bg-primary pb-16 md:pb-32">
      {protocols.map((p, i) => (
        <div key={i} className="protocol-card min-h-[100vh] w-full flex items-center justify-center sticky top-0 bg-primary py-4">
          <div className="w-[94%] md:w-[90%] max-w-6xl h-auto min-h-[70vh] md:h-[80vh] bg-dark rounded-[2rem] md:rounded-[3rem] border border-white/5 flex flex-col md:flex-row overflow-hidden shadow-2xl">
            
            {/* Visual Side */}
            <div className="w-full md:w-1/2 h-48 md:h-full bg-black/40 relative flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5 shadow-inner">
              <p.Animation />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
              <span className="font-mono text-secondary text-sm md:text-lg mx-auto md:ml-0 mb-4 md:mb-6 tracking-widest bg-secondary/10 w-fit px-4 py-1 rounded-full border border-secondary/20 text-center">
                STEP // {p.step}
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-5xl text-white mb-4 md:mb-8 text-center md:text-left">
                {p.title}
              </h3>
              <p className="font-sans text-grayText text-sm md:text-lg leading-relaxed text-center md:text-left">
                {p.desc}
              </p>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
