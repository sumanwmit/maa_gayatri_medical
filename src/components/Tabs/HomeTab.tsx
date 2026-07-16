import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone, MessageSquare, MapPin, ShieldCheck, Award, DollarSign,
  Zap, CheckCircle, TrendingUp, Sparkles, Baby, Activity, Heart,
  Search, FileText, ShoppingCart, ChevronDown, Star, ArrowRight,
  Plus, Eye, Users, AlertCircle
} from 'lucide-react';
import { AppTab, Medicine, Category } from '../../types';
import { BUSINESS_INFO, MEDICINES_DATABASE, CATEGORIES, SERVICES, TESTIMONIALS, FAQS } from '../../data';

interface HomeTabProps {
  setActiveTab: (tab: AppTab) => void;
  setOrderMedicinesInput?: (val: string) => void;
}

export default function HomeTab({ setActiveTab, setOrderMedicinesInput }: HomeTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({});
  const [quickViewMed, setQuickViewMed] = useState<Medicine | null>(null);
  const [addedToCartFeedback, setAddedToCartFeedback] = useState<string | null>(null);

  // Filter medicines based on search term and category
  const filteredMedicines = MEDICINES_DATABASE.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          med.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setFaqOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (med: Medicine) => {
    if (setOrderMedicinesInput) {
      setOrderMedicinesInput(`${med.name} (${med.brand}) - Quantity: 1`);
    }
    setAddedToCartFeedback(med.id);
    setTimeout(() => {
      setAddedToCartFeedback(null);
      setActiveTab('order');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const whyChooseUsData = [
    { title: '100% Genuine Medicines', text: 'Sourced strictly from authorized company stockists and brand representatives.', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' },
    { title: 'Experienced Staff', text: 'Counseling by friendly and certified pharmacological assistants with deep dosing knowledge.', icon: Award, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/30' },
    { title: 'Affordable Prices', text: 'Genuine medical supplies and generic substitutions to keep healthcare budget-friendly.', icon: DollarSign, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' },
    { title: 'Fast Service', text: 'Pre-packing of regular scripts so you spend zero waiting time at our physical counter.', icon: Zap, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30' },
    { title: 'Prescription Verification', text: 'Double checking for chemical formulation, safe storage conditions, and exact dosage.', icon: FileText, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/30' },
    { title: 'Healthcare Products', text: 'Fully stocked diagnostics, baby support items, orthopedic bands, and premium hygiene tools.', icon: Heart, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/30' },
    { title: 'Trusted Local Pharmacy', text: 'Serving Tekari and Gaya district families with extreme compassion and transparency since 2012.', icon: Users, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30' },
    { title: 'Easy WhatsApp Support', text: 'Submit requirements from home and receive a completely sorted medicine pack instantly.', icon: MessageSquare, color: 'text-green-600 bg-green-50 dark:bg-green-950/30' }
  ];

  const trustPoints = [
    { title: 'Experienced Pharmacy', text: 'With 14+ years of local experience, we are deeply embedded in Bihar’s healthcare system.' },
    { title: 'Quality Medicines', text: 'Stored under exact cold-chain specifications to guarantee absolute potency.' },
    { title: 'Quick Service', text: 'Our digitized index and automated racks ensure you get your items in minutes.' },
    { title: 'Friendly Staff', text: 'We explain when and how to take each pill in local dialects with extreme warmth.' },
    { title: 'Reasonable Pricing', text: 'We strictly charge standard rates and offer additional support to local underprivileged families.' },
    { title: 'Convenient Location', text: 'Located centrally in the Titaiganj market place with direct access from major highways.' }
  ];

  const processSteps = [
    { number: '01', title: 'Visit Store / Ask Online', text: 'Walk in with your script or fill our digital WhatsApp order form from home.' },
    { number: '02', title: 'Share Prescription', text: 'Our certified pharmacists review your medical prescription for safe dosing.' },
    { number: '03', title: 'Get Medicines', text: 'We package genuine formulations from organized, temperature-secure racks.' },
    { number: '04', title: 'Easy Payment', text: 'Complete your checkout using Cash, UPI QR code, or secure card terminals.' }
  ];

  // Helper to dynamically render category icons
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Tablet': return <Activity className={className} />;
      case 'ShieldAlert': return <ShieldCheck className={className} />;
      case 'Milk': return <TrendingUp className={className} />;
      case 'Syringe': return <Sparkles className={className} />;
      case 'HeartPulse': return <Heart className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Smile': return <TrendingUp className={className} />;
      case 'Baby': return <Baby className={className} />;
      case 'Droplet': return <Activity className={className} />;
      case 'Accessibility': return <Activity className={className} />;
      default: return <Plus className={className} />;
    }
  };

  return (
    <div id="home-tab-container" className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section"
        className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-gradient-to-br from-slate-50 via-teal-50/20 to-emerald-50/20 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-900/30 overflow-hidden"
      >
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-teal-200/35 dark:bg-teal-950/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-200/25 dark:bg-emerald-950/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Genuine Pharmacy</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {BUSINESS_INFO.name}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                  Your Trusted Pharmacy in Tekari
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing verified prescription drugs, surgical supplies, medical diagnostic equipment, baby care products, daily wellness tablets, and supplements with compassionate local guidance.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 rounded-xl transition-all hover:translate-y-[-2px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store Now</span>
                </a>
                <button
                  onClick={() => setActiveTab('order')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/20 rounded-xl transition-all hover:translate-y-[-2px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5.5 py-3.5 text-sm font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl transition-all hover:translate-y-[-2px]"
                >
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-center max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100">100%</p>
                  <p className="text-xxs uppercase tracking-wider text-slate-400 font-bold mt-1">Authentic</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100">14k+</p>
                  <p className="text-xxs uppercase tracking-wider text-slate-400 font-bold mt-1">Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100">2012</p>
                  <p className="text-xxs uppercase tracking-wider text-slate-400 font-bold mt-1">Est. Year</p>
                </div>
              </div>
            </div>

            {/* Hero Right Media Panel */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src="/src/assets/images/maa_gayatri_hero_1783495142758.jpg"
                  alt="Maa Gayatri Medical Hall"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                    <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Store Location</p>
                    <p className="font-semibold text-sm mt-0.5">Titaiganj Road, Tekari, Bihar</p>
                    <p className="text-xs text-slate-200 mt-1">Walk in for blood pressure screening, diagnostic aids and bulk family medicine cards.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MEDICINE SEARCH ENGINE BOX */}
      <section id="inventory-search-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Instant Medicine Query</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Search Genuine Medicines & Instruments
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Check our active shelf stock. Search by generic chemical name, brand, category, or ailment. If found, add to your WhatsApp script!
            </p>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search paracetamol, glycomet, ascoril, BP monitor, insulin, Cipla..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-colors"
              />
            </div>
            <div className="relative shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full md:w-56 px-4 py-3.5 pr-10 text-sm bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100 font-semibold"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Search Result Output */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMedicines.map(med => (
              <div
                key={med.id}
                className="p-5 rounded-2xl bg-gray-50/50 dark:bg-slate-800/40 border border-gray-150/80 dark:border-slate-800/80 hover:border-teal-500 dark:hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 rounded-lg text-xxs font-bold uppercase tracking-wider">
                      {med.dosageForm}
                    </span>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                      {med.brand}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white mt-3 text-base">
                    {med.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                    {med.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-gray-400 dark:text-slate-500 font-medium">MRP Price</span>
                    <span className="font-extrabold text-teal-600 dark:text-emerald-400 text-base">
                      ₹{med.price}.00 <span className="text-xxs font-normal text-slate-400">incl. tax</span>
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-150 dark:border-slate-800/60 flex items-center gap-2">
                  <button
                    onClick={() => setQuickViewMed(med)}
                    className="flex-1 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Usage</span>
                  </button>

                  <button
                    onClick={() => handleAddToCart(med)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
                      addedToCartFeedback === med.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-600 hover:bg-teal-500 text-white shadow-sm hover:translate-y-[-1px]'
                    }`}
                  >
                    {addedToCartFeedback === med.id ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}

            {filteredMedicines.length === 0 && (
              <div className="col-span-full py-12 text-center space-y-3">
                <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
                <h4 className="font-bold text-slate-800 dark:text-slate-200">Medicine Not Listed Online</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  We carry over 8,000+ formulations. If you cannot find your precise brand, click below to upload the script to our WhatsApp and we will find it instantly!
                </p>
                <button
                  onClick={() => setActiveTab('order')}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-all"
                >
                  <span>Upload Script to WhatsApp Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Competences</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Local Customers Trust Us
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            For over a decade, we have been more than a pharmacy. We are Tekari’s direct health partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group flex flex-col justify-start"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${item.color}`}>
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OUR SERVICES PREVIEW */}
      <section id="services-preview" className="bg-slate-50 dark:bg-slate-900/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Clinical Services</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Comprehensive Healthcare Care
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                From emergency medications to digital monitors, we stock everything you need under one roof.
              </p>
            </div>
            <button
              onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-teal-600 dark:text-emerald-400 border border-teal-200 dark:border-emerald-800 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all"
            >
              <span>Explore Dedicated Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((srv, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-emerald-400 rounded-lg">
                    <Plus className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {srv.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {srv.details.slice(0, 2).map((det, dIdx) => (
                    <li key={dIdx} className="flex gap-2 items-start text-xxs text-slate-400">
                      <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FEATURED CATEGORIES GRID */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Medical Range</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Explore Featured Store Categories
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Click on any medicine classification below to immediately filter our drug search box!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedCategory(cat.name);
                const el = document.getElementById('inventory-search-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 text-teal-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/20 transition-all duration-300">
                {renderIcon(cat.icon)}
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm group-hover:text-teal-600 dark:group-hover:text-emerald-400">
                {cat.name}
              </h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest font-bold">
                {cat.count}+ Items
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section id="working-process" className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Simplifying Care</span>
          <h2 className="text-3xl font-extrabold">How to Get Your Medicines</h2>
          <p className="text-sm text-slate-400">
            Four direct steps to purchase genuine pharma supplies from Maa Gayatri Medical Hall.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative space-y-3">
              <span className="block text-4xl font-black text-teal-500/20 tracking-tight leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.text}
              </p>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-4 left-full w-full h-[1px] bg-gradient-to-r from-teal-500/40 to-transparent z-10 -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CUSTOMERS TRUST US DETAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/src/assets/images/medicine_shelves_1783495159929.jpg"
            alt="Inside Maa Gayatri Pharmacy"
            referrerPolicy="no-referrer"
            className="w-full h-[420px] object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Guarantee</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Providing Genuine Medicines with Perfect Integrity
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Every product catalogued at our Titaiganj counter undergoes batch scanning. We do not support mock formulations, unapproved generics, or expired batches. Your family deserves the highest pharmacological standard.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((tp, idx) => (
              <div key={idx} className="space-y-1 bg-gray-50 dark:bg-slate-800/40 p-4 rounded-xl border border-gray-100 dark:border-slate-800/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{tp.title}</span>
                </h3>
                <p className="text-xxs text-slate-400 leading-relaxed pl-6">
                  {tp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section id="testimonials-section" className="bg-slate-50 dark:bg-slate-900/40 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Verified Feedback</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Trusted by 14,000+ local families across Tekari and surrounding Bihar villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4.5 h-4.5 ${
                          i < test.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {test.location}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                    {test.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Common Doubts</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Clear solutions regarding drug availability, prescription uploads, pricing, and timing.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = !!faqOpen[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 dark:text-slate-100 hover:text-teal-600 dark:hover:text-emerald-400 text-sm"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4.5 h-4.5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-gray-50 dark:border-slate-800/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. GOOGLE MAP SECTION */}
      <section id="google-map-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Store Directions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Locate Maa Gayatri Medical Hall</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Titaiganj market Road, Tekari, Bihar 804422. Click the map to navigate.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-150 dark:border-slate-800 h-[380px] bg-gray-100 relative">
          <iframe
            src={BUSINESS_INFO.mapIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maa Gayatri Medical Hall Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-tr from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-900/60 p-8 sm:p-12 rounded-3xl border border-teal-100 dark:border-slate-800 space-y-6 relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-teal-200/20 dark:bg-emerald-800/10 rounded-full blur-xl pointer-events-none"></div>

        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          Need Prescription Medicines Urgently?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350 max-w-2xl mx-auto leading-relaxed">
          Don’t wait in queues. Get instant verification on WhatsApp or call our head pharmacist S. K. Singh on phone now. We are ready to assist.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2.5 px-6.5 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 rounded-xl transition-all hover:translate-y-[-1px]"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>
          <button
            onClick={() => { setActiveTab('order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2.5 px-6.5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-500/20 rounded-xl transition-all hover:translate-y-[-1px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Launch WhatsApp Order Form</span>
          </button>
        </div>
      </section>

      {/* Medicine Detail QuickView Modal */}
      {quickViewMed && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-150 dark:border-slate-800 relative">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-teal-600 dark:text-emerald-400 font-bold">{quickViewMed.category}</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-1">{quickViewMed.name}</h3>
              </div>
              <button
                onClick={() => setQuickViewMed(null)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <Plus className="w-5 h-5 rotate-45" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-600 dark:text-slate-350">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">Manufacturer / Brand</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">{quickViewMed.brand}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">Formulation Type</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-1">{quickViewMed.dosageForm}</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">Medical Indication</p>
                <p className="mt-1 font-medium">{quickViewMed.description}</p>
              </div>

              <div>
                <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">Standard Dosage Recommendation</p>
                <p className="mt-1 bg-yellow-50/40 dark:bg-yellow-950/10 p-2.5 rounded-lg border border-yellow-100/50 dark:border-yellow-950/30 text-yellow-800 dark:text-yellow-400 leading-relaxed font-medium">
                  {quickViewMed.usage}
                </p>
              </div>

              {quickViewMed.sideEffects && (
                <div>
                  <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">Potential Side Effects</p>
                  <p className="mt-1 text-rose-600 dark:text-rose-450">{quickViewMed.sideEffects}</p>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs">In Stock</p>
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold mt-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                    <span>Yes (Genuine Guarantee)</span>
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(quickViewMed);
                    setQuickViewMed(null);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-all shadow-md shadow-teal-500/10"
                >
                  Select & Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
