import type { Locale } from '../locales';

// Keep this in sync with what the site actually does (form fields, email provider,
// hosting, analytics). Update `updated` whenever anything here changes.

export interface PrivacyDictionary {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; body: string[] }[];
}

export const privacyDictionary: Record<Locale, PrivacyDictionary> = {
  en: {
    meta: {
      title: 'Privacy Policy',
      description: 'What information josecostarealtor.com collects, why, and what happens to it.',
    },
    eyebrow: 'Privacy',
    title: 'Privacy Policy',
    updated: 'Last updated October 26, 2026',
    intro:
      'This site is run for Jose Costa, a licensed real estate agent with Atlantic Florida Properties. This page explains what information the site collects, why, and what happens to it.',
    sections: [
      {
        title: 'What we collect',
        body: [
          'When you fill out a form, we collect what you type: your name, email, phone number, and the details of your request, such as bedrooms, budget, move-in date, or a property address.',
          'We never ask for Social Security numbers, bank or card details, or immigration documents through this site.',
        ],
      },
      {
        title: 'How we use it',
        body: [
          'Only to answer your inquiry and help with your rental, purchase, or sale. Jose may contact you by phone, text, WhatsApp, or email about your inquiry. If you would like him to stop, tell him through any of those channels and he will.',
        ],
      },
      {
        title: 'Who handles it',
        body: [
          "Form submissions are sent to Jose's inbox through Resend, an email delivery service. The site is hosted by Vercel and served through Cloudflare. If you message Jose on WhatsApp, WhatsApp's own privacy policy applies to that conversation.",
          'We do not sell or rent your information, and we do not share it with other agents or marketers. When you ask Jose to help with a transaction, he may share the details needed with the people involved in it, such as a landlord, lender, or title company.',
        ],
      },
      {
        title: 'Analytics',
        body: [
          'We use Vercel Web Analytics to count page visits and which contact buttons get used. It does not use cookies and does not identify you personally.',
        ],
      },
      {
        title: 'How long we keep it',
        body: [
          "Inquiries stay in Jose's email as part of his business records. If you ask, he will delete your information, except for records Florida law requires real estate licensees to keep for a completed or active transaction.",
        ],
      },
      {
        title: 'Children',
        body: ['This site is not meant for children under 13, and we do not knowingly collect their information.'],
      },
      {
        title: 'Questions or requests',
        body: [
          'Email USARealtor1@gmail.com or call (954) 614-1351. If this policy changes, the date at the top of this page will change too.',
        ],
      },
    ],
  },

  es: {
    meta: {
      title: 'Política de privacidad',
      description: 'Qué información recopila josecostarealtor.com, para qué la usa y qué pasa con ella.',
    },
    eyebrow: 'Privacidad',
    title: 'Política de privacidad',
    updated: 'Última actualización: 26 de octubre de 2026',
    intro:
      'Este sitio funciona para Jose Costa, agente de bienes raíces con licencia afiliado a Atlantic Florida Properties. Esta página explica qué información recopila el sitio, para qué y qué pasa con ella.',
    sections: [
      {
        title: 'Qué recopilamos',
        body: [
          'Cuando completa un formulario, recopilamos lo que escribe: su nombre, correo electrónico, teléfono y los detalles de su solicitud, como habitaciones, presupuesto, fecha de mudanza o la dirección de una propiedad.',
          'Nunca le pedimos por este sitio su número de Seguro Social, datos bancarios o de tarjetas, ni documentos migratorios.',
        ],
      },
      {
        title: 'Cómo la usamos',
        body: [
          'Solo para responder a su consulta y ayudarle a alquilar, comprar o vender. Jose puede comunicarse con usted por teléfono, mensaje de texto, WhatsApp o correo electrónico sobre su consulta. Si prefiere que deje de hacerlo, dígaselo por cualquiera de esos medios y lo hará.',
        ],
      },
      {
        title: 'Quién la maneja',
        body: [
          'Los formularios llegan al correo de Jose a través de Resend, un servicio de envío de correos. El sitio está alojado en Vercel y se sirve a través de Cloudflare. Si le escribe a Jose por WhatsApp, esa conversación se rige por la política de privacidad de WhatsApp.',
          'No vendemos ni alquilamos su información, y no la compartimos con otros agentes ni con empresas de mercadeo. Cuando le pide a Jose ayuda con una transacción, él puede compartir los datos necesarios con las personas que participan en ella, como el dueño, el prestamista o la compañía de título.',
        ],
      },
      {
        title: 'Estadísticas del sitio',
        body: [
          'Usamos Vercel Web Analytics para contar las visitas a las páginas y qué botones de contacto se usan. No usa cookies y no lo identifica personalmente.',
        ],
      },
      {
        title: 'Cuánto tiempo la guardamos',
        body: [
          'Las consultas quedan en el correo de Jose como parte de sus registros de trabajo. Si lo pide, él borrará su información, salvo los registros que la ley de la Florida exige conservar a los agentes de bienes raíces sobre una transacción activa o terminada.',
        ],
      },
      {
        title: 'Menores de edad',
        body: ['Este sitio no está dirigido a menores de 13 años y no recopilamos su información a sabiendas.'],
      },
      {
        title: 'Preguntas o solicitudes',
        body: [
          'Escriba a USARealtor1@gmail.com o llame al (954) 614-1351. Si esta política cambia, también cambiará la fecha al principio de esta página.',
        ],
      },
    ],
  },

  pt: {
    meta: {
      title: 'Política de privacidade',
      description: 'Quais informações o josecostarealtor.com coleta, para quê e o que acontece com elas.',
    },
    eyebrow: 'Privacidade',
    title: 'Política de privacidade',
    updated: 'Última atualização: 26 de outubro de 2026',
    intro:
      'Este site é mantido para Jose Costa, corretor de imóveis licenciado e afiliado à Atlantic Florida Properties. Esta página explica quais informações o site coleta, para quê e o que acontece com elas.',
    sections: [
      {
        title: 'O que coletamos',
        body: [
          'Quando você preenche um formulário, coletamos o que você digita: nome, e-mail, telefone e os detalhes do seu pedido, como número de quartos, orçamento, data de mudança ou o endereço de um imóvel.',
          'Nunca pedimos por este site número de Social Security, dados bancários ou de cartão, nem documentos de imigração.',
        ],
      },
      {
        title: 'Como usamos',
        body: [
          'Apenas para responder ao seu contato e ajudar com o seu aluguel, compra ou venda. O Jose pode entrar em contato por telefone, mensagem de texto, WhatsApp ou e-mail sobre a sua solicitação. Se preferir que ele pare, é só avisar por qualquer um desses canais.',
        ],
      },
      {
        title: 'Quem cuida das informações',
        body: [
          'Os formulários chegam ao e-mail do Jose pelo Resend, um serviço de envio de e-mails. O site é hospedado na Vercel e servido pela Cloudflare. Se você falar com o Jose pelo WhatsApp, essa conversa segue a política de privacidade do WhatsApp.',
          'Não vendemos nem alugamos suas informações, e não as compartilhamos com outros corretores ou empresas de marketing. Quando você pede ajuda ao Jose com uma transação, ele pode compartilhar os dados necessários com as pessoas envolvidas, como o proprietário, o credor ou a empresa de título.',
        ],
      },
      {
        title: 'Estatísticas do site',
        body: [
          'Usamos o Vercel Web Analytics para contar as visitas às páginas e quais botões de contato são usados. Ele não usa cookies e não identifica você pessoalmente.',
        ],
      },
      {
        title: 'Por quanto tempo guardamos',
        body: [
          'Os contatos ficam no e-mail do Jose como parte dos registros de trabalho dele. Se você pedir, ele apaga suas informações, exceto os registros que a lei da Flórida exige que corretores guardem sobre uma transação ativa ou concluída.',
        ],
      },
      {
        title: 'Menores de idade',
        body: ['Este site não é destinado a menores de 13 anos, e não coletamos informações deles intencionalmente.'],
      },
      {
        title: 'Dúvidas ou pedidos',
        body: [
          'Escreva para USARealtor1@gmail.com ou ligue para (954) 614-1351. Se esta política mudar, a data no topo desta página também muda.',
        ],
      },
    ],
  },
};
