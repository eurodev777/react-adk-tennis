import { ArrowUpRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import pre27 from "../assets/pre27.jpeg";

const linktreeUrl =
  "https://linktr.ee/PreTemporadaADK2027?utm_source=linktree_profile_share&ltsid=68abfab1-4d9d-443b-bf2e-60e115147ac9";

/** Banner para posicionar dentro da aba INTENSIVO. */
export function PreTemporadaDestaque() {
  return (
    <section
      aria-labelledby="adk-pretemporada-destaque-title"
      className="relative isolate mx-auto my-12 w-full max-w-7xl overflow-hidden rounded-2xl border border-adk-yellow/40 bg-zinc-950 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:my-16"
    >
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-adk-yellow/10 blur-3xl" />
      <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-adk-yellow/30 bg-adk-yellow/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-adk-yellow sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Inscrições abertas
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
              Vagas limitadas
            </span>
          </div>

          <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-adk-yellow sm:text-sm">
            INSCRIÇÕES PARA A PRÉ-TEMPORADA
          </p>
          <h2
            id="adk-pretemporada-destaque-title"
            className="font-display text-[clamp(2.6rem,5.2vw,5.4rem)] font-black uppercase italic leading-[0.9] tracking-[-0.06em] text-white"
          >
            PRÉ-TEMPORADA
            <span className="mt-1 block text-adk-yellow">ADK 2027.</span>
          </h2>

          <p className="mt-6 max-w-xl font-display text-xl font-black uppercase italic leading-tight text-white sm:text-2xl">
            PREPARE-SE PARA A TEMPORADA DE 2027,
            <span className="text-adk-yellow"> COM A ADK TENNIS</span>
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Treinamento intensivo de alto rendimento para tenistas competitivos,
            com preparação técnica, tática e física.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-wide text-zinc-300 sm:text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-adk-yellow" /> 4 unidades
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-adk-yellow" /> Novembro e
              dezembro
            </span>
          </div>

          <a
            href={linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-adk-yellow px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-adk-yellow sm:w-fit"
          >
            GARANTIR MINHA VAGA
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="mt-3 text-[11px] text-zinc-500">
            Confira unidades, datas e fale diretamente com a equipe ADK.
          </span>
        </div>

        <div className="relative flex min-h-[290px] items-end overflow-hidden bg-adk-yellow lg:min-h-[520px]">
          <img
            src={pre27}
            alt="Atletas da ADK em treinamento de tênis"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-zinc-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-zinc-950/10" />
          <div className="absolute -right-5 top-0 select-none font-display text-[10rem] font-black italic leading-none tracking-tighter text-white/10 sm:text-[14rem] lg:top-6 lg:text-[17rem]">
            27
          </div>
          <div className="relative z-10 w-full p-6 sm:p-10">
            <div className="mb-4 h-1 w-16 bg-adk-yellow" />
            <p className="font-display text-3xl font-black uppercase italic leading-none text-white sm:text-4xl">
              TREINE FORTE.
              <span className="block text-adk-yellow">CHEGUE PRONTO.</span>
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/80">
              Itajaí • São Paulo • Sorocaba • Rio Preto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
