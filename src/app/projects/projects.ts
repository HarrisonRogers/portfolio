export const projects = [
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
      'An automated trading experiment that looks for pricing opportunities across Polymarket\'s short-duration crypto markets.',
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
  {
    title: 'Launch Base Tokens',
    description: 'Launch sepolia base crypto tokens',
    details:
      'A simple web app for creating and launching test tokens on the Base Sepolia network through a guided interface.',
    video: '/launch-base.mov',
    url: 'https://launch-base-tokens.vercel.app/',
    sourceCode: 'https://github.com/HarrisonRogers/launch-base-tokens',
    personal: true,
  },
  {
    title: 'Eth Blogs',
    description: 'Write blogs and set subscription fees with base',
    details:
      'An onchain publishing prototype where writers can create posts and set subscription fees using the Base network.',
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/eth-blogs',
    personal: true,
  },
];

export type Project = (typeof projects)[number];
