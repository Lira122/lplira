import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Target() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.target-item',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const targets = [
    "Empresas que querem escalar",
    "Negócios que já anunciam mas não têm resultado",
    "Empresas que querem automatizar atendimento e vendas"
  ];

  return (
    <section ref={containerRef} className="w-full py-24 bg-dark relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="text-xl">🔥</span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
            Para quem é
          </h2>
        </div>
        
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {targets.map((text, i) => (
            <div key={i} className="target-item flex items-center justify-center md:justify-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-glow/50 transition-colors">
              <CheckCircle2 className="text-glow w-6 h-6 flex-shrink-0" />
              <p className="font-sans text-grayText text-lg md:text-xl text-left font-semibold">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
