export interface NavItem {
  label: { en: string; hi: string };
  path: string;
}

export const NAVIGATION: NavItem[] = [
  {
    label: { en: 'Home', hi: 'मुख्य पृष्ठ' },
    path: '/'
  },
  {
    label: { en: 'Projects', hi: 'हमारे प्रोजेक्ट्स' },
    path: '/projects'
  },
  {
    label: { en: 'Gallery', hi: 'गैलरी' },
    path: '/gallery'
  },
  {
    label: { en: 'About', hi: 'हमारे बारे में' },
    path: '/about'
  },
  {
    label: { en: 'Contact', hi: 'सम्पर्क करें' },
    path: '/contact'
  }
];

export const FOOTER_EXPLORE: NavItem[] = [
  {
    label: { en: 'Home', hi: 'मुख्य पृष्ठ' },
    path: '/'
  },
  {
    label: { en: 'About Us', hi: 'हमारे बारे में' },
    path: '/about'
  },
  {
    label: { en: 'Featured Projects', hi: 'हमारे प्रोजेक्ट्स' },
    path: '/projects'
  },
  {
    label: { en: 'Design Gallery', hi: 'गैलरी' },
    path: '/gallery'
  },
  {
    label: { en: 'Get in Touch', hi: 'सम्पर्क करें' },
    path: '/contact'
  }
];

export const FOOTER_SUPPORT: NavItem[] = [
  {
    label: { en: 'Help Center', hi: 'सहायता केंद्र' },
    path: '#'
  },
  {
    label: { en: 'Career', hi: 'करियर' },
    path: '#'
  },
  {
    label: { en: 'FAQs', hi: 'अक्सर पूछे जाने वाले प्रश्न' },
    path: '#faq'
  },
  {
    label: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
    path: '#'
  },
  {
    label: { en: 'Contact', hi: 'सम्पर्क' },
    path: '/contact'
  }
];
