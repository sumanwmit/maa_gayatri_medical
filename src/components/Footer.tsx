import React, { useState } from 'react';
import { Send, MapPin, Phone, MessageSquare, Clock, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AppTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMsg('');
    }, 5000);
  };

  const handleLinkClick = (tab: AppTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (targetId: string) => {
    setActiveTab('home');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Store Intro & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white shadow-md">
                <span className="font-bold text-lg leading-none">+</span>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">MAA GAYATRI</span>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Serving the community of Tekari with authentic medicines, diagnostic tools, infant nutrition, and warm pharmacist care since 2012.
            </p>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span className="text-slate-400">{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-teal-400 transition-colors">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <MessageSquare className="w-4 h-4 text-teal-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Maa%20Gayatri%20Medical%20Hall`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-400 transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 pb-1.5 border-b border-slate-800">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">
                  Home Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">
                  Our Business Story
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">
                  Healthcare Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('testimonials-section')} className="hover:text-white transition-colors">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('faq-section')} className="hover:text-white transition-colors">
                  Common FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('order')} className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                  WhatsApp Order Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Store Directions */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 pb-1.5 border-b border-slate-800">
              Working Hours
            </h3>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Monday - Saturday</p>
                  <p className="text-xs text-slate-400 mt-0.5">{BUSINESS_INFO.hours.weekdays}</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Sunday Hours</p>
                  <p className="text-xs text-slate-400 mt-0.5">{BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Emergency Support</p>
                  <p className="text-xs text-slate-400 mt-0.5">{BUSINESS_INFO.hours.emergency}</p>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

          {/* Column 4: Quick Inquiry Form */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 pb-1.5 border-b border-slate-800">
              Quick Medicine Inquiry
            </h3>
            {isSubmitted ? (
              <div className="p-4 bg-teal-950/40 border border-teal-800 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Inquiry Sent!</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Thank you! S.K. Singh or our assistant will reach you back within 15 minutes. Or click "Call Store" for instant support.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-2.5 text-sm">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-800 text-slate-100 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 border border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone/WhatsApp Number"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-800 text-slate-100 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 border border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Which medicine do you need?"
                    rows={2}
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-800 text-slate-100 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 border border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-teal-400 font-semibold text-xs rounded-lg transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Quick Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Disclaimer / Warning Section */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <div className="flex gap-2 items-start bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-400 uppercase">Emergency Disclaimer:</strong> Maa Gayatri Medical Hall website provides information for general inquiry. We do NOT provide diagnostics, specialized surgical prescriptions, or online clinical telemedicine. In case of serious medical emergencies, poisoning, or acute symptoms, please immediately report to the Tekari Sub-divisional Hospital or consult with a registered physician directly.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Links */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Maa Gayatri Medical Hall. All rights reserved. Designed & Hosted Locally.</p>
          <div className="flex gap-4">
            <button onClick={() => alert('Maa Gayatri Medical Hall is committed to protecting your privacy. We store and use your uploaded prescription and mobile numbers strictly for dispensing medicine packages and never sell/disclose them.')} className="hover:text-slate-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => alert('Medicines are dispensed subject to verification of prescriptions. We strictly comply with Schedule H laws of India. Cashbacks or refunds are strictly subject to returns regulations.')} className="hover:text-slate-300">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => alert('Maa Gayatri Medical Hall is a registered trade pharmacy under the Bihar Drugs Control Administration. License details can be viewed physically at our Titaiganj counter.')} className="hover:text-slate-300">Licensing</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
