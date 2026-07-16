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

  // Global Tracker Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activeTab) {
        if (activeTab === 'order') return 'WhatsApp Order & Prescription Form';
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

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
