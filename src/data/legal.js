/**
 * Legal Notice (LSSI-CE, art. 10) and Privacy Policy (GDPR and LOPDGDD) for
 * the site. Bracketed values are still to be filled in by the owner.
 */
import { contact } from './site'

const owner = {
  name: 'Joel López Esteves',
  trade: 'Joel Loopez',
  taxId: '[NIF]',
  address: '[Postal address], Barcelona, Spain',
}

const updated = '2 November 2026'

export const legalNotice = {
  label: 'Legal',
  title: 'Legal notice.',
  updated,
  sections: [
    {
      heading: 'Who runs this website',
      body: [
        'In compliance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is:',
        {
          list: [
            `Owner: ${owner.name}, trading as ${owner.trade}`,
            `Tax ID (NIF): ${owner.taxId}`,
            `Address: ${owner.address}`,
            `Email: ${contact.email}`,
            `Phone: ${contact.phone}`,
          ],
        },
      ],
    },
    {
      heading: 'What this website is for',
      body: [
        'This website presents the work and services of Joel Loopez, composer and music producer: custom music for brands, games, film and events, music production and mentorship at the studio in La Floresta, music and sound licensing, and ecstatic dance DJ sets.',
        'The website does not sell anything directly. Prices shown for music and sound packs are for information only; every purchase is made on the third-party platform it links to.',
      ],
    },
    {
      heading: 'Using the website',
      body: [
        'By browsing this website you agree to use it lawfully and in good faith, and not to use it in any way that could damage it, impair it or prevent others from using it.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        `The music, recordings, videos, texts, photographs, logo and design of this website belong to ${owner.name} or are used with the permission of their owners. Reproducing, distributing, publicly communicating or transforming them, in whole or in part, without written permission is not allowed, except where the law allows it.`,
        'Playing or watching the work shown here does not grant any licence to use it. Tracks and sound packs are licensed only through the platform where they are bought, under that platform’s licence terms or the licence included with each pack.',
        'Client names and logos — such as Netflix, Domino’s, Rip Curl, Cepsa, Nestea, CANADA and ESLAND — are trademarks of their respective owners. They appear only to identify past work and do not imply endorsement.',
      ],
    },
    {
      heading: 'Third-party platforms and links',
      body: [
        'This website links to third-party sites, including itch.io, music libraries such as AudioJungle, Envato Elements, Pond5, Motion Array, Fab and the Unity Asset Store, Vimeo, Linktree and social networks. Each one is governed by its own terms and privacy policy. Joel Loopez does not control those sites and is not responsible for their content, availability or the purchases made on them.',
      ],
    },
    {
      heading: 'Adult content',
      body: [
        'The sound-effects section links to a sound library intended for adult games and media. It is meant for people aged 18 or over only.',
      ],
    },
    {
      heading: 'Liability',
      body: [
        'Every effort is made to keep the information on this website accurate and up to date, but it may contain errors or become outdated. Joel Loopez is not liable for damage arising from the use of this website or from interruptions in its availability, except where the law provides otherwise.',
      ],
    },
    {
      heading: 'Kit Digital funding',
      body: [
        'This website has been funded by the Kit Digital programme, part of the Recovery, Transformation and Resilience Plan, with funds from the European Union — NextGenerationEU.',
      ],
    },
    {
      heading: 'Applicable law',
      body: [
        'This legal notice is governed by Spanish law. Any dispute will be heard by the courts of Barcelona, unless the law entitles you, as a consumer, to go to the courts of your place of residence.',
      ],
    },
  ],
}

export const privacyPolicy = {
  label: 'Privacy',
  title: 'Privacy policy.',
  updated,
  sections: [
    {
      heading: 'Who is responsible for your data',
      body: [
        `The data controller is ${owner.name} (${owner.trade}), NIF ${owner.taxId}, ${owner.address}. For anything related to your personal data, write to ${contact.email}.`,
      ],
    },
    {
      heading: 'What data is collected, and why',
      body: [
        'This website has no forms, no user accounts and no analytics. Personal data is only processed in these cases:',
        {
          list: [
            'When you get in touch by email or phone: your name, contact details and whatever you choose to tell me, to answer you and, if you ask for it, to prepare a quote or project. Legal basis: taking steps at your request before a contract, and my legitimate interest in answering enquiries (GDPR, article 6.1.b and 6.1.f).',
            'If you become a client: the data needed to carry out the project and to invoice it. Legal basis: performing the contract and meeting tax and accounting obligations (GDPR, article 6.1.b and 6.1.c).',
            'When you visit the website: the hosting provider records technical data such as your IP address, browser and the pages requested, to deliver the website and keep it secure. Legal basis: legitimate interest (GDPR, article 6.1.f).',
          ],
        },
        'Sign-ups for ecstatic dance sessions are handled through Linktree and the services it links to, under their own privacy policies.',
      ],
    },
    {
      heading: 'How long it is kept',
      body: [
        'Enquiries that do not lead to a project are deleted within one year. Client data is kept for as long as the working relationship lasts and afterwards for the periods required by law — four years under Spanish tax law and six years under the Commercial Code for invoices and accounting records. Technical logs are kept by the hosting provider for its own short retention period.',
      ],
    },
    {
      heading: 'Who else receives it',
      body: [
        'Your data is never sold or given to third parties for their own purposes. It is only handled by the providers needed to run this website and answer you, acting on my behalf:',
        {
          list: [
            'Vercel Inc. — hosts the website.',
            'Google — provides the email service and the Poppins typeface, which your browser downloads from Google’s servers when the page loads.',
            'Vimeo — streams a video only when you choose to play one, with its do-not-track setting enabled.',
          ],
        },
        'Some of these providers are based in the United States. Transfers rely on the EU–US Data Privacy Framework or on the European Commission’s standard contractual clauses.',
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'This website does not use cookies for analytics, advertising or tracking, so it does not ask for cookie consent. The Vimeo player is loaded with its do-not-track setting, so it does not set tracking cookies when you play a video.',
        'Your browser may store small technical preferences locally, such as the display options you choose. They stay on your device and are never sent anywhere.',
        'Third-party sites you reach through links set their own cookies, under their own policies.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        `You can ask to access, correct or delete your data, to object to or restrict its processing, and to receive it in a portable format. Write to ${contact.email}, saying which right you want to exercise. You will get an answer within one month.`,
        'If you think your data has not been handled properly, you can complain to the Spanish Data Protection Agency (Agencia Española de Protección de Datos) at www.aepd.es.',
      ],
    },
    {
      heading: 'Children',
      body: [
        'This website is not directed at children under 14, and their data is not knowingly collected. Some linked products are intended only for adults.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'This policy may be updated when the website or the law changes. The date at the top shows when it was last revised.',
      ],
    },
  ],
}
