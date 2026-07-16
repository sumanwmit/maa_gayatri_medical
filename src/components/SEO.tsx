import { useEffect } from 'react';
import { AppTab } from '../types';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOProps {
  activeTab: AppTab;
}

export default function SEO({ activeTab }: SEOProps) {
  useEffect(() => {
    // 1. Dynamic Meta Titles and Descriptions
    let title = '';
    let description = '';
    let keywords = '';

    switch (activeTab) {
      case 'home':
        title = `${BUSINESS_INFO.name} | Genuine Medicine & Pharmacy in Tekari, Bihar`;
        description = `Welcome to Maa Gayatri Medical Hall in Titaiganj, Tekari. We provide 100% genuine medicines, surgical supplies, healthcare products, baby care and first-aid supplies. Call ${BUSINESS_INFO.phoneFormatted} or order on WhatsApp!`;
        keywords = 'pharmacy in tekari, medical store in bihar, genuine medicine, titaiganj medical hall, maa gayatri medical, baby care products, surgical items';
        break;
      case 'about':
        title = `About Us | ${BUSINESS_INFO.name} - Our Journey, Mission & Values`;
        description = `Learn the story of Maa Gayatri Medical Hall. Founded in 2012 by S. K. Singh to provide genuine, affordable medicines and authentic healthcare products to the people of Tekari, Bihar.`;
        keywords = 'maa gayatri story, s k singh pharmacist, pharmacy history tekari, healthcare mission, trusted local chemist';
        break;
      case 'services':
        title = `Our Healthcare Services | ${BUSINESS_INFO.name}`;
        description = `Explore high-quality services at Maa Gayatri Medical Hall: Prescription medicines dispensing, OTC tablets, diabetic insulin kits, infant food, BP checkups, and surgical tools.`;
        keywords = 'medicine sales, blood pressure monitor, diabetic care, surgical supplies, infant food, health supplements';
        break;
      case 'gallery':
        title = `Store Gallery & Infrastructure | ${BUSINESS_INFO.name}`;
        description = `Take a visual tour of Maa Gayatri Medical Hall in Titaiganj. View our clean medicine shelves, temperature-controlled drug storage, and modern diagnostic items.`;
        keywords = 'pharmacy store photos, medical store shelf, surgical tools gallery, tekari pharmacy images';
        break;
      case 'contact':
        title = `Contact Us & Business Hours | ${BUSINESS_INFO.name}`;
        description = `Get directions to Maa Gayatri Medical Hall in Titaiganj, Tekari, Bihar. Check our timing (${BUSINESS_INFO.hours.weekdays}), phone number ${BUSINESS_INFO.phoneFormatted}, and contact form.`;
        keywords = 'contact pharmacy tekari, titaiganj medical location, business hours maa gayatri, directions to medical store';
        break;
      case 'order':
        title = `Order Medicines via WhatsApp | ${BUSINESS_INFO.name}`;
        description = `Easily upload your prescription and type required medicines. Maa Gayatri Medical Hall formats your order and redirects you to WhatsApp with one click!`;
        keywords = 'whatsapp medicine order, upload prescription online, buy tablets online tekari, home delivery pharmacy';
        break;
      default:
        title = BUSINESS_INFO.name;
        description = BUSINESS_INFO.tagline;
        keywords = 'pharmacy, medical store, genuine medicines, healthcare';
    }

    // Update standard head elements
    document.title = title;

    // Update meta tag helper
    const updateMetaTag = (nameAttr: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);

    // 2. Structured JSON-LD Schemas injection
    // Create combined schema object
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': window.location.origin + '/#pharmacy',
      'name': BUSINESS_INFO.name,
      'image': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600',
      'telephone': BUSINESS_INFO.phone,
      'url': window.location.href,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Titaiganj Maa Gayatri Medical Hall',
        'addressLocality': 'Tekari',
        'addressRegion': 'Bihar',
        'postalCode': '804422',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '24.937318',
        'longitude': '84.8290378'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '20:00'
        }
      ],
      'sameAs': [
        'https://maps.google.com/?cid=16606354673199815879'
      ],
      'priceRange': '₹₹',
      'logo': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200'
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
          'item': `${window.location.origin}/${activeTab}`
        }
      ]
    };

    const combinedScriptId = 'maa-gayatri-jsonld-schema';
    let scriptTag = document.getElementById(combinedScriptId);
    if (scriptTag) {
      scriptTag.innerHTML = JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', combinedScriptId);
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.innerHTML = JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]);
      document.head.appendChild(scriptTag);
    }

    return () => {
      // Cleanup if needed, but SPA updates dynamically anyway
    };
  }, [activeTab]);

  return null; // Side effect only
}
