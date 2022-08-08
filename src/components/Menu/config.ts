import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://doge-frontend-swap.vercel.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://doge-frontend-swap.vercel.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xdfbffb67295ecfb6cd44bc2decd24dc3d55edd07',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/Doge-Gold-Floki",
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/DogeGoldFloki',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/DogeGoldFloki',
      },
    ],
  },

]

export default config
