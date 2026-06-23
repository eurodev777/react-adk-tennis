import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Flame,
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Sparkles,
  Twitter,
} from "lucide-react";

import { Header } from "./components/Header";
import { SponsorMarquee } from "./components/SponsorMarquee";
import { BannerHero } from "./components/BannerHero";
import { AboutSection } from "./components/AboutSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { IntensivoSection } from "./components/IntensivoSection";
import { UnitsSection } from "./components/UnitsSection";
import { AthletesSection } from "./components/AthletesSection";
import { NewsSection } from "./components/NewsSection";
import { ContactSection } from "./components/ContactSection";
import { TeamSection } from "./components/TeamSection";

import { banners, sponsors } from "./data";

import barra1 from "./assets/barra-1.jpeg";
import barra2 from "./assets/barra-2.jpeg";
import barra3 from "./assets/barra-3.jpeg";
import barra4 from "./assets/barra-4.jpeg";
import barra5 from "./assets/barra-5.jpeg";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleNavigateTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-0" id="home-view">
            {/* Main Interactive Hero banner slider */}
            <BannerHero banners={banners} onNavigateTab={handleNavigateTab} />

            {/* Continuous Sponsor marquee */}
            <SponsorMarquee sponsors={sponsors} />

            {/* Grid calling out specific modules */}
            <section
              className="py-16 md:py-24 bg-adk-dark text-white border-b border-zinc-900"
              id="home-bento-grid"
            >
              <div className="max-w-7xl mx-auto px-4 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-mono font-bold text-adk-yellow tracking-widest uppercase">
                    METODOLOGIA INTEGRADA DE ALTA PERFORMANCE
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none">
                    POR QUE TREINAR NA{" "}
                    <span className="text-adk-yellow">ADK TENNIS</span>?
                  </h2>
                  <p className="text-zinc-400 font-sans text-xs">
                    Reunimos estrutura física de excelência, comissão técnica
                    com certificações internacionais máximas e track record
                    comprovado de Grand Slams e bolsas escolares nos EUA.
                  </p>
                </div>

                <main className="w-full h-auto">
                  <div className="flex justify-center items-center lg:flex-row flex-col">
                    <img src={barra1} width={200} />
                    <img src={barra2} width={200} />
                    <img src={barra3} width={200} />
                    <img src={barra4} width={200} />
                    <img src={barra5} width={200} />
                  </div>
                </main>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-lg overflow-hidden bg-zinc-950">
                  {/* Layout 1: Itajaí Base */}
                  <div className="relative min-h-[380px] p-8 flex flex-col justify-end border-b md:border-b-0 md:border-r border-white/10 transition-all duration-300 hover:bg-zinc-900/50 overflow-hidden group">
                    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 group-hover:scale-105 group-hover:opacity-15 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-1"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="absolute top-0 right-0 text-[72px] font-black font-display text-white/5 italic leading-none select-none">
                        01
                      </div>
                      <div className="mt-12">
                        <span className="text-adk-yellow text-xs font-black uppercase tracking-widest block mb-2">
                          SEDE PRINCIPAL
                        </span>
                        <h3 className="text-3xl font-black uppercase italic leading-none text-white mb-3">
                          Itajaí
                          <br />
                          <span className="text-adk-yellow">Brasil</span>
                        </h3>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm mb-6">
                          15 quadras de saibro, estrutura olímpica de
                          fisioterapia integrada e comissão de alto rendimento
                          de nível mundial.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigateTab("quemsomos")}
                        className="border border-adk-yellow text-adk-yellow hover:bg-adk-yellow hover:text-zinc-950 px-4 py-2 text-xs font-bold uppercase tracking-widest self-start transition-all duration-300 cursor-pointer"
                      >
                        Conhecer Sede
                      </button>
                    </div>
                  </div>

                  {/* Layout 2: New Unit Sorocaba */}
                  <div className="relative min-h-[380px] p-8 flex flex-col justify-end border-b md:border-b-0 md:border-r border-white/10 transition-all duration-300 hover:bg-zinc-900/50 overflow-hidden group">
                    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1622279457486-62dcc4a4bf13?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 group-hover:scale-105 group-hover:opacity-15 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-1"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="absolute top-0 right-0 text-[72px] font-black font-display text-white/5 italic leading-none select-none">
                        02
                      </div>
                      <div className="mt-12">
                        <span className="text-adk-yellow text-xs font-black uppercase tracking-widest block mb-2">
                          EXPANSÃO
                        </span>
                        <h3 className="text-3xl font-black uppercase italic leading-none text-white mb-3">
                          Sorocaba
                          <br />
                          <span className="text-adk-yellow">PlayTennis</span>
                        </h3>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm mb-6">
                          Certificação ITF Nível 3, quadras rápidas cobertas e
                          metodologia exclusiva para o circuito competitivo
                          nacional.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigateTab("unidades")}
                        className="bg-adk-yellow text-zinc-950 hover:bg-white hover:text-zinc-950 px-4 py-2 text-xs font-bold uppercase tracking-widest self-start transition-all duration-300 cursor-pointer"
                      >
                        Visualizar Unidades
                      </button>
                    </div>
                  </div>

                  {/* Layout 3: Rede Nacional */}
                  <div className="relative min-h-[380px] p-8 flex flex-col justify-end transition-all duration-300 hover:bg-zinc-900/50 overflow-hidden group">
                    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542144512-9b50d0ec411d?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-10 group-hover:scale-105 group-hover:opacity-15 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-1"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="absolute top-0 right-0 text-[72px] font-black font-display text-white/5 italic leading-none select-none">
                        03
                      </div>
                      <div className="mt-12">
                        <span className="text-adk-yellow text-xs font-black uppercase tracking-widest block mb-2">
                          CAMPEÕES
                        </span>
                        <h3 className="text-3xl font-black uppercase italic leading-none text-white mb-3">
                          Rede
                          <br />
                          <span className="text-adk-yellow">Nacional</span>
                        </h3>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm mb-6">
                          Treine com atletas de Grand Slam (Rafael Matos), ex-N1
                          juvenil (Orlando Luz) e bolsas escolares americanas.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigateTab("atletas")}
                        className="border border-white text-white hover:bg-white hover:text-zinc-950 px-4 py-2 text-xs font-bold uppercase tracking-widest self-start transition-all duration-300 cursor-pointer"
                      >
                        Histórico Atletas
                      </button>
                    </div>
                  </div>
                </div>

                {/* Callout section to intensivo */}
                <div
                  className="bg-radial from-zinc-900 to-zinc-950 p-8 rounded-xl border border-adk-yellow/20 flex flex-col md:flex-row items-center justify-between gap-6 text-left"
                  id="intensivo-bento-callout"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-adk-yellow/10 text-adk-yellow text-[10px] font-extrabold uppercase rounded tracking-widest">
                      Inscrições Abertas Março a Julho 2026
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-none">
                      Vagas Disponíveis para o Intensivo no Saibro de Itajaí
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans max-w-xl">
                      Garanta sua vaga de 1 a 5 semanas sob tutela técnica
                      direta e preparação de torneio interno UTR. Hospedagem
                      integrada com refeitório de elite inclusa disponível.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigateTab("intensivo")}
                    className="bg-adk-yellow hover:bg-white text-zinc-950 px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider transform hover:-translate-y-0.5 duration-200 cursor-pointer text-center whitespace-nowrap shrink-0"
                  >
                    Simular e Reservar Vaga
                  </button>
                </div>
              </div>
            </section>

            {/* Quick stats panel as a stunning High Intensity Yellow Stripe */}
            <div
              className="bg-adk-yellow text-zinc-950 py-8 border-b border-zinc-900"
              id="rapid-stats-stripe"
            >
              <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-display italic">
                    15
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-zinc-950">
                    Quadras de Saibro
                  </span>
                </div>
                <div className="hidden md:block h-8 w-px bg-zinc-950/20"></div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-display italic">
                    03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-zinc-950">
                    Quadras Cobertas
                  </span>
                </div>
                <div className="hidden md:block h-8 w-px bg-zinc-950/20"></div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-display italic">
                    100+
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-zinc-950">
                    Tenistas nos EUA
                  </span>
                </div>
                <div className="hidden md:block h-8 w-px bg-zinc-950/20"></div>

                <div className="text-center md:text-right">
                  <span className="text-xs font-black uppercase italic tracking-tight text-zinc-950 block">
                    Iniciação, Competição
                    <br />
                    &amp; Alto Rendimento Olímpico
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case "quemsomos":
        return <AboutSection onNavigateTab={handleNavigateTab} />;
      case "estrutura":
        return <AboutSection onNavigateTab={handleNavigateTab} />; // Estrutura details are dynamic within about segment
      case "equipe":
        return <TeamSection />;
      case "programas":
        return <ProgramsSection onNavigateTab={handleNavigateTab} />;
      case "intensivo":
        return <IntensivoSection />;
      case "regiao":
        return <AboutSection onNavigateTab={handleNavigateTab} />; // sub-tab within About composite
      case "projeto":
        return <AboutSection onNavigateTab={handleNavigateTab} />; // sub-tab within About composite
      case "noticias":
        return <NewsSection />;
      case "unidades":
        return <UnitsSection />;
      case "atletas":
        return <AthletesSection />;
      case "contato":
        return <ContactSection />;
      default:
        return (
          <div className="py-20 text-center text-zinc-400">
            Página em construção...
          </div>
        );
    }
  };

  return (
    <div
      className="min-h-screen bg-adk-dark font-sans flex flex-col justify-between selection:bg-adk-yellow selection:text-zinc-950"
      id="adk-root-app"
    >
      {/* Header component embodying branding white and #DEE832 */}
      <Header activeTab={activeTab} onNavigateTab={handleNavigateTab} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Newsletter Subscription Panel */}
      <section
        className="bg-zinc-950 py-12 px-4 border-t border-zinc-900"
        id="newsletter-bar"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-left">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase bg-adk-yellow text-zinc-950 px-2.5 py-0.5 rounded-full font-black tracking-widest inline-block leading-none">
              MENSALIDADE COMPETITIVA
            </span>
            <h3 className="text-xl font-black uppercase text-white tracking-tight">
              Acompanhe o Informativo ADK Tennis
            </h3>
            <p className="text-xs text-zinc-400 font-sans max-w-md leading-relaxed">
              Assine nosso correio eletrônico exclusivo. Receba em primeira mão
              convites para clínicas, tabelas de preço do intensivo e
              atualizações do circuito.
            </p>
          </div>

          <div>
            {newsletterSubscribed ? (
              <div
                className="bg-adk-yellow/10 border border-adk-yellow/30 p-4 rounded text-center text-adk-yellow font-extrabold text-xs uppercase"
                id="newsletter-subscribed"
              >
                Informativo Assinado! Prepare-se para elevar sua performance.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail esportivo"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-adk-yellow flex-1"
                />
                <button
                  type="submit"
                  className="bg-adk-yellow hover:bg-white text-zinc-950 text-xs font-black uppercase py-3 px-6 rounded tracking-wider transition-colors cursor-pointer"
                >
                  Inscrever
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer embodying complete institutional tags in Professional Polish theme */}
      <footer
        className="bg-adk-card border-t border-white/10 py-12 px-4 text-zinc-500 text-xs"
        id="adk-footer"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {/* Column 1 */}
            <div className="space-y-4">
              <span className="text-lg font-black font-display text-white tracking-widest">
                ADK<span className="text-adk-yellow">TENNIS</span>
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                Centro de Treinamento de Tênis de alto rendimento situado no
                Itamirim Clube de Campo em Itajaí, SC. Formando atletas,
                promovendo cidadania e promovendo a elite esportiva nacional
                desde 2013.
              </p>

              <div className="flex space-x-3 pt-2" id="footer-social-circles">
                <a
                  href="https://www.instagram.com/adktennis/"
                  target="_blank"
                  className="p-2 rounded bg-zinc-900 text-zinc-400 hover:text-adk-yellow hover:border-adk-yellow transition-all border border-zinc-805"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/adktennis"
                  target="_blank"
                  className="p-2 rounded bg-zinc-900 text-zinc-400 hover:text-adk-yellow hover:border-adk-yellow transition-all border border-zinc-805"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/adktennis/"
                  target="_blank"
                  className="p-2 rounded bg-zinc-900 text-zinc-400 hover:text-adk-yellow hover:border-adk-yellow transition-all border border-zinc-805"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-adk-yellow">
                Navegação Expressa
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <button
                    onClick={() => handleNavigateTab("quemsomos")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("programas")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    Nossos Programas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("unidades")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    Estrutura Itamirim
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("noticias")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    Notícias
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-adk-yellow">
                Zonas Estratégicas
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <button
                    onClick={() => handleNavigateTab("unidades")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    ADK PlayTennis São Paulo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("unidades")}
                    className="text-zinc-400 hover:text-adk-yellow"
                  >
                    ADK PlayTennis Sorocaba
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("atletas")}
                    className="text-zinc-400 hover:text-adk-yellow font-bold text-adk-yellow flex items-center gap-1"
                  >
                    Atletas e Títulos
                    <Trophy className="w-3.5 h-3.5" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigateTab("intensivo")}
                    className="text-zinc-400 hover:text-adk-yellow block font-bold"
                  >
                    Inscrição Intensivo Julho
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-3 font-sans">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-adk-yellow">
                Sede Central
              </h4>
              <address className="not-italic text-xs text-zinc-400 space-y-2 leading-relaxed">
                <p>
                  <strong>Itamirim Clube de Campo</strong>
                  <br />
                  Rua José Gall, nº 1106
                  <br />
                  Itajaí - SC | CEP 88303-101
                </p>
                <p className="font-mono text-zinc-350">
                  (47) 3341-9222 / 9 9915-31800
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono">
            <span>
              © 2013 - 2026 - ADK Tennis - Academia de Tenis - Escola de Tenis -
              Centro de Treinamento de Tenis - Itajaí | Balneário Camboriú -
              Santa Catarina.
            </span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <span className="text-zinc-800">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
