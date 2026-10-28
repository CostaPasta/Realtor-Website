import type { Locale } from '../locales';

type Copy = { title: string; body: string };

export interface SellDictionary {
  meta: { title: string; description: string };
  hero: { imageAlt: string; eyebrow: string; title: string; intro: string; cta: string };
  stats: { closed: string; homes: string };
  process: { eyebrow: string; title: string; intro: string; steps: Copy[] };
  testimonials: { eyebrow: string; title: string; subtitle: string };
  valuation: { eyebrow: string; title: string; subtitle: string; trust: [string, string, string] };
  options: { eyebrow: string; title: string; subtitle: string; sell: Copy; lease: Copy; link: string };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export const sellDictionary: Record<Locale, SellDictionary> = {
  en: {
    meta: {
      title: 'Sell Your South Florida Home',
      description:
        'Selling your home in South Florida? Jose Costa provides seller representation with a clear pricing strategy, targeted marketing, and negotiation experience in English, Spanish, and Portuguese.',
    },
    hero: {
      imageAlt: 'Homes and canals in Wilton Manors from above',
      eyebrow: 'For Sellers',
      title: "Sell your South Florida home for what it's worth.",
      intro:
        'Pricing, marketing reach, and negotiation decide what a seller walks away with. Jose has spent 15+ years getting all three right.',
      cta: 'Request a Free Valuation',
    },
    stats: { closed: 'In closed sales volume', homes: 'Homes listed and sold' },
    process: {
      eyebrow: "Jose's Seller Process",
      title: 'From valuation to closing day',
      intro: 'Jose has listed and closed 60+ homes across South Florida. The process is the same every time.',
      steps: [
        {
          title: 'Free Home Valuation',
          body: 'Jose runs a comparative market analysis on your home. That means real sales data from comparable properties, not an algorithm estimate.',
        },
        {
          title: 'Pre-Listing Prep',
          body: "Small investments in staging, repairs, and professional photography can yield thousands in return. Jose advises on what's worth spending and what isn't.",
        },
        {
          title: 'Marketing Your Home',
          body: "Jose's listings receive professional photography, targeted social media promotion, and placement on MLS, Zillow, Realtor.com, and international platforms that reach the Brazilian and Latin American buyer pool.",
        },
        {
          title: 'Showings and Offers',
          body: 'Jose handles showing logistics and screens buyers for qualification. When offers come in, he walks you through each one with full analysis.',
        },
        {
          title: 'Negotiation and Closing',
          body: 'The best offer is not always the highest number on the first page. Jose advises on terms, contingencies, and timing so you close at the best number available.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'What Sellers Say',
      title: 'Real results from real sellers',
      subtitle: 'Every seller is different. Every neighborhood is different. The commitment stays the same.',
    },
    valuation: {
      eyebrow: 'Get Started',
      title: "What's your home worth?",
      subtitle: 'Get a free, no-obligation home valuation from Jose. A real analysis, not an algorithm estimate.',
      trust: ['No obligation. Just honest market data.', 'Jose responds within 24 hours', 'Completely confidential'],
    },
    options: {
      eyebrow: 'Your Options',
      title: 'Sell, or consider leasing.',
      subtitle:
        "Not ready to commit? Jose can model both paths for you: what you'd net from a sale today versus what you'd earn holding the property as a rental.",
      sell: {
        title: 'Sell and move on with your equity.',
        body: 'Jose prices, markets, and negotiates your sale to get you the most from it. You take your equity and move on.',
      },
      lease: {
        title: 'Lease and build long-term wealth.',
        body: 'Jose finds and screens tenants and manages the leasing process. Your property generates income while you hold on to it.',
      },
      link: 'Learn More About Leasing Your Property →',
    },
    cta: {
      title: 'Thinking about selling?',
      subtitle:
        "The right time to talk to Jose is before you've made any decisions. Get a free valuation and a candid read on today's market.",
      primary: 'Request a Free Valuation',
      secondary: 'See Market Updates',
    },
  },

  es: {
    meta: {
      title: 'Venda su casa en el sur de la Florida',
      description:
        '¿Quiere vender su casa en el sur de la Florida? Jose Costa lo representa como vendedor con una estrategia de precio clara, buena promoción y experiencia negociando, en español, inglés y portugués.',
    },
    hero: {
      imageAlt: 'Casas y canales de Wilton Manors desde el aire',
      eyebrow: 'Para vendedores',
      title: 'Venda su casa en el sur de la Florida por lo que realmente vale.',
      intro:
        'El precio, el alcance de la promoción y la negociación deciden con cuánto se queda un vendedor. Jose lleva más de 15 años haciendo bien las tres cosas.',
      cta: 'Pedir una valoración gratis',
    },
    stats: { closed: 'En ventas cerradas', homes: 'Casas listadas y vendidas' },
    process: {
      eyebrow: 'El proceso de venta de Jose',
      title: 'De la valoración al día del cierre',
      intro: 'Jose ha listado y cerrado más de 60 casas en el sur de la Florida. El proceso es el mismo cada vez.',
      steps: [
        {
          title: 'Valoración gratis',
          body: 'Jose hace un análisis comparativo de mercado de su casa: datos reales de ventas de propiedades similares, no un cálculo de un algoritmo.',
        },
        {
          title: 'Preparación antes de listar',
          body: 'Pequeñas inversiones en presentación, reparaciones y fotografía profesional pueden devolverle miles de dólares. Jose le aconseja en qué vale la pena gastar y en qué no.',
        },
        {
          title: 'Promoción de su casa',
          body: 'Las propiedades de Jose reciben fotografía profesional, promoción dirigida en redes sociales y publicación en el MLS, Zillow, Realtor.com y plataformas internacionales que llegan a compradores de Brasil y América Latina.',
        },
        {
          title: 'Visitas y ofertas',
          body: 'Jose organiza las visitas y verifica que los compradores califiquen. Cuando llegan las ofertas, revisa cada una con usted con un análisis completo.',
        },
        {
          title: 'Negociación y cierre',
          body: 'La mejor oferta no siempre es el número más alto en la primera página. Jose le aconseja sobre condiciones, contingencias y plazos para que cierre con el mejor número posible.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Lo que dicen los vendedores',
      title: 'Resultados reales de vendedores reales',
      subtitle: 'Cada vendedor es distinto. Cada vecindario es distinto. El compromiso es el mismo.',
    },
    valuation: {
      eyebrow: 'Para empezar',
      title: '¿Cuánto vale su casa?',
      subtitle: 'Pida a Jose una valoración gratis y sin compromiso. Un análisis real, no un cálculo de un algoritmo.',
      trust: [
        'Sin compromiso. Solo datos honestos del mercado.',
        'Jose responde en menos de 24 horas',
        'Totalmente confidencial',
      ],
    },
    options: {
      eyebrow: 'Sus opciones',
      title: 'Vender, o considerar alquilar.',
      subtitle:
        '¿Todavía no se decide? Jose puede comparar los dos caminos: cuánto le quedaría si vende hoy y cuánto ganaría si conserva la propiedad y la alquila.',
      sell: {
        title: 'Venda y llévese su capital.',
        body: 'Jose pone el precio, promociona y negocia su venta para que le saque el mayor provecho. Usted se lleva su capital y sigue adelante.',
      },
      lease: {
        title: 'Alquile y construya patrimonio a largo plazo.',
        body: 'Jose busca y evalúa inquilinos y se encarga del proceso de alquiler. Su propiedad genera ingresos mientras usted la conserva.',
      },
      link: 'Más sobre alquilar su propiedad →',
    },
    cta: {
      title: '¿Está pensando en vender?',
      subtitle:
        'El mejor momento para hablar con Jose es antes de tomar cualquier decisión. Pida una valoración gratis y una opinión franca sobre el mercado actual.',
      primary: 'Pedir una valoración gratis',
      secondary: 'Ver informes del mercado (en inglés)',
    },
  },

  pt: {
    meta: {
      title: 'Venda sua casa no sul da Flórida',
      description:
        'Quer vender sua casa no sul da Flórida? Jose Costa representa vendedores com estratégia de preço, boa divulgação e experiência em negociação, em português, inglês e espanhol.',
    },
    hero: {
      imageAlt: 'Casas e canais de Wilton Manors vistos do alto',
      eyebrow: 'Para vendedores',
      title: 'Venda sua casa no sul da Flórida pelo que ela vale.',
      intro:
        'Preço, alcance da divulgação e negociação decidem com quanto o vendedor sai. O Jose passou mais de 15 anos acertando as três coisas.',
      cta: 'Pedir uma avaliação gratuita',
    },
    stats: { closed: 'Em vendas fechadas', homes: 'Imóveis anunciados e vendidos' },
    process: {
      eyebrow: 'O processo de venda do Jose',
      title: 'Da avaliação ao dia do fechamento',
      intro: 'O Jose já anunciou e fechou mais de 60 imóveis no sul da Flórida. O processo é o mesmo toda vez.',
      steps: [
        {
          title: 'Avaliação gratuita',
          body: 'O Jose faz uma análise comparativa de mercado do seu imóvel: dados reais de vendas de imóveis parecidos, e não uma estimativa de algoritmo.',
        },
        {
          title: 'Preparação antes de anunciar',
          body: 'Pequenos investimentos em apresentação, reparos e fotos profissionais podem render milhares de dólares. O Jose orienta onde vale a pena gastar e onde não vale.',
        },
        {
          title: 'Divulgação do seu imóvel',
          body: 'Os imóveis do Jose recebem fotos profissionais, divulgação direcionada nas redes sociais e anúncio no MLS, Zillow, Realtor.com e plataformas internacionais que alcançam compradores do Brasil e da América Latina.',
        },
        {
          title: 'Visitas e propostas',
          body: 'O Jose organiza as visitas e confirma se os compradores estão qualificados. Quando as propostas chegam, ele analisa cada uma com você.',
        },
        {
          title: 'Negociação e fechamento',
          body: 'A melhor proposta nem sempre é o maior número na primeira página. O Jose orienta sobre condições, contingências e prazos para você fechar pelo melhor valor possível.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'O que dizem os vendedores',
      title: 'Resultados reais de vendedores reais',
      subtitle: 'Cada vendedor é diferente. Cada bairro é diferente. O compromisso é o mesmo.',
    },
    valuation: {
      eyebrow: 'Para começar',
      title: 'Quanto vale a sua casa?',
      subtitle: 'Peça ao Jose uma avaliação gratuita e sem compromisso. Uma análise de verdade, não uma estimativa de algoritmo.',
      trust: ['Sem compromisso. Só dados honestos do mercado.', 'O Jose responde em até 24 horas', 'Totalmente confidencial'],
    },
    options: {
      eyebrow: 'Suas opções',
      title: 'Vender, ou pensar em alugar.',
      subtitle:
        'Ainda não decidiu? O Jose pode comparar os dois caminhos: quanto você receberia vendendo hoje e quanto ganharia mantendo o imóvel alugado.',
      sell: {
        title: 'Venda e leve o seu patrimônio.',
        body: 'O Jose define o preço, divulga e negocia a venda para você tirar o máximo dela. Você leva o seu patrimônio e segue em frente.',
      },
      lease: {
        title: 'Alugue e construa patrimônio a longo prazo.',
        body: 'O Jose encontra e analisa inquilinos e cuida de todo o processo de locação. Seu imóvel gera renda enquanto você o mantém.',
      },
      link: 'Saiba mais sobre alugar seu imóvel →',
    },
    cta: {
      title: 'Pensando em vender?',
      subtitle:
        'A melhor hora para falar com o Jose é antes de tomar qualquer decisão. Peça uma avaliação gratuita e uma opinião sincera sobre o mercado de hoje.',
      primary: 'Pedir uma avaliação gratuita',
      secondary: 'Ver relatórios do mercado (em inglês)',
    },
  },
};
