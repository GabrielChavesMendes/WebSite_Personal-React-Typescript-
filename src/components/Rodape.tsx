export function Rodape () {
  const anoAtual = new Date().getFullYear(); 

  return (
    <footer className="w-full bg-black border-t border-purple-900/30 py-10 px-6 z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* LOGO */}
        <div className="text-xl font-black tracking-widest text-white/40">
          PERSONAL<span className="text-purple-600/50">.FIT</span>
        </div>

        {/* DIREITOS AUTORAIS */}
        <p className="text-gray-500 text-sm font-medium mt-2">
          &copy; {anoAtual} Personal. Todos os direitos reservados.
        </p>

        {/* AVISO LEGAL (Muito importante para Personal Trainers) */}
        <p className="text-gray-600 text-xs max-w-3xl mt-2 leading-relaxed">
          Aviso Legal: Os resultados dos treinos podem variar de pessoa para pessoa. As informações e metodologias fornecidas nesta consultoria não substituem o aconselhamento, diagnóstico ou tratamento médico profissional. Consulte sempre um médico antes de iniciar qualquer novo programa de exercícios físicos ou dieta.
        </p>

      </div>
    </footer>
  );
}