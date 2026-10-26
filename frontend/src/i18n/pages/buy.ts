import type { Locale } from '../locales';

type Copy = { title: string; body: string };

export interface BuyDictionary {
  meta: { title: string; description: string };
  hero: { imageAlt: string; eyebrow: string; title: string; intro: string; cta: string; fine: string };
  stats: { clients: string; years: string; languages: string };
  process: { eyebrow: string; title: string; subtitle: string; stepLabel: string; steps: Copy[] };
  local: { eyebrow: string; titleLine1: string; titleLine2: string; body: string; link: string };
  testimonials: { eyebrow: string; title: string };
  rights: {
    portraitAlt: string;
    portraitCaption: string;
    eyebrow: string;
    title: string;
    paragraphs: [string, string];
    items: { title: string; desc: string }[];
  };
  questions: { eyebrow: string; title: string; intro: string; items: [Copy, Copy, Copy, Copy] };
  areas: { eyebrow: string; title: string; subtitle: string; all: string };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export const buyDictionary: Record<Locale, BuyDictionary> = {
  en: {
    meta: {
      title: 'Buy a Home in South Florida',
      description:
        'Looking to buy a home in Palm Beach County? Jose Costa provides expert buyer representation in English, Spanish, and Portuguese across Palm Beach County, Broward, and South Florida.',
    },
    hero: {
      imageAlt: 'Buying a home in South Florida',
      eyebrow: 'For Buyers',
      title: 'Find your South Florida home with an expert by your side.',
      intro:
        "You can browse listings on Zillow. What you can't get from Zillow is someone who negotiates on your behalf, spots red flags before you're locked in, and has relationships with listing agents before properties hit the market.",
      cta: 'Book a Buyer Consultation',
      fine: 'No obligation · Costs in writing · In your language',
    },
    stats: { clients: 'Clients Served', years: 'Years Experience', languages: 'Languages' },
    process: {
      eyebrow: 'The Process',
      title: 'From first call to closing day',
      subtitle: 'Six clear steps. One agent in your corner the whole way.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Get Pre-Approved',
          body: 'Get your financing in order before you search. Jose connects you with trusted local lenders, or works alongside the bank you already have a relationship with. Pre-approval means you move fast when the right home appears.',
        },
        {
          title: 'Buyer Consultation',
          body: "Jose sits down with you to understand your must-haves, your budget, and your timeline. He'll be honest about what you can realistically find and in which neighborhoods, so your search has direction from day one.",
        },
        {
          title: 'Smart Search',
          body: "Jose doesn't just send you MLS links. He curates properties based on your priorities, pre-screens for red flags, and uses his agent network to surface homes before competing offers appear.",
        },
        {
          title: 'Making the Offer',
          body: "Jose analyzes comparable sales, advises on offer strategy, and handles negotiations. In South Florida's competitive market, how you make an offer matters as much as the price.",
        },
        {
          title: 'Inspection and Review',
          body: 'Jose coordinates inspections, appraisals, and title searches, and explains every document before you sign it. He does this in English, Spanish, or Portuguese.',
        },
        {
          title: 'Closing Day and Beyond',
          body: 'Jose attends closing with you and walks you through the closing statement line by line. After that he stays in touch, connects you with contractors he knows, and picks up the phone when questions come up.',
        },
      ],
    },
    local: {
      eyebrow: 'Local Knowledge',
      titleLine1: 'Fifteen years reading',
      titleLine2: 'the South Florida market.',
      body: 'Jose has spent 15 years in this market. He knows which streets have appreciated, which school zones drive buyer demand, and where prices have not yet caught up to what a neighborhood is becoming.',
      link: 'Explore the neighborhoods he knows best →',
    },
    testimonials: { eyebrow: 'What Buyers Say', title: 'Real buyers. Real results.' },
    rights: {
      portraitAlt: 'Jose Costa, South Florida Realtor',
      portraitCaption: 'Palm Beach County Realtor · FL Lic. #3132965',
      eyebrow: 'Know Your Rights',
      title: 'Buyer representation, explained.',
      paragraphs: [
        'Florida buyers now sign a written agreement with their agent before touring homes, and it spells out how the agent is paid. In many sales the seller covers that cost, and Jose negotiates for it as part of your offer. You know the numbers before you commit to anything.',
        "Without a buyer's agent, you are negotiating against a professional whose job is to protect the seller's interests. Jose's job is to protect yours.",
      ],
      items: [
        {
          title: 'Market Analysis',
          desc: 'On every property you are seriously considering, before an offer goes in, including homes you have not toured yet.',
        },
        { title: 'Costs in Writing', desc: 'You see exactly how Jose is paid before you tour a single home.' },
        { title: 'Agent Network Access', desc: 'Off-market listings and early access before properties hit Zillow.' },
        { title: 'In Your Language', desc: 'Every call, every document, in English, Spanish, or Portuguese.' },
      ],
    },
    questions: {
      eyebrow: 'Common Questions',
      title: "Whether it's your first home or your fifth, Jose walks you through it.",
      intro:
        "Buying a home, whether for the first time or the tenth, can feel like a lot. Jose's job is to make the process clear and manageable. He'll give you an honest read on what your budget can get you, walk you through every document before you sign it, and be available in English, Portuguese, or Spanish throughout.",
      items: [
        {
          title: 'What can I actually afford?',
          body: "Before you search, Jose walks you through what your budget actually covers in today's Palm Beach County market: the purchase price, but also HOA fees, property taxes, and insurance.",
        },
        {
          title: 'Down payment options',
          body: 'Most buyers have more financing options than they realize: FHA loans (3.5% down), conventional financing, VA loans, and down payment assistance programs for qualifying buyers. Jose connects you with a lender who fits your situation.',
        },
        {
          title: 'Clear costs, in writing',
          body: 'Before you tour homes, Jose explains how his fee works and puts it in writing. In many Florida sales the seller covers it, and he negotiates for that on your behalf.',
        },
        {
          title: 'Available in your language',
          body: 'Jose handles every part of the process in English, Spanish, or Portuguese. Applications, document review, walkthroughs, phone calls.',
        },
      ],
    },
    areas: {
      eyebrow: 'Coverage',
      title: 'Areas Jose serves buyers',
      subtitle: 'Active across Palm Beach County and Broward County.',
      all: 'Explore All Neighborhoods →',
    },
    cta: {
      title: 'Ready to start your search?',
      subtitle:
        "Book a free, no-pressure consultation with Jose. He'll tell you honestly what your budget can get you in today's market.",
      primary: 'Book a Buyer Consultation',
      secondary: 'Browse Neighborhoods',
    },
  },

  es: {
    meta: {
      title: 'Comprar casa en el sur de la Florida',
      description:
        '¿Quiere comprar casa en el condado de Palm Beach? Jose Costa lo representa como comprador en español, inglés y portugués en los condados de Palm Beach y Broward.',
    },
    hero: {
      imageAlt: 'Comprar casa en el sur de la Florida',
      eyebrow: 'Para compradores',
      title: 'Encuentre su casa en el sur de la Florida con un experto a su lado.',
      intro:
        'Puede ver casas en Zillow. Lo que Zillow no le da es alguien que negocie por usted, que detecte los problemas antes de que usted se comprometa y que conozca a los agentes vendedores antes de que las propiedades salgan al mercado.',
      cta: 'Agendar una consulta para compradores',
      fine: 'Sin compromiso · Costos por escrito · En su idioma',
    },
    stats: { clients: 'Clientes atendidos', years: 'Años de experiencia', languages: 'Idiomas' },
    process: {
      eyebrow: 'El proceso',
      title: 'De la primera llamada al día del cierre',
      subtitle: 'Seis pasos claros. Un agente de su lado todo el tiempo.',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Obtenga su preaprobación',
          body: 'Organice su financiamiento antes de buscar. Jose lo pone en contacto con prestamistas locales de confianza o trabaja junto al banco con el que usted ya tiene relación. Con la preaprobación, puede actuar rápido cuando aparezca la casa indicada.',
        },
        {
          title: 'Consulta inicial',
          body: 'Jose se sienta con usted para entender lo que necesita, su presupuesto y sus plazos. Le dirá con honestidad qué puede encontrar y en qué vecindarios, para que su búsqueda tenga rumbo desde el primer día.',
        },
        {
          title: 'Búsqueda inteligente',
          body: 'Jose no solo le manda enlaces del MLS. Selecciona propiedades según sus prioridades, revisa posibles problemas de antemano y usa su red de agentes para encontrar casas antes de que lleguen otras ofertas.',
        },
        {
          title: 'La oferta',
          body: 'Jose analiza ventas comparables, le aconseja sobre la estrategia de la oferta y se encarga de la negociación. En el mercado competitivo del sur de la Florida, cómo se hace la oferta importa tanto como el precio.',
        },
        {
          title: 'Inspección y revisión',
          body: 'Jose coordina las inspecciones, el avalúo y la búsqueda de título, y le explica cada documento antes de que usted lo firme, en español, inglés o portugués.',
        },
        {
          title: 'El cierre y después',
          body: 'Jose lo acompaña al cierre y revisa con usted el documento de cierre línea por línea. Después sigue en contacto, le recomienda contratistas de confianza y contesta el teléfono cuando surgen preguntas.',
        },
      ],
    },
    local: {
      eyebrow: 'Conocimiento local',
      titleLine1: 'Quince años leyendo',
      titleLine2: 'el mercado del sur de la Florida.',
      body: 'Jose lleva 15 años en este mercado. Sabe qué calles se han valorizado, qué zonas escolares mueven la demanda y dónde los precios todavía no reflejan lo que el vecindario está llegando a ser.',
      link: 'Ver los vecindarios que mejor conoce (en inglés) →',
    },
    testimonials: { eyebrow: 'Lo que dicen los compradores', title: 'Compradores reales. Resultados reales.' },
    rights: {
      portraitAlt: 'Jose Costa, agente de bienes raíces en el sur de la Florida',
      portraitCaption: 'Agente en el condado de Palm Beach · Licencia FL #3132965',
      eyebrow: 'Conozca sus derechos',
      title: 'La representación del comprador, explicada.',
      paragraphs: [
        'En la Florida, los compradores ahora firman un acuerdo por escrito con su agente antes de visitar casas, y ese acuerdo explica cómo se le paga al agente. En muchas ventas el vendedor cubre ese costo, y Jose lo negocia como parte de su oferta. Usted conoce los números antes de comprometerse.',
        'Sin un agente comprador, usted negocia contra un profesional cuyo trabajo es proteger los intereses del vendedor. El trabajo de Jose es proteger los suyos.',
      ],
      items: [
        {
          title: 'Análisis de mercado',
          desc: 'De cada propiedad que usted esté considerando en serio, antes de hacer una oferta, incluso de casas que todavía no ha visitado.',
        },
        { title: 'Costos por escrito', desc: 'Usted sabe exactamente cómo se le paga a Jose antes de visitar una sola casa.' },
        { title: 'Red de agentes', desc: 'Propiedades fuera del mercado y acceso anticipado antes de que aparezcan en Zillow.' },
        { title: 'En su idioma', desc: 'Cada llamada y cada documento, en español, inglés o portugués.' },
      ],
    },
    questions: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Sea su primera casa o su quinta, Jose lo acompaña en cada paso.',
      intro:
        'Comprar una casa, sea la primera o la décima, puede sentirse como mucho. El trabajo de Jose es que el proceso sea claro y manejable. Le dará una opinión honesta sobre lo que alcanza con su presupuesto, le explicará cada documento antes de firmar y estará disponible en español, inglés o portugués todo el tiempo.',
      items: [
        {
          title: '¿Cuánto puedo pagar de verdad?',
          body: 'Antes de buscar, Jose le explica lo que cubre su presupuesto en el mercado actual del condado de Palm Beach: el precio de compra, pero también las cuotas de HOA, los impuestos a la propiedad y el seguro.',
        },
        {
          title: 'Opciones de pago inicial',
          body: 'La mayoría de los compradores tiene más opciones de financiamiento de lo que cree: préstamos FHA (3.5% de pago inicial), financiamiento convencional, préstamos VA y programas de ayuda para el pago inicial para quienes califican. Jose lo conecta con un prestamista adecuado para su situación.',
        },
        {
          title: 'Costos claros, por escrito',
          body: 'Antes de visitar casas, Jose le explica cómo funciona su comisión y lo pone por escrito. En muchas ventas en la Florida el vendedor la cubre, y él lo negocia a su favor.',
        },
        {
          title: 'Disponible en su idioma',
          body: 'Jose maneja cada parte del proceso en español, inglés o portugués: solicitudes, revisión de documentos, visitas y llamadas.',
        },
      ],
    },
    areas: {
      eyebrow: 'Cobertura',
      title: 'Zonas donde Jose atiende a compradores',
      subtitle: 'Activo en los condados de Palm Beach y Broward.',
      all: 'Ver todos los vecindarios (en inglés) →',
    },
    cta: {
      title: '¿Listo para empezar a buscar?',
      subtitle:
        'Agende una consulta gratis y sin compromiso con Jose. Le dirá con honestidad lo que alcanza con su presupuesto en el mercado actual.',
      primary: 'Agendar una consulta',
      secondary: 'Ver vecindarios (en inglés)',
    },
  },

  pt: {
    meta: {
      title: 'Comprar casa no sul da Flórida',
      description:
        'Quer comprar casa no condado de Palm Beach? Jose Costa representa compradores em português, inglês e espanhol nos condados de Palm Beach e Broward.',
    },
    hero: {
      imageAlt: 'Comprar casa no sul da Flórida',
      eyebrow: 'Para compradores',
      title: 'Encontre sua casa no sul da Flórida com um especialista ao seu lado.',
      intro:
        'Você pode olhar casas no Zillow. O que o Zillow não oferece é alguém que negocie por você, perceba os problemas antes de você se comprometer e tenha contato com os corretores dos vendedores antes de os imóveis entrarem no mercado.',
      cta: 'Agendar uma consulta para compradores',
      fine: 'Sem compromisso · Custos por escrito · No seu idioma',
    },
    stats: { clients: 'Clientes atendidos', years: 'Anos de experiência', languages: 'Idiomas' },
    process: {
      eyebrow: 'O processo',
      title: 'Da primeira ligação ao dia do fechamento',
      subtitle: 'Seis etapas claras. Um corretor do seu lado o tempo todo.',
      stepLabel: 'Etapa',
      steps: [
        {
          title: 'Faça a pré-aprovação',
          body: 'Organize o financiamento antes de procurar. O Jose apresenta você a credores locais de confiança ou trabalha junto com o banco que você já usa. Com a pré-aprovação, você age rápido quando a casa certa aparecer.',
        },
        {
          title: 'Consulta inicial',
          body: 'O Jose senta com você para entender o que você precisa, seu orçamento e seu prazo. Ele vai ser honesto sobre o que dá para encontrar e em quais bairros, para a busca ter direção desde o primeiro dia.',
        },
        {
          title: 'Busca inteligente',
          body: 'O Jose não só manda links do MLS. Ele seleciona imóveis de acordo com as suas prioridades, verifica possíveis problemas antes e usa a rede de corretores para achar casas antes que apareçam outras propostas.',
        },
        {
          title: 'A proposta',
          body: 'O Jose analisa vendas comparáveis, orienta a estratégia da proposta e conduz a negociação. No mercado competitivo do sul da Flórida, a forma de fazer a proposta importa tanto quanto o preço.',
        },
        {
          title: 'Inspeção e revisão',
          body: 'O Jose coordena as inspeções, a avaliação e a pesquisa de título, e explica cada documento antes de você assinar, em português, inglês ou espanhol.',
        },
        {
          title: 'O fechamento e depois',
          body: 'O Jose vai ao fechamento com você e revisa o documento de fechamento linha por linha. Depois continua em contato, indica prestadores de serviço de confiança e atende o telefone quando surgem dúvidas.',
        },
      ],
    },
    local: {
      eyebrow: 'Conhecimento local',
      titleLine1: 'Quinze anos lendo',
      titleLine2: 'o mercado do sul da Flórida.',
      body: 'O Jose está há 15 anos neste mercado. Ele sabe quais ruas valorizaram, quais zonas escolares puxam a procura e onde os preços ainda não acompanharam o que o bairro está se tornando.',
      link: 'Ver os bairros que ele conhece melhor (em inglês) →',
    },
    testimonials: { eyebrow: 'O que dizem os compradores', title: 'Compradores reais. Resultados reais.' },
    rights: {
      portraitAlt: 'Jose Costa, corretor de imóveis no sul da Flórida',
      portraitCaption: 'Corretor no condado de Palm Beach · Licença FL #3132965',
      eyebrow: 'Conheça seus direitos',
      title: 'A representação do comprador, explicada.',
      paragraphs: [
        'Na Flórida, os compradores agora assinam um contrato por escrito com o corretor antes de visitar casas, e esse contrato explica como o corretor é pago. Em muitas vendas o vendedor cobre esse custo, e o Jose negocia isso na sua proposta. Você conhece os números antes de se comprometer.',
        'Sem um corretor do comprador, você negocia contra um profissional cujo trabalho é proteger os interesses do vendedor. O trabalho do Jose é proteger os seus.',
      ],
      items: [
        {
          title: 'Análise de mercado',
          desc: 'De cada imóvel que você estiver considerando a sério, antes da proposta, inclusive casas que você ainda não visitou.',
        },
        { title: 'Custos por escrito', desc: 'Você sabe exatamente como o Jose é pago antes de visitar qualquer casa.' },
        { title: 'Rede de corretores', desc: 'Imóveis fora do mercado e acesso antecipado antes de aparecerem no Zillow.' },
        { title: 'No seu idioma', desc: 'Cada ligação e cada documento, em português, inglês ou espanhol.' },
      ],
    },
    questions: {
      eyebrow: 'Perguntas frequentes',
      title: 'Seja a sua primeira casa ou a quinta, o Jose acompanha você em cada etapa.',
      intro:
        'Comprar uma casa, seja a primeira ou a décima, pode parecer muita coisa. O trabalho do Jose é deixar o processo claro e tranquilo. Ele vai dar uma opinião honesta sobre o que o seu orçamento permite, explicar cada documento antes de você assinar e estar disponível em português, inglês ou espanhol o tempo todo.',
      items: [
        {
          title: 'Quanto eu posso pagar de verdade?',
          body: 'Antes da busca, o Jose mostra o que o seu orçamento cobre no mercado atual do condado de Palm Beach: o preço do imóvel, mas também as taxas de HOA, os impostos sobre a propriedade e o seguro.',
        },
        {
          title: 'Opções de entrada',
          body: 'A maioria dos compradores tem mais opções de financiamento do que imagina: financiamento FHA (3,5% de entrada), financiamento convencional, financiamento VA e programas de ajuda com a entrada para quem se qualifica. O Jose indica um credor adequado à sua situação.',
        },
        {
          title: 'Custos claros, por escrito',
          body: 'Antes de você visitar casas, o Jose explica como funciona a comissão dele e coloca tudo por escrito. Em muitas vendas na Flórida o vendedor cobre esse valor, e ele negocia isso a seu favor.',
        },
        {
          title: 'No seu idioma',
          body: 'O Jose cuida de todas as etapas em português, inglês ou espanhol: cadastros, revisão de documentos, visitas e ligações.',
        },
      ],
    },
    areas: {
      eyebrow: 'Onde atua',
      title: 'Regiões onde o Jose atende compradores',
      subtitle: 'Atua nos condados de Palm Beach e Broward.',
      all: 'Ver todos os bairros (em inglês) →',
    },
    cta: {
      title: 'Pronto para começar a busca?',
      subtitle:
        'Agende uma consulta gratuita e sem compromisso com o Jose. Ele vai dizer com honestidade o que o seu orçamento permite no mercado de hoje.',
      primary: 'Agendar uma consulta',
      secondary: 'Ver bairros (em inglês)',
    },
  },
};
