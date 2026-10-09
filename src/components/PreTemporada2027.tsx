import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Dumbbell,
  MessageCircle,
  ShieldCheck,
  Target,
  Trophy,
} from "lucide-react";

export type PreTemporadaCityId = "itajai" | "saopaulo" | "sorocaba" | "riopreto";

export type PreTemporada2027Props = {
  onBack?: () => void;
  onContact?: () => void;
  registrationLinks?: Partial<Record<PreTemporadaCityId, string>>;
  heroImage?: string;
  cityImages?: Partial<Record<PreTemporadaCityId, string>>;
};

const unidades: {
  id: PreTemporadaCityId;
  cidade: string;
  sigla: string;
  nome: string;
  datas: string[];
}[] = [
  {
    id: "itajai",
    cidade: "ITAJAÍ",
    sigla: "SC",
    nome: "ADK Tennis Itajaí",
    datas: ["23/11", "30/11", "07/12", "14/12"],
  },
  {
    id: "saopaulo",
    cidade: "SÃO PAULO",
    sigla: "SP",
    nome: "ADK PlayTennis São Paulo – Pompéia",
    datas: ["30/11", "07/12", "14/12"],
  },
  {
    id: "sorocaba",
    cidade: "SOROCABA",
    sigla: "SP",
    nome: "ADK Tennis Sorocaba",
    datas: ["07/12", "14/12"],
  },
  {
    id: "riopreto",
    cidade: "SÃO JOSÉ DO RIO PRETO",
    sigla: "SP",
    nome: "ADK Tennis São José do Rio Preto",
    datas: ["07/12", "14/12"],
  },
];

type TrackerWindow = Window & {
  dataLayer?: Array<Record<string, string>>;
  fbq?: (...args: unknown[]) => void;
};

function track(event: string, unidade?: string) {
  const w = window as TrackerWindow;
  w.dataLayer?.push({ event, ...(unidade ? { unidade } : {}) });
  if (w.fbq) w.fbq("trackCustom", event, unidade ? { unidade } : {});
}

function InscricaoLink({
  unidade,
  url,
  onContact,
  children,
  className = "",
}: {
  unidade: (typeof unidades)[number];
  url?: string;
  onContact?: () => void;
  children: ReactNode;
  className?: string;
}) {
  const action = () => track("pretemporada_inscricao", unidade.id);
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={action}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => {
        action();
        onContact?.();
      }}
      disabled={!onContact}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-50`}
      title={!onContact ? "Configure o link de inscrição desta unidade" : undefined}
    >
      {children}
    </button>
  );
}

/** Página /pretemporada2027, adaptada ao visual do site ADK. */
export function PreTemporada2027({
  onBack,
  onContact,
  registrationLinks = {},
  heroImage,
  cityImages = {},
}: PreTemporada2027Props) {
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = "Pré-Temporada ADK 2027 | Treinamento Intensivo de Tênis";
    track("pretemporada_view");

    // Permite chegada direta do anúncio em /pretemporada2027#cidade.
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
    }
    return () => {
      document.title = tituloAnterior;
    };
  }, []);

  const faq = [
    {
      pergunta: "Para quem é a Pré-Temporada ADK?",
      resposta:
        "Para tenistas infantojuvenis competitivos que buscam preparação técnica, tática e física para a próxima temporada.",
    },
    {
      pergunta: "Posso escolher a unidade e a semana?",
      resposta:
        "Sim. Consulte as datas disponíveis em cada unidade e confirme a disponibilidade diretamente com a equipe ADK.",
    },
    {
      pergunta: "Como faço minha inscrição?",
      resposta:
        "Escolha uma unidade e clique em Inscrever-se para falar com a equipe responsável e consultar disponibilidade.",
    },
    {
      pergunta: "As vagas são limitadas?",
      resposta: "Sim. Fale com a equipe da unidade para consultar vagas e confirmar sua participação.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pb-24 text-white md:pb-0">
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden border-b border-adk-yellow/20 bg-zinc-950 px-5 py-20 sm:px-8 sm:py-28">
        {heroImage ? (
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src={heroImage}
            alt="Treinamento intensivo de tênis da ADK"
          />
        ) : (
          <div
            className="absolute inset-0 opacity-75"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 85% 20%, rgba(222,232,50,.2), transparent 50%), linear-gradient(140deg,#151515,#070707)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/25" />
        <div className="pointer-events-none absolute bottom-0 right-0 select-none font-display text-[12rem] font-black italic leading-[.7] tracking-tight text-adk-yellow/10 sm:text-[23rem]">
          2027
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 transition hover:text-adk-yellow"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao site
            </button>
          )}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-adk-yellow/40 bg-adk-yellow/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-adk-yellow">
            <span className="h-2 w-2 animate-pulse rounded-full bg-adk-yellow" />
            Inscrições abertas • Vagas limitadas
          </div>
          <h1 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,8.8rem)] font-black uppercase italic leading-[0.88] tracking-[-0.06em] text-white">
            PRÉ-TEMPORADA
            <span className="mt-2 block text-adk-yellow">ADK 2027</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl">
            Prepare sua temporada antes dela começar.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Uma semana de treinamento intensivo com a metodologia ADK,
            unindo quadra, preparação física e desenvolvimento competitivo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#unidades"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-adk-yellow px-7 py-4 text-sm font-black uppercase text-zinc-950 transition hover:bg-white"
            >
              QUERO ME INSCREVER <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#unidades"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/30 px-7 py-4 text-sm font-bold uppercase text-white transition hover:border-adk-yellow hover:text-adk-yellow"
            >
              VER UNIDADES E DATAS
            </a>
          </div>
        </div>
      </section>

      <section id="unidades" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-adk-yellow">
                4 unidades • Diferentes semanas
              </span>
              <h2 className="mt-3 font-display text-4xl font-black uppercase italic leading-none sm:text-5xl">
                ESCOLHA ONDE <span className="text-adk-yellow">TREINAR.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Confira as datas e fale diretamente com a equipe responsável.
              As vagas são limitadas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {unidades.map((unidade, index) => (
              <article
                key={unidade.id}
                id={unidade.id}
                className="group scroll-mt-28 overflow-hidden rounded-xl border border-adk-yellow/30 bg-zinc-900/70 transition hover:border-adk-yellow"
              >
                <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden p-6 sm:min-h-[290px] sm:p-8">
                  {cityImages[unidade.id] ? (
                    <img
                      src={cityImages[unidade.id]}
                      alt={`Treinamento e estrutura ADK em ${unidade.cidade}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg,#222b22 0%,#101510 55%,#080808 100%)",
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/25" />
                  <span className="relative z-10 w-fit rounded-full border border-adk-yellow/50 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-adk-yellow">
                    UNIDADE {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-display text-[clamp(1.8rem,3.4vw,3.1rem)] font-black uppercase italic leading-[.95] tracking-tight text-white">
                      {unidade.cidade} <span className="text-adk-yellow">– {unidade.sigla}</span>
                    </h3>
                    <p className="mt-2 text-xs font-bold text-zinc-200">{unidade.nome}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {unidade.datas.map((data) => (
                        <span
                          key={data}
                          className="rounded border border-white/35 bg-black/60 px-3 py-2 text-xs font-black text-white"
                        >
                          {data}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <InscricaoLink
                  unidade={unidade}
                  url={registrationLinks[unidade.id]}
                  onContact={onContact}
                  className="flex min-h-16 items-center justify-between gap-4 bg-adk-yellow px-6 py-4 text-xs font-black uppercase tracking-wide text-zinc-950 transition hover:bg-white sm:px-8"
                >
                  <span>{registrationLinks[unidade.id] ? "INSCREVER-SE" : "SOLICITAR INSCRIÇÃO"} • {unidade.cidade}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0" />
                </InscricaoLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/60 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-adk-yellow">
            Metodologia ADK
          </span>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase italic leading-tight text-white sm:text-5xl">
            MAIS DO QUE VOLTAR A TREINAR.
            <span className="block text-adk-yellow">É COMEÇAR 2027 PREPARADO.</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Target,
                titulo: "TREINO EM QUADRA",
                texto: "Desenvolvimento técnico, tático e situações reais de jogo.",
              },
              {
                icon: Dumbbell,
                titulo: "PREPARAÇÃO FÍSICA",
                texto: "Trabalho direcionado às demandas do tênis competitivo.",
              },
              {
                icon: Trophy,
                titulo: "MENTALIDADE COMPETITIVA",
                texto: "Intensidade, disciplina e preparação para competir.",
              },
            ].map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="rounded-lg border border-white/10 bg-zinc-950 p-7">
                <Icon className="h-8 w-8 text-adk-yellow" />
                <h3 className="mt-6 text-lg font-black uppercase text-white">{titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-zinc-300">
            <ShieldCheck className="h-5 w-5 shrink-0 text-adk-yellow" />
            Para tenistas infantojuvenis competitivos que buscam evolução e alto rendimento.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-black uppercase italic text-white sm:text-5xl">
            DÚVIDAS <span className="text-adk-yellow">FREQUENTES</span>
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {faq.map((item, index) => (
              <div key={item.pergunta}>
                <button
                  type="button"
                  aria-expanded={faqAberta === index}
                  onClick={() => setFaqAberta(faqAberta === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold text-white hover:text-adk-yellow sm:text-base"
                >
                  {item.pergunta}
                  <span className="text-xl text-adk-yellow">{faqAberta === index ? "−" : "+"}</span>
                </button>
                {faqAberta === index && (
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-zinc-400">
                    {item.resposta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-adk-yellow/20 bg-adk-yellow px-5 py-12 text-zinc-950 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-widest">Pré-Temporada ADK 2027</p>
            <h2 className="font-display text-3xl font-black uppercase italic leading-none sm:text-5xl">
              SUA TEMPORADA COMEÇA AQUI.
            </h2>
            <p className="mt-3 max-w-xl text-sm">
              Escolha sua unidade, consulte as datas e garanta sua vaga.
            </p>
          </div>
          <a
            href="#unidades"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-zinc-950 px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-zinc-800"
          >
            ESCOLHER MINHA UNIDADE <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <a
        href="#unidades"
        className="fixed inset-x-3 bottom-3 z-40 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-adk-yellow px-5 py-3 text-xs font-black uppercase tracking-wide text-zinc-950 shadow-2xl shadow-black/60 md:hidden"
      >
        <CalendarDays className="h-5 w-5" /> VER DATAS E INSCREVER-SE
        <ArrowUpRight className="h-5 w-5" />
      </a>

      {onContact && (
        <button
          type="button"
          onClick={() => {
            track("pretemporada_contato");
            onContact();
          }}
          aria-label="Falar com a equipe ADK"
          title="Entrar em contato com a ADK"
          className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-adk-yellow/40 bg-zinc-950 px-4 py-3 text-xs font-bold text-adk-yellow shadow-xl transition hover:bg-zinc-800 md:bottom-6"
        >
          <MessageCircle className="h-5 w-5" /> Falar com a ADK
        </button>
      )}
    </div>
  );
}
