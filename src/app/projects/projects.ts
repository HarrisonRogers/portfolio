export const projects = [
  {
    title: 'MetroLord',
    description: '3D pixel city where you can lease a building',
    details:
      'An explorable 3D pixel city where companies lease buildings and put up their own signs, with traffic and a skyline generated in the browser.',
    video: '/metrolord-video.mp4',
    url: 'https://www.metrolord.com/',
    sourceCode: '',
    personal: true,
  },
  {
    title: 'Tacendo AI',
    description: 'Private AI chat',
    details:
      'A private AI chat app that needs no email or name. You can try a few messages for free, then sign in with a Solana wallet, and chats stay in your browser by default.',
    video: '/tacendo.mov',
    url: 'https://www.tacendo.com/',
    sourceCode: '',
    personal: true,
  },
  {
    title: 'Port-Generator',
    description: 'Portfolio generator built in a weekend',
    details:
      'Portfolio generator built in a weekend where you paste your Github and can add a few facts about yourself and it will generate a portfolio for you.',
    video: '/port-generator.mov',
    url: 'https://port-generator.vercel.app/',
    sourceCode: 'https://github.com/HarrisonRogers/port-generator',
    personal: true,
  },
  {
    title: 'Crypto Spy',
    description: 'Crypto tracker chrome extension',
    details:
      'A lightweight Chrome extension for keeping an eye on cryptocurrency prices without leaving the page you are browsing.',
    video: '/crypto-spy.mov',
    url: 'https://www.cryptospy.app/',
    sourceCode: 'https://github.com/HarrisonRogers/crypto-spy',
    personal: true,
  },
  {
    title: 'Arbitrage Polymarket Bot',
    description: 'Trades 15 minute crypto markets on polymarket',
    details:
      "An automated trading experiment that looks for pricing opportunities across Polymarket's short-duration crypto markets.",
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/arbitrage-polymarket',
    personal: true,
  },
  {
    title: 'Node Sol',
    description: 'Locally run Solana Copy trading bot',
    details:
      'A locally run Solana bot that watches selected wallets and mirrors their trades from a user-controlled environment.',
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/node-sol',
    personal: true,
  },
  {
    title: 'First Table',
    description: 'Restaurant booking platform for 50% off meals',
    details:
      'A restaurant discovery and booking platform that helps diners fill early tables while receiving 50% off their food bill.',
    video: '/first-table.mov',
    url: 'https://www.firsttable.co.nz/',
    sourceCode: '',
    personal: false,
  },
];

export type Project = (typeof projects)[number];
