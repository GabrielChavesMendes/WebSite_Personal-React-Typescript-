import './index.css'; // Importando nossos estilos globais
import {Header} from './components/Header';
import { QuemSouEu } from './components/QuemSouEU';
import { Planos } from './components/Planos';
import { Consultorias } from './components/Consultorias';
import { Contato } from './components/Contato';
import { Hero } from './components/Hero';
import { FAQ } from './components/Faq';
import { Rodape } from './components/Rodape';

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
        <FAQ />
        <Contato />
        <Rodape />

      </main>

    </div>
  );
}

export default App;