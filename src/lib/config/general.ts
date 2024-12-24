import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 فاتح',
  },
  {
    name: 'dracula',
    text: '🧛 دراكولا',
  },
  {
    name: 'dark',
    text: '🌜 داكن',
  },
  {
    name: 'light',
    text: '🌞 فاتح',
  },
  {
    name: 'coffee',
    text: '☕ قهوة',
  },
  {
    name: 'forest',
    text: '🌲 غابة',
  },
  {
    name: 'night',
    text: '🌃 ليل',
  },
  {
    name: 'lemonade',
    text: '🍋 ليمونادا',
  },
  {
    name: 'cupcake',
    text: '🧁 كب كيك',
  },
  {
    name: 'retro',
    text: '🌇 ريترو',
  },
  {
    name: 'black',
    text: '🖤 أسود',
  },
  {
    name: 'winter',
    text: '❄ شتاء',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/privacy-policy',
      text: 'سياسة الخصوصية',
    },
    {
      link: '/terms-of-service',
      text: 'شروط الخدمة',
    },
  ],
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/atom.xml',
      text: 'أتوم',
    },
    {
      link: '/sitemap.xml',
      text: 'خريطة الموقع',
    },
    {
      link: 'https://www.instagram.com/malikfahm.school/',
      text: 'إنستغرام',
    },
  ],
}

export const date: DateConfig = {
  locales: 'ar-OM',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: 'numeric',
  },
}

export const feed: FeedConfig = {}
