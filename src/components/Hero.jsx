import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.hero-btn', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-end justify-start overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 lg:w-4/5 ml-0 lg:ml-[10%]">
        <p className="hero-text text-accent font-mono text-xs md:text-sm tracking-widest uppercase mb-6 pl-1 border-l-2 border-secondary">
          LIRA Agency // Crescimento Premium
        </p>
        <h1 className="flex flex-col gap-2 md:gap-0 leading-[1.05]">
          <span className="hero-text font-heading font-bold text-4xl md:text-6xl text-white">
            Transformamos tráfego, automações
          </span>
          <span className="hero-text font-drama italic text-6xl md:text-8xl text-secondary mt-1 md:mt-[-5px] pb-4">
            e IA em crescimento real.
          </span>
        </h1>
        
        <p className="hero-text text-grayText mt-6 max-w-2xl text-lg font-sans leading-relaxed">
          Estruturamos tráfego pago, automações inteligentes e presença digital para gerar vendas previsíveis todos os meses.
        </p>

        <div className="hero-btn mt-10">
          <button className="btn-magnetic slide-bg-container inline-flex items-center justify-center border border-accent/50 bg-accent text-white px-8 py-4 rounded-full text-lg font-heading tracking-wide overflow-hidden shadow-[0_0_20px_#8A7CFF]">
            <span className="slide-bg-layer bg-white"></span>
            <span className="relative z-10 group-hover:text-primary transition-colors font-bold">Agende uma consultoria</span>
          </button>
        </div>
      </div>
    </section>
  );
}
