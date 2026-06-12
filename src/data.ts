import {
  Banner,
  Sponsor,
  Program,
  Athlete,
  News,
  Unit,
  TeamMember,
} from "./types";

export const banners: Banner[] = [
  {
    id: 1,
    title: "A ADK CHEGA A SÃO PAULO",
    subtitle: "Conheça a nova casa da ADK PlayTennis São Paulo - Pompeia",
    description:
      "A maior cidade do Brasil está no radar da ADK. Mais do que uma nova unidade, chega uma metodologia construída dentro do alto rendimento, conectada ao circuito competitivo e integrada a uma rede nacional em expansão. 💪 Comandada por equipe de ponta em quadra rápida.",
    badge: "EXPANSÃO SÃO PAULO",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a4bf13?auto=format&fit=crop&q=80&w=1200", // clay courts / city lights
    linkText: "Conhecer Pompeia",
    date: "Julho de 2026",
    tag: "São Paulo - Pompeia",
  },
  {
    id: 2,
    title: "MOLDANDO O FUTURO DAS QUADRAS",
    subtitle: "Estrutura Olímpica e de circuito no Itamirim Clube de Campo",
    description:
      "Sede principal da ADK Tennis em Itajaí, SC. Infraestrutura de ponta com 15 quadras de saibro (três delas cobertas) e duas de piso rápido rústico, academia de ginástica, fisioterapia avançada, pista de corrida e vestiários integrados.",
    badge: "SEDE ITAJAÍ",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1200", // clay tennis courts
    linkText: "Explorar Estrutura",
    tag: "Itajaí",
  },
  {
    id: 3,
    title: "Thomas Arnold alcança o nível máximo da ITF",
    subtitle: "Treinador oficial Certificado ITF Nível 3",
    description:
      "Técnico da unidade ADK PlayTennis Sorocaba concluiu o módulo máximo de capacitação internacional. Garantia de metodologia de alto nível sintonizada com as principais táticas modernas das escolas de elite mundiais.",
    badge: "METODOLOGIA DE ELITE",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=1200", // intense training close up
    linkText: "Ver Certificações",
    tag: "Treinamento",
  },
];

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Taroii",
    category: "Patrocinador",
    customSvgType: "taroii",
    websiteUrl: "http://www.taroii.com.br",
  },
  {
    id: 2,
    name: "Promenac Camvel",
    category: "Patrocinador",
    customSvgType: "promenac",
    websiteUrl: "https://www.promenac.com.br",
  },
  {
    id: 3,
    name: "CBT - Confederação Brasileira de Tênis",
    category: "Parceria",
    customSvgType: "cbt",
    websiteUrl: "https://www.cbtenis.com.br",
  },
  {
    id: 4,
    name: "FCT - Federação Catarinense de Tênis",
    category: "Parceria",
    customSvgType: "fct",
    websiteUrl: "http://www.fct.org.br",
  },
  {
    id: 5,
    name: "FMEL - Fundação Municipal de Esporte",
    category: "Parceria",
    customSvgType: "fmel",
    websiteUrl: "https://itajai.sc.gov.br",
  },
  {
    id: 6,
    name: "CBC - Comitê Brasileiro de Clubes",
    category: "Parceria",
    customSvgType: "cbc",
    websiteUrl: "https://www.cbclubes.org.br",
  },
  {
    id: 7,
    name: "UTR - Universal Tennis Rating",
    category: "Parceria",
    customSvgType: "utr",
    websiteUrl: "https://www.universaltennis.com",
  },
  {
    id: 8,
    name: "Kirschbaum",
    category: "Parceria",
    customSvgType: "kirschbaum",
    websiteUrl: "http://www.kirschbaum.com.br",
  },
  {
    id: 9,
    name: "PlayTennis",
    category: "Parceria",
    customSvgType: "playtennis",
    websiteUrl: "https://www.playtennis.com.br",
  },
  {
    id: 10,
    name: "Core Ortopedia",
    category: "Parceria",
    customSvgType: "core",
    websiteUrl: "#core",
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
      "https://images.unsplash.com/photo-1545809074-59472b3f5eca?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "alto-rendimento",
    title: "Alto Rendimento Profissional",
    subtitle: "Treinamento integral para os circuitos COSAT, ITF e ATP/WTA",
    description:
      "A joia da coroa da ADK Tennis. Preparação completa de tenistas que almejam o profissionalismo. Nossa metodologia comprovada de alta performance, integrada ao circuito competitivo nacional e mundial.",
    ageRange: "14+ anos / Adultos",
    target: "Alto Rendimento / Profissional",
    features: [
      "Treinamento diário em 2 períodos (Técnico / Tático / Jogos)",
      "Preparação física profissional de altíssima intensidade",
      "Fisioterapia permanente e prevenção de lesões",
      "Gestão de calendário de torneios nacionais e internacionais",
      "Análise tática computadorizada e scout estatístico",
    ],
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a4bf13?auto=format&fit=crop&q=80&w=600",
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
    image:
      "https://images.unsplash.com/photo-1542144512-9b50d0ec411d?auto=format&fit=crop&q=80&w=600",
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
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=600",
    bio: "Orlando Luz tem uma brilhante trajetória desde a base, tendo alcançado o topo do ranking juvenil mundial. Na ADK Tennis, ele consolida seu treinamento físico e estratégico para o calendário mundial do Challenger e ATP Tours.",
    status: "Ativo no Circuito Challenger/ATP",
  },
  {
    id: "carlos-alcaraz-insp",
    name: "Estilo & Inspiração ADK",
    category: "Referência Técnica",
    achievement: "5 horas e 29 minutos. 3 match points salvos",
    highlights: [
      "Combate de altíssima intensidade que serve de material de estudo",
      "Resiliência mental extrema em jogos de 5 sets",
      "Padrões de agressividade que ensinamos em nossos treinos intensivos",
      "Combinação perfeita de Drop Shot, Heavy Topspin e movimentação",
    ],
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=600",
    bio: "A metodologia da ADK Tennis adota práticas modernas do tênis internacional espanhol. Analisamos partidas heroicas das maiores estrelas mundiais para instigar a resiliência mental e a atitude ativa nos nossos tenistas juvenis.",
    status: "Mentalidade de Campeão",
  },
];

export const news: News[] = [
  {
    id: "news-thomas-arnold",
    title:
      "Thomas Arnold conclui o módulo máximo de capacitação e alcança certificação ITF Nível 3",
    summary:
      "O técnico principal da unidade ADK PlayTennis Sorocaba concluiu o módulo de extrema qualificação da Federação Internacional de Tênis, garantindo o mais alto nível de instrução.",
    date: "Junho 2026",
    content:
      "O corpo docente da ADK Tennis consolida ainda mais sua excelência técnica. Thomas Arnold concluiu com êxito todas as etapas de capacitação e atingiu a certificação ITF Nível 3, o status máximo para treinadores na grade curricular internacional. A metodologia da ADK foca na formação acadêmica rigorosa de seus professores para entregar aos jovens as melhores estratégias e biomecânica.",
    image:
      "https://images.unsplash.com/photo-1556484645-a034161d80d6?auto=format&fit=crop&q=80&w=600",
    tag: "Capacitação",
  },
  {
    id: "news-sp-expansion",
    title:
      "A ADK chega a São Paulo com a Metodologia Integrada PlayTennis Pompéia",
    summary:
      "Parceria de expansão nacional integra alta performance do tênis competitivo no coração de São Paulo, aproximando a elite escolar da rede nacional.",
    date: "Maio 2026",
    content:
      "Chegamos com força total à capital paulista! A nova parceria de desenvolvimento traz a respeitada infraestrutura PlayTennis aliada ao plano técnico de competição e alto rendimento da ADK. Mais do que quadras extras, a unidade proporcionará intercâmbios, acompanhamento direcionado e clínicas periódicas ministradas por coaches de Itajaí.",
    image:
      "https://images.unsplash.com/photo-1542144512-9b50d0ec411d?auto=format&fit=crop&q=80&w=600",
    tag: "Expansão",
  },
  {
    id: "news-cbt-stage",
    title:
      "ADK Tennis brilha no Circuito Nacional CBT Infantojuvenil - Etapa G1",
    summary:
      "As quadras de saibro do Itamirim Clube de Campo foram palco de duelos disputados, reunindo os melhores nomes da nova geração no tênis infanto brasileiro.",
    date: "Abril 2026",
    content:
      "Como clube de campo oficial, o Itamirim sediou a Etapa G1 do Circuito CBT Infantojuvenil. Nossos atletas locais garantiram posições de destaque nas categorias de 12, 14 e 16 anos, consolidando a ADK Tennis como uma das academias mais medalhadas da competição do país.",
    image:
      "https://images.unsplash.com/photo-1471295263376-9978587c402b?auto=format&fit=crop&q=80&w=600",
    tag: "Competição",
  },
  {
    id: "news-intensivo-julho",
    title: "Vagas abertas para o Intensivo ADK Itajaí - Julho 2026",
    summary:
      "Prepare-se para o melhor inverno de treinos do Brasil. Inscrições abertas para atletas de todo o país que desejam treinar de 1 a 5 semanas sob ritmo profissional.",
    date: "Março 2026",
    content:
      "Trabalho técnico, tático, preparo físico focado, análises biomecânicas e acompanhamento com psicólogos esportivos. O Intensivo ADK de Julho é a melhor oportunidade para o tenista evoluir de forma ultra rápida em suas férias de inverno.",
    image:
      "https://images.unsplash.com/photo-1560012057-4372e14c5085?auto=format&fit=crop&q=80&w=600",
    tag: "Intensivo",
  },
];

export const units: Unit[] = [
  {
    id: "itajaí-sede",
    name: "Itajaí",
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
    phone: "(47) 3341-9222 / (47) 99915-31800",
    email: "contato@adktennis.com.br",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "sorocaba-play",
    name: "Sorocaba",
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
    image:
      "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "sp-pompeia",
    name: "São Paulo",
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
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a4bf13?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "sp-pompeia",
    name: "São José do Rio Preto",
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
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a4bf13?auto=format&fit=crop&q=80&w=600",
  },
];

export const team: TeamMember[] = [
  {
    id: "patricio-arnold",
    name: "Patrício Arnold",
    role: "Diretor Técnico & Fundador",
    credentials: "Ex-tenista profissional, formador de campeões sul-americanos",
    bio: "Responsável pelo alinhamento geral da metodologia de alto rendimento. Com vasta experiência nos circuitos mundiais juvenis e de transição profissional, lidera a expansão técnica pelo Brasil.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "thomas-arnold",
    name: "Thomas Arnold",
    role: "Técnico Principal (ADK PlayTennis Sorocaba)",
    credentials: "Certificação ITF Nível 3 (Nível Máximo)",
    bio: "Treinador altamente credenciado pela Federação Internacional de Tênis. Especialista em planejamento tático e biomecânica refinada para atletas infantojuvenis de elite.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "fisioteam",
    name: "Felipe Rodrigues",
    role: "Coordenador de Fisioterapia & Reabilitação",
    credentials: "Especialista em Fisioterapia Esportiva de Elite",
    bio: "Exerce papel crucial na prevenção de lesões, recuperação ativa pós-treino e recondicionamento motor celular de nossos tenistas em transição.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
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
