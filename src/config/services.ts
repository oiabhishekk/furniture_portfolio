export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  description: string;
  subservices: string[];
  features: string[];
  image: string;
}

export const serviceIndices: Record<string, string> = {
  'doors': '01 // CUSTOM DOORS',
  'wardrobes': '02 // MODULAR WARDROBES',
  'beds': '03 // HYDRAULIC BEDS',
  'cabinets': '04 // CABINETS & TV UNITS',
  'furniture': '05 // SOLID WOOD FURNITURE',
  'concrete-cornice': '06 // EXTERIOR MOLDINGS',
  'interiors': '07 // COMPLETE INTERIORS',
  'carpentry-renovation': '08 // REPAIRS & RESTORATION'
};

export const servicesData: Record<string, { en: ServiceDetail; hi: ServiceDetail }> = {
  'doors': {
    en: {
      slug: 'doors',
      title: 'Wooden Doors & Frames',
      metaTitle: 'Premium Wooden Doors & Door Frames Manufacturer in Patna',
      metaDesc: 'Looking for custom wooden doors, designer doors, door frames, or wooden windows in Patna? Santosh Sharma Carpenter builds robust, termite-resistant Teak & Sal wood doors.',
      description: 'We specialize in crafting premium wooden doors, designer main doors, heavy-duty door frames (Chaukhat), and wooden windows. Constructed from high-quality seasoned wood like Teak (Sagwan), Sal, and Mahogany, our doors are built to stand the test of time, weather, and usage.',
      subservices: ['Wooden Doors', 'Designer Main Doors', 'Sal Wood Door Frames (Chaukhat)', 'Window Frames', 'Wooden Windows & Shutters'],
      features: ['100% Seasoned Teak & Sal Wood', 'Termite and Moisture Resistant', 'Custom Carving & Glass Panel Fitting', 'Precise Alignment and Zero-gap Installation'],
      image: '/images/references/furniture/download.jpg'
    },
    hi: {
      slug: 'doors',
      title: 'लकड़ी के दरवाजे और चौखट',
      metaTitle: 'पटना में प्रीमियम लकड़ी के दरवाजे और चौखट निर्माता',
      metaDesc: 'पटना में कस्टम लकड़ी के दरवाजे, डिजाइनर दरवाजे, चौखट या लकड़ी की खिड़कियां खोज रहे हैं? संतोष शर्मा कारपेंटर दीमक-प्रतिरोधी सागवान और साल की लकड़ी के दरवाजे बनाते हैं।',
      description: 'हम प्रीमियम लकड़ी के दरवाजे, डिजाइनर मुख्य प्रवेश द्वार, भारी-शुल्क वाले दरवाजे के फ्रेम (चौखट) और लकड़ी की खिड़कियां बनाने में विशेषज्ञ हैं। सागवान, साल और महोगनी जैसी उच्च गुणवत्ता वाली पक्की लकड़ी से निर्मित, हमारे दरवाजे मौसम और उपयोग की मार झेलने के लिए बनाए जाते हैं।',
      subservices: ['लकड़ी के दरवाजे', 'डिजाइनर मुख्य दरवाजे', 'साल की लकड़ी की चौखट', 'खिड़की के फ्रेम', 'लकड़ी की खिड़कियां और शटर'],
      features: ['100% पक्की सागवान और साल की लकड़ी', 'दीमक और नमी प्रतिरोधी', 'कस्टम नक्काशी और ग्लास पैनल फिटिंग', 'सटीक फिटिंग और जीरो-गैप इंस्टॉलेशन'],
      image: '/images/references/furniture/download.jpg'
    }
  },
  'wardrobes': {
    en: {
      slug: 'wardrobes',
      title: 'Luxury Modular Wardrobes',
      metaTitle: 'Custom Sliding & Modular Wardrobe Designer in Patna',
      metaDesc: 'Get luxury sliding wardrobes, designer wardrobes, and modular cabinets built in Patna. 100% custom-fit layouts, premium soft-close hardware, and high-quality laminates.',
      description: 'Optimize your bedroom space with our custom-fit luxury wardrobes. From space-saving sliding wardrobes to luxury modular wardrobe designs, we build spacious units with smart inner shelves, concealed drawers, digital lockers, and premium soft-close runners.',
      subservices: ['Sliding Wardrobes', 'Modular Wardrobes', 'Designer Wardrobes with Glass & Acrylic', 'Walk-in Closets', 'Laminate & Veneer Finish Wardrobes'],
      features: ['Space-saving Sliding Door Mechanism', 'Termite-proof Marine Ply (BWR/BWP)', 'Premium Soft-close Hinges & Channels', 'Custom Internal Drawers and Lockers'],
      image: '/images/references/wardrobe/minimal-glow-wardrobe-design.jpg'
    },
    hi: {
      slug: 'wardrobes',
      title: 'लक्जरी मॉड्यूलर अलमारी (वार्डरोब)',
      metaTitle: 'पटना में कस्टम स्लाइडिंग और मॉड्यूलर वार्डरोब डिज़ाइनर',
      metaDesc: 'पटना में लक्जरी स्लाइडिंग वार्डरोब, डिजाइनर वार्डरोब और मॉड्यूलर कैबिनेट बनवाएं। 100% कस्टम-फिट लेआउट, प्रीमियम सॉफ्ट-क्लोज हार्डवेयर और उच्च गुणवत्ता वाले लैमिनेट्स।',
      description: 'हमारे कस्टम-फिट लक्जरी वार्डरोब के साथ अपने बेडरूम की जगह का अधिकतम उपयोग करें। जगह बचाने वाले स्लाइडिंग वार्डरोब से लेकर लक्जरी मॉड्यूलर डिज़ाइनों तक, हम स्मार्ट इनर शेल्व्स, छिपे हुए दराज, डिजिटल लॉकर और प्रीमियम सॉफ्ट-क्लोज रनर के साथ अलमारी बनाते हैं।',
      subservices: ['स्लाइडिंग वार्डरोब', 'मॉड्यूलर वार्डरोब', 'ग्लास और एक्रिलिक के साथ डिजाइनर वार्डरोब', 'वॉक-इन क्लोजेट', 'लेमिनेट और विनियर फिनिश वार्डरोब'],
      features: ['जगह बचाने वाला स्लाइडिंग डोर मैकेनिज्म', 'दीमक-रोधी मरीन प्लाई (BWR/BWP)', 'प्रीमियम सॉफ्ट-क्लोज हिंज और चैनल', 'कस्टम आंतरिक दराज और लॉकर'],
      image: '/images/references/wardrobe/minimal-glow-wardrobe-design.jpg'
    }
  },
  'beds': {
    en: {
      slug: 'beds',
      title: 'Custom Luxury Beds',
      metaTitle: 'King Size & Queen Size Custom Beds Manufacturer Patna',
      metaDesc: 'Looking for a durable, luxury wooden bed in Patna? We craft King-size, Queen-size, and custom storage beds from heavy wood and premium cushioning.',
      description: 'A premium bed is the centerpiece of a bedroom. We design and build heavy-duty King-size, Queen-size, and bespoke luxury beds with optional hydraulic storage, upholstered headboards, and side tables in matching wood grains.',
      subservices: ['King Size Beds', 'Queen Size Beds', 'Hydraulic Storage Beds', 'Custom Designer Beds', 'Wooden Bedside Tables'],
      features: ['Heavy Solid Wood Framework', 'Premium Hydraulic Lifting System Option', 'Custom Cushioned Headboard Designs', 'Zero Squeaking Joint Techniques'],
      image: '/images/references/furniture/download-1.jpg'
    },
    hi: {
      slug: 'beds',
      title: 'कस्टम लक्जरी बेड (पलंग)',
      metaTitle: 'किंग साइज और क्वीन साइज कस्टम बेड निर्माता पटना',
      metaDesc: 'पटना में एक टिकाऊ, लक्जरी लकड़ी का बेड खोज रहे हैं? हम भारी लकड़ी और प्रीमियम कुशनिंग से किंग-साइज, क्वीन-साइज और कस्टम स्टोरेज बेड बनाते हैं।',
      description: 'एक प्रीमियम बेड बेडरूम का मुख्य केंद्र होता है। हम हाइड्रोलिक स्टोरेज, कुशन वाले हेडबोर्ड और मैचिंग लकड़ी के साइड टेबल के साथ भारी-भरकम किंग-साइज, क्वीन-size और कस्टम लक्जरी बेड डिजाइन और निर्माण करते हैं।',
      subservices: ['किंग साइज बेड', 'क्वीन साइज बेड', 'हाइड्रोलिक स्टोरेज बेड', 'कस्टम डिजाइनर बेड', 'लकड़ी के बेडसाइड टेबल'],
      features: ['भारी ठोस लकड़ी का फ्रेमवर्क', 'प्रीमियम हाइड्रोलिक लिफ्टिंग सिस्टम विकल्प', 'कस्टम गद्देदार हेडबोर्ड डिज़ाइन', 'आवाज रहित मजबूत लकड़ी के जोड़'],
      image: '/images/references/furniture/download-1.jpg'
    }
  },
  'cabinets': {
    en: {
      slug: 'cabinets',
      title: 'Kitchen & TV Cabinets',
      metaTitle: 'Modular Kitchen Cabinets & Luxury TV Units Designer Patna',
      metaDesc: 'Get premium modular kitchen cabinets, storage cabinets, and luxury TV units custom-built in Patna. Water-resistant ply and elegant acrylic/laminate finish.',
      description: 'We construct beautiful and durable cabinets for kitchens and living spaces. Our custom modular kitchen cabinets are made from boiling-water-resistant plywood, complete with pull-out baskets and spice racks. We also build contemporary floating TV units with hidden wire management.',
      subservices: ['Kitchen Cabinets', 'Storage Cabinets', 'Modern TV Units', 'Crockery Units', 'Pooja Mandir Cabinets'],
      features: ['Water & Heat Resistant Plywood (BWP)', 'Soft-close Hydraulic Baskets & Hinges', 'Concealed LED Profile Lighting channels', 'Sleek Acrylic & High-Gloss Laminate Finish'],
      image: '/images/references/wardrobe/pin-by-melody-hsu-on-research-bedside-table.jpg'
    },
    hi: {
      slug: 'cabinets',
      title: 'किचन और टीवी कैबिनेट',
      metaTitle: 'मॉड्यूलर किचन कैबिनेट और लक्जरी टीवी यूनिट डिज़ाइनर पटना',
      metaDesc: 'पटना में प्रीमियम मॉड्यूलर किचन कैबिनेट, स्टोरेज कैबिनेट और लक्जरी टीवी यूनिट बनवाएं। जल-प्रतिरोधी प्लाई और सुरुचिपूर्ण ऐक्रेलिक/लैमिनेट फिनिश।',
      description: 'हम रसोई और लिविंग स्पेस के लिए सुंदर और टिकाऊ कैबिनेट बनाते हैं। हमारे कस्टम मॉड्यूलर किचन कैबिनेट उबलते पानी प्रतिरोधी प्लाईवुड से बनाए जाते हैं, जिसमें पुल-आउट बास्केट और स्पाइस रैक होते हैं। हम छिपे हुए तारों के प्रबंधन वाले आधुनिक फ्लोटिंग टीवी यूनिट भी बनाते हैं।',
      subservices: ['किचन कैबिनेट्स', 'स्टोरेज कैबिनेट्स', 'आधुनिक टीवी यूनिट्स', 'क्रोकरी यूनिट्स', 'पूजा मंदिर कैबिनेट्स'],
      features: ['जल और गर्मी प्रतिरोधी प्लाईवुड (BWP)', 'सॉफ्ट-क्लोज हाइड्रोलिक बास्केट और हिंज', 'छिपी हुई एलईडी प्रोफाइल लाइटिंग चैनल', 'स्लीक एक्रिलिक और हाई-ग्लोस लेमिनेट फिनिश'],
      image: '/images/references/wardrobe/pin-by-melody-hsu-on-research-bedside-table.jpg'
    }
  },
  'furniture': {
    en: {
      slug: 'furniture',
      title: 'Custom Furniture & Tables',
      metaTitle: 'Best Custom Wooden Furniture Maker in Patna | Dining & Office Tables',
      metaDesc: 'Santosh Sharma Carpenter creates high-end wooden dining tables, office desks, restaurant furniture, hotel furniture, and custom chairs in Patna. Teak wood polishing.',
      description: 'Crafting luxury custom furniture for homes and commercial establishments. From premium dining tables, office desks, reception counters, and study tables, to custom restaurant and hotel furniture. All items feature premium hand-polishing (Melamine/PU) and joinery.',
      subservices: ['Dining Tables & Chairs', 'Office Tables & Desks', 'Restaurant & Hotel Furniture', 'Reception Counters', 'Study Tables & Wooden Chairs', 'Custom/Modular Furniture'],
      features: ['Premium Solid Teak / Mahogany Wood', 'High-quality Melamine or PU Polish Finish', 'Ergonomic Designs for Desks and Chairs', 'Heavy Commercial-grade Sturdy Joints'],
      image: '/images/references/furniture/dining-table.jpg'
    },
    hi: {
      slug: 'furniture',
      title: 'कस्टम फर्नीचर और टेबल',
      metaTitle: 'पटना में सर्वश्रेष्ठ कस्टम लकड़ी के फर्नीचर निर्माता | डाइनिंग और ऑफिस टेबल',
      metaDesc: 'संतोष शर्मा कारपेंटर पटना में उच्च गुणवत्ता वाले लकड़ी के डाइनिंग टेबल, ऑफिस डेस्क, रेस्तरां और होटल के फर्नीचर और कस्टम कुर्सियाँ बनाते हैं। सागवान पॉलिश।',
      description: 'घरों और व्यावसायिक प्रतिष्ठानों के लिए लक्जरी कस्टम फर्नीचर का निर्माण। प्रीमियम डाइनिंग टेबल, ऑफिस डेस्क, रिसेप्शन काउंटर और स्टडी टेबल से लेकर कस्टम रेस्तरां और होटल के फर्नीचर तक। सभी फर्नीचर में प्रीमियम हैंड-पॉलिशिंग (मेलामेइन/पीयू) की जाती है।',
      subservices: ['डाइनिंग टेबल और कुर्सियाँ', 'ऑफिस टेबल और डेस्क', 'रेस्तरां और होटल फर्नीचर', 'रिसेप्शन काउंटर', 'स्टडी टेबल और लकड़ी की कुर्सियाँ', 'कस्टम/मॉड्यूलर फर्नीचर'],
      features: ['प्रीमियम ठोस सागवान / महोगनी लकड़ी', 'उच्च गुणवत्ता मेलामाइन या पीयू पॉलिश फिनिश', 'डेस्क और कुर्सियों के लिए आरामदायक एर्गोनोमिक डिजाइन', 'भारी व्यावसायिक-ग्रेड मजबूत जोड़'],
      image: '/images/references/furniture/dining-table.jpg'
    }
  },
  'concrete-cornice': {
    en: {
      slug: 'concrete-cornice',
      title: 'Architectural & Concrete Cornice',
      metaTitle: 'Concrete Exterior Cornice Design & Mold Manufacturer Patna',
      metaDesc: 'Specialist in concrete exterior cornice design and architectural wooden cornice molding in Patna. Premium classical exterior building designs.',
      description: 'We are unique specialists in creating precise molds for concrete exterior cornices (architectural building projections) that decorate Patna\'s premium bungalows. We also manufacture custom wooden cornice moldings for classical indoor ceiling borders.',
      subservices: ['Concrete Exterior Cornice Molds', 'Architectural Cornice Detailing', 'Wooden Cornice Moldings', 'Bungalow Elevation Facade Designs'],
      features: ['High-precision Custom Wooden Molds', 'Symmetric Classical Exterior Facades', 'Durable, Weather-resistant Design Layouts', 'Professional Architectural Alignment'],
      image: '/images/references/cornice/download-6.jpg'
    },
    hi: {
      slug: 'concrete-cornice',
      title: 'कंक्रीट और लकड़ी के कॉर्निस डिजाइन',
      metaTitle: 'कंक्रीट बाहरी कॉर्निस डिज़ाइन और मोल्ड निर्माता पटना',
      metaDesc: 'पटना में कंक्रीट बाहरी कॉर्निस डिजाइन और वास्तुशिल्प लकड़ी के कॉर्निस मोल्डिंग के विशेषज्ञ। प्रीमियम क्लासिकल बाहरी बिल्डिंग डिजाइन।',
      description: 'हम कंक्रीट बाहरी कॉर्निस (इमारत के बाहरी हिस्से की सजावटी डिजाइन) के लिए सटीक मोल्ड (सांचे) बनाने वाले अनूठे विशेषज्ञ हैं जो पटना के प्रीमियम बंगलों को सजाते हैं। हम शास्त्रीय इनडोर छत बॉर्डर्स के लिए कस्टम लकड़ी के कॉर्निस मोल्डिंग का भी निर्माण करते हैं।',
      subservices: ['कंक्रीट बाहरी कॉर्निस मोल्ड', 'वास्तुशिल्प कॉर्निस विवरण', 'लकड़ी के कॉर्निस मोल्डिंग्स', 'बंगला एलिवेशन मुखौटा डिजाइन'],
      features: ['उच्च परिशुद्धता कस्टम लकड़ी के सांचे (मोल्ड)', 'सममित क्लासिकल बाहरी मुखौटा सजावट', 'लंबे समय तक चलने वाले मौसम-प्रतिरोधी लेआउट', 'पेशेवर स्थापत्य संरेखण'],
      image: '/images/references/cornice/download-6.jpg'
    }
  },
  'interiors': {
    en: {
      slug: 'interiors',
      title: 'Wooden Interiors & Partitions',
      metaTitle: 'Premium Wooden Interior Designer & Partitions in Patna',
      metaDesc: 'Transform your home with custom wooden interior designs, false ceilings, and premium wooden partition walls in Patna. 100% custom handcrafted.',
      description: 'Enhance your living room and office with luxury wooden interiors. We craft designer wooden partitions (Jaali & solid slats) to separate dining areas, decorative wooden ceilings, wall paneling, and custom architectural woodwork.',
      subservices: ['Wooden Interiors', 'Wooden Ceiling Designs', 'Wooden Partitions & Jaali Works', 'Wall Paneling & Veneering', 'Bespoke Archways'],
      features: ['Premium Veneer and Solid Wood Panels', 'Modern Geometric and CNC Jaali Cuts', 'Integrated Hidden Lighting Provisions', 'Perfect Corner Blends and Seamless Finishing'],
      image: '/images/references/cornice/large-wooden-orangery-in-suffolk-westbury-garden-rooms.jpg'
    },
    hi: {
      slug: 'interiors',
      title: 'लकड़ी के इंटीरियर और विभाजन (पार्टीशन)',
      metaTitle: 'पटना में प्रीमियम लकड़ी के इंटीरियर डिज़ाइनर और पार्टीशन',
      metaDesc: 'पटना में कस्टम लकड़ी के इंटीरियर डिज़ाइन, फॉल्स सीलिंग और प्रीमियम लकड़ी के पार्टीशन की दीवारों के साथ अपने घर को बदलें। 100% कस्टम हस्तनिर्मित काम।',
      description: 'लक्जरी लकड़ी के इंटीरियर के साथ अपने लिविंग रूम और ऑफिस को सजाएं। हम डाइनिंग एरिया को अलग करने के लिए डिजाइनर लकड़ी के पार्टीशन (जाली और ठोस स्लैट्स), सजावटी लकड़ी की छतें, दीवार की पैनलिंग और कस्टम नक्काशीदार लकड़ी के काम बनाते हैं।',
      subservices: ['लकड़ी के इंटीरियर', 'लकड़ी की छत के डिजाइन (सीलिंग)', 'लकड़ी के विभाजन और जाली का काम', 'दीवार पैनलिंग और विनियरिंग', 'कस्टम मेहराब (आर्चवेज)'],
      features: ['प्रीमियम विनियर और ठोस लकड़ी के पैनल', 'आधुनिक ज्यामितीय और सीएनसी जाली कट', 'एकीकृत छिपी हुई लाइटिंग का प्रावधान', 'बिल्कुल सही कोने और निर्बाध फिनिशिंग'],
      image: '/images/references/cornice/large-wooden-orangery-in-suffolk-westbury-garden-rooms.jpg'
    }
  },
  'carpentry-renovation': {
    en: {
      slug: 'carpentry-renovation',
      title: 'Complete Carpentry & Renovation',
      metaTitle: 'Full Home Carpentry Services & Repair Work in Patna',
      metaDesc: 'Get professional home carpentry, furniture repairs, door adjustments, and old furniture renovation in Patna. Experienced local carpenter at your doorstep.',
      description: 'We handle everything from full home carpentry for new apartments to repair and renovation of old wooden furniture. Whether you need modular kitchen renovations, door lock fitting, or restoring old antique wood beds to shiny new conditions, we do it all.',
      subservices: ['Complete Home Carpentry', 'Furniture Repair & Polish Restoration', 'Modular Kitchen Upgrades', 'Hardware & Lock Installation', 'Antique Furniture Renovation'],
      features: ['Prompt Doorstep Service in Patna', 'Skilled Carpenter Teams for Large Apartments', 'Premium PU Polish & Duco Paint Restorations', 'Use of Genuine Brand Hardware (Godrej, Hettich, etc.)'],
      image: '/images/references/wardrobe/orde-warmte-en-perfectie-in-maatwerk.jpg'
    },
    hi: {
      slug: 'carpentry-renovation',
      title: 'सम्पूर्ण कारपेंटर सेवा और मरम्मत',
      metaTitle: 'पटना में फुल होम कारपेंटर सेवाएं और मरम्मत कार्य',
      metaDesc: 'पटना में पेशेवर गृह बढ़ईगीरी, पुराने फर्नीचर की मरम्मत, दरवाजे के लॉक फिटिंग और पुराने फर्नीचर का नवीनीकरण करवाएं। अनुभवी कारपेंटर आपके दरवाजे पर।',
      description: 'हम नए फ्लैटों के लिए संपूर्ण बढ़ईगीरी के काम से लेकर पुराने लकड़ी के फर्नीचर की मरम्मत और नवीनीकरण तक सब कुछ संभालते हैं। चाहे आपको मॉड्यूलर किचन अपग्रेड करना हो, दरवाजे के ताले लगाने हों, या पुराने बेड को पॉलिश करके चमकाना हो, हम सब कुछ करते हैं।',
      subservices: ['संपूर्ण घरेलू बढ़ईगीरी', 'फर्नीचर की मरम्मत और पॉलिश बहाली', 'मॉड्यूलर किचन अपग्रेडेशन', 'हार्डवेयर और लॉक इंस्टॉलेशन', 'एंटीक फर्नीचर का जीर्णोद्धार'],
      features: ['पटना में त्वरित द्वार-सेवा (डोरस्टेप सर्विस)', 'बड़े फ्लैटों के लिए कुशल बढ़ई की टीम', 'प्रीमियम पीयू पॉलिश और ड्यूको पेंट बहाली', 'असली ब्रांडेड हार्डवेयर का उपयोग (गोदरेज, हेटिच, आदि)'],
      image: '/images/references/wardrobe/orde-warmte-en-perfectie-in-maatwerk.jpg'
    }
  }
};
