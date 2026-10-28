import type { Locale } from '../locales';

type LanguageCode = 'pt' | 'en' | 'es';

export interface AboutDictionary {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string; cta: string };
  story: { eyebrow: string; title: string; paragraphs: string[]; portraitAlt: string };
  stats: { years: string; homes: string; closed: string; clients: string };
  languages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    native: string;
    fluent: string;
    blurbs: Record<LanguageCode, string>;
  };
  brokerage: { eyebrow: string; title: string; body: string; license: string; office: string; eho: string };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export const aboutDictionary: Record<Locale, AboutDictionary> = {
  en: {
    meta: {
      title: 'About Jose Costa',
      description:
        'Meet Jose Costa, a Palm Beach County realtor with over 15 years of experience, fluent in English, Portuguese, and Spanish, serving western Palm Beach County, Broward, and South Florida.',
    },
    hero: {
      eyebrow: 'Your South Florida Realtor',
      title: 'Meet Jose Costa',
      intro:
        'A realtor who speaks your language. Literally. Born in Brazil, built in Florida, fluent in three languages, with 15 years in this market.',
      cta: 'Contact Jose',
    },
    story: {
      eyebrow: 'His Story',
      title: 'Born in Brazil. Built in Florida.',
      paragraphs: [
        'Jose Costa grew up in Brazil and moved to the United States in the 1980s. He settled in Fort Lauderdale first, then Wellington in 2004, where he has been ever since. He has lived more of his life in South Florida than in Brazil.',
        "He grows fruit in his backyard and gives it away to friends, neighbors, and clients. He doesn't make a thing of it. The same honesty carries into how he works: if a property is not right for you, he will say so, even when that slows the deal. His aim is that you end up in the right home, not just a home.",
        'Jose is also a real estate investor. He has bought multiple properties himself, which changes how he reads a deal. He knows what it feels like to be on the other side of the table.',
        'Jose is licensed in Florida and affiliated with Atlantic Florida Properties. He works across western Palm Beach County, Broward, and the Treasure Coast, with most of his business in Royal Palm Beach, Wellington, and West Palm Beach.',
      ],
      portraitAlt: 'Jose Costa, South Florida Realtor',
    },
    stats: {
      years: 'Years in Real Estate',
      homes: 'Homes Listed and Sold',
      closed: 'In Closed Sales',
      clients: 'Clients Served',
    },
    languages: {
      eyebrow: 'Communication',
      title: 'Three languages. One realtor.',
      subtitle:
        'South Florida is one of the most multilingual real estate markets in the country. Jose works in the language you actually think in.',
      native: 'Native',
      fluent: 'Fluent',
      blurbs: {
        pt: "Jose grew up speaking Portuguese in Brazil. He is one of the few realtors in South Florida who can handle the entire purchase or rental process in Portuguese.",
        en: 'Jose moved to the United States in the 1980s and has worked in English his entire career. He has lived in the US longer than he lived in Brazil, and is comfortable in every register, from a kitchen-table conversation to a contract review.',
        es: 'Spanish came naturally, given its closeness to Portuguese and how widely it is spoken in South Florida. He works with Spanish-speaking clients across Palm Beach and Broward Counties.',
      },
    },
    brokerage: {
      eyebrow: 'Brokerage',
      title: 'Licensed with Atlantic Florida Properties',
      body: 'Atlantic Florida Properties is a full-service South Florida brokerage serving residential and investment clients across the tri-county area.',
      license: 'FL License',
      office: 'Office',
      eho: 'Equal Housing Opportunity',
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
      title: 'Conozca a Jose Costa',
      description:
        'Jose Costa es agente de bienes raíces en el condado de Palm Beach con más de 15 años de experiencia. Habla español, inglés y portugués y atiende el oeste del condado de Palm Beach, Broward y el sur de la Florida.',
    },
    hero: {
      eyebrow: 'Su agente en el sur de la Florida',
      title: 'Conozca a Jose Costa',
      intro:
        'Un agente que habla su idioma, literalmente. Nació en Brasil, hizo su vida en la Florida, habla tres idiomas y lleva 15 años en este mercado.',
      cta: 'Contactar a Jose',
    },
    story: {
      eyebrow: 'Su historia',
      title: 'Nacido en Brasil. Hecho en la Florida.',
      paragraphs: [
        'Jose Costa creció en Brasil y llegó a los Estados Unidos en los años ochenta. Primero vivió en Fort Lauderdale y en 2004 se mudó a Wellington, donde vive desde entonces. Ha vivido más años en el sur de la Florida que en Brasil.',
        'Cultiva frutas en el patio de su casa y las regala a amigos, vecinos y clientes, sin darle mucha importancia. Esa misma honestidad se nota en su trabajo: si una propiedad no le conviene, se lo dice, aunque eso retrase el negocio. Su meta es que usted termine en la casa correcta, no en cualquier casa.',
        'Jose también invierte en bienes raíces. Ha comprado varias propiedades, y eso cambia la forma en que analiza cada negocio. Sabe lo que se siente estar del otro lado de la mesa.',
        'Jose tiene licencia en la Florida y está afiliado a Atlantic Florida Properties. Trabaja en el oeste del condado de Palm Beach, en Broward y en la Treasure Coast, y la mayor parte de su trabajo está en Royal Palm Beach, Wellington y West Palm Beach.',
      ],
      portraitAlt: 'Jose Costa, agente de bienes raíces en el sur de la Florida',
    },
    stats: {
      years: 'Años en bienes raíces',
      homes: 'Casas listadas y vendidas',
      closed: 'En ventas cerradas',
      clients: 'Clientes atendidos',
    },
    languages: {
      eyebrow: 'Comunicación',
      title: 'Tres idiomas. Un solo agente.',
      subtitle:
        'El sur de la Florida es uno de los mercados inmobiliarios más multilingües del país. Jose trabaja en el idioma en que usted piensa.',
      native: 'Nativo',
      fluent: 'Fluido',
      blurbs: {
        pt: 'Jose creció hablando portugués en Brasil. Es uno de los pocos agentes del sur de la Florida que puede manejar toda la compra o el alquiler en portugués.',
        en: 'Jose llegó a los Estados Unidos en los años ochenta y ha trabajado en inglés toda su carrera. Ha vivido más tiempo en Estados Unidos que en Brasil y se desenvuelve igual de bien en una conversación en la cocina que en la revisión de un contrato.',
        es: 'El español le llegó de forma natural, por su cercanía con el portugués y por lo mucho que se habla en el sur de la Florida. Atiende en español a clientes de los condados de Palm Beach y Broward.',
      },
    },
    brokerage: {
      eyebrow: 'Agencia',
      title: 'Afiliado a Atlantic Florida Properties',
      body: 'Atlantic Florida Properties es una agencia de bienes raíces de servicio completo en el sur de la Florida que atiende a clientes residenciales e inversionistas en los condados de Miami-Dade, Broward y Palm Beach.',
      license: 'Licencia de FL',
      office: 'Oficina',
      eho: 'Igualdad de Oportunidades en la Vivienda',
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
      title: 'Conheça Jose Costa',
      description:
        'Jose Costa é corretor de imóveis no condado de Palm Beach, com mais de 15 anos de experiência. Fala português, inglês e espanhol e atende o oeste do condado de Palm Beach, Broward e o sul da Flórida.',
    },
    hero: {
      eyebrow: 'Seu corretor no sul da Flórida',
      title: 'Conheça Jose Costa',
      intro:
        'Um corretor que fala a sua língua, literalmente. Nasceu no Brasil, construiu a vida na Flórida, fala três idiomas e tem 15 anos neste mercado.',
      cta: 'Falar com o Jose',
    },
    story: {
      eyebrow: 'A história dele',
      title: 'Nascido no Brasil. Feito na Flórida.',
      paragraphs: [
        'Jose Costa cresceu no Brasil e veio para os Estados Unidos nos anos 80. Morou primeiro em Fort Lauderdale e, em 2004, foi para Wellington, onde vive até hoje. Já passou mais tempo da vida no sul da Flórida do que no Brasil.',
        'Ele cultiva frutas no quintal e dá para amigos, vizinhos e clientes, sem fazer alarde. Essa mesma honestidade aparece no trabalho: se um imóvel não serve para você, ele fala, mesmo que isso atrase o negócio. O objetivo dele é que você acabe na casa certa, e não em qualquer casa.',
        'Jose também investe em imóveis. Já comprou várias propriedades, e isso muda a forma como ele analisa cada negócio. Ele sabe como é estar do outro lado da mesa.',
        'Jose é corretor licenciado na Flórida e afiliado à Atlantic Florida Properties. Atua no oeste do condado de Palm Beach, em Broward e na Treasure Coast, com a maior parte do trabalho em Royal Palm Beach, Wellington e West Palm Beach.',
      ],
      portraitAlt: 'Jose Costa, corretor de imóveis no sul da Flórida',
    },
    stats: {
      years: 'Anos no mercado imobiliário',
      homes: 'Imóveis anunciados e vendidos',
      closed: 'Em vendas fechadas',
      clients: 'Clientes atendidos',
    },
    languages: {
      eyebrow: 'Comunicação',
      title: 'Três idiomas. Um só corretor.',
      subtitle:
        'O sul da Flórida é um dos mercados imobiliários mais multilíngues do país. O Jose trabalha no idioma em que você pensa.',
      native: 'Nativo',
      fluent: 'Fluente',
      blurbs: {
        pt: 'Jose cresceu falando português no Brasil. Ele é um dos poucos corretores do sul da Flórida capazes de conduzir toda a compra ou o aluguel em português.',
        en: 'Jose chegou aos Estados Unidos nos anos 80 e trabalha em inglês desde o início da carreira. Já viveu mais tempo nos EUA do que no Brasil e fica à vontade tanto numa conversa na cozinha quanto na revisão de um contrato.',
        es: 'O espanhol veio naturalmente, pela proximidade com o português e por ser tão falado no sul da Flórida. Ele atende em espanhol clientes dos condados de Palm Beach e Broward.',
      },
    },
    brokerage: {
      eyebrow: 'Imobiliária',
      title: 'Afiliado à Atlantic Florida Properties',
      body: 'A Atlantic Florida Properties é uma imobiliária de serviço completo no sul da Flórida, que atende clientes residenciais e investidores nos condados de Miami-Dade, Broward e Palm Beach.',
      license: 'Licença FL',
      office: 'Escritório',
      eho: 'Igualdade de Oportunidades na Habitação',
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
