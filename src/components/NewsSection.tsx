import React, { useState } from "react";
import {
  Calendar,
  Tag,
  ChevronRight,
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react";
import { news } from "../data";
import { News } from "../types";

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<News | null>(null);

  return (
    <section
      className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900"
      id="adk-news-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Editorial Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="text-left space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1 rounded inline-block">
              Atualizações do Campo
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
              ÚLTIMAS <span className="text-adk-yellow">NOTÍCIAS ADK</span>
            </h2>
            <p className="text-zinc-400 font-sans text-sm max-w-lg">
              Acompanhe novidades de torneios, expansão nacional, convocações de
              Davis Cup e agenda esportiva das sedes.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden md:block">
            CIRCUITO COMPETITIVO 2026
          </span>
        </div>

        {/* Notícias list Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-adk-card rounded-lg border border-zinc-850 hover:border-adk-yellow/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              id={`news-card-${item.id}`}
            >
              <div className="relative h-44 bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute top-3 left-3 bg-zinc-950/80 px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-widest text-adk-yellow border border-zinc-800">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-sm font-black uppercase text-white group-hover:text-adk-yellow transition-colors tracking-tight line-clamp-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal line-clamp-3 font-sans font-light">
                    {item.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-adk-yellow uppercase group-hover:text-white transition-colors cursor-pointer self-start"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Beautiful modal overlay to read full news article */}
        {selectedArticle && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            id="news-lightbox-modal"
          >
            <div className="bg-zinc-950 max-w-2xl w-full rounded-xl border border-zinc-850 overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh]">
              <div className="relative h-56 md:h-64 bg-zinc-900 shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover filter brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-adk-yellow text-zinc-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wide">
                    {selectedArticle.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 text-left">
                  <div className="flex items-center space-x-2 text-[10px] text-zinc-400 font-mono mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-left">
                {/* <p className="text-xs font-semibold font-mono text-adk-yellow italic border-l-2 border-adk-yellow pl-3 leading-relaxed">
                  {selectedArticle.summary}
                </p> */}
                <div className="h-px bg-zinc-90 w-full"></div>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {selectedArticle.content}
                </p>
                <p className="text-xs text-zinc-500 font-sans font-light pt-4 leading-normal">
                  Metodologia ADK Tennis — Conectando tenistas de alto
                  rendimento ao circuito profissional nacional e internacional
                  pelo Brasil. Todas as informações contidas correspondem à
                  temporada esportiva 2026.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/60 border-t border-zinc-850 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-adk-yellow hover:bg-white text-zinc-950 text-xs font-black uppercase tracking-wider py-2.5 px-6 rounded cursor-pointer"
                >
                  Fechar Leitura
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
