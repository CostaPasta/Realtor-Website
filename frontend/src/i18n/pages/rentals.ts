import type { Locale } from '../locales';

type Copy = { title: string; body: string };

export interface RentalsDictionary {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    intro: string;
    renterCta: string;
    landlordCta: string;
  };
  renters: {
    eyebrow: string;
    title: string;
    perMonth: string;
    rangeNote: string;
    cards: [Copy, Copy, Copy];
    portraitAlt: string;
    asideTitle: string;
    asideBody: string;
    formTitle: string;
    formSubtitle: string;
  };
  landlords: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: [Copy, Copy, Copy, Copy];
    formTitle: string;
    formSubtitle: string;
    pageLink: string;
  };
  ownBand: { title: string; body: string; cta: string };
  available: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beds: string;
    baths: string;
    sqft: string;
    now: string;
    /** `{date}` is replaced with the move-in date. */
    from: string;
    pets: string;
    ask: string;
  };
  cta: { title: string; subtitle: string; whatsapp: string; call: string };
}

export const rentalsDictionary: Record<Locale, RentalsDictionary> = {
  en: {
    meta: {
      title: 'Rental Homes in Palm Beach County',
      description:
        'Looking to rent a home in Royal Palm Beach, West Palm Beach, Wellington, or surrounding Palm Beach County? Jose Costa helps renters find quality homes and helps landlords find reliable tenants, in English, Spanish, and Portuguese.',
    },
    hero: {
      imageAlt: 'Rental homes in Palm Beach County',
      eyebrow: 'Rentals and Property Management',
      title: 'Find your next home to rent in Palm Beach County.',
      intro:
        'Jose Costa has placed hundreds of families in rental homes across western Palm Beach County, working in English, Spanish, and Portuguese. He works with renters and landlords both, and he knows this market well.',
      renterCta: 'Find a Rental Home',
      landlordCta: "I'm a Landlord",
    },
    renters: {
      eyebrow: 'For Renters',
      title: 'Find the right home for your family.',
      perMonth: '/ mo',
      rangeNote: 'Typical range for 2–4 bedroom homes across western Palm Beach County',
      cards: [
        {
          title: 'Tell Jose what you need',
          body: "Bedrooms, budget, neighborhood preference, move-in timeline. He'll match you with available properties before they're widely listed.",
        },
        {
          title: 'In your language',
          body: 'Jose handles every part of the rental process in English, Spanish, or Portuguese: applications, lease review, and move-in walkthroughs.',
        },
        {
          title: 'No surprises',
          body: "Jose explains every line of the lease, what's included, what's not, and what your rights are as a tenant in Florida.",
        },
      ],
      portraitAlt: 'Jose Costa, Realtor',
      asideTitle: "Tell Jose what you're looking for.",
      asideBody:
        "He'll reach out within 24 hours with available properties that match, often before they hit the open market.",
      formTitle: 'Submit your rental criteria',
      formSubtitle: 'No commitment. Jose will be in touch within 24 hours.',
    },
    landlords: {
      eyebrow: 'For Property Owners',
      title: 'Find reliable tenants. Manage it right.',
      intro:
        'Jose has placed tenants across Royal Palm Beach, Loxahatchee, West Palm Beach, and surrounding areas. Working in three languages, he draws from a wider applicant pool than most agents. He has lived in this community for over two decades, which means he knows what a reliable long-term tenant actually looks like.',
      cards: [
        {
          title: 'Wider tenant pool',
          body: 'Jose works in English, Spanish, and Portuguese. That reaches qualified tenants in communities that most single-language agents never get in front of.',
        },
        {
          title: 'Tenant screening',
          body: 'Every applicant goes through a full screening process: income verification, rental history, references. Jose presents only qualified candidates.',
        },
        {
          title: 'Market-rate pricing',
          body: "Jose knows what comparable properties rent for in every neighborhood he works in. He'll price yours to fill quickly at a rate that holds.",
        },
        {
          title: 'Full-process management',
          body: 'Jose handles listing, showings, lease signing, and move-in coordination. You hand it off; he takes it from there.',
        },
      ],
      formTitle: 'Contact Jose about your property',
      formSubtitle: "Tell Jose about your rental and he'll follow up with next steps.",
      pageLink: 'See current rents by city and how Jose works with owners',
    },
    ownBand: {
      title: 'Thinking about buying someday?',
      body: 'See what owning a home would cost you each month next to what you pay in rent now, including taxes, insurance, and the cash you need to buy.',
      cta: 'Compare Rent vs. Buying',
    },
    available: {
      eyebrow: 'Available Now',
      title: 'Homes for rent right now',
      subtitle: "Message Jose about any of these and he'll send photos, the address, and next steps.",
      beds: 'bd',
      baths: 'ba',
      sqft: 'sq ft',
      now: 'Available now',
      from: 'Available {date}',
      pets: 'Pets considered',
      ask: 'Ask about this home',
    },
    cta: {
      title: 'Questions about renting or leasing in Palm Beach County?',
      subtitle:
        "Whether you're a renter looking for your next home or a property owner looking for help, Jose is available in English, Spanish, and Portuguese.",
      whatsapp: 'Chat on WhatsApp',
      call: 'Call (954) 614-1351',
    },
  },

  es: {
    meta: {
      title: 'Casas en alquiler en el condado de Palm Beach',
      description:
        '¿Busca casa para alquilar en Royal Palm Beach, West Palm Beach, Wellington o Loxahatchee? Jose Costa ayuda a inquilinos a encontrar casa y a dueños a encontrar inquilinos confiables, en español, inglés y portugués.',
    },
    hero: {
      imageAlt: 'Casas en alquiler en el condado de Palm Beach',
      eyebrow: 'Alquileres y administración de propiedades',
      title: 'Encuentre su próxima casa de alquiler en el condado de Palm Beach.',
      intro:
        'Jose Costa ha ayudado a cientos de familias a alquilar casa en el oeste del condado de Palm Beach, en español, inglés y portugués. Trabaja con inquilinos y con dueños, y conoce bien este mercado.',
      renterCta: 'Buscar casa para alquilar',
      landlordCta: 'Soy dueño de una propiedad',
    },
    renters: {
      eyebrow: 'Para inquilinos',
      title: 'Encuentre la casa adecuada para su familia.',
      perMonth: '/ mes',
      rangeNote: 'Rango típico para casas de 2 a 4 habitaciones en el oeste del condado de Palm Beach',
      cards: [
        {
          title: 'Dígale a Jose lo que necesita',
          body: 'Habitaciones, presupuesto, zona preferida y fecha de mudanza. Él le enviará propiedades disponibles, muchas veces antes de que se anuncien en todas partes.',
        },
        {
          title: 'En su idioma',
          body: 'Jose se encarga de todo el proceso de alquiler en español, inglés o portugués: solicitudes, revisión del contrato y la inspección al mudarse.',
        },
        {
          title: 'Sin sorpresas',
          body: 'Jose le explica cada línea del contrato, qué incluye, qué no, y cuáles son sus derechos como inquilino en la Florida.',
        },
      ],
      portraitAlt: 'Jose Costa, agente de bienes raíces',
      asideTitle: 'Cuéntele a Jose qué está buscando.',
      asideBody:
        'Le escribirá en menos de 24 horas con propiedades disponibles que coincidan, muchas veces antes de que salgan al mercado.',
      formTitle: 'Díganos qué busca',
      formSubtitle: 'Sin compromiso. Jose se comunicará con usted en menos de 24 horas.',
    },
    landlords: {
      eyebrow: 'Para dueños de propiedades',
      title: 'Inquilinos confiables y una administración bien hecha.',
      intro:
        'Jose ha colocado inquilinos en Royal Palm Beach, Loxahatchee, West Palm Beach y zonas cercanas. Como trabaja en tres idiomas, llega a más solicitantes que la mayoría de los agentes. Vive en esta comunidad desde hace más de dos décadas y sabe cómo es un buen inquilino a largo plazo.',
      cards: [
        {
          title: 'Más candidatos',
          body: 'Jose trabaja en español, inglés y portugués. Así llega a inquilinos calificados en comunidades a las que casi ningún agente que habla un solo idioma llega.',
        },
        {
          title: 'Evaluación de inquilinos',
          body: 'Cada solicitante pasa por una evaluación completa: verificación de ingresos, historial de alquiler y referencias. Jose solo le presenta candidatos calificados.',
        },
        {
          title: 'Precio de mercado',
          body: 'Jose sabe en cuánto se alquilan propiedades similares en cada vecindario donde trabaja. Le pondrá un precio para que se alquile rápido y con una renta que se sostenga.',
        },
        {
          title: 'Todo el proceso',
          body: 'Jose se encarga del anuncio, las visitas, la firma del contrato y la mudanza del inquilino. Usted se lo deja a él y él se ocupa del resto.',
        },
      ],
      formTitle: 'Contacte a Jose sobre su propiedad',
      formSubtitle: 'Cuéntele sobre su propiedad y él le dirá cuáles son los siguientes pasos.',
      pageLink: 'Vea los alquileres actuales por ciudad y cómo trabaja Jose con los dueños',
    },
    ownBand: {
      title: '¿Piensa comprar algún día?',
      body: 'Vea cuánto le costaría cada mes ser dueño de una casa al lado de lo que paga de alquiler hoy, con impuestos, seguro y el efectivo que necesita para comprar.',
      cta: 'Comparar alquilar y comprar',
    },
    available: {
      eyebrow: 'Disponibles ahora',
      title: 'Casas en alquiler disponibles',
      subtitle: 'Escríbale a Jose sobre cualquiera de estas casas y le enviará fotos, la dirección y los siguientes pasos.',
      beds: 'hab.',
      baths: 'baños',
      sqft: 'pies²',
      now: 'Disponible ahora',
      from: 'Disponible desde el {date}',
      pets: 'Se consideran mascotas',
      ask: 'Preguntar por esta casa',
    },
    cta: {
      title: '¿Preguntas sobre alquilar en el condado de Palm Beach?',
      subtitle:
        'Ya sea que busque casa o que tenga una propiedad para alquilar, Jose le atiende en español, inglés y portugués.',
      whatsapp: 'Escribir por WhatsApp',
      call: 'Llamar al (954) 614-1351',
    },
  },

  pt: {
    meta: {
      title: 'Casas para alugar no condado de Palm Beach',
      description:
        'Procurando casa para alugar em Royal Palm Beach, West Palm Beach, Wellington ou Loxahatchee? Jose Costa ajuda inquilinos a encontrar casa e proprietários a encontrar bons inquilinos, em português, inglês e espanhol.',
    },
    hero: {
      imageAlt: 'Casas para alugar no condado de Palm Beach',
      eyebrow: 'Aluguel e administração de imóveis',
      title: 'Encontre sua próxima casa para alugar no condado de Palm Beach.',
      intro:
        'Jose Costa já ajudou centenas de famílias a alugar casa no oeste do condado de Palm Beach, atendendo em português, inglês e espanhol. Ele trabalha com inquilinos e com proprietários, e conhece bem este mercado.',
      renterCta: 'Encontrar casa para alugar',
      landlordCta: 'Sou proprietário',
    },
    renters: {
      eyebrow: 'Para inquilinos',
      title: 'Encontre a casa certa para sua família.',
      perMonth: '/ mês',
      rangeNote: 'Faixa comum para casas de 2 a 4 quartos no oeste do condado de Palm Beach',
      cards: [
        {
          title: 'Conte ao Jose o que você precisa',
          body: 'Quartos, orçamento, bairro de preferência e data de mudança. Ele envia imóveis disponíveis, muitas vezes antes de serem anunciados em todo lugar.',
        },
        {
          title: 'No seu idioma',
          body: 'Jose cuida de todo o processo de aluguel em português, inglês ou espanhol: inscrição, revisão do contrato e vistoria de entrada.',
        },
        {
          title: 'Sem surpresas',
          body: 'Jose explica cada linha do contrato, o que está incluído, o que não está e quais são os seus direitos como inquilino na Flórida.',
        },
      ],
      portraitAlt: 'Jose Costa, corretor de imóveis',
      asideTitle: 'Conte ao Jose o que você procura.',
      asideBody:
        'Ele responde em até 24 horas com imóveis disponíveis que combinam com você, muitas vezes antes de entrarem no mercado.',
      formTitle: 'Conte o que você procura',
      formSubtitle: 'Sem compromisso. O Jose entra em contato em até 24 horas.',
    },
    landlords: {
      eyebrow: 'Para proprietários',
      title: 'Bons inquilinos e uma administração bem feita.',
      intro:
        'Jose já colocou inquilinos em Royal Palm Beach, Loxahatchee, West Palm Beach e arredores. Como atende em três idiomas, ele alcança mais interessados do que a maioria dos corretores. Mora nesta comunidade há mais de duas décadas e sabe reconhecer um bom inquilino de longo prazo.',
      cards: [
        {
          title: 'Mais interessados',
          body: 'Jose atende em português, inglês e espanhol. Assim ele chega a inquilinos qualificados em comunidades que quase nenhum corretor que fala um só idioma alcança.',
        },
        {
          title: 'Análise de inquilinos',
          body: 'Cada candidato passa por uma análise completa: comprovação de renda, histórico de aluguel e referências. Jose só apresenta candidatos qualificados.',
        },
        {
          title: 'Preço de mercado',
          body: 'Jose sabe por quanto imóveis parecidos são alugados em cada bairro onde trabalha. Ele define um valor para alugar rápido e que se mantenha.',
        },
        {
          title: 'Processo completo',
          body: 'Jose cuida do anúncio, das visitas, da assinatura do contrato e da entrada do inquilino. Você passa para ele, e ele cuida do resto.',
        },
      ],
      formTitle: 'Fale com o Jose sobre seu imóvel',
      formSubtitle: 'Conte sobre o seu imóvel e ele retorna com os próximos passos.',
      pageLink: 'Veja os aluguéis atuais por cidade e como o Jose trabalha com proprietários',
    },
    ownBand: {
      title: 'Pensa em comprar um dia?',
      body: 'Veja quanto custaria por mês ter a casa própria ao lado do que você paga de aluguel hoje, com imposto, seguro e o dinheiro necessário para comprar.',
      cta: 'Comparar aluguel e compra',
    },
    available: {
      eyebrow: 'Disponíveis agora',
      title: 'Casas para alugar disponíveis',
      subtitle: 'Mande uma mensagem ao Jose sobre qualquer uma delas e ele envia fotos, o endereço e os próximos passos.',
      beds: 'quartos',
      baths: 'banheiros',
      sqft: 'pés²',
      now: 'Disponível agora',
      from: 'Disponível a partir de {date}',
      pets: 'Animais de estimação: a consultar',
      ask: 'Perguntar sobre esta casa',
    },
    cta: {
      title: 'Dúvidas sobre aluguel no condado de Palm Beach?',
      subtitle:
        'Seja para encontrar uma casa ou para alugar o seu imóvel, o Jose atende em português, inglês e espanhol.',
      whatsapp: 'Chamar no WhatsApp',
      call: 'Ligar para (954) 614-1351',
    },
  },
};
