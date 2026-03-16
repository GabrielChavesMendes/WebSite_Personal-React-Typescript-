// src/components/FAQ.tsx

import { useState, useRef } from 'react';

import bgFaq from '../assets/tojiBack.png'; 

// Importando GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const faqs = [
    {
      pergunta: "Preciso ter equipamentos em casa para o Plano Basic?",
      resposta: "Não! O Plano Basic pode ser adaptado usando o peso do próprio corpo (calistenia) e itens comuns que você já tem em casa. A Força Bruta vem da execução perfeita, não apenas dos pesos."
    },
    {
      pergunta: "Como funciona a entrega das dietas e treinos?",
      resposta: "Tudo é entregue digitalmente através de um aplicativo exclusivo e arquivos em PDF. Você terá acesso na palma da mão, podendo checar sua Ficha de Personagem a qualquer momento."
    },
    {
      pergunta: "O acompanhamento é diário?",
      resposta: "No Plano Premium sim! Você terá meu contato direto no WhatsApp para tirar dúvidas, enviar vídeos de execução e fazer ajustes rápidos sempre que precisar."
    },
    {
      pergunta: "Em quanto tempo começo a ver resultados?",
      resposta: "A biomecânica não falha. Se você seguir o método sem atalhos e sem desculpas, nas primeiras 4 semanas você já notará um ganho significativo de força e mudanças visuais no seu físico."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
      }
    });

    // Título surge de baixo
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    
    // As perguntas (linhas) surgem em cascata usando a classe .faq-item
    .fromTo('.faq-item',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.15, 
        ease: "power2.out",
        clearProps: "all" 
      },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <section id="faq" ref={containerRef} className="relative py-20 w-full overflow-hidden bg-black">
      
      <div 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${bgFaq})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* CONTEÚDO DO FAQ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        
        {/* TÍTULO */}
        <h2 ref={titleRef} className="text-[60px] md:text-[80px] font-black text-white text-center mb-12 tracking-widest leading-none drop-shadow-lg">
          FAQ
        </h2>

        {/* LISTA DE PERGUNTAS */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="faq-item w-full flex flex-col shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left px-6 py-5 font-bold text-lg md:text-xl transition-colors duration-300 flex justify-between items-center ${
                    isOpen ? 'bg-[#9333ea] text-black' : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {faq.pergunta}
                  
                  <span className="text-2xl font-black ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* CAIXA DA RESPOSTA */}
                <div 
                  className={`bg-[#121212] border-x border-b border-[#9333ea]/30 transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}