import React from "react";
import { Sponsor } from "../types";

interface SponsorMarqueeProps {
  sponsors: Sponsor[];
}

export const SponsorMarquee: React.FC<SponsorMarqueeProps> = ({ sponsors }) => {
  const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <div
      className="w-full bg-zinc-950 border-y border-zinc-850 py-7 overflow-hidden relative"
      id="sponsor-section"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-4 flex justify-between items-center">
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-adk-yellow"></span>
          Patrocinadores &amp; Parcerias Oficiais
        </h4>
        <span className="text-[10px] font-mono text-zinc-500 uppercase">
          ADK Tennis Network © 2026
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8">
          {marqueeSponsors.map((sponsor, idx) => (
            <a key={`${sponsor.id}-${idx}`} href={sponsor.websiteUrl || "#"}>
              <img
                src={sponsor.customSvgType}
                className="h-16 w-auto shrink-0"
                alt={sponsor.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
