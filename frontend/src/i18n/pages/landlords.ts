import type { Locale } from '../locales';

// {date}, {month}, {min}, and {max} are filled from rentalStats in market-stats.ts.
// Only promise what Jose already offers on the Rentals page (finding and screening
// tenants, pricing, listing, showings, lease, move-in). Don't add property management
// after move-in or a fee amount until he confirms them.

type Copy = { title: string; body: string };

export interface LandlordsDictionary {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string; primary: string; whatsapp: string };
  rents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    city: string;
    twoBed: string;
    threeBed: string;
    days: string;
    daysUnit: string;
    note: string;
  };
  services: { eyebrow: string; title: string; cards: [Copy, Copy, Copy, Copy] };
  process: { eyebrow: string; title: string; steps: [Copy, Copy, Copy, Copy] };
  faq: { eyebrow: string; title: string; items: Copy[] };
  form: { eyebrow: string; title: string; subtitle: string };
  cta: { title: string; subtitle: string; whatsapp: string; call: string };
}

export const landlordsDictionary: Record<Locale, LandlordsDictionary> = {
  en: {
    meta: {
      title: 'Rent Out Your Home in Palm Beach County',
      description:
        'Jose Costa finds and screens tenants for homes in Royal Palm Beach, West Palm Beach, Wellington, Lake Worth Beach, and Boynton Beach, in English, Spanish, and Portuguese.',
    },
    hero: {
      eyebrow: 'For Property Owners',
      title: 'Rent your home to a tenant you can trust.',
      intro:
        'Jose finds and screens tenants for homes across western Palm Beach County, working in English, Spanish, and Portuguese. You get a market-rate price, qualified applicants, and a signed lease.',
      primary: 'Tell Jose About Your Home',
      whatsapp: 'WhatsApp Jose',
    },
    rents: {
      eyebrow: 'Current Rents',
      title: 'What homes are renting for right now',
      subtitle: 'Median asking rents for homes and condos listed on the MLS on {date}.',
      city: 'City',
      twoBed: '2 bedrooms',
      threeBed: '3 bedrooms',
      days: 'Days listed',
      daysUnit: 'days',
      note: 'Asking rents, not signed leases. Source: Beaches MLS listing data compiled by PBP Real Estate. Your home’s rent depends on its size, condition, and street.',
    },
    services: {
      eyebrow: 'What Jose Does',
      title: 'From empty house to signed lease',
      cards: [
        {
          title: 'A wider tenant pool',
          body: 'Jose works in English, Spanish, and Portuguese, which reaches qualified renters that single-language agents often miss.',
        },
        {
          title: 'Real screening',
          body: 'Every applicant goes through income verification, rental history, and references. Jose only brings you qualified candidates.',
        },
        {
          title: 'Market-rate pricing',
          body: 'Jose knows what comparable homes rent for in the neighborhoods he works and prices yours to rent quickly at a rate that holds.',
        },
        {
          title: 'Listing to move-in',
          body: 'Jose handles the listing, showings, lease signing, and move-in coordination, so you do not have to be there for any of it.',
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'Four steps',
      steps: [
        {
          title: 'Talk about your home',
          body: 'Tell Jose the address, size, and condition. He compares it with homes renting nearby and suggests a rent.',
        },
        {
          title: 'List and show it',
          body: 'Jose lists the home on the MLS, where renters and their agents search, and handles every showing.',
        },
        {
          title: 'Screen applicants',
          body: 'He checks income, rental history, and references, then walks you through the qualified applicants.',
        },
        {
          title: 'Sign and move in',
          body: 'Jose coordinates the lease signing and the move-in, and explains every step in writing before you sign.',
        },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      title: 'What owners usually ask',
      items: [
        {
          title: 'How long will it take to rent?',
          body: 'In {month}, rentals in these cities were listed for a median of {min} to {max} days. Homes priced at the market rent go fastest.',
        },
        {
          title: 'I don’t live nearby. Can you still help?',
          body: 'Yes. Jose handles showings, the lease signing, and move-in coordination, so you can rent the home out from anywhere.',
        },
        {
          title: 'What does it cost?',
          body: 'Jose explains his fee up front, in writing, before you agree to anything. The first conversation costs nothing.',
        },
        {
          title: 'Should I rent it or sell it?',
          body: 'Jose can compare both for your home: what you would net from a sale today versus what it would earn as a rental.',
        },
      ],
    },
    form: {
      eyebrow: 'Get Started',
      title: 'Tell Jose about your home',
      subtitle: 'He’ll follow up within 24 hours with what similar homes are renting for and the next steps.',
    },
    cta: {
      title: 'Have a home to rent out?',
      subtitle: 'Jose works with owners across western Palm Beach County, in English, Spanish, and Portuguese.',
      whatsapp: 'WhatsApp Jose',
      call: 'Call (954) 614-1351',
    },
  },

  es: {
    meta: {
      title: 'Alquile su casa en el condado de Palm Beach',
      description:
        'Jose Costa busca y evalúa inquilinos para casas en Royal Palm Beach, West Palm Beach, Wellington, Lake Worth Beach y Boynton Beach, en español, inglés y portugués.',
    },
    hero: {
      eyebrow: 'Para dueños de propiedades',
      title: 'Alquile su casa a un inquilino de confianza.',
      intro:
        'Jose busca y evalúa inquilinos para casas en el oeste del condado de Palm Beach, en español, inglés y portugués. Usted obtiene un precio de mercado, solicitantes calificados y un contrato firmado.',
      primary: 'Cuéntele a Jose sobre su casa',
      whatsapp: 'Escribir por WhatsApp',
    },
    rents: {
      eyebrow: 'Alquileres actuales',
      title: 'Cuánto se alquilan las casas hoy',
      subtitle: 'Alquiler pedido mediano de casas y condominios anunciados en el MLS el {date}.',
      city: 'Ciudad',
      twoBed: '2 habitaciones',
      threeBed: '3 habitaciones',
      days: 'Días anunciado',
      daysUnit: 'días',
      note: 'Son alquileres pedidos, no contratos firmados. Fuente: datos de anuncios de Beaches MLS recopilados por PBP Real Estate. El alquiler de su casa depende de su tamaño, estado y calle.',
    },
    services: {
      eyebrow: 'Qué hace Jose',
      title: 'De casa vacía a contrato firmado',
      cards: [
        {
          title: 'Más candidatos',
          body: 'Jose trabaja en español, inglés y portugués, y así llega a inquilinos calificados que los agentes que hablan un solo idioma muchas veces no alcanzan.',
        },
        {
          title: 'Evaluación de verdad',
          body: 'Cada solicitante pasa por verificación de ingresos, historial de alquiler y referencias. Jose solo le presenta candidatos calificados.',
        },
        {
          title: 'Precio de mercado',
          body: 'Jose sabe en cuánto se alquilan casas similares en los barrios donde trabaja y le pone un precio para que se alquile rápido y con una renta que se sostenga.',
        },
        {
          title: 'Del anuncio a la mudanza',
          body: 'Jose se encarga del anuncio, las visitas, la firma del contrato y la mudanza, así que usted no tiene que estar presente.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Cuatro pasos',
      steps: [
        {
          title: 'Hablemos de su casa',
          body: 'Cuéntele a Jose la dirección, el tamaño y el estado. Él la compara con casas alquiladas cerca y le sugiere una renta.',
        },
        {
          title: 'Anuncio y visitas',
          body: 'Jose anuncia la casa en el MLS, donde buscan los inquilinos y sus agentes, y se encarga de todas las visitas.',
        },
        {
          title: 'Evaluación de solicitantes',
          body: 'Revisa ingresos, historial de alquiler y referencias, y luego repasa con usted los solicitantes calificados.',
        },
        {
          title: 'Firma y mudanza',
          body: 'Jose coordina la firma del contrato y la mudanza, y le explica cada paso por escrito antes de que usted firme.',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Lo que suelen preguntar los dueños',
      items: [
        {
          title: '¿Cuánto tardará en alquilarse?',
          body: 'En {month}, los alquileres en estas ciudades estuvieron anunciados una mediana de {min} a {max} días. Las casas con precio de mercado se alquilan más rápido.',
        },
        {
          title: 'No vivo cerca. ¿Me puede ayudar igual?',
          body: 'Sí. Jose se encarga de las visitas, la firma del contrato y la mudanza, así que puede alquilar su casa desde cualquier lugar.',
        },
        {
          title: '¿Cuánto cuesta?',
          body: 'Jose le explica su comisión por adelantado y por escrito, antes de que usted acepte nada. La primera conversación no cuesta nada.',
        },
        {
          title: '¿Me conviene alquilar o vender?',
          body: 'Jose puede comparar las dos opciones para su casa: cuánto le quedaría si vende hoy y cuánto ganaría si la alquila.',
        },
      ],
    },
    form: {
      eyebrow: 'Para empezar',
      title: 'Cuéntele a Jose sobre su casa',
      subtitle: 'Le responderá en menos de 24 horas con cuánto se alquilan casas similares y los siguientes pasos.',
    },
    cta: {
      title: '¿Tiene una casa para alquilar?',
      subtitle: 'Jose trabaja con dueños en el oeste del condado de Palm Beach, en español, inglés y portugués.',
      whatsapp: 'Escribir por WhatsApp',
      call: 'Llamar al (954) 614-1351',
    },
  },

  pt: {
    meta: {
      title: 'Alugue sua casa no condado de Palm Beach',
      description:
        'Jose Costa encontra e analisa inquilinos para casas em Royal Palm Beach, West Palm Beach, Wellington, Lake Worth Beach e Boynton Beach, em português, inglês e espanhol.',
    },
    hero: {
      eyebrow: 'Para proprietários',
      title: 'Alugue sua casa para um inquilino de confiança.',
      intro:
        'O Jose encontra e analisa inquilinos para casas no oeste do condado de Palm Beach, atendendo em português, inglês e espanhol. Você tem um preço de mercado, candidatos qualificados e um contrato assinado.',
      primary: 'Conte ao Jose sobre sua casa',
      whatsapp: 'Chamar no WhatsApp',
    },
    rents: {
      eyebrow: 'Aluguéis atuais',
      title: 'Por quanto as casas estão sendo alugadas agora',
      subtitle: 'Aluguel pedido mediano de casas e condomínios anunciados no MLS em {date}.',
      city: 'Cidade',
      twoBed: '2 quartos',
      threeBed: '3 quartos',
      days: 'Dias anunciado',
      daysUnit: 'dias',
      note: 'São aluguéis pedidos, não contratos assinados. Fonte: dados de anúncios do Beaches MLS compilados pela PBP Real Estate. O aluguel da sua casa depende do tamanho, do estado e da rua.',
    },
    services: {
      eyebrow: 'O que o Jose faz',
      title: 'Da casa vazia ao contrato assinado',
      cards: [
        {
          title: 'Mais interessados',
          body: 'O Jose atende em português, inglês e espanhol, e assim chega a inquilinos qualificados que corretores de um só idioma muitas vezes não alcançam.',
        },
        {
          title: 'Análise de verdade',
          body: 'Cada candidato passa por comprovação de renda, histórico de aluguel e referências. O Jose só apresenta candidatos qualificados.',
        },
        {
          title: 'Preço de mercado',
          body: 'O Jose sabe por quanto casas parecidas são alugadas nos bairros onde trabalha e define um valor para alugar rápido e que se mantenha.',
        },
        {
          title: 'Do anúncio à mudança',
          body: 'O Jose cuida do anúncio, das visitas, da assinatura do contrato e da entrada do inquilino, então você não precisa estar presente.',
        },
      ],
    },
    process: {
      eyebrow: 'Como funciona',
      title: 'Quatro etapas',
      steps: [
        {
          title: 'Conversa sobre a casa',
          body: 'Conte ao Jose o endereço, o tamanho e o estado da casa. Ele compara com casas alugadas perto e sugere um aluguel.',
        },
        {
          title: 'Anúncio e visitas',
          body: 'O Jose anuncia a casa no MLS, onde inquilinos e seus corretores procuram, e cuida de todas as visitas.',
        },
        {
          title: 'Análise dos candidatos',
          body: 'Ele confere renda, histórico de aluguel e referências, e depois revisa com você os candidatos qualificados.',
        },
        {
          title: 'Contrato e mudança',
          body: 'O Jose coordena a assinatura do contrato e a entrada do inquilino, e explica cada etapa por escrito antes de você assinar.',
        },
      ],
    },
    faq: {
      eyebrow: 'Dúvidas',
      title: 'O que os proprietários costumam perguntar',
      items: [
        {
          title: 'Quanto tempo leva para alugar?',
          body: 'Em {month}, os imóveis nessas cidades ficaram anunciados uma mediana de {min} a {max} dias. Casas com preço de mercado alugam mais rápido.',
        },
        {
          title: 'Não moro perto. Mesmo assim você ajuda?',
          body: 'Sim. O Jose cuida das visitas, da assinatura do contrato e da entrada do inquilino, então você pode alugar a casa de qualquer lugar.',
        },
        {
          title: 'Quanto custa?',
          body: 'O Jose explica a comissão dele antes, por escrito, antes de você aceitar qualquer coisa. A primeira conversa não custa nada.',
        },
        {
          title: 'Vale mais alugar ou vender?',
          body: 'O Jose pode comparar as duas opções para a sua casa: quanto você receberia vendendo hoje e quanto ela renderia alugada.',
        },
      ],
    },
    form: {
      eyebrow: 'Para começar',
      title: 'Conte ao Jose sobre sua casa',
      subtitle: 'Ele responde em até 24 horas com o valor de aluguel de casas parecidas e os próximos passos.',
    },
    cta: {
      title: 'Tem uma casa para alugar?',
      subtitle: 'O Jose atende proprietários no oeste do condado de Palm Beach, em português, inglês e espanhol.',
      whatsapp: 'Chamar no WhatsApp',
      call: 'Ligar para (954) 614-1351',
    },
  },
};
