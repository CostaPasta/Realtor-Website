import type { Locale } from '../locales';
import type { NeighborhoodCardLabels } from '@/components/NeighborhoodCard';

type Copy = { title: string; body: string };

export interface HomeDictionary {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    eyebrow: string;
    titleStart: string;
    titleEmphasis: string;
    titleEnd: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    licensed: string;
    portraitAlt: string;
  };
  stats: { years: string; clients: string; languages: string; closed: string };
  scenes: { rent: Copy; buy: Copy; sell: Copy };
  why: { eyebrow: string; title: string; subtitle: string; features: [Copy, Copy, Copy, Copy] };
  buyer: { eyebrow: string; title: string; body: string; link: string };
  seller: { eyebrow: string; title: string; body: string; link: string };
  areas: { eyebrow: string; title: string; subtitle: string; viewAll: string };
  cardLabels?: NeighborhoodCardLabels;
  /** Translated card text for featured neighborhoods; English reads straight from the data. */
  featured?: Record<string, { name?: string; tagline: string; bestFor: string }>;
  testimonials: { eyebrow: string; title: string; subtitle: string; more: string };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export const homeDictionary: Record<Locale, HomeDictionary> = {
  en: {
    meta: {
      title: 'Jose Costa | Palm Beach County Realtor | Rentals, Sales & More',
      description:
        'Jose Costa helps families rent, buy, and sell homes across western Palm Beach County, in English, Spanish, and Portuguese.',
    },
    hero: {
      imageAlt: 'South Florida waterfront',
      eyebrow: 'South Florida Real Estate Expert',
      titleStart: 'Your home, in the ',
      titleEmphasis: 'language you trust',
      titleEnd: '.',
      intro:
        'Jose Costa has helped South Florida families rent, buy, and sell homes for over 15 years. Based in Palm Beach County, he works in English, Portuguese, and Spanish so every client can communicate comfortably and confidently.',
      primaryCta: 'Find a Rental Home',
      secondaryCta: 'Contact Jose',
      licensed: 'Licensed with Atlantic Florida Properties',
      portraitAlt: 'Jose Costa, South Florida Realtor',
    },
    stats: {
      years: 'Years of Experience',
      clients: 'Clients Served',
      languages: 'Languages Spoken',
      closed: 'In Closed Sales',
    },
    scenes: {
      rent: { title: 'Find a Rental Home', body: 'Royal Palm Beach · West Palm Beach · Loxahatchee' },
      buy: { title: 'Buy Your First Home', body: 'Wellington · Lake Worth · Boynton Beach' },
      sell: { title: 'Sell or Lease Your Property', body: 'Royal Palm Beach · Wellington · Lake Worth' },
    },
    why: {
      eyebrow: 'Why Jose?',
      title: 'What makes working with Jose different?',
      subtitle:
        'South Florida attracts buyers and sellers from across the world. Experience matters. So does language.',
      features: [
        {
          title: 'Three Languages, One Realtor',
          body: 'Jose speaks English, Portuguese, and Spanish. For many clients, having an agent who speaks their language changes how much they actually understand throughout the process. He answers every question and explains every document before you sign.',
        },
        {
          title: 'Deep Local Expertise',
          body: 'With 15 years in the South Florida market, Jose knows which neighborhoods are growing, which streets to avoid, and where to find the best schools.',
        },
        {
          title: 'You Have Representation',
          body: 'Zillow shows you houses. Jose negotiates, protects your interests, handles inspections, and advocates for you through closing.',
        },
        {
          title: 'From Rental to Ownership',
          body: "Many of Jose's clients start by renting through him and come back a few years later to buy. He knows both sides of the market, and many clients stay in touch long after they close.",
        },
      ],
    },
    buyer: {
      eyebrow: 'For Buyers',
      title: 'Buying in South Florida',
      body: 'Jose identifies properties worth seeing, negotiates on your behalf, and handles every step in English, Spanish, or Portuguese. Before you sign anything, he explains in writing exactly how his fee works.',
      link: 'Start Your Search →',
    },
    seller: {
      eyebrow: 'For Sellers',
      title: 'Selling Your Home',
      body: 'The right price from the start attracts the right buyers. Jose handles pricing, marketing, and negotiation so you close at a number that works for you.',
      link: 'Get a Home Valuation →',
    },
    areas: {
      eyebrow: 'Local Expertise',
      title: 'South Florida Areas Jose Knows Best',
      subtitle: 'The communities where Jose works every week.',
      viewAll: 'View All Neighborhoods →',
    },
    testimonials: {
      eyebrow: 'Client Stories',
      title: "What Jose's clients are saying",
      subtitle: 'Renters, buyers, and sellers who have worked with Jose.',
      more: 'Read More Stories →',
    },
    cta: {
      title: 'Ready to make your move in South Florida?',
      subtitle:
        "Whether you're renting, buying, selling, or just exploring your options, the first conversation with Jose is free and comes with no pressure.",
      primary: 'Contact Jose',
      secondary: 'Browse Neighborhoods',
    },
  },

  es: {
    meta: {
      title: 'Jose Costa | Agente de bienes raíces en Palm Beach | Alquiler, compra y venta',
      description:
        'Jose Costa ayuda a familias a alquilar, comprar y vender casas en el oeste del condado de Palm Beach, en español, inglés y portugués.',
    },
    hero: {
      imageAlt: 'Costa del sur de la Florida',
      eyebrow: 'Bienes raíces en el sur de la Florida',
      titleStart: 'Su hogar, en el ',
      titleEmphasis: 'idioma en que confía',
      titleEnd: '.',
      intro:
        'Jose Costa ha ayudado a familias del sur de la Florida a alquilar, comprar y vender casas por más de 15 años. Desde el condado de Palm Beach, trabaja en español, inglés y portugués para que cada cliente entienda cada paso y decida con confianza.',
      primaryCta: 'Buscar casa para alquilar',
      secondaryCta: 'Contactar a Jose',
      licensed: 'Agente con licencia, afiliado a Atlantic Florida Properties',
      portraitAlt: 'Jose Costa, agente de bienes raíces en el sur de la Florida',
    },
    stats: {
      years: 'Años de experiencia',
      clients: 'Clientes atendidos',
      languages: 'Idiomas',
      closed: 'En ventas cerradas',
    },
    scenes: {
      rent: { title: 'Casas en alquiler', body: 'Royal Palm Beach · West Palm Beach · Loxahatchee' },
      buy: { title: 'Compre su primera casa', body: 'Wellington · Lake Worth · Boynton Beach' },
      sell: { title: 'Venda o alquile su propiedad', body: 'Royal Palm Beach · Wellington · Lake Worth' },
    },
    why: {
      eyebrow: '¿Por qué Jose?',
      title: '¿Qué hace diferente trabajar con Jose?',
      subtitle:
        'Al sur de la Florida llegan compradores y vendedores de todo el mundo. La experiencia importa. El idioma también.',
      features: [
        {
          title: 'Tres idiomas, un solo agente',
          body: 'Jose habla español, inglés y portugués. Para muchos clientes, tener un agente que habla su idioma cambia cuánto entienden durante todo el proceso. Él responde cada pregunta y explica cada documento antes de que usted firme.',
        },
        {
          title: 'Conoce la zona a fondo',
          body: 'Con 15 años en el mercado del sur de la Florida, Jose sabe qué vecindarios están creciendo, qué calles conviene evitar y dónde están las mejores escuelas.',
        },
        {
          title: 'Alguien que lo representa',
          body: 'Zillow le muestra casas. Jose negocia, protege sus intereses, se encarga de las inspecciones y lo acompaña hasta el cierre.',
        },
        {
          title: 'Del alquiler a la compra',
          body: 'Muchos clientes de Jose empiezan alquilando con él y unos años después regresan para comprar. Conoce los dos lados del mercado, y muchos clientes siguen en contacto con él mucho después del cierre.',
        },
      ],
    },
    buyer: {
      eyebrow: 'Para compradores',
      title: 'Comprar en el sur de la Florida',
      body: 'Jose encuentra las propiedades que vale la pena ver, negocia por usted y se encarga de cada paso en español, inglés o portugués. Antes de que usted firme algo, le explica por escrito cómo funciona su comisión.',
      link: 'Empiece su búsqueda (en inglés) →',
    },
    seller: {
      eyebrow: 'Para vendedores',
      title: 'Vender su casa',
      body: 'El precio correcto desde el principio atrae a los compradores correctos. Jose se encarga del precio, la publicidad y la negociación para que usted cierre con un número que le convenga.',
      link: 'Pida una valoración de su casa (en inglés) →',
    },
    areas: {
      eyebrow: 'Conocimiento local',
      title: 'Las zonas que Jose conoce mejor',
      subtitle: 'Las comunidades donde Jose trabaja cada semana.',
      viewAll: 'Ver todos los vecindarios (en inglés) →',
    },
    cardLabels: {
      county: 'Condado de {county}',
      medianPrice: 'Precio medio',
      avgDays: 'Días en el mercado',
      days: 'días',
      bestFor: 'Ideal para:',
    },
    featured: {
      'royal-palm-beach': {
        tagline: 'Un pueblo familiar en el oeste del condado de Palm Beach.',
        bestFor:
          'Familias, compradores de primera vivienda, inquilinos y dueños que buscan inquilinos confiables',
      },
      'the-acreage': {
        name: 'The Acreage y Loxahatchee',
        tagline: 'Terrenos de 1.25 acres, sin HOA y a 15 minutos de Wellington.',
        bestFor:
          'Compradores que buscan espacio, familias con caballos, inversionistas y quienes quieren la Florida rural',
      },
      'lake-worth-beach': {
        tagline:
          'Un centro histórico para recorrer a pie, a dos millas del Atlántico, con acceso al Tri-Rail y bungalows sin HOA que todavía se consiguen por menos de $500,000.',
        bestFor:
          'Compradores de primera vivienda, inversionistas y quienes quieren hacer todo a pie en un barrio con carácter',
      },
    },
    testimonials: {
      eyebrow: 'Clientes',
      title: 'Lo que dicen los clientes de Jose',
      subtitle: 'Inquilinos, compradores y vendedores que han trabajado con Jose.',
      more: 'Ver más opiniones →',
    },
    cta: {
      title: '¿Listo para dar el siguiente paso?',
      subtitle:
        'Ya sea que quiera alquilar, comprar o vender, o que solo esté explorando, la primera conversación con Jose es gratis y sin compromiso.',
      primary: 'Contactar a Jose',
      secondary: 'Ver casas en alquiler',
    },
  },

  pt: {
    meta: {
      title: 'Jose Costa | Corretor de imóveis em Palm Beach | Aluguel, compra e venda',
      description:
        'Jose Costa ajuda famílias a alugar, comprar e vender imóveis no oeste do condado de Palm Beach, em português, inglês e espanhol.',
    },
    hero: {
      imageAlt: 'Litoral do sul da Flórida',
      eyebrow: 'Imóveis no sul da Flórida',
      titleStart: 'Sua casa, no ',
      titleEmphasis: 'idioma em que você confia',
      titleEnd: '.',
      intro:
        'Há mais de 15 anos, Jose Costa ajuda famílias do sul da Flórida a alugar, comprar e vender imóveis. Baseado no condado de Palm Beach, ele atende em português, inglês e espanhol, para que cada cliente entenda cada etapa e decida com segurança.',
      primaryCta: 'Encontrar casa para alugar',
      secondaryCta: 'Falar com o Jose',
      licensed: 'Corretor licenciado, afiliado à Atlantic Florida Properties',
      portraitAlt: 'Jose Costa, corretor de imóveis no sul da Flórida',
    },
    stats: {
      years: 'Anos de experiência',
      clients: 'Clientes atendidos',
      languages: 'Idiomas',
      closed: 'Em vendas fechadas',
    },
    scenes: {
      rent: { title: 'Casas para alugar', body: 'Royal Palm Beach · West Palm Beach · Loxahatchee' },
      buy: { title: 'Compre sua primeira casa', body: 'Wellington · Lake Worth · Boynton Beach' },
      sell: { title: 'Venda ou alugue seu imóvel', body: 'Royal Palm Beach · Wellington · Lake Worth' },
    },
    why: {
      eyebrow: 'Por que o Jose?',
      title: 'O que muda quando você trabalha com o Jose?',
      subtitle:
        'O sul da Flórida atrai compradores e vendedores do mundo inteiro. Experiência faz diferença. O idioma também.',
      features: [
        {
          title: 'Três idiomas, um só corretor',
          body: 'Jose fala português, inglês e espanhol. Para muitos clientes, ter um corretor que fala a sua língua muda o quanto eles realmente entendem durante o processo. Ele responde cada pergunta e explica cada documento antes de você assinar.',
        },
        {
          title: 'Conhece a região a fundo',
          body: 'Com 15 anos no mercado do sul da Flórida, Jose sabe quais bairros estão crescendo, quais ruas evitar e onde ficam as melhores escolas.',
        },
        {
          title: 'Alguém do seu lado',
          body: 'O Zillow mostra casas. O Jose negocia, defende seus interesses, cuida das inspeções e acompanha você até o fechamento.',
        },
        {
          title: 'Do aluguel à casa própria',
          body: 'Muitos clientes começam alugando com o Jose e voltam alguns anos depois para comprar. Ele conhece os dois lados do mercado, e muitos clientes continuam em contato muito depois do fechamento.',
        },
      ],
    },
    buyer: {
      eyebrow: 'Para compradores',
      title: 'Comprar no sul da Flórida',
      body: 'Jose seleciona os imóveis que valem a visita, negocia por você e cuida de cada etapa em português, inglês ou espanhol. Antes de você assinar qualquer coisa, ele explica por escrito como funciona a comissão dele.',
      link: 'Comece sua busca (em inglês) →',
    },
    seller: {
      eyebrow: 'Para vendedores',
      title: 'Vender sua casa',
      body: 'O preço certo desde o início atrai os compradores certos. Jose cuida do preço, da divulgação e da negociação para você fechar por um valor que faça sentido.',
      link: 'Peça uma avaliação do seu imóvel (em inglês) →',
    },
    areas: {
      eyebrow: 'Conhecimento local',
      title: 'As regiões que o Jose conhece melhor',
      subtitle: 'As comunidades onde o Jose trabalha toda semana.',
      viewAll: 'Ver todos os bairros (em inglês) →',
    },
    cardLabels: {
      county: 'Condado de {county}',
      medianPrice: 'Preço mediano',
      avgDays: 'Dias no mercado',
      days: 'dias',
      bestFor: 'Ideal para:',
    },
    featured: {
      'royal-palm-beach': {
        tagline: 'Uma cidade familiar no oeste do condado de Palm Beach.',
        bestFor:
          'Famílias, quem vai comprar o primeiro imóvel, inquilinos e proprietários em busca de inquilinos confiáveis',
      },
      'the-acreage': {
        name: 'The Acreage e Loxahatchee',
        tagline: 'Terrenos de 1,25 acre, sem HOA e a 15 minutos de Wellington.',
        bestFor:
          'Quem quer espaço, famílias com cavalos, investidores e quem busca o lado rural da Flórida',
      },
      'lake-worth-beach': {
        tagline:
          'Centro histórico para fazer tudo a pé, a duas milhas do Atlântico, com acesso ao Tri-Rail e bangalôs sem HOA ainda na faixa dos US$ 400 mil.',
        bestFor:
          'Quem vai comprar o primeiro imóvel, investidores e quem valoriza fazer tudo a pé num bairro com personalidade',
      },
    },
    testimonials: {
      eyebrow: 'Clientes',
      title: 'O que dizem os clientes do Jose',
      subtitle: 'Inquilinos, compradores e vendedores que trabalharam com o Jose.',
      more: 'Ver mais depoimentos →',
    },
    cta: {
      title: 'Pronto para dar o próximo passo?',
      subtitle:
        'Seja para alugar, comprar ou vender, ou só para tirar dúvidas, a primeira conversa com o Jose é gratuita e sem compromisso.',
      primary: 'Falar com o Jose',
      secondary: 'Ver casas para alugar',
    },
  },
};
