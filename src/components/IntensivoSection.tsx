import React, { useState } from "react";
import {
  CheckCircle2,
  Info,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

type IntensivoFormData = {
  name: string;
  age: string;
  cityState: string;
  phone: string;
  email: string;
  level: string;
  period: string;
  unit: string;
  program: string;
};

const trainingFormats = [
  {
    id: "programa-1",
    title: "PROGRAMA 1 — TURNO INTEGRAL",
    description:
      "Treinos 5 vezes por semana em turno integral, com treinamento técnico, tático e preparação física em cada turno.",
  },
  {
    id: "programa-2",
    title: "PROGRAMA 2 — MANHÃ + TARDE",
    description:
      "Treinos 3 vezes por semana no período da manhã + 5 vezes por semana no período da tarde, combinando treinamento em quadra e preparação física.",
  },
  {
    id: "programa-3",
    title: "PROGRAMA 3 — PERÍODO DA TARDE",
    description:
      "Treinos 5 vezes por semana no período da tarde, com treinamento técnico-tático e preparação física.",
  },
];

const units = [
  "ADK Itajaí",
  "ADK Sorocaba",
  "ADK PlayTennis São Paulo – Pompeia",
  "ADK São José do Rio Preto",
  "ADK PlayTennis Brasília",
  "Ainda não sei / Quero orientação da equipe",
];

const programOptions = [
  "Programa 1 — Turno Integral",
  "Programa 2 — Manhã + Tarde",
  "Programa 3 — Período da Tarde",
  "Ainda não sei / Quero orientação",
];

export const IntensivoSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<IntensivoFormData>({
    name: "",
    age: "",
    cityState: "",
    phone: "",
    email: "",
    level: "",
    period: "",
    unit: "ADK Itajaí",
    program: "Programa 1 — Turno Integral",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        age: "",
        cityState: "",
        phone: "",
        email: "",
        level: "",
        period: "",
        unit: "ADK Itajaí",
        program: "Programa 1 — Turno Integral",
      });
    }, 5000);
  };

  const inputClassName =
    "w-full bg-zinc-900 border border-zinc-800 rounded px-3.5 py-3 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-adk-yellow transition-colors";

  const selectClassName =
    "w-full bg-zinc-900 border border-zinc-800 rounded px-3.5 py-3 text-xs text-zinc-300 focus:outline-none focus:border-adk-yellow transition-colors";

  return (
    <section
      className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900"
      id="adk-intensivo-page-container"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Apresentação */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-8 md:p-10 rounded-xl border border-adk-yellow/30 text-center space-y-5 mb-14">
          <span className="bg-adk-yellow text-zinc-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            PROGRAMA INTENSIVO ADK TENNIS
          </span>

          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none">
            PROGRAMA INTENSIVO <span className="text-adk-yellow">ADK TENNIS</span>
          </h2>

          <p className="text-zinc-300 font-sans text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Uma experiência de treinamento intensivo dentro da metodologia ADK
            Tennis, criada para atletas que desejam potencializar sua evolução
            técnica, tática e física durante um período de treinamento
            concentrado. Itajaí é a principal referência do programa, com
            possibilidade de consulta para outras unidades ADK.
          </p>
        </div>

        {/* Formatos de treinamento */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-7 space-y-2">
            <span className="text-adk-yellow font-mono text-xs font-bold uppercase tracking-widest">
              Metodologia ADK Tennis
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-display text-white uppercase tracking-tight">
              Formatos de Treinamento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trainingFormats.map((format, index) => (
              <div
                key={format.id}
                className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 hover:border-adk-yellow/50 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-adk-yellow text-zinc-950 flex items-center justify-center font-black text-sm mb-4">
                  {index + 1}
                </div>

                <h4 className="font-black text-sm text-white uppercase tracking-wide leading-snug">
                  {format.title}
                </h4>

                <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed mt-3">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fluxo de interesse + formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-adk-yellow font-mono text-xs font-bold uppercase tracking-widest">
                Escolha sua unidade
              </span>
              <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
                Intensivo em diferentes unidades ADK
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Itajaí segue como principal foco e referência do programa. O
                atleta também pode demonstrar interesse em realizar um período
                intensivo nas demais unidades ADK, conforme disponibilidade.
              </p>
            </div>

            <div className="space-y-2.5">
              {units.map((unit, index) => (
                <div
                  key={unit}
                  className={`flex items-center gap-3 p-3.5 rounded border ${
                    index === 0
                      ? "bg-adk-yellow/10 border-adk-yellow/40"
                      : "bg-zinc-900/40 border-zinc-800"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 shrink-0 ${
                      index === 0 ? "text-adk-yellow" : "text-zinc-500"
                    }`}
                  />
                  <span className="text-xs text-zinc-300">{unit}</span>
                  {index === 0 && (
                    <span className="ml-auto text-[9px] bg-adk-yellow text-zinc-950 font-black uppercase px-2 py-1 rounded tracking-wider">
                      Principal referência
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="bg-zinc-950 p-5 rounded border border-zinc-800 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="font-bold text-xs text-zinc-200 block uppercase">
                  Valores, datas e disponibilidade
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Valores, datas e disponibilidade são informados diretamente
                  pela equipe ADK de acordo com o formato, período e unidade de
                  interesse.
                </p>
              </div>
            </div>

            {/* Informações importantes */}
            <div className="bg-zinc-950 p-5 rounded border border-zinc-800 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="font-bold text-xs text-zinc-200 block uppercase">
                  Informações importantes
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  A programação e disponibilidade do Programa Intensivo podem
                  variar de acordo com o período, perfil do atleta e unidade
                  selecionada. Após o envio da solicitação, a equipe ADK entrará
                  em contato para orientar sobre o formato mais adequado e
                  confirmar todas as informações do treinamento.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de interesse */}
          <div
            className="lg:col-span-7 bg-adk-card p-6 md:p-8 rounded-xl border border-zinc-800 shadow-2xl"
            id="intensivo-interest-form"
          >
            <div className="border-b border-zinc-800 pb-5 mb-6 text-left">
              <span className="text-adk-yellow text-[10px] font-black uppercase tracking-widest">
                Atendimento ADK
              </span>
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1">
                Tenho interesse no Intensivo
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 text-left mt-2 leading-relaxed">
                Preencha seus dados e nossa equipe entrará em contato para
                entender seu perfil, período de interesse, unidade desejada e
                apresentar as opções disponíveis.
              </p>
            </div>

            {submitted ? (
              <div className="bg-adk-yellow/10 border border-adk-yellow/30 text-adk-yellow p-6 rounded text-center space-y-2">
                <CheckCircle2 className="w-7 h-7 mx-auto" />
                <span className="text-xs font-black uppercase block">
                  SOLICITAÇÃO ENVIADA COM SUCESSO!
                </span>
                <span className="text-[11px] text-zinc-300 block">
                  A equipe ADK entrará em contato para entender seu perfil e
                  apresentar as opções disponíveis.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Nome completo do atleta
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo do atleta"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Idade
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="Idade"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Cidade / Estado
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Curitiba / PR"
                      value={formData.cityState}
                      onChange={(e) =>
                        setFormData({ ...formData, cityState: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Telefone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Nível de jogo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Intermediário / Avançado"
                      value={formData.level}
                      onChange={(e) =>
                        setFormData({ ...formData, level: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Período/data de interesse
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Janeiro de 2027"
                      value={formData.period}
                      onChange={(e) =>
                        setFormData({ ...formData, period: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                    Unidade de interesse
                  </label>
                  <select
                    required
                    value={formData.unit}
                    onChange={(e) =>
                      setFormData({ ...formData, unit: e.target.value })
                    }
                    className={selectClassName}
                  >
                    {units.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                    Formato de interesse
                  </label>
                  <select
                    required
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className={selectClassName}
                  >
                    {programOptions.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-adk-yellow hover:bg-white text-zinc-950 font-black uppercase text-xs py-3.5 rounded tracking-wider transition-colors duration-200 text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  ENVIAR SOLICITAÇÃO
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
