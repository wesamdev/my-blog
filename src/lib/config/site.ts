import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/myimg@512.png',
    bio: 'Hi, I\'m Wesam Almasruri, a 16-year-old software developer and web designer from Oman. I\'ve been passionate about coding since childhood and love creating websites.',
    name: 'Wesam Almasruri',
    status: '👨‍💻',
  },
  description: 'Wesam Almasruri\'s Blog',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.wesam.site',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Wesam Almasruri\'s Blog',
  themeColor: '#3D4451',
  title: 'wesamdev blog',
}
