import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Bot, MonitorSmartphone, Clapperboard, Layers, Combine } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Target className="w-8 h-8 text-accent mb-4" />,
    title: "Tráfego Pago",
    desc: "Campanhas no Google, Meta, TikTok e LinkedIn focadas em geração de leads e vendas."
  },
  {
    icon: <Bot className="w-8 h-8 text-secondary mb-4" />,
    title: "Automações com IA",
    desc: "Atendimento automático, follow-up e processos inteligentes que trabalham por você 24h."
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-glow mb-4" />,
    title: "Criação de Sites e LPs",
    desc: "Páginas de alta conversão pensadas para transformar visitantes em clientes."
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-accent mb-4" />,
    title: "Edição de Vídeos",
    desc: "Vídeos profissionais e criativos para anúncios, redes sociais e autoridade."
  },
  {
    icon: <Layers className="w-8 h-8 text-secondary mb-4" />,
    title: "Criação de Posts",
    desc: "Conteúdo estratégico para Instagram que gera engajamento e posicionamento."
  },
  {
    icon: <Combine className="w-8 h-8 text-glow mb-4" />,
    title: "Estratégia e Funis",
    desc: "Planejamento completo do funil de vendas para escalar resultados."
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="w-full py-24 md:py-32 bg-primary px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
            Tudo que sua empresa precisa <span className="text-accent underline decoration-secondary decoration-2 underline-offset-4">para crescer</span> no digital
          </h2>
          <p className="font-sans text-grayText max-w-2xl mx-auto text-lg">
            Um ecossistema completo desenhado para aquisição, retenção e conversão em alta escala.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="service-card bg-dark border border-white/5 p-8 rounded-3xl hover:border-accent/40 hover:shadow-[0_0_20px_rgba(108,77,255,0.15)] transition-all duration-300 group">
              {svc.icon}
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {svc.title}
              </h3>
              <p className="text-grayText text-sm font-sans leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
