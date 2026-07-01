export interface GalleryItem {
  src: string;
  category: 'wardrobe' | 'cornice' | 'furniture';
  title: { en: string; hi: string };
}

export const GALLERY: GalleryItem[] = [
  // Wardrobes
  {
    src: '/images/references/wardrobe/20-modern-luxury-sliding-wardrobe-designs-for-chic.jpg',
    category: 'wardrobe',
    title: { en: 'Luxury Sliding Wardrobe', hi: 'लक्जरी स्लाइडिंग अलमारी' }
  },
  {
    src: '/images/references/wardrobe/download-1.jpg',
    category: 'wardrobe',
    title: { en: 'Modern Fitted Cabinet', hi: 'आधुनिक फिटेड कैबिनेट' }
  },
  {
    src: '/images/references/wardrobe/download-2.jpg',
    category: 'wardrobe',
    title: { en: 'Minimalist Wardrobe Outer', hi: 'न्यूनतम वार्डरोब बाहरी ढांचा' }
  },
  {
    src: '/images/references/wardrobe/download-3.jpg',
    category: 'wardrobe',
    title: { en: 'Glass Partition Wardrobe', hi: 'कांच विभाजन अलमारी' }
  },
  {
    src: '/images/references/wardrobe/download-4.jpg',
    category: 'wardrobe',
    title: { en: 'Contemporary Closet', hi: 'समकालीन क्लोजेट' }
  },
  {
    src: '/images/references/wardrobe/download-5.jpg',
    category: 'wardrobe',
    title: { en: 'Elegant Veneer Panel Wardrobe', hi: 'सुरुचिपूर्ण विनियर पैनल वार्डरोब' }
  },
  {
    src: '/images/references/wardrobe/download-6.jpg',
    category: 'wardrobe',
    title: { en: 'Internal Shelf Fitting', hi: 'आंतरिक शेल्फ फिटिंग' }
  },
  {
    src: '/images/references/wardrobe/download-7.jpg',
    category: 'wardrobe',
    title: { en: 'Soft-close Drawer Sets', hi: 'सॉफ्ट-क्लोज ड्रावर सेट' }
  },
  {
    src: '/images/references/wardrobe/download-8.jpg',
    category: 'wardrobe',
    title: { en: 'Bespoke Dressing Table Corner', hi: 'अनुकूलित ड्रेसिंग टेबल कोना' }
  },
  {
    src: '/images/references/wardrobe/download.jpg',
    category: 'wardrobe',
    title: { en: 'Classic Walnut Closet', hi: 'क्लासिक अखरोट फिनिश अलमारी' }
  },
  {
    src: '/images/references/wardrobe/minimal-glow-wardrobe-design.jpg',
    category: 'wardrobe',
    title: { en: 'Minimal Glow Wardrobe', hi: 'न्यूनतम चमक वार्डरोब' }
  },
  {
    src: '/images/references/wardrobe/orde-warmte-en-perfectie-in-maatwerk.jpg',
    category: 'wardrobe',
    title: { en: 'Solid Integrated Closet', hi: 'मजबूत एकीकृत कोठरी' }
  },
  {
    src: '/images/references/wardrobe/pin-by-melody-hsu-on-research-bedside-table.jpg',
    category: 'wardrobe',
    title: { en: 'Bedside Floating Drawer Cabinet', hi: 'बेडसाइड फ्लोटिंग ड्रावर कैबिनेट' }
  },
  {
    src: '/images/references/wardrobe/tijdloze-elegantie-in-licht-eiken.jpg',
    category: 'wardrobe',
    title: { en: 'Light Oak Luxury Wardrobe', hi: 'हल्के ओक फिनिश लक्जरी वार्डरोब' }
  },
  
  // Cornice & Facade
  {
    src: '/images/references/cornice/download-1.jpg',
    category: 'cornice',
    title: { en: 'Bungalow Plastering Border', hi: 'बंगला प्लास्टरिंग बॉर्डर' }
  },
  {
    src: '/images/references/cornice/download-2.jpg',
    category: 'cornice',
    title: { en: 'Symmetric Exterior Projection', hi: 'सममित बाहरी प्रोजेक्शन छज्जा' }
  },
  {
    src: '/images/references/cornice/download-3.jpg',
    category: 'cornice',
    title: { en: 'Facade Architectural Trim', hi: 'मुखौटा वास्तुकला ट्रिम' }
  },
  {
    src: '/images/references/cornice/download-4.jpg',
    category: 'cornice',
    title: { en: 'Classical Elevation Pillars', hi: 'क्लासिकल एलिवेशन खंभे' }
  },
  {
    src: '/images/references/cornice/download-5.jpg',
    category: 'cornice',
    title: { en: 'Modern Exterior Facade Grid', hi: 'आधुनिक बाहरी एलिवेशन ग्रिड' }
  },
  {
    src: '/images/references/cornice/download-6.jpg',
    category: 'cornice',
    title: { en: 'Custom Concrete Exterior Molding', hi: 'कस्टम कंक्रीट बाहरी मोल्डिंग सांचा' }
  },
  {
    src: '/images/references/cornice/download.jpg',
    category: 'cornice',
    title: { en: 'Bungalow Column Corner molding', hi: 'बंगला स्तंभ कोना मोल्डिंग' }
  },
  {
    src: '/images/references/cornice/ideas-for-cornice-option-1.jpg',
    category: 'cornice',
    title: { en: 'Decorative Concrete Ledge', hi: 'सजावटी कंक्रीट लेज कगार' }
  },
  {
    src: '/images/references/cornice/large-wooden-orangery-in-suffolk-westbury-garden-rooms.jpg',
    category: 'cornice',
    title: { en: 'Micro Architectural Window Framing', hi: 'सूक्ष्म वास्तुकला खिड़की फ्रेमिंग' }
  },
  {
    src: '/images/references/cornice/mold-design-for-exterior.avif',
    category: 'cornice',
    title: { en: 'Classical Exterior Arch Facade', hi: 'क्लासिकल बाहरी आर्च एलिवेशन' }
  },

  // Furniture
  {
    src: '/images/references/furniture/dining-table.jpg',
    category: 'furniture',
    title: { en: 'Crafted Solid Mahogany Table', hi: 'ठोस महोगनी डाइनिंग टेबल' }
  },
  {
    src: '/images/references/furniture/download-1.jpg',
    category: 'furniture',
    title: { en: 'Hydraulic Storage Bed Frame', hi: 'हाइड्रोलिक स्टोरेज बेड फ्रेम' }
  },
  {
    src: '/images/references/furniture/download-2.jpg',
    category: 'furniture',
    title: { en: 'Teak Wooden Bed frame', hi: 'सागवान की लकड़ी का पलंग फ्रेम' }
  },
  {
    src: '/images/references/furniture/download-3.jpg',
    category: 'furniture',
    title: { en: 'Antique Unpolished Table Frame', hi: 'एंटीक अनपॉलिश्ड टेबल फ्रेम' }
  },
  {
    src: '/images/references/furniture/download-7.jpg',
    category: 'furniture',
    title: { en: 'Custom Bedroom Headboard', hi: 'कस्टम बेडरूम हेडबोर्ड' }
  },
  {
    src: '/images/references/furniture/download.jpg',
    category: 'furniture',
    title: { en: 'Hand-carved Solid Teak Main Door', hi: 'नक्काशीदार सागवान का मुख्य दरवाजा' }
  },
  {
    src: '/images/references/furniture/finials-for-micro-architectural-features-that-echo-classic-design.jpg',
    category: 'furniture',
    title: { en: 'Finely Carved Architectural Pillars', hi: 'बारीक नक्काशीदार वास्तुकला खंभे' }
  },
  {
    src: '/images/references/furniture/home-decor-and-outdoor-furniture.jpg',
    category: 'furniture',
    title: { en: 'Luxury Solid Wood Sofa', hi: 'लक्जरी ठोस लकड़ी का सोफा' }
  },
  {
    src: '/images/references/furniture/mesa.jpg',
    category: 'furniture',
    title: { en: 'PU Polished Teak Table', hi: 'पीयू पॉलिश्ड सागवान मेज' }
  }
];
