export type ProjectTag = 'ai' | 'web3' | 'mobile' | 'backend' | 'frontend';

export type Project = {
  title: string;
  description: string;
  url: string;
  sourceCode: string;
  personal: boolean;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    title: 'Crypto Spy',
    description: 'Crypto tracker chrome extension',
    url: 'https://www.cryptospy.app/',
    sourceCode: 'https://github.com/HarrisonRogers/crypto-spy',
    personal: true,
    tags: ['web3', 'frontend'],
  },
  {
    title: 'Site Whiz',
    description: 'AI chat bot to read construction plans',
    url: 'https://site-whiz.vercel.app/',
    sourceCode: 'https://github.com/HarrisonRogers/site-whiz',
    personal: true,
    tags: ['ai', 'frontend'],
  },
  {
    title: 'Node Sol',
    description: 'Locally run Solana Copy trading bot',
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/node-sol',
    personal: true,
    tags: ['web3', 'backend'],
  },
  {
    title: 'Site Pro',
    description: 'Building asset management platform',
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/SitePro',
    personal: true,
    tags: ['frontend', 'backend'],
  },
  {
    title: 'First Table',
    description: 'Restaurant booking platform for 50% off meals',
    url: 'https://www.firsttable.co.nz/',
    sourceCode: '',
    personal: false,
    tags: ['frontend', 'backend'],
  },
  {
    title: 'Launch Base Tokens',
    description: 'Launch sepolia base crypto tokens',
    url: 'https://launch-base-tokens.vercel.app/',
    sourceCode: 'https://github.com/HarrisonRogers/launch-base-tokens',
    personal: true,
    tags: ['web3', 'frontend'],
  },
  {
    title: 'Eth Blogs',
    description: 'Write blogs and set subscription fees with base',
    url: '',
    sourceCode: 'https://github.com/HarrisonRogers/eth-blogs',
    personal: true,
    tags: ['web3', 'frontend'],
  },
];
