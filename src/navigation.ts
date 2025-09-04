import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Articles',
      href: getBlogPermalink(),
    },
    {
      text: 'AI Coaching',
      href: getPermalink('/ai-coaching'),
    },
    {
      text: 'Community',
      href: getPermalink('/community'),
    },
    {
      text: 'Our Story',
      href: getPermalink('/our-story'),
    },
  ],
  actions: [
    { text: 'Sign In', href: getPermalink('/signin') },
    { text: 'Start Free Trial', href: getPermalink('/signup'), variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Content',
      links: [
        { text: 'Articles', href: getBlogPermalink() },
        { text: 'AI Coaching', href: getPermalink('/ai-coaching') },
        { text: 'Community', href: getPermalink('/community') },
        { text: 'Newsletter', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Our Story', href: getPermalink('/our-story') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: getPermalink('/help-center') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Refund Policy', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2025 CXO Atlas. All rights reserved. The real stuff about running a business.
  `,
};
