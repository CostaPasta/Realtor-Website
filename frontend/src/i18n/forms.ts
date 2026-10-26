import type { Locale } from './locales';

// Option `value`s stay in English: they are what Jose reads in the lead email.
type Option = { value: string; label: string };

export interface FormsDictionary {
  common: {
    required: string;
    select: string;
    sending: string;
    error: string;
    errorCall: string;
    errorWhatsApp: string;
    invalidEmail: string;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    roleOptions: Option[];
    language: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sentTitle: string;
    sentBody: string;
  };
  renter: {
    name: string;
    namePlaceholder: string;
    email: string;
    phone: string;
    bedrooms: string;
    bedroomOptions: Option[];
    budget: string;
    budgetOptions: Option[];
    timeline: string;
    timelineOptions: Option[];
    area: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sentTitle: string;
    sentBody: string;
  };
  landlord: {
    name: string;
    namePlaceholder: string;
    phone: string;
    email: string;
    address: string;
    bedrooms: string;
    rentGoal: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sentTitle: string;
    sentBody: string;
  };
}

const BUDGET_VALUES = [
  'Under $1,400',
  '$1,400–$1,800',
  '$1,800–$2,200',
  '$2,200–$2,800',
  '$2,800–$3,500',
  '$3,500+',
];

const budgetOptions = (under: string): Option[] =>
  BUDGET_VALUES.map((value, i) => ({
    value,
    label: i === 0 ? `${under} $1,400` : value.replace('–', ' – '),
  }));

export const formsDictionary: Record<Locale, FormsDictionary> = {
  en: {
    common: {
      required: 'Required',
      select: 'Select…',
      sending: 'Sending…',
      error: "Your message didn't go through.",
      errorCall: 'Call (954) 614-1351',
      errorWhatsApp: 'WhatsApp Jose',
      invalidEmail: 'Enter a valid email',
    },
    contact: {
      firstName: 'First Name *',
      lastName: 'Last Name *',
      email: 'Email *',
      phone: 'Phone',
      role: 'I am... *',
      roleOptions: [
        { value: 'Looking to rent', label: 'Looking to rent' },
        { value: 'Landlord / property owner', label: 'A landlord or property owner' },
        { value: 'Buyer', label: 'Looking to buy' },
        { value: 'Seller', label: 'Looking to sell' },
        { value: 'Just exploring', label: 'Just exploring' },
      ],
      language: 'Preferred Language',
      message: 'Message',
      messagePlaceholder: 'Tell Jose about your goals, timeline, or any questions you have...',
      submit: 'Send Message',
      sentTitle: 'Message sent!',
      sentBody: 'Thank you for reaching out. Jose will be in touch within 24 hours, in your preferred language.',
    },
    renter: {
      name: 'Full Name *',
      namePlaceholder: 'Your full name',
      email: 'Email *',
      phone: 'Phone (optional)',
      bedrooms: 'Bedrooms *',
      bedroomOptions: [
        { value: 'Studio', label: 'Studio' },
        { value: '1 BR', label: '1 Bedroom' },
        { value: '2 BR', label: '2 Bedrooms' },
        { value: '3 BR', label: '3 Bedrooms' },
        { value: '4+ BR', label: '4+ Bedrooms' },
      ],
      budget: 'Monthly Budget *',
      budgetOptions: budgetOptions('Under'),
      timeline: 'Move-in Timeline *',
      timelineOptions: [
        { value: 'ASAP', label: 'As soon as possible' },
        { value: 'Within 30 days', label: 'Within 30 days' },
        { value: '1–3 months', label: '1–3 months' },
        { value: '3+ months', label: '3+ months' },
        { value: 'Flexible', label: 'Flexible' },
      ],
      area: 'Preferred area or neighborhood (optional)',
      message: 'Anything else? (optional)',
      messagePlaceholder: 'Pets, must-haves, questions…',
      submit: 'Send My Rental Inquiry',
      sentTitle: 'Thank you!',
      sentBody: 'Your inquiry has been sent. Jose will reach out within 24 hours.',
    },
    landlord: {
      name: 'Full Name *',
      namePlaceholder: 'Your full name',
      phone: 'Phone *',
      email: 'Email *',
      address: 'Property Address *',
      bedrooms: 'Bedrooms',
      rentGoal: 'Monthly Rent Goal',
      message: 'Message',
      messagePlaceholder: 'Tell Jose about your property, timeline, or any questions...',
      submit: 'Contact Jose About Your Property',
      sentTitle: 'Thank you!',
      sentBody: 'Your property details have been sent. Jose will be in touch soon to discuss your rental.',
    },
  },

  es: {
    common: {
      required: 'Obligatorio',
      select: 'Seleccione…',
      sending: 'Enviando…',
      error: 'Su mensaje no se pudo enviar.',
      errorCall: 'Llame al (954) 614-1351',
      errorWhatsApp: 'Escríbale por WhatsApp',
      invalidEmail: 'Ingrese un correo válido',
    },
    contact: {
      firstName: 'Nombre *',
      lastName: 'Apellido *',
      email: 'Correo electrónico *',
      phone: 'Teléfono',
      role: 'Yo... *',
      roleOptions: [
        { value: 'Looking to rent', label: 'Busco una casa para alquilar' },
        { value: 'Landlord / property owner', label: 'Soy dueño de una propiedad' },
        { value: 'Buyer', label: 'Quiero comprar' },
        { value: 'Seller', label: 'Quiero vender' },
        { value: 'Just exploring', label: 'Solo estoy explorando' },
      ],
      language: 'Idioma preferido',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntele a Jose qué busca, sus plazos o cualquier pregunta...',
      submit: 'Enviar mensaje',
      sentTitle: '¡Mensaje enviado!',
      sentBody: 'Gracias por escribir. Jose se comunicará con usted en menos de 24 horas, en su idioma.',
    },
    renter: {
      name: 'Nombre completo *',
      namePlaceholder: 'Su nombre completo',
      email: 'Correo electrónico *',
      phone: 'Teléfono (opcional)',
      bedrooms: 'Habitaciones *',
      bedroomOptions: [
        { value: 'Studio', label: 'Estudio' },
        { value: '1 BR', label: '1 habitación' },
        { value: '2 BR', label: '2 habitaciones' },
        { value: '3 BR', label: '3 habitaciones' },
        { value: '4+ BR', label: '4 o más habitaciones' },
      ],
      budget: 'Presupuesto mensual *',
      budgetOptions: budgetOptions('Menos de'),
      timeline: '¿Cuándo se quiere mudar? *',
      timelineOptions: [
        { value: 'ASAP', label: 'Lo antes posible' },
        { value: 'Within 30 days', label: 'En los próximos 30 días' },
        { value: '1–3 months', label: 'En 1 a 3 meses' },
        { value: '3+ months', label: 'En más de 3 meses' },
        { value: 'Flexible', label: 'Tengo flexibilidad' },
      ],
      area: 'Zona o vecindario preferido (opcional)',
      message: '¿Algo más? (opcional)',
      messagePlaceholder: 'Mascotas, lo que no puede faltar, preguntas…',
      submit: 'Enviar mi solicitud',
      sentTitle: '¡Gracias!',
      sentBody: 'Su solicitud fue enviada. Jose se comunicará con usted en menos de 24 horas.',
    },
    landlord: {
      name: 'Nombre completo *',
      namePlaceholder: 'Su nombre completo',
      phone: 'Teléfono *',
      email: 'Correo electrónico *',
      address: 'Dirección de la propiedad *',
      bedrooms: 'Habitaciones',
      rentGoal: 'Renta mensual deseada',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntele a Jose sobre su propiedad, sus plazos o sus preguntas...',
      submit: 'Contactar a Jose sobre mi propiedad',
      sentTitle: '¡Gracias!',
      sentBody: 'Los datos de su propiedad fueron enviados. Jose se comunicará con usted pronto.',
    },
  },

  pt: {
    common: {
      required: 'Obrigatório',
      select: 'Selecione…',
      sending: 'Enviando…',
      error: 'Não foi possível enviar sua mensagem.',
      errorCall: 'Ligue para (954) 614-1351',
      errorWhatsApp: 'Chame no WhatsApp',
      invalidEmail: 'Digite um e-mail válido',
    },
    contact: {
      firstName: 'Nome *',
      lastName: 'Sobrenome *',
      email: 'E-mail *',
      phone: 'Telefone',
      role: 'Eu... *',
      roleOptions: [
        { value: 'Looking to rent', label: 'Procuro uma casa para alugar' },
        { value: 'Landlord / property owner', label: 'Sou proprietário de um imóvel' },
        { value: 'Buyer', label: 'Quero comprar' },
        { value: 'Seller', label: 'Quero vender' },
        { value: 'Just exploring', label: 'Só estou pesquisando' },
      ],
      language: 'Idioma preferido',
      message: 'Mensagem',
      messagePlaceholder: 'Conte ao Jose o que você procura, seu prazo ou suas dúvidas...',
      submit: 'Enviar mensagem',
      sentTitle: 'Mensagem enviada!',
      sentBody: 'Obrigado pelo contato. O Jose vai responder em até 24 horas, no seu idioma.',
    },
    renter: {
      name: 'Nome completo *',
      namePlaceholder: 'Seu nome completo',
      email: 'E-mail *',
      phone: 'Telefone (opcional)',
      bedrooms: 'Quartos *',
      bedroomOptions: [
        { value: 'Studio', label: 'Studio' },
        { value: '1 BR', label: '1 quarto' },
        { value: '2 BR', label: '2 quartos' },
        { value: '3 BR', label: '3 quartos' },
        { value: '4+ BR', label: '4 quartos ou mais' },
      ],
      budget: 'Orçamento mensal *',
      budgetOptions: budgetOptions('Até'),
      timeline: 'Quando quer se mudar? *',
      timelineOptions: [
        { value: 'ASAP', label: 'O quanto antes' },
        { value: 'Within 30 days', label: 'Nos próximos 30 dias' },
        { value: '1–3 months', label: 'Em 1 a 3 meses' },
        { value: '3+ months', label: 'Daqui a mais de 3 meses' },
        { value: 'Flexible', label: 'Tenho flexibilidade' },
      ],
      area: 'Região ou bairro de preferência (opcional)',
      message: 'Mais alguma coisa? (opcional)',
      messagePlaceholder: 'Animais de estimação, o que não pode faltar, dúvidas…',
      submit: 'Enviar minha solicitação',
      sentTitle: 'Obrigado!',
      sentBody: 'Sua solicitação foi enviada. O Jose vai entrar em contato em até 24 horas.',
    },
    landlord: {
      name: 'Nome completo *',
      namePlaceholder: 'Seu nome completo',
      phone: 'Telefone *',
      email: 'E-mail *',
      address: 'Endereço do imóvel *',
      bedrooms: 'Quartos',
      rentGoal: 'Aluguel mensal desejado',
      message: 'Mensagem',
      messagePlaceholder: 'Conte ao Jose sobre o seu imóvel, seu prazo ou suas dúvidas...',
      submit: 'Falar com o Jose sobre meu imóvel',
      sentTitle: 'Obrigado!',
      sentBody: 'Os dados do seu imóvel foram enviados. O Jose vai entrar em contato em breve.',
    },
  },
};
