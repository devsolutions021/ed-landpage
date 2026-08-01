// ─── Conteúdo da landing page (todas as copies em um só lugar) ─────────

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface ResultItem {
  tag: string;
  title: string;
  highlight: string;
  body: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface ProposalItem {
  icon: string;
  title: string;
  intro: string;
  points: string[];
}

export const HERO = {
  name: 'Edinho Araújo',
  role: 'Deputado Federal',
  number: '2525',
  slogan: 'A força de São Paulo em Brasília.',
  subSlogan: 'Quem já fez, sabe como fazer mais.',
  bio: [
    '54 anos de vida pública.',
    '16 anos prefeito de Rio Preto.',
    '4 mandatos de deputado federal.',
    '3 mandatos de deputado estadual.',
    'Ex-ministro de Portos.',
  ],
  paragraph:
    'Edinho conhece São Paulo. Conhece Brasília. E sabe transformar experiência, diálogo e trabalho em resultado.',
  closing: 'Para Deputado Federal, vote Edinho 2525.',
};

export const STATS: StatItem[] = [
  { value: 54, label: 'anos de vida pública' },
  { value: 16, label: 'anos prefeito de Rio Preto' },
  { value: 4, suffix: 'x', label: 'deputado federal' },
  { value: 3, suffix: 'x', label: 'deputado estadual' },
  { value: 12, label: 'vitórias eleitorais consecutivas' },
];

export const RESULTS: ResultItem[] = [
  {
    tag: 'Infraestrutura',
    title: 'Ponte Rodoferroviária',
    highlight: '28 anos de luta até virar realidade.',
    body: 'A ponte sobre o Rio Paraná ligou São Paulo ao Mato Grosso do Sul, aproximou o Centro-Oeste do Porto de Santos e substituiu a antiga travessia por balsas. Edinho acreditou. Persistiu. A obra saiu do papel.',
  },
  {
    tag: 'Rodovias',
    title: 'Euclides da Cunha',
    highlight: 'Mais de 180 km duplicados. E sem pedágio.',
    body: 'Uma ligação mais segura entre Mirassol, Tanabi, Votuporanga, Fernandópolis, Jales, Santa Fé do Sul, Rubineia e toda a região.',
  },
  {
    tag: 'Saneamento',
    title: 'Semae em 1º lugar',
    highlight: 'O melhor serviço de água e esgoto do Brasil.',
    body: 'Edinho transformou o Semae em referência nacional, com uma das menores tarifas do país: 100% de água tratada e esgoto coletado em Rio Preto.',
  },
  {
    tag: 'Mobilidade',
    title: 'BR-153',
    highlight: 'Uma conquista histórica para Rio Preto.',
    body: 'Duplicação do trecho urbano, novos viadutos, acessos, passarelas e vias marginais. Mais mobilidade, mais segurança e menos congestionamento.',
  },
  {
    tag: 'Mobilidade',
    title: 'Anel Viário',
    highlight: '35 km. Cerca de 100 bairros interligados.',
    body: 'Uma obra que ajudou a tirar o trânsito da região central, encurtou caminhos e abriu novas frentes de desenvolvimento para Rio Preto.',
  },
  {
    tag: 'Saúde',
    title: 'Hospital Municipal',
    highlight: 'Saúde mais perto de quem precisa.',
    body: 'Edinho entregou uma nova estrutura hospitalar na Região Norte, ampliando a capacidade de atendimento de Rio Preto.',
  },
  {
    tag: 'Educação',
    title: 'Instituto Federal + UFSCar',
    highlight: 'Mais educação. Mais futuro.',
    body: 'Edinho trabalhou pela implantação do Instituto Federal em Rio Preto e abriu caminhos para ampliar a presença do ensino superior público e gratuito na cidade.',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '23 anos',
    title: 'A primeira eleição',
    body: 'Edinho disputou sua primeira eleição em Santa Fé do Sul.',
  },
  {
    year: '27 anos',
    title: 'Eleito prefeito',
    body: 'Começava ali uma trajetória que atravessaria mais de cinco décadas.',
  },
  {
    year: '1983',
    title: 'Deputado Estadual',
    body: 'Primeiro de três mandatos na Assembleia Legislativa.',
  },
  {
    year: '1995',
    title: 'Deputado Federal',
    body: 'Edinho chega a Brasília. Ao longo de sua trajetória, seria eleito deputado federal quatro vezes.',
  },
  {
    year: '2001',
    title: 'Prefeito de Rio Preto',
    body: 'Começa o primeiro de quatro mandatos à frente da cidade.',
  },
  {
    year: '2005',
    title: 'Primeiro prefeito reeleito da história de Rio Preto',
    body: 'Ao final dos dois primeiros mandatos consecutivos, eram centenas de obras entregues e uma cidade em transformação.',
  },
  {
    year: '2015',
    title: 'Ministro de Portos',
    body: 'Depois de administrar municípios, atuar no Estado e representar São Paulo no Congresso, Edinho chega ao Governo Federal.',
  },
  {
    year: '2016',
    title: 'Rio Preto chama Edinho de volta',
    body: 'Eleito novamente prefeito, já no primeiro turno. A posse aconteceria em 2017.',
  },
  {
    year: '2020',
    title: 'Reeleito no primeiro turno',
    body: 'Começa seu quarto mandato em Rio Preto.',
  },
  {
    year: '2026',
    title: 'Uma nova missão',
    body: 'Levar novamente a força de São Paulo para Brasília. Edinho Araújo. Deputado Federal 2525.',
  },
];

export const VALUES = ['Ouvir', 'Dialogar', 'Articular', 'Entregar'];

export const PROPOSALS: ProposalItem[] = [
  {
    icon: 'health',
    title: 'Saúde mais forte',
    intro:
      'A saúde será prioridade. O compromisso é destinar 50% dos recursos das emendas parlamentares para o fortalecimento da rede pública e filantrópica de atendimento.',
    points: [
      'Destinar 50% das emendas parlamentares para a área da saúde.',
      'Priorizar investimentos no complexo Hospital de Base/Hospital da Criança e Maternidade, no Hospital Frei Francisco, no Hospital de Amor, nas Santas Casas e nos hospitais municipais.',
      'Apoiar a regionalização dos serviços de saúde para reduzir filas de exames e cirurgias, ampliar o atendimento especializado e aproveitar a estrutura disponível dos hospitais regionais.',
    ],
  },
  {
    icon: 'education',
    title: 'Educação e oportunidades',
    intro:
      'A educação, a ciência e a qualificação profissional são instrumentos essenciais para o desenvolvimento econômico e social.',
    points: [
      'Apoiar a criação de novos cursos no campus da UFSCar em São José do Rio Preto e defender a construção de sua sede própria.',
      'Buscar a ampliação da oferta de cursos do Instituto Federal de São José do Rio Preto e defender mais investimentos nas universidades públicas estaduais, incluindo a Famerp.',
      'Incentivar o ensino técnico, a pesquisa, a inovação e a formação dos jovens para as profissões do futuro.',
    ],
  },
  {
    icon: 'agro',
    title: 'Força para o agro',
    intro:
      'O agronegócio é um dos principais motores da economia regional e precisa de infraestrutura, crédito e previsibilidade para continuar gerando emprego e renda.',
    points: [
      'Defender políticas de crédito rural, seguro agrícola, inovação tecnológica e melhoria das condições de logística e escoamento da produção.',
      'Atuar pela redução da burocracia e pelo fortalecimento da segurança jurídica para produtores rurais de todos os portes.',
      'Propor estudos para a implantação do Plano Safra Plurianual, permitindo planejamento de longo prazo e previsibilidade nos investimentos do setor.',
    ],
  },
  {
    icon: 'people',
    title: 'Cidadania e bem-estar',
    intro: 'O desenvolvimento deve caminhar ao lado da inclusão, da proteção social e do respeito às pessoas.',
    points: [
      'Apoiar programas voltados à longevidade ativa e incentivar a implantação de creches-dia para idosos.',
      'Defender a igualdade de oportunidades, o combate a todas as formas de preconceito e a promoção do diálogo, do respeito e da convivência harmoniosa.',
      'Apoiar iniciativas de proteção às mulheres e o fortalecimento do combate à violência e ao feminicídio.',
    ],
  },
  {
    icon: 'road',
    title: 'Infraestrutura e mobilidade',
    intro: 'Investir em infraestrutura é investir em desenvolvimento, segurança e competitividade para toda a região.',
    points: [
      'Defender a implantação do Macroanel da Região Metropolitana de São José do Rio Preto, integrando as rodovias BR-153, Washington Luís e Assis Chateaubriand.',
      'Cobrar providências imediatas para a recuperação da BR-153, entre São José do Rio Preto e Icém, inclusive com a revisão do modelo de concessão, caso necessário.',
      'Defender a duplicação da Rodovia Assis Chateaubriand entre Guapiaçu e Barretos, a duplicação da Rodovia Feliciano Salles Cunha e a manutenção da Rodovia Euclides da Cunha sem pedágios.',
      'Exigir da concessionária Rumo a conclusão das obras de segurança previstas para a malha ferroviária da região Noroeste, especialmente nos municípios de Mirassol, Cedral e São José do Rio Preto.',
    ],
  },
];

export const WHY_EDINHO = {
  title: 'Brasília não é lugar para aprender o caminho.',
  subtitle: 'É lugar para chegar preparado.',
  points: [
    'Já conhece o Congresso.',
    'Conhece os ministérios.',
    'Conhece os programas federais.',
    'Conhece prefeitos e lideranças paulistas.',
    'E, principalmente, conhece as necessidades de quem vive aqui.',
  ],
  closing: 'Não precisa começar do zero. Está preparado desde o primeiro dia.',
};

export const PARTICIPATE_OPTIONS = [
  { emoji: '📲', title: 'Quero acompanhar', desc: 'Receber agenda, notícias, vídeos e conteúdos de Edinho.' },
  { emoji: '🤝', title: 'Quero participar', desc: 'Ser avisado sobre encontros e atividades na minha região.' },
  { emoji: '💪', title: 'Quero ajudar', desc: 'Participar voluntariamente das ações da campanha.' },
  {
    emoji: '📍',
    title: 'Quero Edinho na minha cidade',
    desc: 'Ajudar a aproximar Edinho das pessoas e das demandas do meu município.',
  },
];
