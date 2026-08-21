import React, { useState } from "react";
import { Trophy, Users, Globe, Flame, ZoomIn } from "lucide-react";

import { units } from "../data";
import sobre from "../assets/patricio-arnold.png";

interface AboutSectionProps {
  onNavigateTab: (tabId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigateTab,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const structureGallery = units;

  // PILARES DA ADK
  const pillars = [
    {
      label: "METODOLOGIA ADK",
      icon: Trophy,
      desc: "Uma filosofia de treinamento aplicada em todas as etapas do desenvolvimento do atleta.",
    },
    {
      label: "ALTO RENDIMENTO",
      icon: Flame,
      desc: "Treinamento estruturado para desenvolver atletas competitivos e levá-los ao seu melhor nível.",
    },
    {
      label: "EQUIPE TÉCNICA",
      icon: Users,
      desc: "Profissionais especializados trabalhando de forma integrada no desenvolvimento dos atletas.",
    },
    {
      label: "FORMAÇÃO COMPLETA",
      icon: Globe,
      desc: "Desenvolvimento técnico, tático, físico e mental, aliado ao planejamento competitivo.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900"
      id="adk-about-composite-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16" id="about-content-quemsomos">
          {/* =====================================================
              QUEM SOMOS - TEXTO PRINCIPAL + IMAGEM
          ====================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* TEXTO */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-adk-yellow font-mono text-xs font-extrabold uppercase tracking-widest">
                Centro de Excelência Esportiva
              </span>

              <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight leading-none text-white">
                REFERÊNCIA NA FORMAÇÃO DE{" "}
                <span className="text-adk-yellow">ATLETAS</span>
              </h2>

              <div className="h-1.5 w-20 bg-adk-yellow rounded"></div>

              <p className="text-zinc-300 font-sans leading-relaxed text-base">
                A <strong>ADK Tennis</strong> é um centro de treinamento de
                tênis de alto rendimento, referência nacional na formação e
                desenvolvimento de atletas. Nossa metodologia acompanha cada
                etapa da evolução, da iniciação ao alto rendimento.
              </p>

              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Atualmente contamos com 5 unidades esportivas com as melhores
                práticas técnico-táticas globais. Sob a supervisão dos
                fundadores e diretores técnicos, a rede atua desde a iniciação
                até o acompanhamento integral em torneios de Grand Slam e da
                Davis Cup, integrando preparação psicológica, medicina
                preventiva e coach avançado.
              </p>

              {/* BOTÕES */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigateTab("programas")}
                  className="bg-zinc-920 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded border border-zinc-700 hover:border-adk-yellow hover:text-adk-yellow transition-all duration-200 cursor-pointer"
                >
                  Programas de Treino
                </button>

                <button
                  onClick={() => onNavigateTab("contato")}
                  className="bg-adk-yellow hover:bg-white text-zinc-950 font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded transition-all duration-200 cursor-pointer"
                >
                  Mais informações
                </button>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="lg:col-span-5 relative">
              {/* DETALHE SUPERIOR */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-adk-yellow"></div>

              {/* DETALHE INFERIOR */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-adk-yellow"></div>

              <img
                src={sobre}
                alt="Tenistas profissionais treinando na quadra de saibro da ADK"
                className="rounded shadow-2xl w-full h-[350px] object-cover ring-1 ring-zinc-850 filter brightness-95"
              />

              <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white px-3 py-1.5 rounded text-xs font-mono border border-zinc-800">
                Itamirim Clube de Campo, Itajaí
              </div>
            </div>
          </div>

          {/* =====================================================
              PILARES DA ADK
          ====================================================== */}
          <div className="pt-8 border-t border-zinc-850">
            <div className="mb-8">
              <span className="text-adk-yellow font-mono text-xs font-extrabold uppercase tracking-widest">
                Nossa filosofia
              </span>

              <h3 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white mt-2">
                PILARES DA ADK
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={idx}
                    className="
                      group
                      bg-zinc-950
                      p-6
                      rounded
                      border
                      border-zinc-850
                      hover:border-adk-yellow/50
                      transition-all
                      duration-300
                      shadow-lg
                      flex
                      flex-col
                    "
                  >
                    {/* ÍCONE */}
                    <div
                      className="
                        w-11
                        h-11
                        rounded
                        bg-adk-yellow/10
                        flex
                        items-center
                        justify-center
                        mb-5
                        group-hover:bg-adk-yellow
                        transition-colors
                        duration-300
                      "
                    >
                      <Icon
                        className="
                          w-5
                          h-5
                          text-adk-yellow
                          group-hover:text-zinc-950
                          transition-colors
                          duration-300
                        "
                      />
                    </div>

                    {/* TÍTULO */}
                    <span className="block text-base font-black text-white uppercase tracking-wide leading-tight">
                      {pillar.label}
                    </span>

                    {/* LINHA */}
                    <div className="h-0.5 w-10 bg-adk-yellow mt-3 mb-4 rounded transition-all duration-300 group-hover:w-16"></div>

                    {/* DESCRIÇÃO */}
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              NOSSAS UNIDADES
          ====================================================== */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
                NOSSAS UNIDADES
              </h3>

              <p className="text-xs text-zinc-400">
                A metodologia ADK está presente em diferentes regiões do Brasil.
                Conheça nossas unidades e encontre a mais próxima de você.
              </p>
            </div>

            {/* GALERIA DAS UNIDADES */}
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
              {structureGallery.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPhoto(item.image)}
                  className="
                    group
                    relative
                    h-40
                    bg-zinc-950
                    rounded
                    overflow-hidden
                    border
                    border-zinc-850
                    cursor-pointer
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-500
                      filter
                      brightness-75
                      group-hover:brightness-90
                    "
                  />

                  {/* GRADIENTE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10" />

                  {/* TEXTO */}
                  <div className="absolute bottom-2 left-2 right-2 text-left z-20">
                    <span className="block text-[10px] font-bold text-adk-yellow uppercase tracking-tighter truncate leading-none">
                      {item.city}
                    </span>

                    <span className="block text-[9px] font-sans text-white text-light truncate mt-0.5">
                      {item.name}
                    </span>
                  </div>

                  {/* ÍCONE ZOOM */}
                  <div
                    className="
                      absolute
                      top-2
                      right-2
                      z-20
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      bg-zinc-950/80
                      p-1.5
                      rounded-full
                    "
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-adk-yellow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          LIGHTBOX DA GALERIA
      ====================================================== */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          id="gallery-lightbox"
        >
          <div
            className="relative max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Visualização ampliada da infraestrutura ADK"
              className="max-w-full max-h-[80vh] object-contain rounded border border-zinc-800"
            />

            <button
              onClick={() => setSelectedPhoto(null)}
              className="
                absolute
                -top-12
                right-0
                text-white
                hover:text-adk-yellow
                text-sm
                font-bold
                uppercase
                tracking-wider
                bg-zinc-900
                px-4
                py-2
                rounded
                focus:outline-none
                cursor-pointer
              "
            >
              Fechar Visualização
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
