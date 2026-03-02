// src/components/Header.tsx

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 header-glow">
      
      {/* Lado Esquerdo: Logo */}
      <div className="text-2xl font-bold tracking-widest text-white">
        LIAN.FIT
      </div>

      {/* Lado Direito: Navegação */}
      <nav>
        <ul className="flex gap-8 text-base font-medium text-gray-200">
          {/* O hover:text-purple-400 faz o texto ficar roxo ao passar o mouse! */}
          <li><a href="#inicio" className="hover:text-purple-400 transition-colors">INÍCIO</a></li>
          <li><a href="#quem-sou-eu" className="hover:text-purple-400 transition-colors">QUEM EU SOU</a></li>
          <li><a href="#planos" className="hover:text-purple-400 transition-colors">PLANOS</a></li>
          <li><a href="#contatos" className="hover:text-purple-400 transition-colors">CONTATOS</a></li>
        </ul>
      </nav>

    </header>
  );
}