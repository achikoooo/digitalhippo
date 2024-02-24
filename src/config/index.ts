export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imgSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imgSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '#',
        imgSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite  Picks',
        href: '#',
        imgSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals from here',
        href: '#',
        imgSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling icons',
        href: '#',
        imgSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]