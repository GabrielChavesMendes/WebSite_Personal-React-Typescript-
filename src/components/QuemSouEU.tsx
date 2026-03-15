// src/components/QuemSouEu.tsx
import imgPersonal from '../assets/Personal.png';
import imgTreino1 from '../assets/imagemCarrosel1.png';
import imgTreino2 from '../assets/imagemCarrosel2.png';
import imgTreino3 from '../assets/imagemCarrosel3.png';

export function QuemSouEu() {
    return (
        <section 
            id="quem-sou-eu" 
            className="relative min-h-screen py-20 w-full overflow-hidden"
        >

            {/* 1. CARROSSEL DE FOTOS */}
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 mb-16 pb-4 snap-x px-6 md:px-12 lg:px-30">
                <img src={imgTreino1} alt="Treino 1" className="w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
                <img src={imgTreino2} alt="Treino 2" className="w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
                <img src={imgTreino3} alt="Treino 3" className="w-72 md:w-full h-48 md:h-64 object-cover rounded-xl snap-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity border border-purple-900/30" />
            </div>

            {/* 2. ÁREA DE CONTEÚDO */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full px-6 md:px-12 lg:px-20 gap-10 z-10">
                
                {/* === LADO ESQUERDO: Título + Texto === */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    
                    {/* Título */}
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-[60px] md:text-[70px] lg:text-[80px] font-black text-white tracking-widest leading-none">
                            QUEM
                        </h2>
                        <h2 className="text-[60px] md:text-[80px] lg:text-[80px] font-black texto-vazado tracking-normal md:tracking-widest leading-none mt-[-10px] md:mt-[-20px] md:translate-x-10 md:translate-y-2">
                            SOU EU
                        </h2>
                    </div>

                    {/* Texto Apresentação */}
                    <div className="text-gray-200 text-lg md:text-xl leading-relaxed text-justify md:text-left font-medium z-10 max-w-2xl">
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

                {/* LADO DIREITO: Foto do Personal */}
                <div className="w-full w-1/2 md:w-1/3 flex justify-center md:justify-end items-end relative mt-12 md:mt-0">
                    
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
        </section>
    )
}