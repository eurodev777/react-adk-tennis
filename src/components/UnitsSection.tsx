import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Home,
} from "lucide-react";
import { units } from "../data";

export const UnitsSection: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>("itajaí-sede");

  const activeUnit = units.find((u) => u.id === selectedUnit) || units[0];

  return (
    <section
      className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900"
      id="adk-units-main-container"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Sedes Integradas
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            UNIDADES <span className="text-adk-yellow">ADK TENNIS</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm">
            Nossa metodologia de alto rendimento se expande nacionalmente.
            Conheça e visite nossas quadras e sedes esportivas oficiais.
          </p>
        </div>

        {/* Layout with 1 Row, selection on standard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of units on left */}
          <div className="lg:col-span-4 space-y-3">
            {units.map((unit) => {
              const isSelected = selectedUnit === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit.id)}
                  className={`w-full text-left p-5 rounded border transition-all duration-300 relative cursor-pointer block ${
                    isSelected
                      ? "bg-adk-card border-adk-yellow shadow-xl"
                      : "bg-zinc-900/40 border-zinc-902 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                  id={`unit-select-${unit.id}`}
                >
                  {isSelected && (
                    <span className="absolute top-0 bottom-0 left-0 w-[5px] bg-adk-yellow rounded-l"></span>
                  )}
                  <span className="text-[10px] font-mono text-adk-yellow font-bold uppercase tracking-widest block mb-1">
                    {unit.city}
                  </span>
                  <span className="text-base font-black text-white uppercase block tracking-tight">
                    {unit.name}
                  </span>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {unit.description}
                  </p>
                  <div className="flex justify-end mt-3 text-xs font-bold text-adk-yellow items-center gap-1">
                    <span>Ver detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded details card on right */}
          <div
            className="lg:col-span-8 bg-adk-card rounded-xl border border-zinc-850 overflow-hidden"
            id="unit-details-expanded"
          >
            <div className="relative h-72 w-full">
              <img
                src={activeUnit.image}
                alt={activeUnit.name}
                className="w-full h-full object-cover filter brightness-[0.5]} transition-all duration-500"
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

            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <div className="space-y-2 text-left">
                <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                  História &amp; Vocação
                </h4>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {activeUnit.description}
                </p>
              </div>

              {/* Courts and Infrastructure list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-zinc-800 text-left">
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-800 pb-2">
                    Quadras Disponíveis
                  </h4>
                  <div className="p-4 bg-zinc-950 rounded border border-zinc-900">
                    <span className="text-xs font-extrabold text-adk-yellow block uppercase">
                      Quadras Oficiais
                    </span>
                    <p className="text-sm text-zinc-200 mt-1 font-semibold">
                      {activeUnit.courts}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-800 pb-2">
                    Comodidades da Unidade
                  </h4>
                  <div className="space-y-2">
                    {activeUnit.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-adk-yellow shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-300 leading-tight block">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contacts info & location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <MapPin className="w-4 h-4 text-adk-yellow" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Endereço
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-6 leading-normal font-sans">
                    {activeUnit.address}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Phone className="w-4 h-4 text-adk-yellow" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Contato Telefônico
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-6 font-mono">
                    {activeUnit.phone}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Mail className="w-4 h-4 text-adk-yellow" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      E-mail Oficial
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-6 font-mono truncate">
                    {activeUnit.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
