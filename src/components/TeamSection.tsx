import React from "react";
import { Award, Users } from "lucide-react";
import { team } from "../data";

export const TeamSection: React.FC = () => {
  const technicalDirector = team.find(
    (member) => member.id === "patricio-arnold"
  );

  const technicalLeadership = team.filter(
    (member) => member.id !== "patricio-arnold"
  );

  return (
    <section
      className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900"
      id="adk-team-section"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">

          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            Direção e Coordenação
          </span>

          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            LIDERANÇA{" "}
            <span className="text-adk-yellow">
              TÉCNICA
            </span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A ADK Tennis reúne profissionais com experiência na formação,
            desenvolvimento e alto rendimento. Nossa liderança técnica
            trabalha de forma integrada para aplicar a metodologia e a
            filosofia de treinamento da ADK em todas as unidades.
          </p>

        </div>

        {/* =====================================================
            PATRICIO ARNOLD — DESTAQUE PRINCIPAL
        ====================================================== */}
        {technicalDirector && (
          <div className="mb-14 md:mb-16">

            <div
              className="
                group
                grid
                grid-cols-1
                lg:grid-cols-12
                bg-adk-card
                rounded-xl
                border
                border-zinc-800
                hover:border-adk-yellow/40
                overflow-hidden
                shadow-xl
                transition-all
                duration-300
              "
              id={`coach-card-${technicalDirector.id}`}
            >

              {/* FOTO */}
              <div className="lg:col-span-5 relative min-h-[340px] md:min-h-[430px] bg-zinc-900 overflow-hidden">

                <img
                  src={technicalDirector.image}
                  alt={technicalDirector.name}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-top
                    filter
                    brightness-90
                    group-hover:scale-[1.03]
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-adk-card/70 via-transparent to-transparent" />

                {/* BADGE */}
                <div className="absolute top-5 left-5">

                  <span className="bg-adk-yellow text-zinc-950 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded">
                    Direção Técnica
                  </span>

                </div>

              </div>

              {/* CONTEÚDO */}
              <div className="lg:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col justify-center text-left">

                <span className="text-adk-yellow font-mono text-xs uppercase font-extrabold tracking-widest mb-3">
                  Liderança Técnica ADK Tennis
                </span>

                <h3 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-white leading-none">
                  {technicalDirector.name}
                </h3>

                <p className="text-sm md:text-base text-adk-yellow font-bold mt-3">
                  {technicalDirector.role}
                </p>

                <div className="h-1 w-14 bg-adk-yellow rounded mt-5 mb-6" />

                <p className="text-sm md:text-base text-zinc-300 font-sans leading-relaxed">
                  {technicalDirector.bio}
                </p>

                {technicalDirector.credentials && (
                  <div className="mt-7 pt-5 border-t border-zinc-800 flex items-center gap-2">

                    <Award className="w-4 h-4 text-adk-yellow shrink-0" />

                    <span className="text-xs text-zinc-400 font-medium">
                      {technicalDirector.credentials}
                    </span>

                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* =====================================================
            TÍTULO DOS RESPONSÁVEIS DAS UNIDADES
        ====================================================== */}
        <div className="flex items-end justify-between gap-6 mb-7 border-b border-zinc-850 pb-5">

          <div className="text-left">

            <span className="text-[10px] text-adk-yellow font-mono uppercase font-extrabold tracking-widest">
              Rede ADK Tennis
            </span>

            <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
              Head Coaches e Coordenadores Técnicos
            </h3>

          </div>

        </div>

        {/* =====================================================
            GRID DA LIDERANÇA DAS UNIDADES
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {technicalLeadership.map((coach) => (
            <div
              key={coach.id}
              className="
                group
                bg-adk-card
                rounded-lg
                border
                border-zinc-850
                hover:border-adk-yellow/40
                transition-all
                duration-300
                overflow-hidden
                flex
                flex-col
                shadow-lg
              "
              id={`coach-card-${coach.id}`}
            >

              {/* =================================================
                  FOTO
              ================================================== */}
              <div className="relative h-72 bg-zinc-900 overflow-hidden">

                <img
                  src={coach.image}
                  alt={coach.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    filter
                    brightness-90
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-adk-card via-adk-card/10 to-transparent" />

                {/* CARGO SOBRE A FOTO */}
                <div className="absolute bottom-4 left-4 right-4 text-left">

                  <span className="inline-block text-[9px] md:text-[10px] bg-adk-yellow text-zinc-950 px-2.5 py-1 rounded font-black uppercase tracking-wider leading-tight">
                    {coach.role}
                  </span>

                </div>

              </div>

              {/* =================================================
                  INFORMAÇÕES
              ================================================== */}
              <div className="p-6 text-left flex flex-col flex-1">

                <div className="flex-1">

                  {/* NOME */}
                  <h3 className="text-xl font-black uppercase text-white tracking-tight leading-tight">
                    {coach.name}
                  </h3>

                  {/* CREDENCIAL */}
                  {coach.credentials && (
                    <span className="text-xs text-adk-yellow font-bold block mt-2 leading-relaxed">
                      {coach.credentials}
                    </span>
                  )}

                  {/* DIVISOR */}
                  <div className="h-0.5 w-10 bg-adk-yellow mt-4 mb-4 group-hover:w-16 transition-all duration-300" />

                  {/* BIO */}
                  <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
                    {coach.bio}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};