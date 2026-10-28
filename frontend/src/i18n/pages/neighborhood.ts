import type { Locale } from '../locales';

// Fixed text on the neighborhood page template. `{name}` and `{county}` are filled in.

type PoiCategory = 'Park' | 'Shopping' | 'Dining' | 'Community' | 'Recreation' | 'Transit';
type SchoolLevel = string;

export interface NeighborhoodUiDictionary {
  metaTitle: string;
  metaDescription: string;
  heroImageAlt: string;
  breadcrumb: string;
  countyBadge: string;
  countyLabel: string;
  populationLabel: string;
  whyEyebrow: string;
  whyTitle: string;
  joseTake: string;
  communityEyebrow: string;
  communityTitle: string;
  census: {
    population: string;
    medianAge: string;
    medianHouseholdIncome: string;
    perCapitaIncome: string;
    ownerOccupied: string;
    renterOccupied: string;
  };
  budgetEyebrow: string;
  budgetTitle: string;
  budgetSubtitle: string;
  sellerHookTitle: string;
  sellerHookBody: string;
  sellerHookCta: string;
  calcTitle: string;
  calcBody: string;
  calcCta: string;
  schoolsEyebrow: string;
  schoolsTitle: string;
  schoolsSubtitle: string;
  schoolLevels: Record<SchoolLevel, string>;
  localEyebrow: string;
  localTitle: string;
  poiCategories: Record<PoiCategory, string>;
  buyingEyebrow: string;
  buyingTitle: string;
  buyerFallback: string;
  rentingEyebrow: string;
  rentingTitle: string;
  rentalFallback: string;
  sellingEyebrow: string;
  sellingTitle: string;
  sellerFallback: string;
  whatsapp: string;
  aboutEyebrow: string;
  aboutTitle: string;
  resources: string;
  sidebarRole: string;
  callOrText: string;
  respondTime: string;
  experience: string;
  marketDataLabel: string;
  marketDataBody: string;
  marketDataCta: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const neighborhoodUi: Record<Locale, NeighborhoodUiDictionary> = {
  en: {
    metaTitle: '{name} Real Estate',
    metaDescription:
      'Looking to rent, buy, or sell in {name}? Jose Costa is a Palm Beach County realtor fluent in English, Spanish, and Portuguese serving {county} County.',
    heroImageAlt: '{name} skyline',
    breadcrumb: 'Neighborhoods',
    countyBadge: '{county} County',
    countyLabel: 'County',
    populationLabel: 'Population',
    whyEyebrow: 'Why Here',
    whyTitle: 'Why {name}?',
    joseTake: "Jose's Take",
    communityEyebrow: 'The Community',
    communityTitle: 'Who lives in {name}?',
    census: {
      population: 'Population',
      medianAge: 'Median Age',
      medianHouseholdIncome: 'Median Household Income',
      perCapitaIncome: 'Per Capita Income',
      ownerOccupied: 'Owner-Occupied',
      renterOccupied: 'Renter-Occupied',
    },
    budgetEyebrow: "What You'll Pay",
    budgetTitle: 'What does your budget get you here?',
    budgetSubtitle: 'Honest ranges, not the headline number on Zillow.',
    sellerHookTitle: 'Own a home in {name}?',
    sellerHookBody:
      "Jose does a free comparative market analysis: what it's worth today, recent comparable sales, and realistic days on market.",
    sellerHookCta: "What's my home worth?",
    calcTitle: 'Renting in {name}? Compare it with owning.',
    calcBody: 'A 3-bedroom here is listed at a median of {rent} a month, and houses start around {price}. See what a starter house would cost you each month with 3.5% down.',
    calcCta: 'Open the Calculator',
    schoolsEyebrow: 'The Schools',
    schoolsTitle: 'Schools in {name}',
    schoolsSubtitle: 'Ratings from GreatSchools.org. Always visit in person.',
    schoolLevels: { Elementary: 'Elementary', Middle: 'Middle', High: 'High', 'K-8': 'K-8' },
    localEyebrow: 'Local Life',
    localTitle: 'Around {name}',
    poiCategories: {
      Park: 'Park',
      Shopping: 'Shopping',
      Dining: 'Dining',
      Community: 'Community',
      Recreation: 'Recreation',
      Transit: 'Transit',
    },
    buyingEyebrow: 'Buying Here',
    buyingTitle: 'Looking to buy in {name}?',
    buyerFallback: 'Jose knows which streets to target and which to avoid, before you start searching listings.',
    rentingEyebrow: 'Renting Here',
    rentingTitle: 'Looking to rent in {name}?',
    rentalFallback:
      'Jose tracks this rental market and can walk you through current availability and what to expect in your price range.',
    sellingEyebrow: 'Selling Here',
    sellingTitle: 'Thinking of selling in {name}?',
    sellerFallback:
      'Jose does free comparative market analyses: pricing, recent comparable sales, and realistic days on market. No listing required.',
    whatsapp: 'Chat on WhatsApp',
    aboutEyebrow: 'The Full Story',
    aboutTitle: 'About {name}',
    resources: 'Local Resources',
    sidebarRole: 'Realtor · Atlantic Florida Properties',
    callOrText: 'Call or Text',
    respondTime: 'Jose replies within 24 hours.',
    experience: '15+ Years · Palm Beach County',
    marketDataLabel: 'Current Market Data',
    marketDataBody:
      'Jose pulls current pricing, days on market, and comparable sales for {name}, free and with no obligation.',
    marketDataCta: 'Get a Free Market Report',
    ctaTitle: 'Thinking about {name}?',
    ctaSubtitle:
      "Whether you're looking to rent, buy, or eventually sell in {name}, Jose knows this market and is available in English, Spanish, and Portuguese.",
    ctaPrimary: 'Contact Jose',
    ctaSecondary: 'View All Neighborhoods',
  },

  es: {
    metaTitle: 'Bienes raíces en {name}',
    metaDescription:
      '¿Quiere alquilar, comprar o vender en {name}? Jose Costa es agente de bienes raíces en el condado de Palm Beach y habla español, inglés y portugués.',
    heroImageAlt: 'Vista de {name}',
    breadcrumb: 'Vecindarios',
    countyBadge: 'Condado de {county}',
    countyLabel: 'Condado',
    populationLabel: 'Población',
    whyEyebrow: 'Por qué aquí',
    whyTitle: '¿Por qué {name}?',
    joseTake: 'La opinión de Jose',
    communityEyebrow: 'La comunidad',
    communityTitle: '¿Quién vive en {name}?',
    census: {
      population: 'Población',
      medianAge: 'Edad mediana',
      medianHouseholdIncome: 'Ingreso mediano por hogar',
      perCapitaIncome: 'Ingreso per cápita',
      ownerOccupied: 'Viviendas de sus dueños',
      renterOccupied: 'Viviendas alquiladas',
    },
    budgetEyebrow: 'Cuánto cuesta',
    budgetTitle: '¿Qué consigue con su presupuesto aquí?',
    budgetSubtitle: 'Rangos honestos, no el número llamativo de Zillow.',
    sellerHookTitle: '¿Tiene una casa en {name}?',
    sellerHookBody:
      'Jose hace un análisis comparativo de mercado gratis: cuánto vale hoy, ventas comparables recientes y cuánto tardaría en venderse.',
    sellerHookCta: '¿Cuánto vale mi casa?',
    calcTitle: '¿Alquila en {name}? Compárelo con ser dueño.',
    calcBody: 'Aquí una casa de 3 habitaciones se anuncia por una mediana de {rent} al mes, y las casas empiezan alrededor de {price}. Vea cuánto le costaría cada mes una primera casa con 3.5% de pago inicial.',
    calcCta: 'Abrir la calculadora',
    schoolsEyebrow: 'Las escuelas',
    schoolsTitle: 'Escuelas en {name}',
    schoolsSubtitle: 'Calificaciones de GreatSchools.org. Visítelas siempre en persona.',
    schoolLevels: { Elementary: 'Primaria', Middle: 'Intermedia', High: 'Secundaria', 'K-8': 'K-8' },
    localEyebrow: 'Vida local',
    localTitle: 'Qué hay en {name}',
    poiCategories: {
      Park: 'Parque',
      Shopping: 'Compras',
      Dining: 'Restaurantes',
      Community: 'Comunidad',
      Recreation: 'Recreación',
      Transit: 'Transporte',
    },
    buyingEyebrow: 'Comprar aquí',
    buyingTitle: '¿Quiere comprar en {name}?',
    buyerFallback: 'Jose sabe qué calles buscar y cuáles evitar antes de que usted empiece a ver anuncios.',
    rentingEyebrow: 'Alquilar aquí',
    rentingTitle: '¿Busca alquilar en {name}?',
    rentalFallback:
      'Jose sigue de cerca este mercado de alquiler y puede contarle qué hay disponible y qué esperar en su rango de precio.',
    sellingEyebrow: 'Vender aquí',
    sellingTitle: '¿Piensa vender en {name}?',
    sellerFallback:
      'Jose hace análisis comparativos de mercado gratis: precio, ventas comparables recientes y tiempo realista de venta. Sin obligación de listar.',
    whatsapp: 'Escribir por WhatsApp',
    aboutEyebrow: 'La historia completa',
    aboutTitle: 'Sobre {name}',
    resources: 'Recursos locales',
    sidebarRole: 'Agente · Atlantic Florida Properties',
    callOrText: 'Llamar o enviar texto',
    respondTime: 'Jose responde en menos de 24 horas.',
    experience: '15+ años · Condado de Palm Beach',
    marketDataLabel: 'Datos actuales del mercado',
    marketDataBody:
      'Jose le prepara precios actuales, días en el mercado y ventas comparables en {name}, gratis y sin compromiso.',
    marketDataCta: 'Pedir un informe gratis',
    ctaTitle: '¿Está pensando en {name}?',
    ctaSubtitle:
      'Ya sea que quiera alquilar, comprar o vender en {name}, Jose conoce este mercado y le atiende en español, inglés y portugués.',
    ctaPrimary: 'Contactar a Jose',
    ctaSecondary: 'Ver todos los vecindarios (en inglés)',
  },

  pt: {
    metaTitle: 'Imóveis em {name}',
    metaDescription:
      'Quer alugar, comprar ou vender em {name}? Jose Costa é corretor de imóveis no condado de Palm Beach e atende em português, inglês e espanhol.',
    heroImageAlt: 'Vista de {name}',
    breadcrumb: 'Bairros',
    countyBadge: 'Condado de {county}',
    countyLabel: 'Condado',
    populationLabel: 'População',
    whyEyebrow: 'Por que aqui',
    whyTitle: 'Por que {name}?',
    joseTake: 'A opinião do Jose',
    communityEyebrow: 'A comunidade',
    communityTitle: 'Quem mora em {name}?',
    census: {
      population: 'População',
      medianAge: 'Idade mediana',
      medianHouseholdIncome: 'Renda mediana por domicílio',
      perCapitaIncome: 'Renda per capita',
      ownerOccupied: 'Imóveis dos donos',
      renterOccupied: 'Imóveis alugados',
    },
    budgetEyebrow: 'Quanto custa',
    budgetTitle: 'O que o seu orçamento compra aqui?',
    budgetSubtitle: 'Faixas realistas, não o número de vitrine do Zillow.',
    sellerHookTitle: 'Tem uma casa em {name}?',
    sellerHookBody:
      'O Jose faz uma análise comparativa de mercado gratuita: quanto vale hoje, vendas recentes de imóveis parecidos e o tempo realista de venda.',
    sellerHookCta: 'Quanto vale a minha casa?',
    calcTitle: 'Paga aluguel em {name}? Compare com a casa própria.',
    calcBody: 'Aqui uma casa de 3 quartos é anunciada por uma mediana de {rent} por mês, e as casas começam por volta de {price}. Veja quanto custaria por mês uma primeira casa com 3,5% de entrada.',
    calcCta: 'Abrir a calculadora',
    schoolsEyebrow: 'As escolas',
    schoolsTitle: 'Escolas em {name}',
    schoolsSubtitle: 'Notas do GreatSchools.org. Visite sempre pessoalmente.',
    schoolLevels: { Elementary: 'Fundamental I', Middle: 'Fundamental II', High: 'Ensino médio', 'K-8': 'K-8' },
    localEyebrow: 'Vida local',
    localTitle: 'O que tem em {name}',
    poiCategories: {
      Park: 'Parque',
      Shopping: 'Compras',
      Dining: 'Restaurantes',
      Community: 'Comunidade',
      Recreation: 'Lazer',
      Transit: 'Transporte',
    },
    buyingEyebrow: 'Comprar aqui',
    buyingTitle: 'Quer comprar em {name}?',
    buyerFallback: 'O Jose sabe quais ruas procurar e quais evitar antes de você começar a olhar anúncios.',
    rentingEyebrow: 'Alugar aqui',
    rentingTitle: 'Procura alugar em {name}?',
    rentalFallback:
      'O Jose acompanha este mercado de aluguel e pode mostrar o que está disponível e o que esperar na sua faixa de preço.',
    sellingEyebrow: 'Vender aqui',
    sellingTitle: 'Pensando em vender em {name}?',
    sellerFallback:
      'O Jose faz análises comparativas de mercado gratuitas: preço, vendas recentes de imóveis parecidos e tempo realista de venda. Sem obrigação de anunciar.',
    whatsapp: 'Chamar no WhatsApp',
    aboutEyebrow: 'A história completa',
    aboutTitle: 'Sobre {name}',
    resources: 'Recursos locais',
    sidebarRole: 'Corretor · Atlantic Florida Properties',
    callOrText: 'Ligar ou mandar mensagem',
    respondTime: 'O Jose responde em até 24 horas.',
    experience: '15+ anos · Condado de Palm Beach',
    marketDataLabel: 'Dados atuais do mercado',
    marketDataBody:
      'O Jose levanta preços atuais, tempo no mercado e vendas comparáveis em {name}, de graça e sem compromisso.',
    marketDataCta: 'Pedir um relatório gratuito',
    ctaTitle: 'Pensando em {name}?',
    ctaSubtitle:
      'Seja para alugar, comprar ou vender em {name}, o Jose conhece este mercado e atende em português, inglês e espanhol.',
    ctaPrimary: 'Falar com o Jose',
    ctaSecondary: 'Ver todos os bairros (em inglês)',
  },
};

/** Fills `{name}` and `{county}` placeholders. */
export function fill(text: string, values: { name?: string; county?: string }): string {
  return text.replace('{name}', values.name ?? '').replace('{county}', values.county ?? '');
}
