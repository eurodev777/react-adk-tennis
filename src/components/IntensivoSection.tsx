import React, { useState } from 'react';
import { Calendar, Users, Star, Sparkles, Flame, Check, Info, HelpCircle } from 'lucide-react';

export const IntensivoSection: React.FC = () => {
  const [selectedWeeks, setSelectedWeeks] = useState<number>(2);
  const [housingOption, setHousingOption] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', category: 'Competição Juvenil' });

  // Baseline prices for high performance training
  const basePricePerWeek = 2400; // R$ per week training
  const housingPricePerWeek = 1100; // R$ per week accommodation

  const totalTraining = basePricePerWeek * selectedWeeks;
  const totalHousing = housingOption ? housingPricePerWeek * selectedWeeks : 0;
  const discount = selectedWeeks >= 4 ? 0.1 : selectedWeeks >= 3 ? 0.05 : 0; // multi-week discounts
  const subtotal = totalTraining + totalHousing;
  const finalTotal = subtotal * (1 - discount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', category: 'Competição Juvenil' });
    }, 5000);
  };

  const benefits = [
    { title: "Dois Períodos Diários", desc: "Treinos intensos de manhã e de tarde: técnico, tático e drill de padrões modernos." },
    { title: "Preparação Física", desc: "Trabalho específico de quadra (saibro) focado em aceleração, potência e prevenção de lesões." },
    { title: "Coaching Psicológico", desc: "Clínicas de foco mental e controle emocional em situações de pressão extrema (como match points)." },
    { title: "Scout & Vídeo Análise", desc: "Gravação e análise biomecânica com feedback de correção de golpes em tempo real." },
    { title: "Simulação de Jogos", desc: "Torneio interno com ranking oficial UTR ao fim de cada semana de treinos intensos." },
    { title: "Camiseta Oficial", desc: "Kit atleta ADK Tennis edição limitada de inverno 2026." }
  ];

  return (
    <section className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900" id="adk-intensivo-page-container">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner callout */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-8 rounded-xl border border-adk-yellow/30 text-center space-y-4 mb-16">
          <span className="bg-adk-yellow text-zinc-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-zinc-950" />
            Matrículas Abertas — Julho 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none">
            INTENSIVO ADK ITAJAÍ <span className="text-adk-yellow">2026</span>
          </h2>
          <p className="text-zinc-300 font-sans text-sm max-w-2xl mx-auto leading-relaxed">
            Consolide sua evolução no maior centro de treinamento de saibro do Brasil. Escolha de 1 a 5 semanas de treinamento contínuo sob a tutela de treinadores do circuito profissional.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* List of features & guidelines */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-adk-yellow font-mono text-xs font-bold uppercase tracking-widest">
                Metodologia em Regime Integral
              </span>
              <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
                Como Funciona a Semana de Treino?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-zinc-900/40 p-5 rounded border border-zinc-850 hover:border-zinc-750 transition-all">
                  <div className="flex items-center space-x-2 text-adk-yellow mb-2">
                    <div className="w-5 h-5 rounded bg-adk-yellow/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-extrabold text-xs uppercase tracking-wider">{b.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-zinc-950 p-5 rounded border border-zinc-850 flex items-start space-x-3.5">
              <Info className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-xs text-zinc-200 block uppercase">Informações Logísticas Importantes</span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  As atividades ocorrem de Segunda a Sexta (duplo período) e Sábado de manhã (torneio de duplas e simples). Disponibilizamos pacotes com alojamento (quartos compartilhados com ar condicionado, piscina coletiva, refeitório de atletas e supervisão 24h) ou apenas o treinamento esportivo.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator and Application form */}
          <div className="lg:col-span-5 bg-adk-card p-6 md:p-8 rounded-xl border border-zinc-850 shadow-2xl space-y-6" id="intensivo-calculator">
            <div className="border-b border-zinc-800 pb-4">
              <h4 className="text-sm font-black text-white uppercase tracking-widest text-left">
                Simulador de Custos e Vagas
              </h4>
              <p className="text-[11px] text-zinc-400 text-left mt-0.5">
                Valores de referência para hospedagem e treinamento integrado.
              </p>
            </div>

            {/* Simulated Inputs */}
            <div className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase block">Semanas Desejadas</label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedWeeks(w)}
                      className={`py-2 rounded font-extrabold text-xs block text-center cursor-pointer ${
                        selectedWeeks === w
                          ? 'bg-adk-yellow text-zinc-950'
                          : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                      }`}
                    >
                      {w} Sem.
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between bg-zinc-900 border border-zinc-850 p-3.5 rounded">
                <div className="space-y-0.5">
                  <span className="block text-xs font-bold text-white uppercase">Incluir Alojamento ADK?</span>
                  <span className="block text-[10px] text-zinc-500 font-mono">Quartos, refeições e supervisão contínua</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHousingOption(!housingOption)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 cursor-pointer ${
                    housingOption ? 'bg-adk-yellow' : 'bg-zinc-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-zinc-950 transform duration-200 ${
                    housingOption ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="bg-zinc-950 p-4 rounded border border-zinc-905 space-y-2 text-left">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Treino ({selectedWeeks} semanas):</span>
                <span className="font-mono text-white">R$ {totalTraining.toFixed(2)}</span>
              </div>
              {housingOption && (
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Hospedagem ({selectedWeeks} semanas):</span>
                  <span className="font-mono text-white">R$ {totalHousing.toFixed(2)}</span>
                </div>
              )}
              {discount > 0 && (
                <div className="flex justify-between text-xs text-emerald-400">
                  <span>Dedução de Período ({(discount * 100)}%):</span>
                  <span className="font-mono">- R$ {(subtotal * discount).toFixed(2)}</span>
                </div>
              )}
              <div className="h-px bg-zinc-800 my-2"></div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold uppercase text-adk-yellow">Valor Total Estimado:</span>
                <span className="text-xl font-extrabold font-mono text-white">R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Simple application form */}
            <div className="space-y-4 pt-2">
              <div className="border-t border-zinc-800 pt-4 text-left">
                <span className="text-xs font-bold uppercase text-white block">Pré-Inscrição de Vaga</span>
                <p className="text-[10px] text-zinc-400">Seus dados serão enviados para análise de elegibilidade de ranking.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded text-center space-y-1 block">
                  <span className="text-xs font-black uppercase block">SOLICITAÇÃO ENVIADA COM SUCESSO!</span>
                  <span className="text-[10px] text-zinc-300 block">Nosso staff técnico ligará para você para validar o ranking UTR/CBT.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 text-left">
                  <input
                    type="text"
                    required
                    placeholder="Nome completo do Atleta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Telefone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                  </div>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-805 rounded px-3.5 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-adk-yellow"
                  >
                    <option>Competição Juvenil (CBT / COSAT)</option>
                    <option>Alto Rendimento (ITF / Profissional)</option>
                    <option>Tênis Universitário (UTR / EUA)</option>
                    <option>Adulto Transição / Amador Avançado</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-adk-yellow hover:bg-white text-zinc-950 font-black uppercase text-xs py-3 rounded tracking-wider transition-colors duration-200 text-center cursor-pointer"
                  >
                    Enviar Solicitação do Intensivo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
