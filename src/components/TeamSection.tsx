import React from 'react';
import { Award, ShieldAlert, Sparkles, User, BadgeAlert } from 'lucide-react';
import { team } from '../data';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900" id="adk-team-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Treinadores de Circuito
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            NOSSA EQUIPE <span className="text-adk-yellow">TÉCNICA</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm">
            Mentores formados na elite do tênis competitivo mundial. Garantia de evolução técnica e tática no saibro e piso rápido.
          </p>
        </div>

        {/* Coach Profiles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((coach) => (
            <div
              key={coach.id}
              className="bg-adk-card rounded-lg border border-zinc-850 hover:border-adk-yellow/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              id={`coach-card-${coach.id}`}
            >
              <div className="relative h-64 bg-zinc-900 group">
                {/* Fallback image style with nice render */}
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 filter brightness-90 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adk-card via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] bg-adk-yellow text-zinc-950 px-2 py-0.5 rounded font-black uppercase tracking-wider">
                    {coach.role}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase text-white tracking-tight">
                    {coach.name}
                  </h3>
                  {coach.credentials && (
                    <span className="text-xs text-adk-yellow italic font-bold block">
                      {coach.credentials}
                    </span>
                  )}
                  <p className="text-xs text-zinc-400 font-sans leading-normal">
                    {coach.bio}
                  </p>
                </div>

                <div className="border-t border-zinc-850 pt-4 flex items-center space-x-2 text-[10px] text-zinc-400 font-mono">
                  <Award className="w-3.5 h-3.5 text-adk-yellow" />
                  <span>METODOLOGIA CERTIFICADA COSAT / COB / ITF</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
