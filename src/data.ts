import {
  Banner,
  Sponsor,
  Program,
  Athlete,
  News,
  Unit,
  TeamMember,
} from "./types";
// BANNER
import banner1 from "./assets/home1.jpeg";
import banner2 from "./assets/home2.jpeg";
import banner3 from "./assets/slide3.png";
// UNIDADES
import itajai from "./assets/itajai.jpeg";
import brasilia from "./assets/brasilia.jpeg";
import pompeia from "./assets/pompeia.jpeg";
import sorocaba from "./assets/sorocaba.jpeg";
import saojose from "./assets/rio-preto.jpeg";
import saopaulo from "./assets/banner1.jpeg";
// TIME
import patricio from "./assets/patricio-arnold.png";
import thomas from "./assets/thomas.png";
import luiz from "./assets/luiz-peniza.png";
import douglas from "./assets/douglas.png";
import bia from "./assets/bia.png";
import eder from "./assets/eder.png";
import mario from "./assets/mario.png";
// NOTICIAS
import noticia1 from "./assets/noticia-1.jpg";
import noticia2 from "./assets/noticia-2.jpg";
import noticia3 from "./assets/noticia-3.jpg";
// ATLETA
import atleta1 from "./assets/atletas/Rafael-Matos.jpeg";
import atleta2 from "./assets/atletas/Orlando-Luz.jpeg";
import atleta3 from "./assets/atletas/Igor-Marcondes.jpeg";
import atleta4 from "./assets/atletas/Marcelo-Zormann.jpeg";
import atleta5 from "./assets/atletas/Eduardo-Ribeiro.jpeg";
import atleta6 from "./assets/atletas/Luiza-Fullana.jpeg";
// PATROCINADORES
import playtennis from "./assets/play-tennis.jpeg";
import cbc from "./assets/cbc.jpeg";
import taroii from "./assets/taroii.jpeg";
import cbt from "./assets/cbt.jpeg";
import kirschbaum from "./assets/kirschbaum.jpeg";
import promenac from "./assets/promenac.jpeg";
import utr from "./assets/utr.jpeg";
// PROGRAMAS
import babytenis from "./assets/baby-tenis.jpeg"
import adkkids from "./assets/adk-kids.jpeg"
import precompeticao from "./assets/pre-competicao.jpeg"
import competicao from "./assets/competicao.jpeg"
import altorendimento from "./assets/alto-rendimento.jpeg"

export const banners: Banner[] = [
  {
    id: 1,
    title: "ADK TENNIS",
    subtitle: "Academia de Alto Rendimento",
    description:
      "Há mais de 20 anos, a ADK Tennis desenvolve atletas através de uma metodologia construída dentro do tênis de alto rendimento. Com uma equipe altamente qualificada e uma estrutura completa, oferece um ambiente preparado para a evolução técnica, física, tática e mental de atletas em formação e competição.",
    badge: null,
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
    id: "baby-tenis",
    title: "Baby Tênis",
    subtitle:
      "Iniciação ao tênis de forma lúdica, com atividades e materiais adaptados à faixa etária.",
    description:
      "Programa voltado para crianças de 3 a 4 anos, com introdução ao tênis de forma lúdica, permitindo que as crianças conheçam os primeiros elementos do esporte por meio de atividades e materiais adequados à sua idade.",
    ageRange: "3 a 4 anos",
    target: "Iniciação",
    features: [
      "1 aula por semana",
      "Período da manhã",
      "45 minutos de duração",
      "Turmas de 4 a 8 alunos",
    ],
    image:
      babytenis,
  },

  {
    id: "adk-kids",
    title: "ADK Kids",
    subtitle:
      "Aprendizado e desenvolvimento dos fundamentos do tênis através da metodologia Play and Stay.",
    description:
      "Programa voltado para crianças de 5 a 10 anos. Através da metodologia específica Play and Stay, os alunos aprendem e praticam tênis em um ambiente seguro e apropriado, utilizando uma abordagem adequada ao seu estágio de desenvolvimento.",
    ageRange: "5 a 10 anos",
    target: "Desenvolvimento / Play and Stay",
    features: [
      "De 1 a 5 vezes por semana",
      "Período da manhã",
      "1 hora de duração",
      "Turmas de 4 a 6 alunos",
    ],
    image: adkkids,
  },

  {
    id: "pre-competicao",
    title: "Pré-Competição",
    subtitle:
      "Introdução ao treinamento competitivo, combinando desenvolvimento em quadra e preparação física.",
    description:
      "Programa de competição voltado para crianças e adolescentes de 9 a 16 anos, com nível iniciante a intermediário, preparando o atleta para uma rotina de treinamento mais estruturada e para sua evolução no ambiente competitivo.",
    ageRange: "9 a 16 anos",
    target: "Iniciante a intermediário",
    features: [
      "De 1 a 5 vezes por semana",
      "Período da tarde",
      "1 hora de treino em quadra",
      "Preparação física",
    ],
    image: precompeticao,
  },

  {
    id: "competicao",
    title: "Competição",
    subtitle:
      "Programa destinado a atletas que já possuem maior nível técnico e estão inseridos no ambiente competitivo.",
    description:
      "Programa de treinamento voltado para crianças e adolescentes de 9 a 16 anos, com nível intermediário e avançado, oferecendo uma rotina mais completa de desenvolvimento em quadra e preparação física.",
    ageRange: "9 a 16 anos",
    target: "Intermediário e avançado",
    features: [
      "De 1 a 5 vezes por semana",
      "Período da tarde",
      "3 horas de treinamento",
      "Treino de quadra",
      "Preparação física",
    ],
    image: competicao,
  },

  {
    id: "alto-rendimento",
    title: "Alto Rendimento",
    subtitle:
      "Programa de treinamento avançado para atletas que buscam alto rendimento no tênis profissional ou universitário.",
    description:
      "Programa voltado para adolescentes a partir de 15 anos, com nível avançado e que tenham como objetivo seguir no tênis profissional e/ou universitário.",
    ageRange: "A partir de 15 anos",
    target: "Avançado / Profissional / Universitário",
    features: [
      "Programa 01: 5 vezes por semana em turno integral",
      "Programa 02: 3 vezes por semana em turno integral",
      "Programa 02: mais 5 vezes por semana no período da tarde",
      "De 3 a 6 horas de treinamento",
      "Foco no tênis profissional e/ou universitário",
    ],
    image: altorendimento,
  },
];

export const athletes: Athlete[] = [
  {
    id: "rafael-matos",
    name: "Rafael Matos",
    category: "Profissional | Duplas",
    achievement:
      "Campeão do Australian Open 2023 em duplas mistas • Melhor ranking: Top 20 ATP em duplas",
    highlights: [
      "Campeão de duplas mistas do Australian Open 2023, ao lado de Luisa Stefani.",
      "Campeão dos Masters 1000 de Montreal e Cincinnati em 2026, ao lado de Orlando Luz.",
      "Campeão dos ATP 250 de Buenos Aires e Santiago em 2026, também com Orlando Luz.",
      "Melhor ranking da carreira nas duplas: Top 20 ATP.",
      "Múltiplos títulos de duplas no circuito ATP.",
      "Representante do Brasil na Copa Davis.",
    ],
    image: atleta1,
    bio:
      "Rafael Matos é um dos principais duplistas brasileiros da atualidade. Campeão de Grand Slam e vencedor de diversos títulos ATP, representa o Brasil no circuito internacional e integra o trabalho de alto rendimento da ADK Tennis.",
    status: "Ativo no Circuito ATP",
  },
  {
    id: "orlando-luz",
    name: "Orlando Luz",
    category: "Profissional | Duplas",
    achievement:
      "Campeão de Masters 1000 em 2026 • Melhor ranking: Top 15 ATP em duplas",
    highlights: [
      "Campeão dos Masters 1000 de Montreal e Cincinnati em 2026, ao lado de Rafael Matos.",
      "Campeão dos ATP 250 de Buenos Aires e Santiago em 2026.",
      "Campeão juvenil de duplas de Wimbledon em 2014, ao lado de Marcelo Zormann.",
      "Medalha de ouro em duplas nos Jogos Olímpicos da Juventude de 2014, também com Marcelo Zormann.",
      "Medalha de prata em simples nos Jogos Olímpicos da Juventude de 2014.",
      "Ex-nº 1 mundial juvenil e Top 15 ATP em duplas em 2026.",
    ],
    image: atleta2,
    bio:
      "Orlando Luz construiu uma trajetória de destaque desde o circuito juvenil e atualmente compete entre os principais duplistas do circuito ATP. Ao lado de Rafael Matos, vive uma das melhores temporadas de sua carreira em 2026.",
    status: "Ativo no Circuito ATP",
  },
  {
    id: "igor-marcondes",
    name: "Igor Marcondes",
    category: "Profissional | Simples e Duplas",
    achievement:
      "Melhor ranking: nº 258 ATP em simples • nº 209 ATP em duplas",
    highlights: [
      "Melhor ranking ATP de simples da carreira: nº 258.",
      "Melhor ranking ATP de duplas da carreira: nº 209.",
      "Em 2026 voltou a se aproximar do Top 300 ATP em simples.",
      "Presença frequente em torneios Challenger e ITF internacionais.",
      "Treinado por Patricio Arnold e Luiz Peniza.",
      "Atleta ligado à ADK Tennis e à estrutura de treinamento de Itajaí.",
    ],
    image: atleta3,
    bio:
      "Igor Marcondes é tenista profissional brasileiro e atleta ligado à estrutura de alto rendimento da ADK Tennis. Canhoto, compete nos circuitos ATP Challenger e ITF em simples e duplas.",
    status: "Ativo no Circuito Profissional",
  },
  {
    id: "marcelo-zormann",
    name: "Marcelo Zormann",
    category: "Profissional | Duplas",
    achievement:
      "Campeão juvenil de Wimbledon 2014 • Melhor ranking: nº 92 ATP em duplas",
    highlights: [
      "Campeão juvenil de duplas de Wimbledon em 2014, ao lado de Orlando Luz.",
      "Medalha de ouro nos Jogos Olímpicos da Juventude de 2014, também com Orlando Luz.",
      "Melhor ranking ATP de duplas da carreira: nº 92 do mundo.",
      "Atual presença no Top 200 ATP de duplas.",
      "Experiência em torneios Challenger e competições profissionais internacionais.",
    ],
    image: atleta4,
    bio:
      "Marcelo Zormann é tenista profissional brasileiro com trajetória de destaque desde o circuito juvenil. Atualmente tem forte atuação nas duplas e compete regularmente no circuito profissional internacional.",
    status: "Ativo no Circuito Profissional",
  },
  {
    id: "eduardo-ribeiro",
    name: "Eduardo Ribeiro",
    category: "Profissional | Simples e Duplas",
    achievement:
      "Melhor ranking: nº 316 ATP em simples • atuação regular em Challenger e ITF",
    highlights: [
      "Melhor ranking ATP de simples da carreira: nº 316.",
      "Atual presença entre os principais brasileiros do ranking profissional.",
      "Ranking de duplas próximo ao Top 150/200 ATP em 2026.",
      "Participação regular em torneios Challenger e ITF.",
      "Experiência no circuito profissional nacional e internacional.",
    ],
    image: atleta5,
    bio:
      "Eduardo Ribeiro é tenista profissional brasileiro com atuação nos circuitos ATP Challenger e ITF. Compete tanto em simples quanto em duplas e integra o grupo de atletas profissionais ligados à ADK Tennis.",
    status: "Ativo no Circuito Profissional",
  },
  {
    id: "luiza-fullana",
    name: "Luiza Fullana",
    category: "Profissional | Simples e Duplas",
    achievement:
      "Sete títulos profissionais de simples • Melhor ranking: nº 457 WTA",
    highlights: [
      "Campeã do ITF W15 de Brasília em 2026.",
      "Campeã do ITF W15 de Campos do Jordão em 2026.",
      "Sete títulos profissionais de simples conquistados até agosto de 2026.",
      "Melhor ranking de simples da carreira: nº 457 WTA.",
      "Melhor ranking de duplas da carreira: Top 400 WTA.",
      "Atleta da ADK PlayTennis Brasília.",
    ],
    image: atleta6,
    bio:
      "Luiza Fullana é atleta da ADK PlayTennis Brasília e compete no circuito profissional feminino. Em 2026, vive uma temporada de evolução, conquistando títulos profissionais e alcançando seus melhores rankings da carreira.",
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
      "A atleta da ADK Brasília, Luiza Fullana, conquistou neste domingo o título do W15 de Brasília,",
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

export const units = [
  {
    id: "itajaí-sede",
    name: "ADK Itajaí",
    city: "Itajaí - SC",

    description:
      "A unidade de Itajaí conta com uma estrutura completa para o desenvolvimento de atletas, reunindo quadras, preparação física, fisioterapia e diferentes recursos de suporte ao treinamento em um único ambiente.",

    courts: "15 quadras, sendo elas, 10 descobertas de saibro, 3 cobertas de saibro e 2 rápidas.",

    amenities: [
      "Academia completa para preparação física",
      "Estrutura de fisioterapia e acompanhamento dos atletas",
      "Pista para corrida e preparação física",
      "Vestiários completos",
      "Restaurante e cafeteria",
      "Estrutura integrada ao Itamirim Clube de Campo",
    ],

    address: "Rua José Gall, 1006 – Itamirim Clube de Campo\nItajaí – SC",

    phone: "(47) 999153-1800",

    email: "itamirim.tenis@gmail.com",

    image: itajai,
  },

  {
    id: "brasilia",
    name: "ADK PlayTennis Brasília",
    city: "Brasília - DF",

    description:
      "A ADK PlayTennis Brasília está localizada no Eixo Monumental, no coração de Brasília, unindo a metodologia de formação e desenvolvimento de atletas da ADK Tennis a uma estrutura completa para treinamento de tênis.",

    courts: "5 quadras rápidas de tênis, descobertas e iluminadas.",

    amenities: [
      "Vestiários",
      "Estacionamento gratuito",
      "Bar e restaurante",
      "Serviço de encordoamento",
      "Duchas externas",
      "Mini-loja com produtos essenciais",
      "Sala de reunião",
      "Massagem esportiva",
    ],

    address:
      "ST SRPN Centro Esportivo\nAo lado do Ginásio Nilson Nelson\nBrasília – DF",

    phone: "(61) 98144-3898\n(61) 3251-4502",

    email: "",

    image: brasilia,
  },

  {
    id: "sorocaba-play",
    name: "ADK Sorocaba",
    city: "Sorocaba - SP",

    description:
      "A ADK Sorocaba é uma unidade voltada à formação e ao desenvolvimento de atletas, da iniciação ao alto rendimento, seguindo a metodologia e a filosofia de treinamento da ADK Tennis.",

    courts: "9 quadras de saibro descobertas e iluminadas.",

    amenities: [
      "Vestiários",
      "Estacionamento gratuito",
      "Lanchonete",
      "Loja de artigos esportivos",
      "Área de convivência",
      "Parquinho infantil",
    ],

    address: "Rua Professor Magalhães de Noronha, 167\nSorocaba – SP",

    phone: "WhatsApp ADK Sorocaba: (47) 99923-5080",

    email: "",

    image: sorocaba,
  },

  {
    /*
      MANTIVE O ID ANTIGO PARA NÃO QUEBRAR
      EVENTUAIS LINKS/NAVEGAÇÕES EXISTENTES.
    */
    id: "sp-pompeia",

    name: "ADK São José do Rio Preto",

    city: "São José do Rio Preto - SP",

    description:
      "A ADK São José do Rio Preto está localizada no Palestra Esporte Clube e leva à região a metodologia ADK de formação, desenvolvimento e alto rendimento, com equipe técnica especializada e acompanhamento voltado à evolução de atletas.",

    courts: "9 quadras de saibro para treinamento e prática de tênis.",

    amenities: [
      "Estrutura integrada ao Palestra Esporte Clube",
      "Academia para preparação física",
      "Vestiários",
      "Áreas esportivas e de convivência",
      "Estrutura completa de clube para suporte à rotina dos atletas",
    ],

    structureNote:
      "O Palestra mantém estrutura esportiva ampla, incluindo academia, piscinas e diversas instalações de esporte e lazer.",

    address:
      "Palestra Esporte Clube\nAv. Fernando Bonvino, 2184 – Distrito Industrial\nSão José do Rio Preto – SP\nCEP 15035-460",

    phone: "WhatsApp: (17) 98173-6836",

    email: "",

    // Você vai trocar a foto manualmente depois.
    image: saojose,
  },

  {
    /*
      MANTIVE "sp-sp" PORQUE ESSE ID JÁ É
      USADO EM OUTRAS PARTES DO SITE.
    */
    id: "sp-sp",

    name: "ADK PlayTennis São Paulo – Pompeia",

    city: "São Paulo - SP",

    description:
      "A ADK PlayTennis São Paulo – Pompeia leva a metodologia ADK para a capital paulista, com uma estrutura completa voltada à formação, desenvolvimento e alto rendimento de atletas. A unidade está localizada na Zona Oeste de São Paulo.",

    courts:
      "6 quadras de tênis, sendo 3 quadras de saibro cobertas e 3 quadras rápidas descobertas, todas com iluminação profissional.",

    amenities: [
      "3 quadras de saibro cobertas",
      "3 quadras rápidas descobertas",
      "Tecnologia Wingfield para análise de desempenho",
      "Vestiários",
      "Loja com encordoamento, produtos e acessórios",
      "Lanchonete",
      "Estacionamento",
    ],

    address:
      "Avenida Marquês de São Vicente, 2477 – Água Branca\nSão Paulo – SP",

    phone: "WhatsApp ADK São Paulo: (11) 99961-4188",

    email: "",

    image: saopaulo,
  },
];

export const team = [
  {
    id: "patricio-arnold",
    name: "Patricio Arnold",
    role: "Diretor Técnico e Head Coach",
    credentials: "Direção Técnica ADK Tennis",
    bio: "Ex-tenista profissional argentino e nº 1 mundial juvenil em 1988. Foi finalista do NCAA em simples pela University of Georgia, alcançou o nº 134 do ranking ATP de simples e o nº 93 em duplas, além de representar a Argentina na Copa Davis. Atualmente lidera a direção técnica e o desenvolvimento da metodologia ADK Tennis.",
    image: patricio,
  },

  {
    id: "luiz-peniza",
    name: "Luiz Peniza",
    role: "Head Coach — ADK Itajaí",
    credentials: "Alto Rendimento e Desenvolvimento de Atletas",
    bio: "Treinador de alto rendimento com ampla experiência no desenvolvimento de atletas. É atualmente capitão do Time Brasil na Billie Jean King Cup e participa diretamente de projetos de desenvolvimento do tênis brasileiro promovidos pela Confederação Brasileira de Tênis.",
    image: luiz,
  },

  {
    id: "douglas-oliveira-junior",
    name: "Douglas Oliveira Júnior",
    role: "Coordenador Técnico — ADK Itajaí",
    credentials: "Formação e Desenvolvimento de Atletas",
    bio: "Treinador com longa trajetória dentro da ADK Tennis e experiência na formação de jovens atletas. Já atuou e atua como capitão da equipe brasileira masculina de 14 anos em competições internacionais, além de acompanhar atletas da ADK em torneios nacionais e internacionais.",
    image: douglas,
  },

  {
    id: "thomas-arnold",
    name: "Thomas Arnold",
    role: "Coordenador Técnico — ADK Sorocaba",
    credentials: "Treinador certificado ITF Nível 3",
    bio: "Treinador certificado ITF Nível 3, com atuação voltada à formação, desenvolvimento e alto rendimento. É responsável pela coordenação técnica da ADK Sorocaba e pela aplicação da metodologia ADK na unidade.",
    image: thomas,
  },

  {
    id: "bia-cecato",
    name: "Bia Cecato",
    role: "Coordenadora Técnica — ADK PlayTennis São Paulo – Pompeia",
    credentials: "Ex-tenista profissional • ITF Nível 3",
    bio: "Ex-tenista profissional com passagem pelo circuito WTA e treinadora certificada ITF Nível 3. Integra também a capacitação de treinadores CBT/ITF e atualmente é responsável pela coordenação técnica da ADK PlayTennis São Paulo – unidade Pompeia.",
    image: bia,
  },

  {
    id: "eder-barboza",
    name: "Éder Barboza",
    role: "Head Coach — ADK São José do Rio Preto",
    credentials: "Formação e Alto Rendimento",
    bio: "Treinador especializado em formação e alto rendimento, com trabalho desenvolvido em São José do Rio Preto desde 2006. Possui experiência no comando de seleções brasileiras juvenis e participou da formação de atletas que chegaram ao alto nível internacional, entre elas Luisa Stefani.",
    image: eder,
  },

  {
    id: "mario-mendonca",
    name: "Mário Mendonça",
    role: "Head Coach — ADK PlayTennis Brasília",
    credentials: "Formação e Desenvolvimento de Jovens Atletas",
    bio: "Treinador com ampla experiência na formação e no desenvolvimento de jovens atletas. É Head Coach da equipe de alto rendimento da ADK PlayTennis Brasília e possui diversas experiências como capitão de seleções brasileiras juvenis em competições internacionais.",
    image: mario,
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
