import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Heart } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', topic: 'Quero matricular meu filho', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', topic: 'Quero matricular meu filho', message: '' });
    }, 4500);
  };

  return (
    <section className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900" id="adk-contact-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Editorial Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-adk-yellow bg-adk-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Atendimento Geral
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">
            CONTATO &amp; <span className="text-adk-yellow">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm">
            Fale diretamente com nossa assessoria administrativa. Estamos prontos para receber você em nossas unidades ou sanar dúvidas sobre o intensivão.
          </p>
        </div>

        {/* Form and Contact credentials info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel info cards */}
          <div className="lg:col-span-5 space-y-6 text-left" id="contact-info-cards">
            
            {/* Primary Headquarters contact */}
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-850 space-y-4">
              <span className="text-[10px] bg-adk-yellow text-zinc-950 px-2 rounded-full font-black uppercase tracking-widest leading-none self-start">
              Sede da ADK Tennis
              </span>
              <h3 className="text-lg font-black uppercase text-white mt-2 leading-none">
                Itamirim Clube de Campo
              </h3>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-400">
                    <span className="block font-bold text-zinc-300">Endereço</span>
                    Rua José Gall, nº 1106 - Itamirim Clube de Campo - Itajaí - SC
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-400">
                    <span className="block font-bold text-zinc-300">Ligue-nos</span>
                    (47) 3341-9222
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-400">
                    <span className="block font-bold text-zinc-300">Entre em Contato por E-mail</span>
                    <a href="mailto:contato@adktennis.com.br" className="text-adk-yellow hover:underline block truncate">
                      contato@adktennis.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-adk-yellow shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-400">
                    <span className="block font-bold text-zinc-300">Horário Administrativo</span>
                    Seds Itajaí: Seg-Sex: 07h às 21h | Sab: 08h às 12h
                  </div>
                </div>
              </div>
            </div>

            {/* Custom stylized vector tennis map vector container */}
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-850 space-y-3 relative overflow-hidden h-[180px] flex flex-col justify-between">
              {/* Abs grid bg */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#DEE832_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="z-10">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Coordenadas Sede</span>
                <span className="text-sm font-extrabold text-white block uppercase">COMO CHEGAR</span>
                <p className="text-[11px] text-zinc-400 font-sans leading-relaxed mt-1">
                  O Itamirim Clube de Campo está situado no centro urbano de Itajaí com amplo estacionamento privado, segurança monitorada e infraestrutura para receber excursões de federações estaduais.
                </p>
              </div>

              <div className="z-10 flex gap-2">
                <a
                  href="https://maps.app.goo.gl/DgDDD1eroQ4re6Wb7"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-adk-yellow text-zinc-950 font-black text-[10px] tracking-widest uppercase px-4 py-2 rounded flex items-center gap-1 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right panel Contact Form */}
          <div className="lg:col-span-7 bg-adk-card p-6 md:p-8 rounded-xl border border-zinc-850 relative" id="contact-form-panel">
            <h3 className="text-lg font-black uppercase text-white tracking-tight text-left mb-2">
              Envie uma Mensagem Direta
            </h3>
            <p className="text-xs text-zinc-400 text-left mb-6 font-sans">
              Preencha os campos abaixo de forma clara, retornamos imediatamente.
            </p>

            {submitted ? (
              <div className="bg-adk-yellow/15 border border-adk-yellow/35 text-adk-yellow p-6 rounded space-y-2 text-center my-8 block">
                <ShieldCheck className="w-10 h-10 mx-auto text-adk-yellow mb-1" />
                <span className="text-sm font-black uppercase block">MENSAGEM ENVIADA COM SUCESSO!</span>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Sua chamada foi encaminhada à recepção esportiva da ADK. Checaremos as informações e enviaremos um retorno pelo WhatsApp ou e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">Seu Nome completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">Número do Celular</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (47) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">Seu melhor E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: email@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">Objetivo do Contato</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-adk-yellow"
                  >
                    <option>Quero matricular meu filho (Kids / Iniciante)</option>
                    <option>Quero ingressar no Alto Rendimento competitivo</option>
                    <option>Quero agendar semanas do Intensivo de Julho 2026</option>
                    <option>Dúvidas de parcerias corporativas e filiação</option>
                    <option>Outros assuntos gerais</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 block">Deixe sua mensagem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escreva como podemos ajudar ou descreva o ranking atual do tenista..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-adk-yellow"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-adk-yellow hover:bg-white text-zinc-950 font-black uppercase text-xs py-3 rounded tracking-wider transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
                >
                  Enviar Mensagem para Secretaria
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
