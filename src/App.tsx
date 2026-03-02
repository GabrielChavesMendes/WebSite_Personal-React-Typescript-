// src/App.tsx
import './index.css'; // Importando nossos estilos globais
import {Header} from './components/header';
import { QuemSouEu } from './components/QuemSouEU';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 2. Substituímos aquele header antigo pelo nosso novo componente */}
      <Header />

      <main className="flex-grow">
        
        <QuemSouEu />

      </main>

    </div>
  );
}

export default App;