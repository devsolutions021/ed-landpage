// ─── Redes sociais oficiais ──────────────────────────────────
// Todos os links abrem em nova aba (_blank).

export interface SocialLink {
  label: string;
  href: string;
  /** SVG path (24×24 viewBox) */
  icon: string;
}

export const SOCIALS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/prefeitoedinhoaraujo',
    icon: 'M13.5 9H15V6.5h-1.8C11 6.5 10 7.8 10 9.7V11H8.5v2.5H10V19h2.5v-5.5h1.7l.3-2.5h-2V9.9c0-.6.2-.9.8-.9Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/edinho.araujo/',
    icon: 'M8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5v-7A4.5 4.5 0 0 1 8.5 4Zm3.5 4.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0 1.8A1.4 1.4 0 1 1 12 13.4a1.4 1.4 0 0 1 0-2.8Zm3.4-2.4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@prefeitoedinhoaraujo5115',
    icon: 'M20 8.4a2.1 2.1 0 0 0-1.5-1.5C17.2 6.6 12 6.6 12 6.6s-5.2 0-6.5.3A2.1 2.1 0 0 0 4 8.4 22 22 0 0 0 3.8 12 22 22 0 0 0 4 15.6a2.1 2.1 0 0 0 1.5 1.5c1.3.3 6.5.3 6.5.3s5.2 0 6.5-.3a2.1 2.1 0 0 0 1.5-1.5A22 22 0 0 0 20.2 12 22 22 0 0 0 20 8.4ZM10.4 14.2V9.8l3.8 2.2Z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@edinho.araujo',
    icon: 'M16 4c.3 1.9 1.4 3.2 3.2 3.4v2.3c-1.1.1-2.2-.2-3.2-.8v4.9a4.9 4.9 0 1 1-4.9-4.9c.3 0 .5 0 .8.1v2.4a2.5 2.5 0 1 0 1.8 2.4V4Z',
  },
  {
    label: 'X',
    href: 'https://x.com/edinhoaraujo',
    icon: 'M17 5h2.3l-5 5.7L20 19h-4.6l-3.6-4.7L7.7 19H5.4l5.3-6.1L4.7 5h4.7l3.2 4.3Zm-.8 12.6h1.3L8.2 6.3H6.8Z',
  },
];

/** Link direto para o Direct do Instagram. */
export const INSTAGRAM_DM = 'https://ig.me/m/edinho.araujo';
