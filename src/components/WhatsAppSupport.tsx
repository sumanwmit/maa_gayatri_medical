import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { AppTab } from '../types';

interface WhatsAppSupportProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function WhatsAppSupport({ setActiveTab }: WhatsAppSupportProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    // We direct the user to the interactive order tab first so they can use the gorgeous form!
    setActiveTab('order');
    scrollToTop();
  };

  return (
    <div id="floating-action-triggers" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
      
      {/* Back To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-slate-800 text-teal-600 dark:text-emerald-400 rounded-full shadow-lg border border-gray-150 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-xl hover:translate-y-[-2px] transition-all"
        title="Call Pharmacy"
      >
        <PhoneCall className="w-5 h-5 animate-bounce" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Call Pharmacist</span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.button
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppClick}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative flex items-center gap-2.5 px-4.5 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-full shadow-xl hover:translate-y-[-2px] transition-all group"
        title="Order via WhatsApp Form"
      >
        {/* Pulsing visual ring */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-500/20 animate-ping group-hover:hidden"></span>
        
        <MessageSquare className="w-5.5 h-5.5" />
        <span className="text-sm font-bold uppercase tracking-wider">WhatsApp Order</span>
      </motion.button>

    </div>
  );
}
