import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Trophy,
  Users,
  Globe,
  Flame,
  Heart,
  Ship,
  MapPin,
  ZoomIn,
} from "lucide-react";
import { team, units } from "../data";
import sobre from '../assets/patricio-arnold.jpeg'

interface AboutSectionProps {
  onNavigateTab: (tabId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigateTab,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    "quemsomos" | "projeto" | "regiao"
  >("quemsomos");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const structureGallery = units

  const stats = [
    {
      label: "Anos de História",
      val: "13+",
      icon: Trophy,
      desc: "Desde 2013 lapidando jovens talentos",
    },
    {
      label: "Quadras Oficiais",
      val: "17",
      icon: Flame,
      desc: "15 de saibro (3 cobertas) & 2 rápidas",
    },
    {
      label: "Profissionais de Elite",
      val: "10+",
      icon: Users,
      desc: "Coaches ITF Nível 3, preps e fisioterapeutas",
    },
    {
      label: "Bolsas de Estudo nos EUA",
      val: "100+",
      icon: Globe,
      desc: "Tenistas recrutados para universidades",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900"
      id="adk-about-composite-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation bar for sub-topics within About page container */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          id="about-internal-tabs"
        >
          <button
            onClick={() => setActiveSubTab("quemsomos")}
            className={`px-5 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeSubTab === "quemsomos"
                ? "bg-adk-yellow text-zinc-950 shadow-md shadow-adk-yellow/15"
                : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Quem Somos
          </button>
          <button
            onClick={() => setActiveSubTab("projeto")}
            className={`px-5 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeSubTab === "projeto"
                ? "bg-adk-yellow text-zinc-950 shadow-md shadow-adk-yellow/15"
                : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <Heart className="w-4 h-4" />
            Projeto Social
          </button>
          <button
            onClick={() => setActiveSubTab("regiao")}
            className={`px-5 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeSubTab === "regiao"
                ? "bg-adk-yellow text-zinc-950 shadow-md shadow-adk-yellow/15"
                : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <Ship className="w-4 h-4" />A Região (Itajaí / SC)
          </button>
        </div>

        {/* Dynamic Display area */}
        {activeSubTab === "quemsomos" && (
          <div className="space-y-16" id="about-tab-content-quemsomos">
            {/* Split layout: text & image block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-adk-yellow font-mono text-xs font-extrabold uppercase tracking-widest">
                  Centro de Excelência Esportiva
                </span>
                <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight leading-none text-white">
                  Formando Campeões para a Vida e para as{" "}
                  <span className="text-adk-yellow">Quadras</span>
                </h2>
                <div className="h-1.5 w-20 bg-adk-yellow rounded"></div>

                <p className="text-zinc-300 font-sans leading-relaxed text-base">
                  A <strong>ADK Tennis</strong> é uma Rede de Centros de
                  Treinamento de Tênis, focado na formação e desenvolvimento de
                  jovens tenistas voltados à competição e alto rendimento dentro
                  da modalidade.
                </p>

                <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                  Atualmente contamos com 5 unidades esportivas com as melhores
                  práticas técnico-táticas globais. Sob a supervisão dos
                  fundadores e diretores técnicos, a rede atua desde a iniciação
                  até o acompanhamento integral em torneios de Grand Slam e da
                  Davis Cup, integrando preparação psicológica, medicina
                  preventiva e coach avançado.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigateTab("programas")}
                    className="bg-zinc-920 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded border border-zinc-700 hover:border-adk-yellow hover:text-adk-yellow transition-all duration-200"
                  >
                    Programas de Treino
                  </button>
                  <button
                    onClick={() => onNavigateTab("contato")}
                    className="bg-adk-yellow hover:bg-white text-zinc-950 font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded transition-all duration-200"
                  >
                    Fale com Coordenação
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-adk-yellow"></div>
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

            {/* Performance Stats Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-zinc-850">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-zinc-950 p-6 rounded border border-zinc-850 hover:border-zinc-750 transition-all duration-200 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded bg-adk-yellow/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-adk-yellow" />
                      </div>
                      <span className="block text-4xl font-extrabold font-display text-adk-yellow leading-none tracking-tight">
                        {stat.val}
                      </span>
                      <span className="block text-sm font-bold text-white mt-1 uppercase">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-3 font-sans leading-tight">
                      {stat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Sede / Itamirim Infrastructure details */}
            <div className="space-y-8 pt-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
                  NOSSAS UNIDADES
                </h3>
                <p className="text-xs text-zinc-400">
                  A ADK Tennis utiliza a infraestrutura completa do Itamirim
                  Clube de Campo. Um ecossistema de treinamento absoluto.
                </p>
              </div>

              {/* Photo gallery slider/grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {structureGallery.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(item.image)}
                    className="group relative h-40 bg-zinc-950 rounded overflow-hidden border border-zinc-850 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10" />
                    <div className="absolute bottom-2 left-2 right-2 text-left z-20">
                      <span className="block text-[10px] font-bold text-adk-yellow uppercase tracking-tighter truncate leading-none">
                        {item.city}
                      </span>
                      <span className="block text-[9px] font-sans text-white text-light truncate mt-0.5">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/80 p-1.5 rounded-full">
                      <ZoomIn className="w-3.5 h-3.5 text-adk-yellow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projeto Social */}
        {activeSubTab === "projeto" && (
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            id="about-tab-content-projeto"
          >
            <div className="lg:col-span-5 order-last lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1545809074-59472b3f5eca?auto=format&fit=crop&q=80&w=600"
                alt="Jovens do Projeto Social da ADK integrados sorrindo em quadras rápidas"
                className="rounded shadow-xl w-full h-[380px] object-cover ring-1 ring-zinc-850 filter brightness-95"
              />
            </div>
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-adk-yellow font-mono text-xs font-extrabold uppercase tracking-widest bg-adk-yellow/10 px-3 py-1 rounded">
                PROJETO SOCIAL ADK
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight leading-none text-white">
                O esporte como agente de{" "}
                <span className="text-adk-yellow">transformação</span> humana
              </h2>
              <div className="h-1.5 w-20 bg-adk-yellow rounded"></div>

              <p className="text-zinc-300 font-sans leading-relaxed text-sm">
                A cidadania começa na linha de fundo. A ADK Tennis acredita que
                o esporte deve transcender os circuitos competitivos
                profissionais e exercer um forte impacto inclusivo. Por isso,
                gerimos e patrocinamos o{" "}
                <strong>Projeto Social de Tênis</strong>.
              </p>

              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Proporcionamos a dezenas de crianças e jovens das escolas
                públicas de Itajaí acesso gratuito a aulas estruturadas de
                tênis, material oficial esportivo, acompanhamento educacional e
                alimentação orientada. Muitos alunos já ascenderam para a
                pré-competição e hoje competem no cenário nacional, amparados
                por bolsas de treino financiadas.
              </p>

              <div className="bg-zinc-950 p-5 rounded border border-zinc-850 flex items-start gap-4">
                <Heart className="w-10 h-10 text-adk-yellow shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm block text-white uppercase">
                    Selo de Impacto Solidário
                  </span>
                  <p className="text-xs text-zinc-400 leading-normal mt-1">
                    Cada vaga preenchida em nossos programas de Alto Rendimento
                    ou Intensivo ajuda a subsidiar aulas práticas de contraturno
                    escolar do projeto de transformação social de base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* A Região */}
        {activeSubTab === "regiao" && (
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
            id="about-tab-content-regiao"
          >
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-adk-yellow/10 text-adk-yellow font-mono text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                ECOSSISTEMA PRIVILEGIADO
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight leading-none text-white">
                Itajaí &amp; Balneário Camboriú,{" "}
                <span className="text-adk-yellow">Santa Catarina</span>
              </h2>
              <div className="h-1.5 w-20 bg-adk-yellow rounded"></div>

              <p className="text-zinc-300 font-sans leading-relaxed text-sm">
                Eleito repetidamente como um dos melhores polos de
                infraestrutura litorânea e segurança do Brasil, a região de{" "}
                <strong>Itajaí e Balneário Camboriú</strong> oferece o refúgio
                perfeito de treinos de inverno e verão.
              </p>

              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Com praias deslumbrantes como a Praia Brava e Cabeçudas, rede
                hoteleira de alto nível, proximidade ao Aeroporto de Navegantes
                (NVT) e aeroportos centrais, Itajaí reúne atrativos perfeitos
                para atletas e familiares que participam das semanas do{" "}
                <strong>Intensivo ADK</strong>. Os tenistas desfrutam de ótimos
                hotéis, climatologia propícia para preparação aero-anaeróbica e
                fácil acesso logístico ao Itamirim Clube de Campo.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-zinc-950 p-4 rounded border border-zinc-900 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-adk-yellow shrink-0" />
                  <div>
                    <span className="block font-bold text-xs uppercase text-white">
                      Aeroporto Navegantes
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      Apenas 20min de Itajaí
                    </span>
                  </div>
                </div>
                <div className="bg-zinc-950 p-4 rounded border border-zinc-900 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-adk-yellow shrink-0" />
                  <div>
                    <span className="block font-bold text-xs uppercase text-white">
                      Praia Brava
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      Hotéis parceiros e turismo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <img
                src="https://images.unsplash.com/photo-1471295263376-9978587c402b?auto=format&fit=crop&q=80&w=600"
                alt="Vista deslumbrante do litoral de Itajaí e Balneário Camboriú praias próximas ao Itamirim"
                className="rounded shadow-xl w-full h-[360px] object-cover ring-1 ring-zinc-850 filter brightness-95"
              />
              <div className="absolute top-4 right-4 bg-zinc-950/90 text-white px-3 py-1 text-xs font-mono rounded border border-zinc-800">
                Litoral Norte de SC
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Gallery Images */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          id="gallery-lightbox"
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <img
              src={selectedPhoto}
              alt="Zoomed Infrastructure View"
              className="max-w-full max-h-[80vh] object-contain rounded border border-zinc-800"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-adk-yellow text-sm font-bold uppercase tracking-wider bg-zinc-900 px-4 py-2 rounded focus:outline-none cursor-pointer"
            >
              Fechar Visualização
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
