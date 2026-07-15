import {
  Banner,
  Sponsor,
  Program,
  Athlete,
  News,
  Unit,
  TeamMember,
} from "./types";
import banner1 from "./assets/slide1.png";
import banner2 from "./assets/slide2.png";
import banner3 from "./assets/slide3.png";
import itajai from "./assets/itajai.jpeg";
import brasilia from "./assets/brasilia.jpeg";
import pompeia from "./assets/pompeia.jpeg";
import sorocaba from "./assets/sorocaba.jpeg";
import saojose from "./assets/sao-jose.jpeg";
import saopaulo from "./assets/banner1.jpeg";
import patricio from "./assets/patricio-arnold.jpeg";
import thomas from "./assets/banner-thomas.jpeg";
import luiz from "./assets/luiz-peniza.jpeg";
import noticia1 from "./assets/noticia-1.jpg";
import noticia2 from "./assets/noticia-2.jpg";
import noticia3 from "./assets/noticia-3.jpg";
import atleta1 from "./assets/atleta-1.jpeg";
import atleta2 from "./assets/atleta-2.jpeg";
import atleta3 from "./assets/atleta-3.jpeg";
import playtennis from "./assets/play-tennis.jpeg";
import cbc from "./assets/cbc.jpeg";
import taroii from "./assets/taroii.jpeg";
import cbt from "./assets/cbt.jpeg";
import kirschbaum from "./assets/kirschbaum.jpeg";
import promenac from "./assets/promenac.jpeg";
import utr from "./assets/utr.jpeg";

export const banners: Banner[] = [
  {
    id: 1,
    title: "ADK TENNIS",
    subtitle: "Academia de Alto Rendimento",
    description:
      "Há mais de 20 anos, a ADK Tennis desenvolve atletas através de uma metodologia construída dentro do tênis de alto rendimento. Com uma equipe altamente qualificada e uma estrutura completa, oferece um ambiente preparado para a evolução técnica, física, tática e mental de atletas em formação e competição.",
    badge: "SEDE ITAJAÍ",
    image: banner1,
    //"https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1200",
    linkText: "Conheça a ADK Tennis",
  },
  {
    id: 2,
    title: "ADK PlayTennis São Paulo",
    subtitle: "A metodologia da ADK Tennis agora também na capital paulista.",
    description:
      "A ADK PlayTennis São Paulo leva para a capital paulista a metodologia desenvolvida pela ADK Tennis ao longo de mais de 20 anos no alto rendimento. A unidade oferece programas estruturados para a formação e desenvolvimento de atletas, seguindo o mesmo padrão técnico aplicado em toda a academia.",
    badge: "EXPANSÃO SÃO PAULO",
    image: banner2,
    linkText: "Conheça a unidade",
  },
  {
    id: 3,
    title: "Intensivo ADK",
    subtitle: "Uma imersão na metodologia da ADK Tennis.",
    description:
      "O Intensivo ADK Tennis proporciona uma semana de treinamento baseada na metodologia aplicada diariamente pela academia. Uma experiência voltada ao desenvolvimento técnico, físico, tático e mental, conduzida por uma equipe especializada na formação de atletas.",
    badge: "INTENSIVO",
    image: banner3,
    // "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=1200", // intense training close up
    linkText: "Saiba mais",
    tag: "Treinamento",
  },
];

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Taroii",
    category: "Patrocinador",
    customSvgType: taroii,
    websiteUrl: "http://www.taroii.com.br",
  },
  {
    id: 2,
    name: "Promenac Camvel",
    category: "Patrocinador",
    customSvgType: promenac,
    websiteUrl: "https://www.promenac.com.br",
  },
  {
    id: 3,
    name: "CBT - Confederação Brasileira de Tênis",
    category: "Parceria",
    customSvgType: cbt,
    websiteUrl: "https://www.cbtenis.com.br",
  },
  {
    id: 4,
    name: "CBC - Comitê Brasileiro de Clubes",
    category: "Parceria",
    customSvgType: cbc,
    websiteUrl: "https://www.cbclubes.org.br",
  },
  {
    id: 5,
    name: "UTR - Universal Tennis Rating",
    category: "Parceria",
    customSvgType: utr,
    websiteUrl: "https://www.universaltennis.com",
  },
  {
    id: 6,
    name: "Kirschbaum",
    category: "Parceria",
    customSvgType: kirschbaum,
    websiteUrl: "http://www.kirschbaum.com.br",
  },
  {
    id: 7,
    name: "PlayTennis",
    category: "Parceria",
    customSvgType: playtennis,
    websiteUrl: "https://www.playtennis.com.br",
  },
];

export const programs: Program[] = [
  {
    id: "kids-iniciacao",
    title: "Iniciação & Kids (a partir de 3 anos)",
    subtitle: "O primeiro contato lúdico com eixos de coordenação",
    description:
      "Método focado no desenvolvimento motor, introdução de regras básicas e amor ao esporte através de jogos divertidos e equipamentos adaptados (bolas lentas e raquetes proporcionais).",
    ageRange: "3 - 8 anos",
    target: "Iniciantes / Socialização",
    features: [
      "Desenvolvimento de coordenação motora fina e ampla",
      "Bolas de transição (Vermelha e Laranja)",
      "Turmas reduzidas com professores especializados",
      "Interação social e cooperação esportiva",
    ],
    image:
      "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "pre-competicao",
    title: "Pré-Competição & Aperfeiçoamento",
    subtitle: "Lapidando a técnica e preparando a mente competitiva",
    description:
      "Para jovens que já dominam os golpes básicos e desejam iniciar sua jornada nos circuitos infantojuvenis estaduais. Foco tático, consistência física e introdução à gestão de intensidade em quadra.",
    ageRange: "9 - 14 anos",
    target: "Intermediário competitivo",
    features: [
      "Treinos de posicionamento dinâmicos e técnicas avançadas",
      "Introdução à preparação física específica no saibro",
      "Feedback constante de desempenho",
      "Simulações de torneio e jogos com contagem real",
    ],
    image:
      "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "alto-rendimento",
    title: "PROGRAMA INTENSIVO ADK TENNIS",
    subtitle: "Uma semana de treinamento baseada na metodologia da ADK Tennis.",
    description:
      "O Intensivo ADK Tennis foi desenvolvido para atletas que desejam potencializar sua evolução em um curto período. Durante uma semana, os participantes vivenciam uma rotina estruturada de treinamentos técnicos, táticos, físicos e competitivos, conduzidos pela equipe da ADK Tennis.",
    ageRange: "14+ anos / Adultos",
    target: "Alto Rendimento / Profissional",
    features: [
      "Treinamento técnico diário 1 ou 2 turnos",
      "Preparação física específica para o tênis",
      "Situações de jogo e competição",
      "Gestão de calendário de torneios nacionais e internacionais",
      "Acompanhamento da equipe técnica",
    ],
    image:
      "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "tenis-universitario",
    title: "Transição Tênis Universitário (EUA)",
    subtitle: "Conquiste bolsas de estudos em universidades americanas",
    description:
      "Preparação esportiva e suporte estratégico para atletas garantirem bolsas de estudo através do tênis nos EUA (NCAA, NAIA, NJCAA). A ADK possui pontes diretas com coaches americanos.",
    ageRange: "16 - 20 anos",
    target: "Bolsas de Estudo de Alto Nível",
    features: [
      "Vídeo de recrutamento profissional editado pela equipe",
      "Acompanhamento personalizado do ranking UTR",
      "Ponte e consultoria direta de elegibilidade e vestibular esportivo",
      "Preparação tática para partidas de nível College Tennis",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600",
  },
];

export const athletes: Athlete[] = [
  {
    id: "rafael-matos",
    name: "Rafael Matos",
    category: "Profissional / Duplas",
    achievement:
      "Campeão de Grand Slam (Mix Doubles Roland Garros & Australian Open), Top 30 ATP",
    highlights: [
      "Campeão de Duplas Mistas no Australian Open",
      "Membro frequente da equipe brasileira da Copa Davis",
      "Formado na base e treina frequentemente no saibro da ADK Itamirim",
      "Sólida carreira internacional com múltiplos títulos no circuito ATP",
    ],
    image: atleta1,
    bio: "Rafael Matos é um dos maiores expoentes das duplas do tênis brasileiro na última década. Desenvolveu-se no saibro sob os olhares da qualificada equipe técnica ADK Tennis de Itajaí.",
    status: "Ativo no Circuito ATP",
  },
  {
    id: "orlando-luz",
    name: "Orlando Luz",
    category: "Profissional",
    achievement:
      "Campeão de Duplas em Challenger Tour, Ex-Nº 1 do mundo juvenil",
    highlights: [
      "Medalhista nos Jogos Olímpicos da Juventude",
      "Múltiplos títulos profissionais na modalidade de duplas e simples",
      "Reconhecido pela solidez de golpes e garra em quadras de saibro",
      "Preparação física centralizada na estrutura integrada da ADK",
    ],
    image: atleta3,
    bio: "Orlando Luz tem uma brilhante trajetória desde a base, tendo alcançado o topo do ranking juvenil mundial. Na ADK Tennis, ele consolida seu treinamento físico e estratégico para o calendário mundial do Challenger e ATP Tours.",
    status: "Ativo no Circuito Challenger/ATP",
  },
  {
    id: "luiza-fullana",
    name: "Luiza Fullana",
    category: "Profissional",
    achievement: "Campeã do W15 de Brasília 2026",
    highlights: [
      "Campeã do W15 de Brasília em junho de 2026",
      "Atleta da ADK PlayTennis Brasília",
      "Semana de competição marcada por atuações consistentes e de alto nível",
      "Destaque em torneios profissionais do circuito feminino",
    ],
    image: atleta2,
    bio: "Luiza Fullana é uma das atletas em destaque da ADK PlayTennis Brasília. Em 2026, conquistou o título do W15 de Brasília, demonstrando alto nível técnico, consistência competitiva e evolução constante no circuito profissional feminino.",
    status: "Ativa no Circuito Profissional",
  },
];

export const news: News[] = [
  {
    id: "treinamento-intensivo-adk-tennis-sao-jose-do-rio-preto",
    title: "Treinamento Intensivo ADK Tennis – São José do Rio Preto",
    summary:
      "O Treinamento Intensivo ADK reúne a mesma metodologia aplicada diariamente na formação dos atletas da academia: trabalho técnico, tático, físico e mental em um ambiente de alta exigência e evolução constante.",
    date: "10 de junho de 2026",
    content: `O Treinamento Intensivo ADK reúne a mesma metodologia aplicada diariamente na formação dos atletas da academia: trabalho técnico, tático, físico e mental em um ambiente de alta exigência e evolução constante.

São cinco dias de treino estruturado para quem busca evoluir de verdade dentro da quadra.

Treinamentos realizados no Palestra Esporte Clube, em São José do Rio Preto.

Semana 1 — 29/06
Semana 2 — 06/07
Semana 3 — 13/07

Vagas limitadas.`,
    image: noticia1,
    tag: "",
  },
  {
    id: "campea-w15-de-brasilia",
    title: "CAMPEÃ W15 DE BRASÍLIA",
    summary:
      "A atleta da ADK PlayTennis Brasília, Luiza Fullana, conquistou neste domingo o título do W15 de Brasília,",
    date: "8 de junho de 2026",
    content:
      "A atleta da ADK PlayTennis Brasília, Luiza Fullana, conquistou neste domingo o título do W15 de Brasília, coroando uma grande semana de competição com atuações consistentes e de alto nível.",
    image: noticia2,
    tag: "",
  },
  {
    id: "a-maior-cidade-do-brasil-acaba-de-entrar-para-a-historia-da-adk-tennis",
    title:
      "A maior cidade do Brasil acaba de entrar para a história da ADK Tennis",
    summary:
      "O que começou em Itajaí, ganhou força em Brasília, chegou a Sorocaba, São José do Rio Preto e agora alcança um dos mercados mais importantes do país.",
    date: "Abril 2026",
    content: `O que começou em Itajaí, ganhou força em Brasília, chegou a Sorocaba, São José do Rio Preto e agora alcança um dos mercados mais importantes do país.

Não estamos anunciando apenas uma nova unidade.

Estamos expandindo uma metodologia que forma atletas, desenvolve pessoas e constrói resultados dentro e fora das quadras.

Em parceria com a PlayTennis, nasce a ADK PlayTennis São Paulo.`,
    image: noticia3,
    tag: "Competição",
  },
];

export const units: Unit[] = [
  {
    id: "itajaí-sede",
    name: "Sede da ADK Tennis",
    city: "Itajaí - SC",
    description:
      "Nossa sede principal é um dos complexos de tênis mais respeitáveis e modernos da América do Sul. Estrutura impecável integrada à natureza.",
    courts: "15 quadras de saibro (3 cobertas) + 2 quadras rápidas",
    amenities: [
      "Academia de ginástica totalmente equipada para tênis",
      "Sala de Fisioterapia integrada e avaliação biomecânica",
      "Pista de corrida profissional de atletismo",
      "Vestiários modernos adaptados de alto padrão",
      "Cafeteria, restaurante e Pro Shop de artigos esportivos",
    ],
    address: "Rua José Gall, nº 1106 - Itamirim Clube de Campo - Itajaí - SC",
    phone: "(47) 99153-1800 / (47) 99915-31800",
    email: "contato@adktennis.com.br",
    image: itajai,
  },
  {
    id: "brasilia",
    name: "ADK PlayTennis Brasília",
    city: "Brasília",
    description:
      "Nova unidade estratégica de expansão trazendo a metodologia consagrada de Santa Catarina para o maior centro urbano de tênis do Brasil.",
    courts: "Quadras rápidas cobertas e ao ar livre de alta velocidade",
    amenities: [
      "Aulas individuais sofisticadas de formação tática",
      "Análise por vídeo e feedback de quadra integrada",
      "Clínicas exclusivas ministradas pelo staff ADK Itajaí",
      "Preparação esportiva juvenil para admissão em universidades americanas",
    ],
    address: "Bairro Pompeia - São Paulo - SP",
    phone: "(11) 98765-4321 / (11) 3662-7000",
    email: "pompeia@adktennis.com.br",
    image: brasilia,
  },
  {
    id: "sorocaba-play",
    name: "ADK PlayTennis Sorocaba",
    city: "Sorocaba - SP",
    description:
      "Centro com foco em base competitiva e treinamento de alta performance. Comandada pelo treinador Thomas Arnold, certificado ITF Grau Máximo.",
    courts: "Quadras de saibro e piso rápido preparadas para circuitos",
    amenities: [
      "Capacitação técnica regular alinhada com grade ITF",
      "Preparação física especializada juvenil",
      "Acompanhamento direto e testes coordenativos periódicos",
      "Intercâmbios facilitados com a sede em Itajaí para semanas de saibro",
    ],
    address: "Região Central de Sorocaba, parceiras integradas - SP",
    phone: "(15) 3030-9000",
    email: "sorocaba@adktennis.com.br",
    image: sorocaba,
  },
  {
    id: "sp-pompeia",
    name: "ADK PlayTennis São José do Rio Preto",
    city: "São José do Rio Preto - SP",
    description:
      "Nova unidade estratégica de expansão trazendo a metodologia consagrada de Santa Catarina para o maior centro urbano de tênis do Brasil.",
    courts: "Quadras rápidas cobertas e ao ar livre de alta velocidade",
    amenities: [
      "Aulas individuais sofisticadas de formação tática",
      "Análise por vídeo e feedback de quadra integrada",
      "Clínicas exclusivas ministradas pelo staff ADK Itajaí",
      "Preparação esportiva juvenil para admissão em universidades americanas",
    ],
    address: "Bairro Pompeia - São Paulo - SP",
    phone: "(11) 98765-4321 / (11) 3662-7000",
    email: "pompeia@adktennis.com.br",
    image: pompeia,
  },
  {
    id: "sp-sp",
    name: "ADK PlayTennis São Paulo",
    city: "São Paulo - SP",
    description:
      "Nova unidade estratégica de expansão trazendo a metodologia consagrada de Santa Catarina para o maior centro urbano de tênis do Brasil.",
    courts: "Quadras rápidas cobertas e ao ar livre de alta velocidade",
    amenities: [
      "Aulas individuais sofisticadas de formação tática",
      "Análise por vídeo e feedback de quadra integrada",
      "Clínicas exclusivas ministradas pelo staff ADK Itajaí",
      "Preparação esportiva juvenil para admissão em universidades americanas",
    ],
    address: "Bairro Pompeia - São Paulo - SP",
    phone: "(11) 98765-4321 / (11) 3662-7000",
    email: "pompeia@adktennis.com.br",
    image: saopaulo,
  },
];

export const team: TeamMember[] = [
  {
    id: "patricio-arnold",
    name: "Patrício Arnold",
    role: "Diretor Técnico & Fundador",
    credentials: "Ex-tenista profissional, formador de campeões sul-americanos",
    bio: "Responsável pelo alinhamento geral da metodologia de alto rendimento. Com vasta experiência nos circuitos mundiais juvenis e de transição profissional, lidera a expansão técnica pelo Brasil.",
    image: patricio,
  },
  {
    id: "thomas-arnold",
    name: "Thomas Arnold",
    role: "COORDENADOR TÉNICO",
    credentials: "Certificação ITF Nível 3 (Nível Máximo)",
    bio: "Treinador altamente credenciado pela Federação Internacional de Tênis. Especialista em planejamento tático e biomecânica refinada para atletas infantojuvenis de elite.",
    image: thomas,
  },
  {
    id: "fisioteam",
    name: "Luiz Peniza",
    role: "COORDENADOR TÉNICO",
    credentials: "Especialista em Fisioterapia Esportiva de Elite",
    bio: "Exerce papel crucial na prevenção de lesões, recuperação ativa pós-treino e recondicionamento motor celular de nossos tenistas em transição.",
    image: luiz,
  },
];

export const structureGallery = [
  {
    name: "Sede Externa Saibro",
    type: "Saibro principal",
    link: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Complexo Desportivo",
    type: "Itamirim Clube de Campo",
    link: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Quadra Interna Coberta",
    type: "Isolamento Térmico",
    link: "https://images.unsplash.com/photo-1542144512-9b50d0ec411d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Academia Integrada",
    type: "Fisico Funcional",
    link: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sala de Recuperação",
    type: "Fisioterapia Ativa",
    link: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Quadras de Piso Duro",
    type: "Circuito Rápido",
    link: "https://images.unsplash.com/photo-1545809074-59472b3f5eca?auto=format&fit=crop&q=80&w=400",
  },
];
