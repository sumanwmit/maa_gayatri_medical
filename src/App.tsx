/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from './types';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppSupport from './components/WhatsAppSupport';

// Import Tabs
import HomeTab from './components/Tabs/HomeTab';
import AboutTab from './components/Tabs/AboutTab';
import ServicesTab from './components/Tabs/ServicesTab';
import GalleryTab from './components/Tabs/GalleryTab';
import ContactTab from './components/Tabs/ContactTab';
import WhatsAppOrderTab from './components/Tabs/WhatsAppOrderTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [orderMedicinesInput, setOrderMedicinesInput] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync dark mode state with system preferences or localstorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Render proper tab component
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeTab
            setActiveTab={setActiveTab}
            setOrderMedicinesInput={setOrderMedicinesInput}
          />
        );
      case 'about':
        return <AboutTab />;
      case 'services':
        return <ServicesTab />;
      case 'gallery':
        return <GalleryTab />;
      case 'contact':
        return <ContactTab />;
      case 'order':
        return (
          <WhatsAppOrderTab
            orderMedicinesInput={orderMedicinesInput}
            setOrderMedicinesInput={setOrderMedicinesInput}
          />
        );
      default:
        return (
          <HomeTab
            setActiveTab={setActiveTab}
            setOrderMedicinesInput={setOrderMedicinesInput}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-teal-500/30">
      
      {/* 1. Dynamic SEO Injections */}
      <SEO activeTab={activeTab} />

      {/* 2. Sticky Header Area */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* 3. Main Stage Content Area */}
      <main id="main-content" className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Interactive Floating Supports & Actions */}
      <WhatsAppSupport setActiveTab={setActiveTab} />

      {/* 5. Store Footer Area */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
