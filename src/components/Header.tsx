import { useState } from 'react';
import logoMarca1 from '../assets/DarkLab.png'; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const patrocinadores = [
    { id: 1, tipo: 'imagem', src: logoMarca1, alt: 'Marca 1' },
    { id: 2, tipo: 'texto', texto: 'CUPOM: PERSONAL10' },
    { id: 3, tipo: 'imagem', src: logoMarca1, alt: 'Marca 2' },
    { id: 4, tipo: 'texto', texto: 'CUPOM: PERSONAL10' },
  ];

  return (
    <header className="flex justify-between items-center p-4 md:p-6 header-glow relative z-50">
      
      {/* Lado Esquerdo: Logo */}
      <div className="text-xl md:text-2xl font-bold tracking-widest text-white whitespace-nowrap flex-shrink-0 z-10 relative bg-black/50 md:bg-transparent px-2 rounded-lg">
        PERSONAL.FIT
      </div>

      {/* BANNER DINÂMICO DE PATROCINADORES */}
      <div 
        className="flex-1 overflow-hidden mx-2 md:mx-4 relative opacity-90"
        style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <div className="animate-marquee flex items-center gap-6 md:gap-10">
            {[...patrocinadores, ...patrocinadores, ...patrocinadores].map((item, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                {item.tipo === 'imagem' ? (
                  <img src={item.src} alt={item.alt} className="h-6 w-32 md:h-8 md:w-28 object-contain opacity-80" />
                ) : (
                  <span className="text-purple-400 font-bold text-sm tracking-widest uppercase">
                    {item.texto}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* BOTÃO SANDUÍCHE (Mobile) */}
      <button 
        className="md:hidden text-white focus:outline-none flex-shrink-0 z-10 relative bg-black/50 p-1 rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Lado Direito: Navegação (PC) */}
      <nav className="hidden md:block flex-shrink-0 z-10 relative bg-black/50 lg:bg-transparent px-4 py-2 rounded-xl">
        <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base font-medium text-gray-200">
          <li><a href="#inicio" className="hover:text-purple-400 transition-colors">INÍCIO</a></li>
          <li><a href="#quem-sou-eu" className="hover:text-purple-400 transition-colors">QUEM SOU</a></li>
          <li><a href="#planos" className="hover:text-purple-400 transition-colors">PLANOS</a></li>
          <li><a href="#consultorias" className="hover:text-purple-400 transition-colors">CONSULTORIA</a></li>
          <li><a href="#contatos" className="hover:text-purple-400 transition-colors">CONTATOS</a></li>
        </ul>
      </nav>

      {/* MENU MOBILE (Aberto) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-md border-b border-purple-900 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl z-50">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors">INÍCIO</a>
          <a href="#quem-sou-eu" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors">QUEM SOU</a>
          <a href="#planos" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors">PLANOS</a>
          <a href="#consultorias" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors">CONSULTORIA</a>
          <a href="#contatos" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors">CONTATOS</a>
        </div>
      )}

    </header>
  );
}