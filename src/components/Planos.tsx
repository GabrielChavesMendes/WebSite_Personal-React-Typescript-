// src/components/Planos.tsx

import bgBasic from '../assets/Basic.png';
import bgPlus from '../assets/Plus.png';
import bgPremium from '../assets/Premium.png';
import imgArma1 from '../assets/Espada_toji03.png'; 
import imgArma2 from '../assets/Espada_toji02.png'; 
import imgToji from '../assets/Mini_toji.png'; 

export function Planos() {
  return (
    <section id="planos" className="relative py-20 w-full z-20 bg-[#787878]/8">
      
      {/* TÍTULO */}
      <div className="max-w-7xl mx-auto px-8 mb-10 md:mb-8 flex justify-center md:justify-end">
        <h2 className="text-5xl sm:text-6xl md:text-[70px] font-black texto-vazado tracking-widest leading-none mt-[-10px] md:mt-[-20px] md:translate-x-30">
          PLANOS
        </h2>
      </div>

      {/* GRID DOS CARTÕES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto px-4 md:px-0">
        
        {/* COLUNA 1: PLANO BASIC */}
        <div 
          className="relative p-6 md:p-12 flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundImage: `url(${bgBasic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="border-2 border-white rounded-[40px] p-6 md:p-8 flex flex-col items-center text-center bg-[#68276E]/40 backdrop-blur-sm w-full h-full">
            
            {/* Altura ajustada no celular para as caixas de título/arma não ficarem com muito espaço vazio */}
            <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-start w-full">
              <h3 className="text-white font-bold text-lg md:text-xl mb-6">PLANO BASIC: Restrição Celestial</h3>
              <img src={imgArma1} alt="Arma 1" className="w-40 h-30 mb-6 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>
            
            <ul className="text-white text-sm text-left space-y-4 font-medium list-disc pl-4 mb-8 flex-grow">
              <li><strong>Treinos de Força Bruta:</strong> Planilhas de treino mensais focadas em exercícios compostos.</li>
              <li><strong>Guia de Suplementação "Zero Energia":</strong> Um PDF com o básico essencial (Creatina, Whey) para quem confia apenas no físico.</li>
              <li><strong>Acesso à Comunidade "O Clã":</strong> Grupo no Telegram/Discord para troca de experiências.</li>
              <li><strong>Check-list de Hábitos:</strong> Uma rotina diária para manter a disciplina de um mercenário.</li>
            </ul>

            {/* O botão fica no final da div do cartão branco */}
            <button className="w-full py-4 bg-[#6d28d9] text-white font-bold rounded-xl transition-all duration-300 hover:bg-purple-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(109,40,217,0.5)]">
              Quero o plano
            </button>
          </div>
        </div>

        {/* COLUNA 2: PLANO PLUS */}
        <div 
          className="relative p-6 md:p-12 flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundImage: `url(${bgPlus})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="border-2 border-white rounded-[40px] p-6 md:p-8 flex flex-col items-center text-center bg-[#121212]/40 backdrop-blur-sm w-full h-full">
            
            <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-start w-full">
              <h3 className="text-white font-bold text-lg md:text-xl mb-6">PLANO PLUS: Caçador de Elite</h3>
              <img src={imgArma2} alt="Arma 2" className="w-24 h-28 mb-6 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>
            
            <ul className="text-white text-sm text-left space-y-4 font-medium list-disc pl-4 mb-8 flex-grow">
              <li><strong>Treino Personalizado (O Inventário):</strong> Treinos ajustados de acordo com os equipamentos que o cliente tem disponível.</li>
              <li><strong>Cálculo de Macronutrientes:</strong> Dieta calculada para o objetivo específico.</li>
              <li><strong>Biblioteca de Execução:</strong> Vídeos curtos ensinando a técnica perfeita.</li>
              <li><strong>Check-in Quinzenal:</strong> Formulário de acompanhamento para ajustes.</li>
            </ul>

            <button className="w-full py-4 bg-[#6d28d9] text-white font-bold rounded-xl transition-all duration-300 hover:bg-purple-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(109,40,217,0.5)]">
              Quero o plano
            </button>
          </div>
        </div>

        {/* COLUNA 3: PLANO PREMIUM */}
        <div 
          className="relative p-6 md:p-12 flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundImage: `url(${bgPremium})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="border-2 border-white rounded-[40px] p-6 md:p-8 flex flex-col items-center text-center bg-[#68276E]/40 backdrop-blur-sm w-full h-full">
            
            <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-start w-full">
              <h3 className="text-white font-bold text-lg md:text-xl mb-6 flex flex-col items-center">
                <span>PLANO PREMIUM: Assassino de</span>
                <span>Feiticeiros</span>
              </h3>
              <img src={imgToji} alt="Toji" className="w-28 h-24 mb-6 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>
            
            <ul className="text-white text-sm text-left space-y-4 font-medium list-disc pl-4 mb-8 flex-grow">
              <li><strong>Consultoria 1 - on - 1 (O Contrato):</strong> Suporte direto via WhatsApp com o Personal Trainer.</li>
              <li><strong>Análise de Vídeo:</strong> O cliente envia vídeos fazendo o exercício e recebe correções técnicas detalhadas.</li>
              <li><strong>Planejamento de Ciclos:</strong> Organização de meses de treino para atingir o pico de performance.</li>
              <li><strong>Ficha de Personagem:</strong> Um dashboard exclusivo onde o cliente vê a evolução.</li>
            </ul>

            <button className="w-full py-4 bg-[#6d28d9] text-white font-bold rounded-xl transition-all duration-300 hover:bg-purple-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(109,40,217,0.5)]">
              Quero o plano
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}