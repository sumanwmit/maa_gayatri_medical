export type AppTab = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'order';

export interface Medicine {
  id: string;
  name: string;
  category: string;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Suspension' | 'Injection' | 'Equipment' | 'Cream' | 'Powder' | 'Device';
  price: number;
  description: string;
  brand: string;
  usage: string;
  sideEffects?: string;
  inStock: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves' | 'Products' | 'Equipment' | 'Customers';
  imageUrl: string;
  description: string;
}

export interface OrderFormValues {
  name: string;
  mobile: string;
  email: string;
  address: string;
  medicines: string;
  prescription: File | null;
  message: string;
  deliveryTime: string;
  agreeToTnc: boolean;
}
