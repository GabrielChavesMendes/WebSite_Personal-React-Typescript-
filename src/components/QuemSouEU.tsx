// src/components/QuemSouEu.tsx

import { useRef } from 'react';
import imgPersonal from '../assets/Personal.png';
import imgTreino1 from '../assets/imagemCarrosel1.png';
import imgTreino2 from '../assets/imagemCarrosel2.png';
import imgTreino3 from '../assets/imagemCarrosel3.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function QuemSouEu() {
    const containerRef = useRef<HTMLElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const personalRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", 
            }
        });

        tl.from([title1Ref.current, title2Ref.current, textRef.current], {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        })
        
        .from(personalRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6")

        .fromTo('.foto-carrossel', 
            { 
                y: 50, 
                opacity: 0 
            }, 
            {
                y: 0,
                opacity: 1, 
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                clearProps: "all" 
            }, 
            "-=0.4"
        );

    }, { scope: containerRef });

    return (
        <section 
            id="quem-sou-eu" 
            ref={containerRef}
            className="relative min-h-screen py-12 w-full overflow-hidden flex flex-col justify-center"
        >
            {/* ÁREA DE CONTEÚDO */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full px-6 md:px-12 lg:px-20 gap-10 z-10">
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="mb-10 text-center md:text-left">
                        <h2 ref={title1Ref} className="text-[60px] md:text-[70px] lg:text-[80px] font-black text-white tracking-widest leading-none">
                            QUEM
                        </h2>
                        <h2 ref={title2Ref} className="text-[60px] md:text-[80px] lg:text-[80px] font-black texto-vazado tracking-normal md:tracking-widest leading-none mt-[-10px] md:mt-[-20px] md:translate-x-10 md:translate-y-2">
                            SOU EU
                        </h2>
                    </div>

                    <div ref={textRef} className="text-gray-200 text-lg md:text-xl leading-relaxed text-justify md:text-left font-medium z-10 max-w-2xl">
                        <p>
                            Sou Lian Malheiros e meu objetivo é simples: entregar resultados reais através de um treino inteligente. 
                            Esqueça as fichas genéricas; meu foco é a biomecânica aplicada à sua realidade e aos seus objetivos.
                        </p>
                        <p className="mt-6">
                            Aqui não existe atalho ou fórmula mágica. Meu método é focado em transformar seu corpo em uma 
                            máquina de alta performance, eliminando movimentos desperdiçados e otimizando cada repetição 
                            através de uma técnica refinada.
                        </p>
                    </div>
                </div>

                <div ref={personalRef} className="w-full w-1/2 md:w-1/3 flex justify-center md:justify-end items-end relative mt-12 md:mt-0">
                    <div className="absolute top-1/2 left-1/2 md:left-[70%] -translate-x-1/3 -translate-y-1/2 w-64 h-64 md:w-[400px] md:h-[400px] bg-purple-700/60 rounded-full blur-[100px] z-0 pointer-events-none"></div>    
                    <img 
                        src={imgPersonal}
                        alt="Foto do Personal"
                        className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(147, 51, 234, 0.4)]"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                        }}
                    />
                </div>
            </div>

            {/* CARROSSEL DE FOTOS */}
            <div className="mt-16 flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 snap-x px-6 md:px-12 lg:px-30">
                <img src={imgTreino1} alt="Treino 1" className="foto-carrossel w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
                <img src={imgTreino2} alt="Treino 2" className="foto-carrossel w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
                <img src={imgTreino3} alt="Treino 3" className="foto-carrossel w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
            </div>

        </section>
    )
}