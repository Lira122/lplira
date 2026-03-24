import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '20%',
        ease: 'none'
      });

      // Text reveal
      gsap.fromTo(text1Ref.current, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: text1Ref.current,
            start: 'top 85%'
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(text2Ref.current, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: text2Ref.current,
            start: 'top 80%'
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative w-full py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center">
      
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center opacity-10 mix-blend-lighten"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518596645362-e6e232ad32db?q=80&w=2564&auto=format&fit=crop")' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p ref={text1Ref} className="font-sans text-grayText text-lg md:text-2xl mb-8">
          Enquanto muitos focam em curtidas,
        </p>
        <h2 ref={text2Ref} className="font-drama italic text-5xl md:text-8xl text-white leading-tight">
          nós focamos em <span className="text-secondary not-italic font-heading">faturamento.</span>
        </h2>
      </div>

    </section>
  );
}
