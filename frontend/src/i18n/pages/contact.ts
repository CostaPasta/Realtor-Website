import type { Locale } from '../locales';

export interface ContactDictionary {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  call: { title: string; body: string };
  whatsapp: { title: string; body: string; button: string };
  email: { title: string; body: string };
  form: { eyebrow: string; title: string; subtitle: string };
  brokerage: { body: string; serves: string; license: string; office: string; eho: string };
}

export const contactDictionary: Record<Locale, ContactDictionary> = {
  en: {
    meta: {
      title: 'Contact Jose Costa',
      description:
        'Call, WhatsApp, or email Jose Costa, a Palm Beach County realtor who works in English, Spanish, and Portuguese.',
    },
    hero: {
      eyebrow: 'Get in Touch',
      title: "Let's talk. No pressure, no obligation.",
      intro:
        'The best first step in any South Florida real estate decision is a conversation. Jose is available in English, Spanish, and Portuguese.',
    },
    call: {
      title: 'Call Jose',
      body: 'Prefer to talk directly? Jose is available Monday–Saturday.',
    },
    whatsapp: {
      title: 'WhatsApp',
      body: 'Prefer to message? Send Jose a message on WhatsApp and he typically responds within a few hours.',
      button: 'Chat on WhatsApp',
    },
    email: {
      title: 'Email',
      body: 'Write anytime. Jose replies within 24 hours.',
    },
    form: {
      eyebrow: 'Send a Message',
      title: 'Get in touch with Jose',
      subtitle: 'Fill out the form and Jose will respond within 24 hours, in your preferred language.',
    },
    brokerage: {
      body: 'Jose is affiliated with Atlantic Florida Properties, a full-service brokerage serving South Florida buyers, sellers, renters, and landlords. Licensed in the State of Florida.',
      serves: 'Serving Palm Beach and Broward counties',
      license: 'FL License',
      office: 'Office License',
      eho: 'Equal Housing Opportunity',
    },
  },

  es: {
    meta: {
      title: 'Contactar a Jose Costa',
      description:
        'Llame, escriba por WhatsApp o envíe un correo a Jose Costa, agente de bienes raíces en el condado de Palm Beach que trabaja en español, inglés y portugués.',
    },
    hero: {
      eyebrow: 'Contacto',
      title: 'Hablemos. Sin presión y sin compromiso.',
      intro:
        'El mejor primer paso en cualquier decisión de bienes raíces es una conversación. Jose le atiende en español, inglés y portugués.',
    },
    call: {
      title: 'Llame a Jose',
      body: '¿Prefiere hablar directamente? Jose está disponible de lunes a sábado.',
    },
    whatsapp: {
      title: 'WhatsApp',
      body: '¿Prefiere escribir? Envíele un mensaje a Jose por WhatsApp. Normalmente responde en pocas horas.',
      button: 'Escribir por WhatsApp',
    },
    email: {
      title: 'Correo electrónico',
      body: 'Escríbale cuando quiera. Jose responde en menos de 24 horas.',
    },
    form: {
      eyebrow: 'Envíe un mensaje',
      title: 'Escríbale a Jose',
      subtitle: 'Complete el formulario y Jose le responderá en menos de 24 horas, en su idioma.',
    },
    brokerage: {
      body: 'Jose está afiliado a Atlantic Florida Properties, una agencia de bienes raíces de servicio completo que atiende a compradores, vendedores, inquilinos y dueños en el sur de la Florida. Con licencia del Estado de la Florida.',
      serves: 'Atiende los condados de Palm Beach y Broward',
      license: 'Licencia de FL',
      office: 'Licencia de la oficina',
      eho: 'Igualdad de Oportunidades en la Vivienda',
    },
  },

  pt: {
    meta: {
      title: 'Fale com Jose Costa',
      description:
        'Ligue, chame no WhatsApp ou mande um e-mail para Jose Costa, corretor de imóveis no condado de Palm Beach que atende em português, inglês e espanhol.',
    },
    hero: {
      eyebrow: 'Contato',
      title: 'Vamos conversar. Sem pressão e sem compromisso.',
      intro:
        'O melhor primeiro passo em qualquer decisão sobre imóveis é uma conversa. O Jose atende em português, inglês e espanhol.',
    },
    call: {
      title: 'Ligue para o Jose',
      body: 'Prefere falar direto? O Jose atende de segunda a sábado.',
    },
    whatsapp: {
      title: 'WhatsApp',
      body: 'Prefere mandar mensagem? Chame o Jose no WhatsApp. Ele costuma responder em poucas horas.',
      button: 'Chamar no WhatsApp',
    },
    email: {
      title: 'E-mail',
      body: 'Escreva quando quiser. O Jose responde em até 24 horas.',
    },
    form: {
      eyebrow: 'Envie uma mensagem',
      title: 'Fale com o Jose',
      subtitle: 'Preencha o formulário e o Jose responde em até 24 horas, no seu idioma.',
    },
    brokerage: {
      body: 'Jose é afiliado à Atlantic Florida Properties, imobiliária de serviço completo que atende compradores, vendedores, inquilinos e proprietários no sul da Flórida. Licenciado pelo Estado da Flórida.',
      serves: 'Atende os condados de Palm Beach e Broward',
      license: 'Licença FL',
      office: 'Licença do escritório',
      eho: 'Igualdade de Oportunidades na Moradia',
    },
  },
};
