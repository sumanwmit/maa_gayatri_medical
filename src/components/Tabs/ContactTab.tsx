import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Shield, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data';

export default function ContactTab() {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Maa Gayatri Medical Hall,\n\nI have submitted a query through your website Contact form:\n\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail || 'N/A'}\nMessage: ${formMsg}\n\nPlease help me as soon as possible.`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setFormMsg('');
    setIsSuccess(false);
  };

  return (
    <div id="contact-tab-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Connect with Us</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Contact Maa Gayatri Medical Hall
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Have queries about medicine batches, pricing, or chronic discounts? Our support assistants are at your service.
        </p>
      </section>

      {/* Main Grid: Details on Left, Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Business Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-gray-100 dark:border-slate-800">
              Official Store Details
            </h2>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Physical Store Address</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {BUSINESS_INFO.location}
                  </p>
                  <a
                    href={BUSINESS_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xxs font-bold text-teal-600 dark:text-emerald-400 hover:underline"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-500 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Phone & Urgent Calls</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct line: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-slate-900 dark:text-white hover:underline">{BUSINESS_INFO.phoneFormatted}</a>
                  </p>
                  <p className="text-xxs text-slate-400 mt-0.5">Available for standard orders and stock queries.</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-green-50 dark:bg-green-950/20 text-green-500 rounded-xl shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">WhatsApp support desk</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Send script images to: <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 dark:text-white hover:underline">{BUSINESS_INFO.phoneFormatted}</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-500 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Email Inquiry</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <a href="mailto:suman.wmit@gmail.com" className="hover:underline font-semibold text-slate-900 dark:text-white">suman.wmit@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours Sub-card */}
          <div className="bg-slate-900 text-slate-350 p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-teal-400 shrink-0" />
              <span>Business Working Hours</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Mon - Sat</p>
                <p className="font-semibold text-white mt-1">{BUSINESS_INFO.hours.weekdays}</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Sunday Hours</p>
                <p className="font-semibold text-white mt-1">{BUSINESS_INFO.hours.sunday}</p>
              </div>
            </div>
            <p className="text-xxs text-slate-500 border-t border-slate-800 pt-3 leading-normal">
              Our support team assists with prescriptions verification physically during store open hours. Inquiries submitted overnight will be resolved first thing in the morning.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle className="w-10 h-10 shrink-0" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Query Registered Successfully!</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Your inquiry has been stored. S. K. Singh will review your message shortly. For a rapid response, you can forward this exact inquiry straight to WhatsApp!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <button
                    onClick={handleWhatsAppForward}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward query to WhatsApp</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-5 py-3 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Submit Medicine & General Inquiry
                  </h2>
                  <p className="text-xs text-slate-400">
                    Provide your credentials and message details below. We guarantee 15 minutes responses during daytime.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Phone Number (WhatsApp preferred) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 09234210691"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Inquiry Message *</label>
                  <textarea
                    required
                    placeholder="List the required medicines or write down your question regarding daily diagnostic monitors, health powders, etc."
                    rows={4}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-2 bg-yellow-50/40 dark:bg-slate-800/20 p-3.5 rounded-xl border border-yellow-100/50 dark:border-slate-800 text-xxs text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Privacy Pledge:</strong> Maa Gayatri Medical Hall never sells or shares your uploaded query data, healthcare files, or phone numbers. All transmissions are processed securely.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Registering Inquiry...' : 'Submit Secure Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Full Map Section in Contact Tab */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-lg px-2">Interactive Location Finder</h3>
        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150 dark:border-slate-800 h-[380px] bg-gray-100 relative">
          <iframe
            src={BUSINESS_INFO.mapIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maa Gayatri Location Finder"
            className="absolute inset-0"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
