// src/components/Hero.tsx

import bg_treinando from '../assets/Mulher_treinando.png';

export function Hero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-[90vh] bg-black overflow-hidden z-20"
      style={{
        backgroundImage: `url(${bg_treinando})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* AQUI ESTÁ A MÁGICA DO ALINHAMENTO:
          items-center text-center (Celular: centraliza tudo)
          md:items-start md:text-left (PC: alinha à esquerda) 
      */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12">
        
        {/* Largura da caixa do texto: 100% no celular, 60% no PC para dar espaço à imagem */}
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start">
          
          {/* Tamanhos ajustados: text-4xl no celular, text-7xl no PC. 
              Removi o -translate-x para parar de empurrar o texto para fora! */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight md:leading-none mb-2 md:mb-6">
            ALCANCE A PERFORMANCE SUPREMA.
          </h1>
          
          {/* Mesma coisa aqui: menor no celular, gigante no PC */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black texto-vazado tracking-tighter leading-tight md:leading-none mb-8 md:mb-12 md:mt-[-20px]">
            SEM DESCULPAS. SEM ATALHOS.
          </h1>
          
          <p className="text-gray-300 text-base md:text-xl font-medium max-w-2xl mb-10 md:mb-12 leading-relaxed">
            O método de treino que transforma seu corpo através da biomecânica aplicada. Resultados reais, sem fichas genéricas.
          </p>
          
          <a 
            href="#planos"
            className="inline-block px-8 py-4 md:px-12 md:py-5 bg-[#6d28d9] text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 hover:bg-purple-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(109,40,217,0.6)]"
          >
            CONHEÇA O MÉTODO
          </a>
        </div>

      </div>
    </section>
  );
}