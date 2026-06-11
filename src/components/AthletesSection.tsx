import React, { useState } from 'react';
import { Trophy, Star, ShieldAlert, Award, ChevronRight, Zap } from 'lucide-react';
import { athletes } from '../data';

export const AthletesSection: React.FC = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<string>('rafael-matos');

  const activeAthlete = athletes.find((a) => a.id === selectedAthlete) || athletes[0];

  return (
    <section className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900" id="adk-athletes-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Editorial Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Nossos Guerreiros das Quadras
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            ATLETAS <span className="text-adk-yellow">ADK TENNIS</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm">
            De campeões de Grand Slam às futuras lendas do esporte. Nossa academia molda profissionais e juvenis de altíssima performance no circuito mundial.
          </p>
        </div>

        {/* Dynamic selector banner and details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual on Left */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-adk-yellow text-zinc-950 font-black text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-zinc-950" />
                {activeAthlete.status}
              </span>
            </div>
            
            <div className="relative h-[400px] md:h-[480px] w-full bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src={activeAthlete.image}
                alt={activeAthlete.name}
                className="w-full h-full object-cover object-center filter brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adk-dark via-adk-dark/35 to-transparent z-10" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <span className="text-adk-yellow text-xs font-bold uppercase tracking-widest block mb-1">
                  {activeAthlete.category}
                </span>
                <h3 className="text-3xl font-black font-display text-white uppercase tracking-tight">
                  {activeAthlete.name}
                </h3>
                <p className="text-zinc-300 font-sans text-xs font-light mt-1 max-w-md line-clamp-2">
                  {activeAthlete.achievement}
                </p>
              </div>
            </div>
          </div>

          {/* Details & Selectors list on Right */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Quick selectors row */}
            <div className="flex gap-2 border-b border-zinc-850 pb-4">
              {athletes.map((ath) => {
                const isSelected = selectedAthlete === ath.id;
                return (
                  <button
                    key={ath.id}
                    onClick={() => setSelectedAthlete(ath.id)}
                    className={`px-4 py-2 text-xs font-extrabold uppercase rounded transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-adk-yellow text-zinc-950'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {ath.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>

            {/* Profile specifications */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Bio &amp; Carreira</span>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  {activeAthlete.name}
                </h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {activeAthlete.bio}
                </p>
              </div>

              {/* Conquests Highlights list */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Principais Destaques</span>
                <div className="space-y-2">
                  {activeAthlete.highlights.map((hlt, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-zinc-900/40 p-3 rounded border border-zinc-850">
                      <div className="w-5 h-5 rounded-full bg-adk-yellow/10 flex items-center justify-center text-adk-yellow shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-zinc-300 leading-tight">
                        {hlt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alcaraz block connection caption info inside box */}
            {activeAthlete.id === 'carlos-alcaraz-insp' && (
              <div className="bg-adk-yellow/5 border border-adk-yellow/20 p-4 rounded text-left block">
                <span className="text-xs font-bold text-adk-yellow block uppercase mb-1">Inspirando a próxima geração</span>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  A foto emblemática do título épico de Roland Garros representa tudo o que ensinamos de mentalidade lutadora. Nossos treinadores estudam scouts e padrões estatísticos de campeões como Alcaraz, Sinner e Djokovic para transpor táticas vencedoras aos juvenis das categorias G1 da CBT.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
