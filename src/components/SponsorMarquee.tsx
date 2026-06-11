import React from 'react';
import { Sponsor } from '../types';

interface SponsorMarqueeProps {
  sponsors: Sponsor[];
}

export const SponsorMarquee: React.FC<SponsorMarqueeProps> = ({ sponsors }) => {
  
  // Render high-fidelity SVG logos for each brand to ensure a crisp, pixel-perfect design
  const renderSponsorLogo = (type: string, name: string) => {
    switch (type) {
      case 'taroii':
        return (
          <div className="flex items-center space-x-1" id="sponsor-logo-taroii">
            <span className="text-2xl font-extrabold tracking-tight font-serif text-white uppercase">
              Taro<span className="text-adk-yellow">ii</span>
            </span>
            <div className="flex space-x-[2px] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-adk-yellow animate-ping absolute"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-adk-yellow relative"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
          </div>
        );
      case 'promenac':
        return (
          <div className="flex items-center space-x-2" id="sponsor-logo-promenac">
            {/* VW-inspired high fidelity logo */}
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
              <path d="M7 7.5L10.5 16.5L13.5 16.5L17 7.5 M7 7.5L9.5 13.5 M17 7.5L14.5 13.5" d-key="complex" />
              <path d="M9.5 13.5L12 7.5L14.5 13.5" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-white uppercase">Promenac</span>
              <span className="text-[10px] font-semibold text-adk-yellow uppercase tracking-widest">Camvel</span>
            </div>
          </div>
        );
      case 'cbt':
        return (
          <div className="flex items-center space-x-2" id="sponsor-logo-cbt">
            <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center font-black text-xs text-white border border-emerald-400">
              CBT
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-white uppercase">CONFEDERAÇÃO</span>
              <span className="text-[9px] font-medium text-emerald-400 leading-none">BRASILEIRA DE TÊNIS</span>
            </div>
          </div>
        );
      case 'fct':
        return (
          <div className="flex items-center space-x-2" id="sponsor-logo-fct">
            <div className="w-8 h-8 rounded-full bg-radial from-green-700 to-green-950 flex items-center justify-center border-2 border-adk-yellow">
              <span className="text-[10px] font-extrabold text-white">FCT</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-bold text-green-400 uppercase">CATARINENSE</span>
              <span className="text-[8px] font-medium text-white tracking-wider">DE TÊNIS</span>
            </div>
          </div>
        );
      case 'fmel':
        return (
          <div className="flex items-center space-x-1 border-l border-zinc-700 pl-3" id="sponsor-logo-fmel">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white font-extrabold text-xs">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-extrabold text-white">FMEL ITAJAÍ</span>
              <span className="text-[8px] text-zinc-400">Fundação de Esportes</span>
            </div>
          </div>
        );
      case 'cbc':
        return (
          <div className="flex items-center space-x-2 bg-blue-950/40 p-1.5 rounded border border-blue-900" id="sponsor-logo-cbc">
            <div className="p-0.5 bg-blue-600 rounded text-[9px] font-bold text-white tracking-tighter">
              CBC
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[8px] font-bold text-white uppercase tracking-wider">FORMAÇÃO DE ATLETAS</span>
              <span className="text-[7px] text-blue-300">COMITÊ BRASILEIRO</span>
            </div>
          </div>
        );
      case 'utr':
        return (
          <div className="flex items-center space-x-2" id="sponsor-logo-utr">
            <div className="flex -space-x-1">
              <span className="w-3.5 h-3.5 rounded-full border border-teal-400 bg-teal-400/20"></span>
              <span className="w-3.5 h-3.5 rounded-full border border-teal-300 bg-teal-300/40"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-black text-white tracking-widest leading-none">UTR</span>
              <span className="text-[7px] text-teal-400 leading-none">Powered by ORACLE</span>
            </div>
          </div>
        );
      case 'kirschbaum':
        return (
          <div className="flex items-center space-x-1.5" id="sponsor-logo-kirschbaum">
            <div className="w-3 h-3 rounded-full bg-red-600 relative">
              <span className="absolute -top-1 right-0 w-2 h-2 border-t border-r border-green-500 rounded-tr-full transform rotate-45"></span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold text-semibold text-zinc-100 font-mono tracking-tight">Kirschbaum</span>
              <span className="text-[8px] text-zinc-400 font-sans tracking-wide">strings &amp; grips</span>
            </div>
          </div>
        );
      case 'playtennis':
        return (
          <div className="flex items-center space-x-2" id="sponsor-logo-playtennis">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center relative">
              <polygon points="9,7 16,12 9,17" className="fill-adk-yellow" />
            </div>
            <span className="text-sm font-black tracking-tighter text-white">
              Play<span className="text-adk-yellow">Tennis</span>
            </span>
          </div>
        );
      case 'core':
        return (
          <div className="flex items-center space-x-1" id="sponsor-logo-core">
            <span className="text-lg font-black tracking-tight text-white italic">
              core
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 self-end mb-1"></span>
            <span className="text-[8px] text-zinc-400 leading-none tracking-widest uppercase">ortopedia</span>
          </div>
        );
      default:
        return <span className="font-bold text-white text-sm">{name}</span>;
    }
  };

  // We duplicate the sponsors array to create a seamless infinite list marquee effect
  const doubleSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-850 py-7 overflow-hidden relative" id="sponsor-section">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 mb-4 flex justify-between items-center">
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-adk-yellow"></span>
          Patrocinadores &amp; Parcerias Oficiais
        </h4>
        <span className="text-[10px] font-mono text-zinc-500 uppercase">ADK Tennis Network © 2026</span>
      </div>

      <div className="relative w-full flex items-center overflow-x-hidden">
        <div className="animate-marquee flex items-center space-x-16 whitespace-nowrap">
          {doubleSponsors.map((sponsor, idx) => (
            <a
              key={`${sponsor.id}-${idx}`}
              href={sponsor.websiteUrl || '#'}
              target={sponsor.websiteUrl && sponsor.websiteUrl !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center justify-center transform hover:scale-105 hover:text-white transition-all duration-300 px-2 group filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              id={`sponsor-item-${sponsor.customSvgType}-${idx}`}
            >
              {renderSponsorLogo(sponsor.customSvgType, sponsor.name)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
