import React, { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { units } from "../data";

interface UnitsSectionProps {
  initialUnit?: string;
}

export const UnitsSection: React.FC<UnitsSectionProps> = ({
  initialUnit = "itajaí-sede",
}) => {
  const [selectedUnit, setSelectedUnit] = useState(initialUnit);

  const detailsRef = useRef<HTMLDivElement | null>(null);

  const activeUnit =
    units.find((u) => u.id === selectedUnit) || units[0];

  /*
   * Itajaí possui nomenclaturas específicas solicitadas.
   * As demais unidades utilizam a nomenclatura padrão.
   */
  const isItajai = activeUnit.id === "itajaí-sede";

  const aboutTitle = isItajai
    ? "INFRAESTRUTURA"
    : "SOBRE A UNIDADE";

  const structureTitle = isItajai
    ? "ESTRUTURA E COMODIDADES"
    : "ESTRUTURA DA UNIDADE";

  /*
   * Seleciona a unidade e, no celular/tablet,
   * leva automaticamente até os detalhes.
   */
  const handleSelectUnit = (unitId: string) => {
    setSelectedUnit(unitId);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (window.innerWidth < 1024) {
          detailsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  };

  return (
    <section
      className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900"
      id="adk-units-main-container"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* =====================================================
            TÍTULO DA PÁGINA
        ====================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">

          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Sedes Integradas
          </span>

          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            UNIDADES{" "}
            <span className="text-adk-yellow">
              ADK TENNIS
            </span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm">
            Nossa metodologia de alto rendimento se expande nacionalmente.
            Conheça e visite nossas quadras e sedes esportivas oficiais.
          </p>

        </div>

        {/* =====================================================
            GRID PRINCIPAL
        ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ===================================================
              LISTA DE UNIDADES
          ==================================================== */}
          <div className="lg:col-span-4 space-y-3">

            {units.map((unit) => {
              const isSelected =
                selectedUnit === unit.id;

              return (
                <button
                  key={unit.id}
                  onClick={() =>
                    handleSelectUnit(unit.id)
                  }
                  className={`
                    w-full
                    text-left
                    p-5
                    rounded
                    border
                    transition-all
                    duration-300
                    relative
                    cursor-pointer
                    block
                    ${
                      isSelected
                        ? "bg-adk-card border-adk-yellow shadow-xl"
                        : "bg-zinc-900/40 border-zinc-902 hover:border-zinc-700 hover:bg-zinc-900"
                    }
                  `}
                  id={`unit-select-${unit.id}`}
                >

                  {/* INDICADOR DA UNIDADE ATIVA */}
                  {isSelected && (
                    <span className="absolute top-0 bottom-0 left-0 w-[5px] bg-adk-yellow rounded-l" />
                  )}

                  {/* CIDADE */}
                  <span className="text-[10px] font-mono text-adk-yellow font-bold uppercase tracking-widest block mb-1">
                    {unit.city}
                  </span>

                  {/* NOME */}
                  <span className="text-base font-black text-white uppercase block tracking-tight">
                    {unit.name}
                  </span>

                  {/* RESUMO */}
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {unit.description}
                  </p>

                  {/* LINK */}
                  <div className="flex justify-end mt-3 text-xs font-bold text-adk-yellow items-center gap-1">

                    <span>
                      Ver detalhes
                    </span>

                    <ChevronRight className="w-3.5 h-3.5" />

                  </div>
                </button>
              );
            })}

          </div>

          {/* ===================================================
              DETALHES DA UNIDADE
          ==================================================== */}
          <div
            ref={detailsRef}
            className="
              lg:col-span-8
              bg-adk-card
              rounded-xl
              border
              border-zinc-850
              overflow-hidden
              scroll-mt-20
              md:scroll-mt-24
            "
            id="unit-details-expanded"
          >

            {/* =================================================
                IMAGEM
            ================================================== */}
            <div className="relative h-72 w-full">

              <img
                src={activeUnit.image}
                alt={activeUnit.name}
                className="
                  w-full
                  h-full
                  object-cover
                  filter
                  brightness-[0.5]
                  transition-all
                  duration-500
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-adk-card via-adk-card/45 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-left">

                <span className="text-xs text-adk-yellow font-black uppercase tracking-widest block mb-1">
                  {activeUnit.city}
                </span>

                <h3 className="text-2xl md:text-4xl font-extrabold font-display uppercase tracking-tight text-white">
                  {activeUnit.name}
                </h3>

              </div>

            </div>

            {/* =================================================
                CONTEÚDO
            ================================================== */}
            <div className="p-6 md:p-8 space-y-8">

              {/* =================================================
                  SOBRE / INFRAESTRUTURA
              ================================================== */}
              <div className="space-y-3 text-left">

                <h4 className="text-xs uppercase tracking-widest text-adk-yellow font-extrabold">
                  {aboutTitle}
                </h4>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {activeUnit.description}
                </p>

              </div>

              {/* =================================================
                  QUADRAS + ESTRUTURA
              ================================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-zinc-800 text-left">

                {/* QUADRAS */}
                <div className="space-y-4">

                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-800 pb-2">
                    QUADRAS
                  </h4>

                  <div className="p-4 bg-zinc-950 rounded border border-zinc-900">

                    <p className="text-sm text-zinc-200 font-semibold leading-relaxed">
                      {activeUnit.courts}
                    </p>

                  </div>

                </div>

                {/* ESTRUTURA */}
                <div className="space-y-4">

                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-800 pb-2">
                    {structureTitle}
                  </h4>

                  <div className="space-y-2.5">

                    {activeUnit.amenities.map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5"
                        >

                          <CheckCircle2 className="w-4 h-4 text-adk-yellow shrink-0 mt-0.5" />

                          <span className="text-xs text-zinc-300 leading-relaxed block">
                            {item}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                  {/* TEXTO COMPLEMENTAR DA ESTRUTURA */}
                  {activeUnit.structureNote && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-3">
                      {activeUnit.structureNote}
                    </p>
                  )}

                </div>

              </div>

              {/* =================================================
                  LOCALIZAÇÃO + CONTATO
              ================================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-left">

                {/* LOCALIZAÇÃO */}
                <div className="space-y-2">

                  <div className="flex items-center space-x-2 text-zinc-400">

                    <MapPin className="w-4 h-4 text-adk-yellow shrink-0" />

                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      LOCALIZAÇÃO
                    </span>

                  </div>

                  <p className="text-xs text-zinc-300 pl-6 leading-relaxed font-sans whitespace-pre-line">
                    {activeUnit.address}
                  </p>

                </div>

                {/* CONTATO */}
                <div className="space-y-3">

                  <div className="flex items-center space-x-2 text-zinc-400">

                    <Phone className="w-4 h-4 text-adk-yellow shrink-0" />

                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      CONTATO
                    </span>

                  </div>

                  {/* TELEFONE */}
                  {activeUnit.phone && (
                    <p className="text-xs text-zinc-300 pl-6 font-mono leading-relaxed whitespace-pre-line">
                      {activeUnit.phone}
                    </p>
                  )}

                  {/* EMAIL */}
                  {activeUnit.email && (
                    <div className="flex items-start gap-2 pl-6">

                      <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />

                      <p className="text-xs text-zinc-300 font-mono break-all">
                        {activeUnit.email}
                      </p>

                    </div>
                  )}

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};