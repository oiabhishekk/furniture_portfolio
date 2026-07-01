export interface ProjectItem {
  id: string;
  category: 'doors' | 'wardrobes' | 'beds' | 'cabinets' | 'furniture' | 'cornice' | 'interiors';
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  image: string;
  video?: string;
  location: { en: string; hi: string };
  year: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-sliding-wardrobe',
    category: 'wardrobes',
    title: {
      en: 'Luxury Modular Sliding Wardrobe',
      hi: 'लक्जरी मॉड्यूलर स्लाइडिंग अलमारी (वार्डरोब)'
    },
    description: {
      en: 'A 3-door sliding wardrobe featuring a warm oak finish, soft-close sliding rails, and integrated warm profile lighting.',
      hi: 'वार्म ओक फिनिश, सॉफ्ट-क्लोज स्लाइडिंग रेल्स और एकीकृत एलईडी प्रोफाइल लाइटिंग वाली 3-दरवाजे की स्लाइडिंग अलमारी।'
    },
    image: '/images/references/wardrobe/minimal-glow-wardrobe-design.jpg',
    video: '/images/references/wardrobe/1a525060e756f072a645c4900252ec79.mp4',
    location: { en: 'Boring Road, Patna', hi: 'बोरिंग रोड, पटना' },
    year: '2025'
  },
  {
    id: 'proj-teak-door',
    category: 'doors',
    title: {
      en: 'Hand-carved Solid Teak Main Door',
      hi: 'नक्काशीदार सागवान की लकड़ी का मुख्य दरवाजा'
    },
    description: {
      en: 'Premium seasoned teak wood entry door featuring classical decorative carvings and high-gloss melamine polish.',
      hi: 'प्रीमियम पक्की सागवान लकड़ी का प्रवेश द्वार, जिसमें क्लासिकल नक्काशी और उच्च चमक वाली मेलामाइन पॉलिश है।'
    },
    image: '/images/references/furniture/download.jpg',
    location: { en: 'Kankarbagh, Patna', hi: 'कंकड़बाग, पटना' },
    year: '2026'
  },
  {
    id: 'proj-dining-table',
    category: 'furniture',
    title: {
      en: 'Solid Teak 6-Seater Dining Table',
      hi: 'ठोस सागवान का 6-सीटर डाइनिंग टेबल'
    },
    description: {
      en: 'Custom designed dining table with comfortable high-back chairs, showcasing premium walnut wood grain finish.',
      hi: 'आरामदायक ऊंची पीठ वाली कुर्सियों के साथ कस्टम डिजाइन किया गया डाइनिंग टेबल, जिसमें प्रीमियम अखरोट फिनिश है।'
    },
    image: '/images/references/furniture/dining-table.jpg',
    location: { en: 'Bailey Road, Patna', hi: 'बेली रोड, पटना' },
    year: '2025'
  },
  {
    id: 'proj-modern-wardrobe-2',
    category: 'wardrobes',
    title: {
      en: 'Minimalist Veneer Bedroom Wardrobe',
      hi: 'न्यूनतम विनियर बेडरूम वार्डरोब'
    },
    description: {
      en: 'Wall-to-wall integrated wardrobe with clean handles, interior drawers, and long durability laminate backing.',
      hi: 'साफ हैंडल, आंतरिक दराज और लंबी अवधि वाले लेमिनेट बैकिंग के साथ दीवार-से-दीवार एकीकृत अलमारी।'
    },
    image: '/images/references/wardrobe/orde-warmte-en-perfectie-in-maatwerk.jpg',
    location: { en: 'Rajendra Nagar, Patna', hi: 'राजेन्द्र नगर, पटना' },
    year: '2026'
  },
  {
    id: 'proj-hydraulic-bed',
    category: 'beds',
    title: {
      en: 'Teak Wood King Size Hydraulic Storage Bed',
      hi: 'सागवान की लकड़ी का किंग साइज हाइड्रोलिक स्टोरेज बेड'
    },
    description: {
      en: 'Sturdy King-size bed with deep hydraulic lifting storage, upholstered headboard in beige fabric.',
      hi: 'गहरे हाइड्रोलिक लिफ्टिंग स्टोरेज के साथ मजबूत किंग-साइज बेड, जिसमें बेज कपड़े का गद्देदार हेडबोर्ड है।'
    },
    image: '/images/references/furniture/download-1.jpg',
    location: { en: 'Anisabad, Patna', hi: 'अनीसाबाद, पटना' },
    year: '2025'
  },
  {
    id: 'proj-exterior-cornice-1',
    category: 'cornice',
    title: {
      en: 'Classical Concrete Exterior Cornice Molds',
      hi: 'क्लासिकल कंक्रीट बाहरी कॉर्निस मोल्ड्स'
    },
    description: {
      en: 'High-precision wooden molds crafted for exterior concrete plastering and projections of a luxury villa.',
      hi: 'एक लक्जरी विला के बाहरी कंक्रीट पलस्तर और उभारों के लिए तैयार किए गए उच्च-सटीक लकड़ी के मोल्ड।'
    },
    image: '/images/references/cornice/download-6.jpg',
    location: { en: 'Patliputra Colony, Patna', hi: 'पाटलिपुत्र कॉलोनी, पटना' },
    year: '2026'
  },
  {
    id: 'proj-wooden-ceiling',
    category: 'interiors',
    title: {
      en: 'Premium Wooden False Ceiling & Panel',
      hi: 'प्रीमियम लकड़ी की फॉल्स सीलिंग और पैनल'
    },
    description: {
      en: 'Bespoke ceiling grids with natural wood veneers and integrated warm spotlight channels for a modern living area.',
      hi: 'आधुनिक लिविंग एरिया के लिए प्राकृतिक लकड़ी के विनियर और एकीकृत वार्म स्पॉटलाइट के साथ सीलिंग ग्रिड।'
    },
    image: '/images/references/cornice/large-wooden-orangery-in-suffolk-westbury-garden-rooms.jpg',
    location: { en: 'Ashiana Nagar, Patna', hi: 'आशियाना नगर, पटना' },
    year: '2026'
  },
  {
    id: 'proj-tv-cabinet',
    category: 'cabinets',
    title: {
      en: 'Contemporary Wall Mounted TV & Display Unit',
      hi: 'समकालीन वॉल माउंटेड टीवी और डिस्प्ले यूनिट'
    },
    description: {
      en: 'Floating walnut TV cabinet with vertical wood slats, fluted panels, and drawers for media equipment.',
      hi: 'वर्टिकल लकड़ी के स्लैट्स, बांसुरीदार पैनलों और मीडिया उपकरणों के दराजों के साथ फ्लोटिंग अखरोट टीवी कैबिनेट।'
    },
    image: '/images/references/wardrobe/pin-by-melody-hsu-on-research-bedside-table.jpg',
    location: { en: 'Kankarbagh, Patna', hi: 'कंकड़बाग, पटना' },
    year: '2025'
  }
];
