import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Plus } from 'lucide-react';
import { AppTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', isTab: true },
    { id: 'about', label: 'About', isTab: true },
    { id: 'services', label: 'Services', isTab: true },
    { id: 'gallery', label: 'Gallery', isTab: true },
    { id: 'testimonials', label: 'Testimonials', isTab: false, targetId: 'testimonials-section' },
    { id: 'faq', label: 'FAQ', isTab: false, targetId: 'faq-section' },
    { id: 'contact', label: 'Contact', isTab: true }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    if (item.isTab) {
      setActiveTab(item.id as AppTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('home');
      setTimeout(() => {
        const element = document.getElementById(item.targetId || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 dark:bg-slate-950/85 backdrop-blur-sm py-4 border-b border-gray-100 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <div 
            id="header-brand"
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <Plus className="w-6 h-6 animate-pulse" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-none">
                MAA GAYATRI
              </h1>
              <p className="text-[10px] font-semibold text-teal-600 dark:text-emerald-400 tracking-widest leading-none mt-1">
                MEDICAL HALL
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isCurrent = item.isTab 
                ? activeTab === item.id 
                : activeTab === 'home' && false; // Underline home if strictly on home, or handle scrolls

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isCurrent
                      ? 'text-teal-600 dark:text-emerald-400 bg-teal-50/50 dark:bg-teal-950/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isCurrent && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call-to-Actions & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            {/* Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-emerald-400" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order Form Trigger */}
            <button
              onClick={() => { setActiveTab('order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 rounded-xl transition-all hover:translate-y-[-1px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Actions Overlay (Only visible on small viewports) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="sm:hidden p-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isCurrent = item.isTab ? activeTab === item.id : false;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isCurrent
                        ? 'text-teal-600 dark:text-emerald-400 bg-teal-50/70 dark:bg-teal-950/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-slate-800">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-emerald-400" />
                  <span>Call Store</span>
                </a>
                <button
                  onClick={() => { setActiveTab('order'); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order Form</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
