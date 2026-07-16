import { Medicine, Service, Category, Testimonial, FAQItem, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: 'MAA GAYATRI MEDICAL HALL',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '09234210691',
  phoneFormatted: '+91 92342 10691',
  whatsapp: '919234210691',
  location: 'Titaiganj, Maa Gayatri Medical Hall, Tekari, Bihar 804422',
  mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.779774641662!2d84.8290378!3d24.937318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd6b73eb9b4bf%3A0xe6759fc1b5be1cc7!2sMaa%20Gayatri%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1719900000000!5m2!1sen!2sin',
  mapDirectionsUrl: 'https://maps.app.goo.gl/g69P38rXbLPrM9pB8', // Placeholder directions
  hours: {
    weekdays: '08:00 AM - 10:00 PM',
    sunday: '08:00 AM - 08:00 PM',
    emergency: '24/7 Available for Emergencies'
  },
  owner: {
    name: 'S. K. Singh',
    role: 'Chief Pharmacist & Proprietor',
    message: 'At Maa Gayatri Medical Hall, we believe that premium-quality healthcare should be accessible to everyone in Tekari. For over a decade, we have dedicated ourselves to sourcing 100% authentic medicines directly from authorized distributors. Your health is our sacred trust, and we pledge to serve our community with genuine empathy, precision, and affordable care.'
  }
};

// Common medicines list to populate the Search/Inventory box
export const MEDICINES_DATABASE: Medicine[] = [
  {
    id: 'med-1',
    name: 'Paracetamol (Calpol 650mg)',
    category: 'Tablets',
    dosageForm: 'Tablet',
    price: 32,
    description: 'Relieves fever and mild-to-moderate pain like headache, muscle ache, toothache, etc.',
    brand: 'GSK',
    usage: 'Take 1 tablet after meals, maximum 4 times a day, or as directed by a doctor.',
    sideEffects: 'Nausea, stomach pain, allergic reactions (rare).',
    inStock: true
  },
  {
    id: 'med-2',
    name: 'Metformin (Glycomet 500mg)',
    category: 'Diabetic Care',
    dosageForm: 'Tablet',
    price: 45,
    description: 'Anti-diabetic medicine used to manage high blood sugar levels in Type-2 Diabetes.',
    brand: 'USV Pvt Ltd',
    usage: 'Take 1 tablet twice daily with food or as prescribed by your doctor.',
    sideEffects: 'Nausea, metallic taste, mild diarrhea.',
    inStock: true
  },
  {
    id: 'med-3',
    name: 'Amoxicillin (Novamox 500mg)',
    category: 'Capsules',
    dosageForm: 'Capsule',
    price: 110,
    description: 'Broad-spectrum penicillin antibiotic used to treat bacterial infections of ears, throat, lungs, etc.',
    brand: 'Cipla Ltd',
    usage: 'Must complete full course as advised. Typically 1 capsule thrice daily.',
    sideEffects: 'Rash, nausea, loose stools.',
    inStock: true
  },
  {
    id: 'med-4',
    name: 'Cough Syrup (Ascoril LS)',
    category: 'Syrups',
    dosageForm: 'Syrup',
    price: 125,
    description: 'Mucolytic, bronchodilator and expectorant combination syrup for wet and productive cough.',
    brand: 'Glenmark Pharmaceuticals',
    usage: '10ml thrice daily or as suggested by your physician.',
    sideEffects: 'Dizziness, heart palpitations, muscle tremor.',
    inStock: true
  },
  {
    id: 'med-5',
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    dosageForm: 'Equipment',
    price: 1850,
    description: 'Fully automatic digital upper arm blood pressure monitor for accurate tracking at home.',
    brand: 'Omron',
    usage: 'Rest for 5 minutes before testing. Sit upright, place cuff at heart level, and press start.',
    inStock: true
  },
  {
    id: 'med-6',
    name: 'Multivitamin (Becosules Capsules)',
    category: 'Vitamins',
    dosageForm: 'Capsule',
    price: 52,
    description: 'B-complex vitamins with Vitamin C to support energy, nerve health, and overall immunity.',
    brand: 'Pfizer',
    usage: '1 capsule daily after breakfast.',
    inStock: true
  },
  {
    id: 'med-7',
    name: 'Pantocid 40mg (Pantoprazole)',
    category: 'Tablets',
    dosageForm: 'Tablet',
    price: 140,
    description: 'Proton-pump inhibitor that reduces stomach acid, relieving heartburn, acid reflux, and GERD.',
    brand: 'Sun Pharma',
    usage: 'Take 1 tablet in the morning on an empty stomach (30 mins before breakfast).',
    sideEffects: 'Headache, flatulence, dry mouth.',
    inStock: true
  },
  {
    id: 'med-8',
    name: 'Atorvastatin (Lipivas 10mg)',
    category: 'Tablets',
    dosageForm: 'Tablet',
    price: 88,
    description: 'Cholesterol-lowering medicine used to reduce risk of cardiovascular diseases.',
    brand: 'Cipla Ltd',
    usage: 'Take once daily in the evening, with or without food.',
    sideEffects: 'Muscle ache, mild headache, elevated liver enzymes.',
    inStock: true
  },
  {
    id: 'med-9',
    name: 'Moisturizing Cream (Cetaphil)',
    category: 'Skin Care',
    dosageForm: 'Cream',
    price: 490,
    description: 'Intense, long-lasting moisture cream for dry, sensitive, and compromised skin.',
    brand: 'Galderma',
    usage: 'Apply liberally to clean dry skin daily or as needed.',
    inStock: true
  },
  {
    id: 'med-10',
    name: 'Whey Protein Supplement (Optimum Nutrition)',
    category: 'Protein Supplements',
    dosageForm: 'Powder',
    price: 3600,
    description: 'Premium ultra-filtered whey protein isolate to support muscle recovery and nutrition.',
    brand: 'ON',
    usage: 'Mix 1 scoop with 200ml water or milk, take post-workout.',
    inStock: true
  },
  {
    id: 'med-11',
    name: 'Inhaler (Asthalin 100mcg)',
    category: 'Medical Equipment',
    dosageForm: 'Device',
    price: 155,
    description: 'Salbutamol respiratory inhaler for quick relief from asthma attacks, wheezing, and shortness of breath.',
    brand: 'Cipla Ltd',
    usage: 'Inhale 1 or 2 puffs when breathing difficulty occurs, up to 4 times a day.',
    inStock: true
  },
  {
    id: 'med-12',
    name: 'Sanitizer Spray & Handwash',
    category: 'Personal Hygiene',
    dosageForm: 'Liquid' as any,
    price: 99,
    description: 'Instant germ protection spray and liquid soap enriched with Aloe Vera and skin conditioners.',
    brand: 'Dettol',
    usage: 'Apply rub thoroughly across hands or use under running water.',
    inStock: true
  }
];

export const CATEGORIES: Category[] = [
  { id: 'cat-tablets', name: 'Tablets', icon: 'Tablet', count: 1250, description: 'Broad inventory of doctor-prescribed daily tablets.' },
  { id: 'cat-capsules', name: 'Capsules', icon: 'ShieldAlert', count: 680, description: 'Gastro-resistant, softgel, and time-released capsules.' },
  { id: 'cat-syrups', name: 'Syrups', icon: 'Milk', count: 420, description: 'Pediatric drops, cough syrups, and digestive liquids.' },
  { id: 'cat-injections', name: 'Injection', icon: 'Syringe', count: 180, description: 'Vials, ampoules, and prefilled vaccines.' },
  { id: 'cat-equipment', name: 'Medical Equipment', icon: 'HeartPulse', count: 95, description: 'Stethoscopes, BP monitors, nebulizers, and thermometers.' },
  { id: 'cat-protein', name: 'Protein Supplements', icon: 'Activity', count: 120, description: 'Bodybuilding shakes, kids growth powders, and nutritional drinks.' },
  { id: 'cat-vitamins', name: 'Vitamins', icon: 'Sparkles', count: 310, description: 'Multivitamins, Calcium-D3, minerals, and hair-skin capsules.' },
  { id: 'cat-skincare', name: 'Skin Care', icon: 'Smile', count: 240, description: 'Hypoallergenic lotions, antiseptic creams, and acne gels.' },
  { id: 'cat-baby', name: 'Baby Products', icon: 'Baby', count: 190, description: 'Baby formula milk, skin-safe powders, diaper rash creams.' },
  { id: 'cat-hygiene', name: 'Personal Hygiene', icon: 'Droplet', count: 280, description: 'Soaps, handwashes, sanitizers, and sanitary napkins.' },
  { id: 'cat-ortho', name: 'Orthopedic Support', icon: 'Accessibility', count: 110, description: 'Knee braces, lumbar belts, crepe bandages, and cervical collars.' },
  { id: 'cat-diabetic', name: 'Diabetic Care', icon: 'Activity', count: 150, description: 'Sugar-free syrups, Glucometers, lancets, and diabetic socks.' }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-sales',
    title: 'Medicine Sales',
    description: 'Dispensing 100% genuine OTC and prescription-only medicines with expert advisory.',
    icon: 'Store',
    details: ['Rigorous batch validation', 'Sourced directly from MNCs and reliable local distributors', 'Proper temperature preservation', 'Clear dosage guidelines printed/written']
  },
  {
    id: 'srv-prescription',
    title: 'Prescription Medicines',
    description: 'Accurate dispensing of life-saving medicines under strict pharmaceutical supervision.',
    icon: 'FileText',
    details: ['Double verification of chemical formulas', 'Precise dosage counseling', 'Substitute availability guides', 'Safe labeling practices']
  },
  {
    id: 'srv-otc',
    title: 'OTC Medicines',
    description: 'Quick checkouts for over-the-counter common cold, digestion, and acidity products.',
    icon: 'HeartPulse',
    details: ['Wide assortment of brands', 'Instant guidance on contraindications', 'Home first-aid combos', 'Accessible pricing']
  },
  {
    id: 'srv-baby',
    title: 'Baby Care Products',
    description: 'Premium baby food, skin-safe creams, organic powders, and diapers.',
    icon: 'Baby',
    details: ['Brands like Himalaya, Johnson’s, and Nestle', 'Strict check on expiry dates', 'Hypoallergenic formulas only', 'Pediatrician-recommended essentials']
  },
  {
    id: 'srv-personal',
    title: 'Personal Care Products',
    description: 'Everyday hygiene, skincare, shower gels, and hair nourishment formulas.',
    icon: 'User',
    details: ['Medicated soaps and face-washes', 'Moisturizers and sunscreens', 'Dental care kits', 'Herbal and organic options']
  },
  {
    id: 'srv-diabetic',
    title: 'Diabetic Care',
    description: 'Complete inventory for monitoring, sweetening, and managing diabetic conditions.',
    icon: 'TrendingUp',
    details: ['Sugar-free vitamins and syrups', 'High-accuracy glucometers & test strips', 'Insulin pen needles and cool-packs', 'Diabetic nutritional shakes']
  },
  {
    id: 'srv-bp',
    title: 'Blood Pressure Monitor',
    description: 'Sale and on-site testing of digital & mercury-based BP monitors.',
    icon: 'Heart',
    details: ['Complimentary walk-in BP checking', 'Calibration verification', 'Device demonstration', 'Record charts provided']
  },
  {
    id: 'srv-firstaid',
    title: 'First Aid Supplies',
    description: 'Custom first-aid kits for homes, offices, schools, and heavy vehicles.',
    icon: 'Activity',
    details: ['Antiseptic solutions (Dettol, Savlon)', 'Bandages, cotton rolls, microspores', 'Burn ointments and muscle pain sprays', 'Customized travel kits']
  },
  {
    id: 'srv-surgical',
    title: 'Surgical Items',
    description: 'Disinfectant scrubs, disposable gloves, IV sets, catheters, and medical tubes.',
    icon: 'Scissors',
    details: ['100% sterile packaging', 'Bulk discounts for clinics and nursing homes', 'Premium latex and nitrile choices', 'Disposable surgical gowns & masks']
  },
  {
    id: 'srv-supplements',
    title: 'Health Supplements',
    description: 'Vitamins, Omega-3s, protein isolates, and weight management powders.',
    icon: 'PlusCircle',
    details: ['Certified international and domestic brands', 'Sugar-free options for elderly', 'Immunity-booster blends', 'Nutritional consultation guidance']
  },
  {
    id: 'srv-devices',
    title: 'Medical Devices',
    description: 'Nebulizers, pulse oximeters, digital thermometers, and steam inhalers.',
    icon: 'Cpu',
    details: ['Certified warranty programs', 'User-friendly demo guidelines', 'Battery backup assessments', 'Accessories and spare parts']
  },
  {
    id: 'srv-homecare',
    title: 'Home Care Products',
    description: 'Support equipment including wheelchairs, walking sticks, walkers, and bedpads.',
    icon: 'Home',
    details: ['Sturdy aluminum walking aids', 'Orthopedic lumbar supports', 'Comfortable hospital-grade air-beds', 'Adult sanitary pull-ups']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Rameshwar Kumar Sharma',
    rating: 5,
    comment: 'The oldest and most trustworthy medicine shop in Tekari. They always have the medicines prescribed by Patna or Gaya doctors. Skilful staff and reasonable pricing make them outstanding.',
    location: 'Tekari Ward 12, Bihar',
    date: 'June 14, 2026'
  },
  {
    id: 'rev-2',
    name: 'Anjali Gupta',
    rating: 5,
    comment: 'Extremely polite behavior by S. K. Singh and the entire staff. They accurately read long prescriptions and give discounts on bulk life-saving pills. Their digital WhatsApp order system is very convenient.',
    location: 'Titaiganj Market, Tekari',
    date: 'May 28, 2026'
  },
  {
    id: 'rev-3',
    name: 'Dr. Vivek Ranjan',
    rating: 5,
    comment: 'I highly recommend Maa Gayatri Medical Hall. They store critical cardiac, diabetic and surgical products in a temperature-controlled environment. You can be 100% sure about the authenticity of the drugs here.',
    location: 'Tekari Local Clinic',
    date: 'April 09, 2026'
  },
  {
    id: 'rev-4',
    name: 'Amit Kumar Verma',
    rating: 4,
    comment: 'Very rapid response on WhatsApp! I uploaded my fathers monthly diabetic medicines prescription and they prepared the bundle within 15 minutes. Quick, hassle-free payment options.',
    location: 'Nisarpura, Tekari',
    date: 'March 18, 2026'
  },
  {
    id: 'rev-5',
    name: 'Sunita Devi',
    rating: 5,
    comment: 'Very helpful team. Once I could not find a specific pediatric syrup anywhere in Tekari, but Maa Gayatri team ordered it especially for my baby and delivered it the next day. Truly care for their patients.',
    location: 'Titaiganj Lane, Bihar',
    date: 'January 20, 2026'
  },
  {
    id: 'rev-6',
    name: 'Vikash Singh',
    rating: 5,
    comment: 'Genuine products, clear explanations of dosage and timings, and very honest billing. Best medical store in our entire Tekari block without a doubt.',
    location: 'Konch Road, Tekari',
    date: 'December 12, 2025'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines sold at Maa Gayatri Medical Hall authentic and genuine?',
    answer: 'Absolutely. We source all our medicines, wellness products, and surgical instruments directly from corporate manufacturing companies or their authorized stockists/distributors. Every single batch is verified against dynamic drug databases.',
    category: 'Trust & Quality'
  },
  {
    id: 'faq-2',
    question: 'Can I order medicines by sharing my doctor prescription on WhatsApp?',
    answer: 'Yes! We have a dedicated WhatsApp order form on our website. You can input your details, type the required medicines, and upload a photo of your prescription. We will immediately review it and reply with the price estimate.',
    category: 'WhatsApp Order'
  },
  {
    id: 'faq-3',
    question: 'Do you offer home delivery in the Tekari region?',
    answer: 'Yes, we provide standard local delivery in Tekari town and nearby blocks for bulk monthly prescription orders. Please connect with us on WhatsApp (09234210691) to check if your precise location is currently serviceable.',
    category: 'Delivery'
  },
  {
    id: 'faq-4',
    question: 'What are the payment modes accepted at your store?',
    answer: 'We accept cash, all major UPI apps (GPay, PhonePe, Paytm, BHIM), debit/credit cards, and net banking transfers. For WhatsApp orders, we share a secure UPI QR code for fast payment.',
    category: 'Payment'
  },
  {
    id: 'faq-5',
    question: 'What are the operational hours of Maa Gayatri Medical Hall?',
    answer: 'Our physical store in Titaiganj is open Monday through Saturday from 08:00 AM to 10:00 PM. On Sundays, we are open from 08:00 AM to 08:00 PM. We also remain available on phone for urgent medicine requirements.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Is a prescription mandatory for buying medicines?',
    answer: 'A valid medical prescription is legally mandatory for Schedule H and Schedule X drugs (like high-dose antibiotics, psychiatric drugs, and cardiac pills). Over-the-counter (OTC) medicines, baby foods, supplements, and generic products do not require prescriptions.',
    category: 'Prescription'
  },
  {
    id: 'faq-7',
    question: 'Do you offer discounts on monthly medicines?',
    answer: 'Yes, we offer special discounts of up to 10% to 15% on chronic monthly supplies (such as long-term heart, diabetes, asthma, or thyroid care medicines). Visit or call us with your prescription to unlock the best customized discount.',
    category: 'Pricing'
  },
  {
    id: 'faq-8',
    question: 'Do you rent or sell medical equipments like oxygen cylinders or wheelchairs?',
    answer: 'We sell wheelchairs, walk-aids, nebulizers, BP monitors, steam inhalers, and pulse oximeters directly. For rental queries regarding large equipment like hospital beds or oxygen concentrators, please contact us directly on 09234210691.',
    category: 'Equipment'
  },
  {
    id: 'faq-9',
    question: 'Can I return medicines if they are no longer required?',
    answer: 'Yes, you can return unopened, unsealed medicines with their original invoice within 10 days of purchase, provided they have at least 3 months remaining before expiry. However, temperature-sensitive refrigerated drugs (like insulin vials) and surgical items cannot be returned.',
    category: 'Returns'
  },
  {
    id: 'faq-10',
    question: 'Do you sell baby formulas, baby foods, and specialized wellness supplements?',
    answer: 'Yes, we stock a large range of premium baby care products (Nestle, Cerelac, Lactogen, Himalaya Baby) as well as global and Indian protein supplements, multivitamins, and dietary fibers to meet your modern lifestyle needs.',
    category: 'Products'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Store Front View',
    category: 'Store Front',
    imageUrl: '/src/assets/images/maa_gayatri_hero_1783495142758.jpg', // Generated
    description: 'Welcome to Maa Gayatri Medical Hall - Your trusted pharmacy in Tekari, Bihar.'
  },
  {
    id: 'gal-2',
    title: 'Genuine Medicine Shelves',
    category: 'Shelves',
    imageUrl: '/src/assets/images/medicine_shelves_1783495159929.jpg', // Generated
    description: 'Perfectly catalogued and climate-controlled medicine racks for quick, zero-error dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Surgical & Bandage Displays',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    description: 'Hygienic and sterile surgical gloves, syringes, and clinical dressings.'
  },
  {
    id: 'gal-4',
    title: 'Digital Diagnostics Section',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop',
    description: 'Testing station and premium blood pressure monitors, glucometers, and oximeters.'
  },
  {
    id: 'gal-5',
    title: 'Wellness & Daily Health Supplements',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
    description: 'Vitamins, probiotics, protein shakes, and immunity tablets for the entire family.'
  },
  {
    id: 'gal-6',
    title: 'Dedicated Customer Service Desk',
    category: 'Customers',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop',
    description: 'Our experienced staff assisting walk-in families with professional prescription checks.'
  }
];

// Timeline for the About page
export const ABOUT_TIMELINE = [
  { year: '2012', title: 'Humble Foundation', text: 'Maa Gayatri Medical Hall was started in a small room in Titaiganj with a primary objective to make authentic medicines available locally in Tekari block.' },
  { year: '2016', title: 'Distributor Partnership', text: 'Expanded drug portfolio by establishing direct supply nodes with major Indian pharmaceutical manufacturers including Cipla, Sun Pharma, and Glenmark.' },
  { year: '2020', title: 'COVID-19 Essential Service', text: 'Served round-the-clock during global pandemic, assuring home delivery of sanitizers, face masks, pulse oximeters, and antiviral drugs safely.' },
  { year: '2023', title: 'Store Modernization', text: 'Renovated store layout with clinical temperature control systems, modern inventory management software, and digitized billing systems.' },
  { year: '2026', title: 'Digital Pharmacy Platform', text: 'Launched full-featured online presence and interactive WhatsApp Order Desk to serve the modern tech-savvy community of Bihar.' }
];

export const STORE_VALUES = [
  { title: 'Absolute Authenticity', text: 'We maintain zero tolerance against counterfeit medicines. Every single pill sold here is guaranteed 100% authentic.', icon: 'CheckCircle' },
  { title: 'Community Welfare', text: 'We prioritize customer care over profit. We provide substantial discounts and assist low-income patients with genuine care.', icon: 'Heart' },
  { title: 'Scientific Rigor', text: 'Our inventory is handled and dispensed by certified pharmacological assistants ensuring absolute dosage precision.', icon: 'ShieldCheck' },
  { title: 'Modern Convenience', text: 'Embracing technology to make healthcare simple. Providing WhatsApp order forms, digital payments, and fast local answers.', icon: 'Zap' }
];
