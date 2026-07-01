export interface TestimonialItem {
  name: { en: string; hi: string };
  role: { en: string; hi: string };
  text: { en: string; hi: string };
  stars: number;
  image: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: { en: 'Rajesh Kumar', hi: 'राजेश कुमार' },
    role: { en: 'Homeowner, Boring Road', hi: 'मकान मालिक, बोरिंग रोड' },
    text: {
      en: 'We wanted a custom sliding wardrobe for our flat at Boring Road. Santosh Ji visited, took accurate measurements, and hand-delivered a beautiful walnut finish closet. The hardware and alignment are top-notch!',
      hi: 'हमें हमारे बोरिंग रोड वाले फ्लैट के लिए 3-दरवाजे का स्लाइडिंग वार्डरोब बनवाना था। संतोष जी ने घर आकर एकदम सटीक नाप लिया और बहुत सुंदर काम किया। फिटिंग की क्वालिटी लाजवाब है।'
    },
    stars: 5,
    image: '/images/references/furniture/download-7.jpg'
  }
];
