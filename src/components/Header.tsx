import React, { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

interface HeaderProps {
  activeTab: string;
  onNavigateTab: (tabId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigateTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "quemsomos", label: "Quem Somos" },
    { id: "unidades", label: "Unidades" },
    { id: "equipe", label: "Equipe" },
    { id: "programas", label: "Programas" },
    { id: "intensivo", label: "Intensivo" },
    { id: "noticias", label: "Notícias" },
    { id: "contato", label: "Contato" },
    { id: "atletas", label: "Atletas" },
  ];

  const highlightedItems = [
    {
      id: "trabalhe",
      label: "QUERO TRABALHAR NA ADK",
      customClass:
        "border-adk-yellow text-adk-yellow hover:bg-adk-yellow hover:text-zinc-950 tracking-widest",
    },
    {
      id: "contato",
      label: "QUERO TREINAR NA ADK",
      customClass:
        "bg-adk-yellow border-adk-yellow text-zinc-950 hover:bg-white hover:border-white tracking-widest",
    },
  ];

  const handleTabClick = (id: string) => {
    onNavigateTab(id);
    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className="sticky top-0 w-full bg-adk-dark/95 backdrop-blur-md border-b border-zinc-800/80 z-50 transition-all duration-300"
      id="adk-main-header"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <button
          onClick={() => handleTabClick("home")}
          className="flex items-center space-x-3 group text-left cursor-pointer shrink-0"
          id="header-brand-logo"
        >
          <div className="w-14 h-18 flex items-center justify-center rounded-sm font-black text-adk-dark text-xl transition-all duration-300 shadow-md group-hover:scale-105">
            <img src={logo} alt="ADK Tennis" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight leading-none uppercase text-white group-hover:text-adk-yellow transition-colors">
              ADK Tennis
            </h1>
          </div>
        </button>

        <nav
          className="hidden xl:flex items-center space-x-1"
          id="desktop-navbar"
        >
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-2.5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 rounded relative cursor-pointer ${
                  isActive
                    ? "text-adk-yellow bg-zinc-900/50"
                    : "text-white hover:text-adk-yellow hover:bg-zinc-900/30"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-adk-yellow rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div
          className="hidden xl:flex items-center gap-2 shrink-0"
          id="highlighted-links"
        >
          {highlightedItems.map((hl) => {
            const isActive = activeTab === hl.id;

            return (
              <button
                key={hl.id}
                onClick={() => handleTabClick(hl.id)}
                className={`relative px-3 xl:px-4 py-2.5 text-[10px] font-black uppercase rounded border transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center whitespace-nowrap ${hl.customClass} ${
                  isActive
                    ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-950"
                    : ""
                }`}
                id={`nav-highlighted-${hl.id}`}
              >
                {hl.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 xl:hidden">
          <button
            onClick={() => handleTabClick("unidades")}
            className="px-3 py-1.5 text-[10px] font-extrabold uppercase bg-adk-yellow text-zinc-950 rounded cursor-pointer"
          >
            Unidades
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
            id="mobile-drawer-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="xl:hidden bg-zinc-950 border-t border-zinc-800 py-4 px-4 space-y-3 shadow-2xl animate-fade-in"
          id="mobile-drawer"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            {highlightedItems.map((hl) => {
              const isActive = activeTab === hl.id;

              return (
                <button
                  key={hl.id}
                  onClick={() => handleTabClick(hl.id)}
                  className={`py-3 px-3 text-center text-[8px] font-black uppercase tracking-wider rounded border flex items-center justify-center cursor-pointer transition-colors ${
                    hl.id === "trabalhe"
                      ? "border-adk-yellow text-adk-yellow hover:bg-adk-yellow hover:text-zinc-950"
                      : "bg-adk-yellow border-adk-yellow text-zinc-950 hover:bg-white"
                  } ${
                    isActive
                      ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-950"
                      : ""
                  }`}
                  id={`mobile-hl-${hl.id}`}
                >
                  {hl.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-left rounded transition-colors ${
                    isActive
                      ? "text-zinc-950 bg-adk-yellow"
                      : "text-white hover:text-adk-yellow hover:bg-zinc-900/50"
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
            <span>Siga-nos @adktennis</span>
          </div>
        </div>
      )}
    </header>
  );
};
