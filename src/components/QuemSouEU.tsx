// src/components/QuemSouEu.tsx

import imgToji from '../assets/Toji.png';
import imgPersonal from '../assets/Personal.png';
import waves from '../assets/Wave.png';

export function QuemSouEu() {
    return (
        <section 
            id="quem-sou-eu" 
            className="relative min-h-screen py-20 px-8 max-w-7x1 mx-auto overflow-hidden"
            style={{
                backgroundImage: `url(${waves}), url(${waves})`,
                backgroundSize: '100% auto , 100% auto',
                backgroundPosition: 'center 35.5%, center 95%',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}
            >

                {/* 1. Área do Título */}
                <div className="mb-12 relative z-10 text-center md:text-left">
                    <h2 className="text-[60px] md:text-[80px] font-black text-white tracking-widest leading-none">
                        QUEM
                    </h2>

                    <h2 className="text-[60px] md:text-[80px] font-black texto-vazado tracking-normal md:tracking-widest leading-none mt-[-10px] md:mt-[-20px] md:translate-x-10 md:translate-y-5">
                        SOU EU
                    </h2>
                </div>

                {/* 2. Área do Conteúdo (3 colunas) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 z-10">
                    
                    {/* Coluna 1: Personagem (TOJI) */}
                    <div className="w-full md:w-1/4 flex justify-center md:translate-y-15 max-w-[400px] relative order-3 md:order-1 -mt-10 md:mt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-700/60 rounded-full blur-[100px] z-0 pointer-events-none"></div>

                        <img
                            src={imgToji}
                            alt="Personagem Toji"
                            className="w-full max-w-[250px] h-auto object-contain drop-shadow-[0_0_25px_rgba(147, 51, 234, 0.6)] relative z-10 opacity-100"
                        />
                    </div>

                    {/* Coluna 2: Texto Apresentação */}
                    <div className="w-full md:w-2/4 text-gray-200 text-lg md:text-xl leading-relaxed text-justify font-medium z-10 order-2 md:order-2">
                        <p>
                            Sou Lian Malheiros e meu objetivo é simples: entregar resultados reais através de um treino inteligente. 
                            Esqueça as fichas genéricas; meu foco é a biomecânica aplicada à sua realidade e aos seus objetivos.
                        </p>
                        <p className="mt-4">
                            Aqui não existe atalho ou fórmula mágica. Meu método é focado em transformar seu corpo em uma 
                            máquina de alta performance, eliminando movimentos desperdiçados e otimizando cada repetição 
                            através de uma técnica refinada.
                        </p>
                    </div>

                    {/* Coluna 3: Foto do Personal */}
                    <div className="w-full md:w-1/4 flex justify-center relative md:-translate-y-60 translate-x-10 max-w-[500px] order-1 md:order-3 mb-8 md:mb-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-700/60 rounded-full blur-[100px] z-0 pointer-events-none"></div>    
                    
                        <img 
                            src={imgPersonal}
                            alt="Foto do Personal"
                            className="w-full max-w-[300px] h-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(147, 51, 234, 0.6)]"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                            }}
                        />
                    </div>

                </div>
        </section>
    )
}