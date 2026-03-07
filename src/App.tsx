// src/App.tsx
import './index.css'; // Importando nossos estilos globais
import {Header} from './components/Header';
import { QuemSouEu } from './components/QuemSouEU';
import { Planos } from './components/Planos';
import { Consultorias } from './components/Consultorias';
import { Contato } from './components/Contato';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 2. Substituímos aquele header antigo pelo nosso novo componente */}
      <Header />

      <main className="flex-grow">
        
        <Hero />
        <QuemSouEu />
        <Planos />
        <Consultorias />
        <Contato />

      </main>

    </div>
  );
}

export default App;