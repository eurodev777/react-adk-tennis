import React, { useState } from "react";
import { CheckCircle2, Medal, Send, Sparkle } from "lucide-react";
import { programs } from "../data";

interface ProgramsSectionProps {
  onNavigateTab: (tabId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onNavigateTab,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<string>("baby-tenis");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programId: "baby-tenis",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const activeProgram =
    programs.find((p) => p.id === selectedProgram) || programs[0];

  const programsWithLevel = ["pre-competicao", "competicao", "alto-rendimento"];

  const hasLevel = programsWithLevel.includes(activeProgram.id);

  const handleInquire = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        programId: selectedProgram,
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900"
      id="adk-programs-main-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            METODOLOGIA ADK TENNIS
          </span>

          <h2 className="text-xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            PROGRAMAS DE{" "}
            <span className="text-adk-yellow">TREINAMENTO ADK</span>
          </h2> http://localhost:3000/

          <p className="text-zinc-400 font-sans text-sm">
            Programas de treinamento para diferentes idades, níveis e objetivos,
            da iniciação ao alto rendimento, seguindo a metodologia ADK Tennis.
          </p>
        </div>

        {/* Programas regulares */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Seletor de programas */}
          <div
            className="lg:col-span-5 space-y-3"
            id="programs-selector-column"
          >
            {programs.map((prog) => {
              const isSelected = selectedProgram === prog.id;

              return (
                <button
                  key={prog.id}
                  onClick={() => {
                    setSelectedProgram(prog.id);
                    setFormData((prev) => ({
                      ...prev,
                      programId: prog.id,
                    }));
                  }}
                  className={`w-full text-left p-5 rounded border transition-all duration-300 relative cursor-pointer block ${
                    isSelected
                      ? "bg-adk-card border-adk-yellow shadow-lg shadow-adk-yellow/10 translate-x-2"
                      : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                  id={`prog-card-${prog.id}`}
                >
                  {isSelected && (
                    <span className="absolute top-0 bottom-0 left-0 w-[5px] bg-adk-yellow rounded-l" />
                  )}

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase">
                      {prog.ageRange}
                    </span>

                    {programsWithLevel.includes(prog.id) && (
                      <span className="text-[10px] bg-adk-yellow/15 text-adk-yellow font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {prog.target}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-base font-black uppercase tracking-tight mt-2 transition-colors ${
                      isSelected ? "text-adk-yellow" : "text-white"
                    }`}
                  >
                    {prog.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {prog.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detalhes do programa selecionado */}
          <div
            className="lg:col-span-7 bg-adk-card rounded border border-zinc-800 overflow-hidden flex flex-col justify-between"
            id="programs-detail-column"
          >
            <div className="relative h-60 w-full">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover brightness-[0.5] transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-adk-card to-transparent" />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-adk-yellow text-zinc-950 font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded">
                  {activeProgram.ageRange}
                </span>

                {hasLevel && (
                  <span className="bg-zinc-950/80 border border-white/10 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded">
                    {activeProgram.target}
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
                  {activeProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-7 flex-1">
              {/* Faixa etária e nível */}
              <div
                className={`grid grid-cols-1 ${
                  hasLevel ? "sm:grid-cols-2" : ""
                } gap-3`}
              >
                <div className="bg-zinc-950/50 border border-zinc-800 rounded p-4">
                  <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest block mb-1">
                    Faixa etária
                  </span>
                  <strong className="text-sm text-white">
                    {activeProgram.ageRange}
                  </strong>
                </div>

                {hasLevel && (
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded p-4">
                    <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest block mb-1">
                      Nível
                    </span>
                    <strong className="text-sm text-white">
                      {activeProgram.target}
                    </strong>
                  </div>
                )}
              </div>

              {/* Descrição curta */}
              <div className="space-y-2">
                <span className="text-adk-yellow font-mono text-xs font-bold uppercase tracking-widest block">
                  Descrição
                </span>

                <p className="text-sm font-semibold text-white leading-relaxed">
                  {activeProgram.subtitle}
                </p>

                <p className="text-sm font-sans text-zinc-300 leading-relaxed">
                  {activeProgram.description}
                </p>
              </div>

              {/* Frequência, duração e formato */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-2">
                  Frequência e formato de treinamento
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeProgram.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-adk-yellow shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulário de interesse */}
            <div className="bg-zinc-950 p-6 border-t border-zinc-800">
              <h4 className="text-xs font-black uppercase text-white tracking-widest mb-4 flex items-center gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-adk-yellow" />
                Deseja se matricular ou tirar dúvidas sobre{" "}
                {activeProgram.title}?
              </h4>

              {submitted ? (
                <div className="bg-adk-yellow/10 border border-adk-yellow/30 p-4 rounded text-center text-adk-yellow space-y-1">
                  <span className="font-extrabold text-xs block uppercase">
                    SOLICITAÇÃO RECEBIDA COM SUCESSO!
                  </span>

                  <p className="text-[11px] text-zinc-300">
                    Nossa secretaria entrará em contato em menos de 24 horas
                    úteis.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleInquire}
                  className="grid grid-cols-1 md:grid-cols-3 gap-2"
                >
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  />

                  <button
                    type="submit"
                    className="bg-adk-yellow hover:bg-white text-zinc-950 text-xs font-extrabold uppercase py-2.5 px-4 rounded tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Enviar Interesse
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* CTA separado do Programa Intensivo */}
        <div
          className="mt-16 md:mt-20 border border-adk-yellow/40 bg-gradient-to-r from-adk-yellow/10 via-zinc-900/80 to-zinc-900 rounded-lg p-7 md:p-10"
          id="programa-intensivo-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-adk-yellow mb-3">
                <Medal className="w-5 h-5 shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider">
                  PROGRAMA INTENSIVO ADK TENNIS
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white">
                PROGRAMA INTENSIVO ADK TENNIS
              </h3>

              <p className="text-sm md:text-base text-zinc-300 mt-3 leading-relaxed">
                Uma experiência de treinamento intensivo dentro da metodologia
                ADK Tennis.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab("intensivo")}
              className="w-full lg:w-auto shrink-0 bg-adk-yellow hover:bg-white text-zinc-950 text-xs md:text-sm font-black uppercase px-7 py-4 rounded tracking-wider transition-colors duration-200 cursor-pointer"
            >
              CONHEÇA O PROGRAMA INTENSIVO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
