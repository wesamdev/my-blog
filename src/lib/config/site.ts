import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/myimg@512.png',
    bio: 'المدونة الرسمية الخاصة بمدرسة مالك بن فهم.',
    name: 'مدرسة مالك بن فهم',
    status: '📘',
  },
  description: 'مدونة مدرسة مالك بن فهم.',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.wesam.site',
  lang: 'ar-OM',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'مدونة مدرسة مالك بن فهم.',
  themeColor: '#3D4451',
  title: 'مالك بن فهم',
}
