// src/components/Hero.tsx

import { useRef } from 'react';
import bg_treinando from '../assets/Mulher_treinando.png';

// IMPORTANDO O GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLParagraphElement>(null);
  
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  // CONFIGURANDO AS ANIMAÇÕES
  useGSAP(() => {
    // Zoom out suave do fundo
    gsap.from(bgRef.current, {
      scale: 1.1,
      duration: 2,
      ease: "power3.out"
    });

    // Efeito cascata (stagger) dos textos e da div do botão
    gsap.from([text1Ref.current, text2Ref.current, text3Ref.current, buttonWrapperRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      ease: "power3.out",
      delay: 0.2 
    });
  }, { scope: containerRef });

  return (
    <section 
      id="inicio"
      ref={containerRef} 
      className="relative w-full h-[90vh] bg-black overflow-hidden z-20"
    >
      
      {/* FUNDO ISOLADO */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bg_treinando})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12">
        
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start">
          
          <h1 ref={text1Ref} className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight md:leading-none mb-2 md:mb-6">
            ALCANCE A PERFORMANCE SUPREMA.
          </h1>
          
          <h1 ref={text2Ref} className="text-4xl sm:text-5xl md:text-7xl font-black texto-vazado tracking-normal md:tracking-tighter leading-tight md:leading-none mb-8 md:mb-12 md:mt-[-20px]">
            SEM DESCULPAS. SEM ATALHOS.
          </h1>
          
          <p ref={text3Ref} className="text-gray-300 text-base md:text-xl font-medium max-w-2xl mb-10 md:mb-12 leading-relaxed">
            O método de treino que transforma seu corpo através da biomecânica aplicada. Resultados reais, sem fichas genéricas.
          </p>
          
          <div ref={buttonWrapperRef} className="mt-2">
            <a 
              href="#planos"
              className="inline-block px-8 py-4 md:px-12 md:py-5 bg-[#6d28d9] text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 hover:bg-purple-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(109,40,217,0.6)]"
            >
              CONHEÇA O MÉTODO
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}