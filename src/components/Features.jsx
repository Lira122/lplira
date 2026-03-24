import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, label: 'Campanhas de Alta Conversão', color: 'border-accent/40 text-white bg-dark' },
    { id: 2, label: 'Otimização de CPA', color: 'border-accent/80 text-white bg-dark' },
    { id: 3, label: 'Escala com ROAS', color: 'border-white/20 text-white bg-primary' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        newCards.unshift(newCards.pop());
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 mt-6 flex justify-center items-end pb-4">
      {cards.map((card, i) => {
        const scale = 1 - i * 0.05;
        const yOffset = i * -15;
        const zIndex = 3 - i;
        const opacity = 1 - i * 0.3;

        return (
          <div
            key={card.id}
            className={`absolute w-[85%] h-24 rounded-2xl border ${card.color} flex items-center justify-center p-4 shadow-xl`}
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              zIndex,
              opacity,
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span className="font-sans font-bold text-sm text-center">{card.label}</span>
          </div>
        );
      })}
    </div>
  );
};

const TypewriterCard = () => {
  const texts = [
    "> Iniciando automação...",
    "> Qualificando lead #4092...",
    "> Enviando sequência...",
    "> Fechamento agendado."
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let charIndex = 0;
    const targetText = texts[currentTextIndex];
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (charIndex < targetText.length) {
        setDisplayText(targetText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 50);
    
    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  return (
    <div className="w-full h-40 mt-6 bg-dark border border-white/10 rounded-2xl flex flex-col p-4 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="text-xs font-mono text-accent uppercase tracking-wider">Live Feed</span>
      </div>
      <div className="font-mono text-sm text-gray-300">
        {displayText}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const cursorRef = useRef(null);
  const targetDayRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(cursorRef.current, { x: 0, y: 100, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, { 
          x: targetDayRef.current?.offsetLeft - 10 || 50, 
          y: targetDayRef.current?.offsetTop + 10 || 20, 
          duration: 1.2, 
          ease: "power2.inOut" 
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(targetDayRef.current, { backgroundColor: '#7B61FF', color: '#fff', duration: 0.2 }, "-=0.2")
        .to(cursorRef.current, {
          x: btnRef.current?.offsetLeft + 20 || 120,
          y: btnRef.current?.offsetTop + 10 || 80,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.3
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(btnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
        .to(targetDayRef.current, { backgroundColor: 'transparent', color: '#a1a1aa', duration: 0.3 }, "-=0.3");
        
    });
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="w-full h-40 mt-6 relative p-4 flex flex-col justify-between">
      <div className="flex justify-between w-full">
        {days.map((day, i) => (
          <div 
            key={i} 
            ref={i === 3 ? targetDayRef : null}
            className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-mono text-gray-400 border border-white/5"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-4">
        <button ref={btnRef} className="px-4 py-1.5 text-xs font-heading font-bold bg-white/5 border border-white/10 rounded-md text-white">Salvar</button>
      </div>

      <div ref={cursorRef} className="absolute z-10 text-white drop-shadow-lg pointer-events-none">
        <MousePointer2 className="w-6 h-6 fill-white stroke-background" />
      </div>
    </div>
  );
};

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="w-full py-24 md:py-32 bg-background px-6 relative z-20 rounded-t-[3rem] -mt-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="feature-card bg-primary p-8 rounded-[2rem] border border-primary/10 shadow-[0_10_40px_rgba(0,0,0,0.05)] flex flex-col justify-between overflow-hidden relative group">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Tráfego Otimizado</h3>
              <p className="text-gray-400 text-sm font-sans">Tráfego Pago que gera leads e vendas.</p>
            </div>
            <ShufflerCard />
          </div>

          {/* Card 2 */}
          <div className="feature-card bg-primary p-8 rounded-[2rem] border border-primary/10 shadow-[0_10_40px_rgba(0,0,0,0.05)] flex flex-col justify-between overflow-hidden relative group">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">IA em Escala</h3>
              <p className="text-gray-400 text-sm font-sans">Automações com IA para ganhar escala estruturada.</p>
            </div>
            <TypewriterCard />
          </div>

          {/* Card 3 */}
          <div className="feature-card bg-primary p-8 rounded-[2rem] border border-primary/10 shadow-[0_10_40px_rgba(0,0,0,0.05)] flex flex-col justify-between overflow-hidden relative group">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Sistemas de Conversão</h3>
              <p className="text-gray-400 text-sm font-sans">Sites, criativos e funis para converter muito mais.</p>
            </div>
            <SchedulerCard />
          </div>

        </div>
      </div>
    </section>
  );
}
