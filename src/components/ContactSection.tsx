import React, { useMemo, useRef, useState } from "react";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { units } from "../data";

export const ContactSection: React.FC = () => {
  const unitInfoRef = useRef<HTMLDivElement | null>(null);

  const [selectedUnitId, setSelectedUnitId] = useState<string>("itajaí-sede");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    unitId: "itajaí-sede",
    topic: "Quero conhecer os programas de treinamento",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) || units[0],
    [selectedUnitId]
  );

  const mapsUrl = selectedUnit
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        selectedUnit.address.replace(/\n/g, " ")
      )}`
    : "#";

  const handleUnitSelection = (unitId: string) => {
    setSelectedUnitId(unitId);

    setFormData((prev) => ({
      ...prev,
      unitId,
    }));

    // Aguarda a unidade selecionada ser renderizada e rola suavemente
    // até o bloco com endereço, telefone e e-mail.
    requestAnimationFrame(() => {
      setTimeout(() => {
        unitInfoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    });
  };

  const handleFormUnitChange = (unitId: string) => {
    setFormData((prev) => ({
      ...prev,
      unitId,
    }));

    if (units.some((unit) => unit.id === unitId)) {
      setSelectedUnitId(unitId);
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        unitId: selectedUnitId,
        topic: "Quero conhecer os programas de treinamento",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900"
      id="adk-contact-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            CONTATO ADK TENNIS
          </span>

          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            FALE COM A <span className="text-adk-yellow">ADK</span>
          </h2>

          <p className="text-zinc-400 font-sans text-sm">
            Entre em contato com a ADK Tennis. Selecione a unidade ou o assunto
            de interesse para que sua mensagem seja direcionada à equipe
            responsável.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna esquerda - seleção e dados da unidade */}
          <div
            className="lg:col-span-5 space-y-6 text-left"
            id="contact-info-cards"
          >
            <div className="space-y-3">
              <div>
                <span className="text-adk-yellow font-mono text-xs font-bold uppercase tracking-widest">
                  Unidades ADK Tennis
                </span>

                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
                  Escolha sua unidade
                </h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Selecione uma unidade para visualizar os dados de contato e
                localização correspondentes.
              </p>
            </div>

            {/* Seletor de unidades */}
            <div className="space-y-2">
              {units.map((unit) => {
                const isSelected = unit.id === selectedUnitId;

                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => handleUnitSelection(unit.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-adk-yellow/10 border-adk-yellow"
                        : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span
                          className={`text-sm font-black uppercase block ${
                            isSelected ? "text-adk-yellow" : "text-white"
                          }`}
                        >
                          {unit.name}
                        </span>

                        <span className="text-[11px] text-zinc-500 mt-1 block">
                          {unit.city}
                        </span>
                      </div>

                      <MapPin
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-adk-yellow" : "text-zinc-600"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Informações dinâmicas da unidade */}
            {selectedUnit && (
              <div
                ref={unitInfoRef}
                className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 space-y-5 scroll-mt-24"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-adk-yellow/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-adk-yellow" />
                  </div>

                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Unidade selecionada
                    </span>

                    <h4 className="text-lg font-black text-white uppercase leading-tight mt-1">
                      {selectedUnit.name}
                    </h4>

                    <span className="text-xs text-zinc-500">
                      {selectedUnit.city}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-zinc-800" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />

                    <div className="text-xs text-zinc-400">
                      <span className="block font-bold text-zinc-300 mb-1">
                        Endereço
                      </span>

                      <span className="whitespace-pre-line leading-relaxed">
                        {selectedUnit.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />

                    <div className="text-xs text-zinc-400">
                      <span className="block font-bold text-zinc-300 mb-1">
                        Telefone / WhatsApp
                      </span>

                      <span className="whitespace-pre-line leading-relaxed">
                        {selectedUnit.phone}
                      </span>
                    </div>
                  </div>

                  {selectedUnit.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />

                      <div className="text-xs text-zinc-400 min-w-0">
                        <span className="block font-bold text-zinc-300 mb-1">
                          E-mail
                        </span>

                        <a
                          href={`mailto:${selectedUnit.email}`}
                          className="text-adk-yellow hover:underline break-all"
                        >
                          {selectedUnit.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-adk-yellow hover:bg-white text-zinc-950 font-black text-[10px] tracking-widest uppercase px-4 py-3 rounded flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  VER LOCALIZAÇÃO
                </a>
              </div>
            )}
          </div>

          {/* Formulário */}
          <div
            className="lg:col-span-7 bg-adk-card p-6 md:p-8 rounded-xl border border-zinc-800 relative"
            id="contact-form-panel"
          >
            <h3 className="text-lg font-black uppercase text-white tracking-tight text-left mb-2">
              Envie uma mensagem
            </h3>

            <p className="text-xs text-zinc-400 text-left mb-6 font-sans">
              Preencha os campos abaixo para que sua mensagem seja direcionada à
              equipe responsável.
            </p>

            {submitted ? (
              <div className="bg-adk-yellow/15 border border-adk-yellow/35 text-adk-yellow p-6 rounded space-y-2 text-center my-8 block">
                <ShieldCheck className="w-10 h-10 mx-auto text-adk-yellow mb-1" />

                <span className="text-sm font-black uppercase block">
                  MENSAGEM ENVIADA COM SUCESSO!
                </span>

                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Sua mensagem foi recebida e será direcionada à equipe ADK
                  responsável pelo assunto selecionado.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleMessageSubmit}
                className="space-y-4 text-left"
              >
                {/* Nome e celular */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                      Nome completo
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                      Número do celular
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="Ex: (47) 99999-9999"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                    E-mail
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Ex: email@dominio.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  />
                </div>

                {/* Unidade de interesse */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                    Unidade de interesse
                  </label>

                  <select
                    required
                    value={formData.unitId}
                    onChange={(e) => handleFormUnitChange(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-adk-yellow"
                  >
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.name}
                      </option>
                    ))}

                    <option value="orientacao">
                      Não sei / Quero orientação
                    </option>
                  </select>
                </div>

                {/* Objetivo */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                    Objetivo do contato
                  </label>

                  <select
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        topic: e.target.value,
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-adk-yellow"
                  >
                    <option>
                      Quero conhecer os programas de treinamento
                    </option>

                    <option>Quero treinar na ADK</option>

                    <option>
                      Tenho interesse no Programa Intensivo
                    </option>

                    <option>
                      Quero informações sobre uma unidade
                    </option>

                    <option>Parcerias e assuntos comerciais</option>

                    <option>Imprensa / mídia</option>

                    <option>Outros assuntos</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">
                    Mensagem
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Conte brevemente como podemos ajudar."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-adk-yellow hover:bg-white text-zinc-950 font-black uppercase text-xs py-3 rounded tracking-wider transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
                >
                  ENVIAR MENSAGEM
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};