import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light',
  },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
  {
    name: 'coffee',
    text: '☕ Coffee',
  },
  {
    name: 'forest',
    text: '🌲 Forest',
  },
  {
    name: 'night',
    text: '🌃 Night',
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade',
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake',
  },
  {
    name: 'retro',
    text: '🌇 Retro',
  },
  {
    name: 'black',
    text: '🖤 Black',
  },
  {
    name: 'winter',
    text: '❄ Winter',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/privacy-policy',
      text: 'Privacy policy',
    },
    {
      link: '/terms-of-service',
      text: 'Terms of service',
    },
  ],
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/atom.xml',
      text: 'Feed',
    },
    {
      link: '/sitemap.xml',
      text: 'Sitemap',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: 'numeric',
  },
}

export const feed: FeedConfig = {}
