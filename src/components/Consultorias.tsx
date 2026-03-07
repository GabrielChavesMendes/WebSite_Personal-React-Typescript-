// src/components/Consultorias.tsx

export function Consultorias() {
  return (
    <section id="consultorias" className="relative py-20 px-8 w-full z-20">
      
      {/* TÍTULO DA SEÇÃO */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-widest mb-4">
          CONSULTORIA <span className="text-purple-600">AVULSA</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Precisa de um direcionamento tático rápido? Agende um encontro exclusivo.
        </p>
      </div>

      {/* CARTÕES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* CARTÃO 1: PRESENCIAL */}
        <div className="border border-purple-800 hover:border-purple-400 transition-colors duration-300 rounded-[30px] p-8 md:p-10 flex flex-col items-center bg-[#121212]/60 backdrop-blur-md shadow-[0_0_20px_rgba(109,40,217,0.2)]">
          
          <h3 className="text-white font-bold text-2xl mb-2 text-center">Encontro Presencial</h3>
          <p className="text-purple-400 text-sm mb-8 font-medium">Reconhecimento de Terreno</p>
          
          <ul className="text-gray-300 text-sm text-left space-y-4 font-medium flex-grow w-full">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Avaliação Física:</strong> Análise completa da sua biometria e composição corporal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Treino Guiado (1h):</strong> Vamos para a academia juntos para ajustar sua biomecânica na prática.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Ajuste de Postura:</strong> Correção de vícios de movimento que roubam sua performance.</span>
            </li>
          </ul>

          <button className="w-full mt-10 py-4 bg-transparent border-2 border-[#6d28d9] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#6d28d9] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(109,40,217,0.4)]">
            Quero consultar!
          </button>
        </div>

        {/* CARTÃO 2: ONLINE */}
        <div className="border border-purple-800 hover:border-purple-400 transition-colors duration-300 rounded-[30px] p-8 md:p-10 flex flex-col items-center bg-[#121212]/60 backdrop-blur-md shadow-[0_0_20px_rgba(109,40,217,0.2)]">
          
          <h3 className="text-white font-bold text-2xl mb-2 text-center">Encontro Online</h3>
          <p className="text-purple-400 text-sm mb-8 font-medium">Visão Compartilhada</p>
          
          <ul className="text-gray-300 text-sm text-left space-y-4 font-medium flex-grow w-full">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Videochamada (1h):</strong> Conversa direta para mapear seus objetivos e dificuldades.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Análise de Vídeos:</strong> Você me mostra execuções gravadas e eu corrijo sua técnica ao vivo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span><strong>Montagem de Estratégia:</strong> Criação de um plano de ação claro para os próximos passos do seu treino.</span>
            </li>
          </ul>

          <button className="w-full mt-10 py-4 bg-transparent border-2 border-[#6d28d9] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#6d28d9] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(109,40,217,0.4)]">
            Quero consultar!
          </button>
        </div>

      </div>
    </section>
  );
}