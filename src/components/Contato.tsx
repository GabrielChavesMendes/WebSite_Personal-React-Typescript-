// src/components/Contato.tsx

import { useState } from 'react';

// IMPORTANDO AS IMAGENS
import imgToji from '../assets/TojiContato.png'; 
import bgFumaca from '../assets/backContato.png'; 

export function Contato() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contatos" className="relative py-20 w-full z-20 bg-black overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage: `url(${bgFumaca})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* TÍTULO */}
        <div className="mb-10 text-center md:text-left relative z-10 md:-translate-x-30">
          <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black texto-vazado tracking-normal md:tracking-widest leading-none">
            CONTATO
          </h2>
        </div>

        {/* DIVISÃO DE COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start relative z-10 w-full">
          
          {/* LADO ESQUERDO: Formulário (Mais estreito, ocupando 5 colunas) */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-10 md:-translate-x-30">
            
            {/* Caixa de Comentário */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left drop-shadow-md">Deixe um comentário</h3>
              
              {/* Diminuí a altura para rows={3} e coloquei max-w-lg para não esticar tanto */}
              <textarea 
                rows={3}
                placeholder="Escreva aqui..."
                className="w-full max-w-lg bg-transparent backdrop-blur-sm border border-white/40 rounded-[20px] p-5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none mb-4"
              ></textarea>

              {/* Botão menor e alinhado à esquerda (w-fit faz ele ter o tamanho exato do texto no PC) */}
              <div className="flex justify-center md:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-fit px-8 py-3 bg-transparent border border-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(109,40,217,0.4)]"
                >
                  Ver comentários
                </button>
              </div>
            </div>

            {/* Informações de Contato Direto */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-4 drop-shadow-md">Entre em contato:</h3>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="text-xl drop-shadow-md">📧</span> 
                  <a href="mailto:lianmalheirospersonal@gmail.com" className="hover:text-purple-400 transition-colors drop-shadow-md">
                    lianmalheirospersonal@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <span className="text-xl text-green-500 drop-shadow-md">💬</span> 
                  <a href="https://wa.me/5531999999999" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors drop-shadow-md">
                    (31) 9xxxx-xxxx
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* MEIO DA TELA: Sobre Mim e Redes Sociais */}
          {/* md:col-start-7 empurra este bloco diretamente para a coluna 7, ou seja, para o meio da tela! */}
          <div className="col-span-1 md:col-span-4 md:col-start-7 flex flex-col gap-8 text-center md:text-left md:pt-4 md:-translate-x-20">
            
            {/* Sobre Mim */}
            <div>
              <h3 className="text-white font-bold text-lg mb-3 drop-shadow-md">Sobre mim</h3>
              <p className="text-gray-300 leading-relaxed font-medium drop-shadow-md text-sm md:text-base">
                Eu quero ajudar você a alcançar de forma definitiva os seus objetivos na academia e mudar de vez a sua relação com seu corpo.
              </p>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 drop-shadow-md">Redes Sociais</h3>
              
              <ul className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
                
                {/* Instagram */}
                <li>
                  <a href="#" className="flex items-center group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                  </a>
                </li>

                {/* X (Antigo Twitter) */}
                <li>
                  <a href="#" className="flex items-center group">
                    <div className="w-10 h-10 rounded-xl bg-black border border-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </div>
                  </a>
                </li>

                {/* Facebook */}
                <li>
                  <a href="#" className="flex items-center group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                  </a>
                </li>

                {/* TikTok */}
                <li>
                  <a href="#" className="flex items-center group">
                    <div className="w-10 h-10 rounded-xl bg-black border border-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>

        {/* TOJI */}
        <div className="mt-16 md:mt-0 md:absolute md:-bottom-20 md:-right-16 lg:-right-32 flex justify-center md:justify-end z-0 pointer-events-none">
          <img 
              src={imgToji}
              alt="Personagem Toji"
              className="w-full max-w-[180px] max-h-[360px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain drop-shadow-[0_0_20px_rgba(147,51,234,0.5)] opacity-95"
          />
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#121212] border border-purple-800 rounded-3xl p-8 w-full max-w-xl relative shadow-[0_0_30px_rgba(109,40,217,0.3)] text-left">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-6 text-gray-500 hover:text-white text-3xl font-bold transition-colors">
                &times;
              </button>
              <h3 className="text-2xl font-bold text-white mb-6">Comentários</h3>
              <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
                  <h4 className="text-purple-400 font-bold text-md">Yuji Itadori</h4>
                  <p className="text-gray-300 text-sm mt-2">O treino de Força Bruta me ajudou a ganhar uma base sólida. O acompanhamento é impecável!</p>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
                  <h4 className="text-purple-400 font-bold text-md">Maki Zenin</h4>
                  <p className="text-gray-300 text-sm mt-2">A consultoria online arrumou completamente a minha postura nos exercícios livres. Indispensável.</p>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800">
                  <h4 className="text-purple-400 font-bold text-md">Megumi Fushiguro</h4>
                  <p className="text-gray-300 text-sm mt-2">O inventário focado no equipamento que eu já tinha em casa salvou minha rotina corrida.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}