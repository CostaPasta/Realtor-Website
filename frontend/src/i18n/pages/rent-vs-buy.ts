import type { Locale } from '../locales';

// Copy for the rent vs. buy calculator. Placeholders: {amount}, {rent}, {price}.
// The default numbers live in components/RentVsBuyCalculator.tsx.

export interface RentVsBuyDictionary {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  inputs: {
    title: string;
    areaNote: string;
    rent: string;
    price: string;
    down: string;
    rate: string;
    rateHint: string;
    tax: string;
    taxHint: string;
    insurance: string;
    insuranceHint: string;
    hoa: string;
  };
  results: {
    title: string;
    own: string;
    rent: string;
    perMonth: string;
    more: string;
    less: string;
    same: string;
    principalInterest: string;
    tax: string;
    insurance: string;
    hoa: string;
    mortgageInsurance: string;
    cashTitle: string;
    downPayment: string;
    closing: string;
    cashTotal: string;
    equityTitle: string;
    equityBody: string;
  };
  notes: { title: string; items: string[]; disclaimer: string };
  cta: { title: string; subtitle: string; whatsapp: string; buy: string; message: string };
}

export const rentVsBuyDictionary: Record<Locale, RentVsBuyDictionary> = {
  en: {
    meta: {
      title: 'Rent vs. Buy Calculator for Palm Beach County',
      description:
        'Compare your monthly rent with the full monthly cost of owning a home in Palm Beach County: mortgage, property tax, insurance, HOA, and the cash you need to buy.',
    },
    hero: {
      eyebrow: 'Rent vs. Buy',
      title: 'What would owning cost you each month?',
      intro:
        'Put in what you pay in rent and the price of homes you are looking at. The calculator adds up the mortgage, property tax, insurance, and HOA so you can compare them side by side.',
    },
    inputs: {
      title: 'Your numbers',
      areaNote: 'Filled in for {area}: the median asking rent for a 3-bedroom, the price where houses there start, and 3.5% down (the FHA minimum).',
      rent: 'Monthly rent',
      price: 'Home price',
      down: 'Down payment',
      rate: 'Interest rate',
      rateHint: 'Use the rate a lender quotes you. The default is only an example.',
      tax: 'Property tax',
      taxHint: 'Percent of the price per year. A homestead exemption lowers it after the first year.',
      insurance: 'Home insurance',
      insuranceHint: 'Per year. Roof age, flood zone, and wind coverage change it a lot.',
      hoa: 'HOA fee',
    },
    results: {
      title: 'Monthly comparison',
      own: 'Owning',
      rent: 'Renting',
      perMonth: '/mo',
      more: 'Owning costs {amount} more per month',
      less: 'Owning costs {amount} less per month',
      same: 'Owning and renting cost about the same per month',
      principalInterest: 'Mortgage (principal and interest)',
      tax: 'Property tax',
      insurance: 'Home insurance',
      hoa: 'HOA',
      mortgageInsurance: 'Mortgage insurance',
      cashTitle: 'Cash needed to buy',
      downPayment: 'Down payment',
      closing: 'Closing costs (about 3%)',
      cashTotal: 'Total',
      equityTitle: 'Paid toward your loan in year one',
      equityBody: 'This part of your payments lowers what you owe, so it stays with you as equity in the home.',
    },
    notes: {
      title: 'How this is calculated',
      items: [
        'A 30-year fixed mortgage on the price minus your down payment.',
        'Mortgage insurance of 0.5% of the loan per year when the down payment is under 20%.',
        'Closing costs of about 3% of the price. Some loans and assistance programs cover part of this.',
        'It leaves out repairs, utilities, and changes in rent or home values over time.',
      ],
      disclaimer:
        'This is an estimate to start a conversation, not a loan offer. A lender sets your real rate and costs.',
    },
    cta: {
      title: 'Want real numbers for your situation?',
      subtitle:
        'Jose can walk you through loan options like FHA and down payment assistance and connect you with a lender who fits your situation.',
      whatsapp: 'Send Jose these numbers',
      buy: 'How buying with Jose works',
      message:
        "Hi Jose, I used the rent vs. buy calculator on your website. I pay about {rent} in rent and I'm looking at homes around {price}.",
    },
  },
  es: {
    meta: {
      title: 'Calculadora: ¿alquilar o comprar? en Palm Beach County',
      description:
        'Compare su alquiler mensual con el costo mensual completo de ser dueño de una casa en Palm Beach County: hipoteca, impuestos, seguro, HOA y el efectivo que necesita para comprar.',
    },
    hero: {
      eyebrow: 'Alquilar o comprar',
      title: '¿Cuánto le costaría cada mes ser dueño?',
      intro:
        'Escriba lo que paga de alquiler y el precio de las casas que le interesan. La calculadora suma la hipoteca, los impuestos, el seguro y el HOA para que pueda compararlos lado a lado.',
    },
    inputs: {
      title: 'Sus números',
      areaNote: 'Con los números de {area}: el alquiler mediano pedido por una de 3 habitaciones, el precio desde el que empiezan las casas allí y 3.5% de pago inicial (el mínimo de FHA).',
      rent: 'Alquiler mensual',
      price: 'Precio de la casa',
      down: 'Pago inicial',
      rate: 'Tasa de interés',
      rateHint: 'Use la tasa que le cotice un prestamista. La tasa inicial es solo un ejemplo.',
      tax: 'Impuesto a la propiedad',
      taxHint: 'Porcentaje del precio por año. La exención de homestead lo reduce después del primer año.',
      insurance: 'Seguro de la casa',
      insuranceHint: 'Por año. La edad del techo, la zona de inundación y la cobertura de viento lo cambian mucho.',
      hoa: 'Cuota de HOA',
    },
    results: {
      title: 'Comparación mensual',
      own: 'Ser dueño',
      rent: 'Alquilar',
      perMonth: '/mes',
      more: 'Ser dueño cuesta {amount} más por mes',
      less: 'Ser dueño cuesta {amount} menos por mes',
      same: 'Ser dueño y alquilar cuestan casi lo mismo por mes',
      principalInterest: 'Hipoteca (capital e intereses)',
      tax: 'Impuesto a la propiedad',
      insurance: 'Seguro de la casa',
      hoa: 'HOA',
      mortgageInsurance: 'Seguro hipotecario',
      cashTitle: 'Efectivo para comprar',
      downPayment: 'Pago inicial',
      closing: 'Costos de cierre (cerca del 3%)',
      cashTotal: 'Total',
      equityTitle: 'Pagado a su préstamo el primer año',
      equityBody: 'Esta parte de sus pagos reduce lo que debe, así que queda para usted como patrimonio en la casa.',
    },
    notes: {
      title: 'Cómo se calcula',
      items: [
        'Una hipoteca fija a 30 años sobre el precio menos su pago inicial.',
        'Seguro hipotecario del 0.5% del préstamo por año cuando el pago inicial es menor al 20%.',
        'Costos de cierre de cerca del 3% del precio. Algunos préstamos y programas de ayuda cubren una parte.',
        'No incluye reparaciones, servicios ni cambios en el alquiler o en el valor de las casas con el tiempo.',
      ],
      disclaimer:
        'Es un estimado para empezar la conversación, no una oferta de préstamo. Un prestamista fija su tasa y sus costos reales.',
    },
    cta: {
      title: '¿Quiere números reales para su caso?',
      subtitle:
        'Jose le explica opciones como préstamos FHA y ayuda para el pago inicial, y lo conecta con un prestamista adecuado para su situación.',
      whatsapp: 'Enviarle estos números a Jose',
      buy: 'Cómo es comprar con Jose',
      message:
        'Hola Jose, usé la calculadora de alquilar o comprar en su página web. Pago cerca de {rent} de alquiler y busco casas de alrededor de {price}.',
    },
  },
  pt: {
    meta: {
      title: 'Calculadora: alugar ou comprar? em Palm Beach County',
      description:
        'Compare o seu aluguel mensal com o custo mensal completo de ter uma casa em Palm Beach County: financiamento, imposto, seguro, HOA e o dinheiro necessário para comprar.',
    },
    hero: {
      eyebrow: 'Alugar ou comprar',
      title: 'Quanto custaria ter a casa própria por mês?',
      intro:
        'Informe quanto você paga de aluguel e o preço das casas que você está olhando. A calculadora soma o financiamento, o imposto, o seguro e o HOA para você comparar lado a lado.',
    },
    inputs: {
      title: 'Seus números',
      areaNote: 'Com os números de {area}: o aluguel mediano pedido por uma de 3 quartos, o preço a partir do qual as casas começam ali e 3,5% de entrada (o mínimo do FHA).',
      rent: 'Aluguel mensal',
      price: 'Preço da casa',
      down: 'Entrada',
      rate: 'Taxa de juros',
      rateHint: 'Use a taxa que um credor oferecer a você. O valor inicial é só um exemplo.',
      tax: 'Imposto sobre o imóvel',
      taxHint: 'Percentual do preço por ano. A isenção de homestead reduz o valor depois do primeiro ano.',
      insurance: 'Seguro residencial',
      insuranceHint: 'Por ano. A idade do telhado, a zona de enchente e a cobertura contra vento mudam muito o valor.',
      hoa: 'Taxa de HOA',
    },
    results: {
      title: 'Comparação mensal',
      own: 'Casa própria',
      rent: 'Aluguel',
      perMonth: '/mês',
      more: 'A casa própria custa {amount} a mais por mês',
      less: 'A casa própria custa {amount} a menos por mês',
      same: 'Casa própria e aluguel custam quase o mesmo por mês',
      principalInterest: 'Financiamento (amortização e juros)',
      tax: 'Imposto sobre o imóvel',
      insurance: 'Seguro residencial',
      hoa: 'HOA',
      mortgageInsurance: 'Seguro do financiamento',
      cashTitle: 'Dinheiro para comprar',
      downPayment: 'Entrada',
      closing: 'Custos de fechamento (cerca de 3%)',
      cashTotal: 'Total',
      equityTitle: 'Amortizado no primeiro ano',
      equityBody: 'Essa parte das parcelas reduz o que você deve, então fica com você como patrimônio na casa.',
    },
    notes: {
      title: 'Como o cálculo é feito',
      items: [
        'Financiamento fixo de 30 anos sobre o preço menos a entrada.',
        'Seguro do financiamento de 0,5% do valor financiado por ano quando a entrada é menor que 20%.',
        'Custos de fechamento de cerca de 3% do preço. Alguns financiamentos e programas de ajuda cobrem uma parte.',
        'Não inclui reparos, contas da casa nem mudanças no aluguel ou no valor dos imóveis ao longo do tempo.',
      ],
      disclaimer:
        'É uma estimativa para começar a conversa, não uma oferta de financiamento. Um credor define a sua taxa e os custos reais.',
    },
    cta: {
      title: 'Quer números reais para o seu caso?',
      subtitle:
        'O Jose explica opções como financiamento FHA e ajuda com a entrada, e indica um credor adequado à sua situação.',
      whatsapp: 'Mandar estes números para o Jose',
      buy: 'Como é comprar com o Jose',
      message:
        'Olá Jose, usei a calculadora de alugar ou comprar no seu site. Pago cerca de {rent} de aluguel e procuro casas por volta de {price}.',
    },
  },
};
