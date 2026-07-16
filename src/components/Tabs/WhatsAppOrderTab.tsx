import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, X, MessageSquare, Phone, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../../data';

interface WhatsAppOrderTabProps {
  orderMedicinesInput: string;
  setOrderMedicinesInput: (val: string) => void;
}

export default function WhatsAppOrderTab({ orderMedicinesInput, setOrderMedicinesInput }: WhatsAppOrderTabProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [prescription, setPrescription] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('09:00 AM - 01:00 PM (Morning)');
  const [agreeToTnc, setAgreeToTnc] = useState(true);
  const [dragActive, setDragActive] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // If there's an incoming medicine pre-population, append it beautifully
  const handleAddPopularPreset = (medName: string) => {
    if (orderMedicinesInput) {
      setOrderMedicinesInput(orderMedicinesInput + '\n' + medName);
    } else {
      setOrderMedicinesInput(medName);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPrescription(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescription(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clearFile = () => {
    setPrescription(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !orderMedicinesInput) return;

    // Check if prescription is uploaded
    const isPrescriptionUploaded = prescription ? 'Yes' : 'No';

    // Format final message block matching user guidelines
    const formattedMessage = 
`Hello Maa Gayatri Medical Hall,

Customer Name:
${name}

Phone:
${mobile}

Medicine Required:
${orderMedicinesInput}

Address:
${address || 'Store Pickup Requested'}

Prescription:
${isPrescriptionUploaded}

Message:
${message || 'None'}`;

    // Encode URL parameter
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsDone(true);
  };

  const resetForm = () => {
    setName('');
    setMobile('');
    setEmail('');
    setAddress('');
    setPrescription(null);
    setMessage('');
    setOrderMedicinesInput('');
    setIsDone(false);
  };

  return (
    <div id="order-tab-container" className="space-y-16 py-12">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Digital Ordering Desk</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          WhatsApp Order & Prescription Form
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Upload scripts, list capsules, tablets, or medical machines. Our system encodes your parameters and redirects you securely to S. K. Singh.
        </p>
      </section>

      {/* Split layout: Order Form vs. Guidelines / Presets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-sm">
            
            {isDone ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 shrink-0" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Order Redirected to WhatsApp!</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    We have successfully formatted your prescription and medicine cart parameters. If WhatsApp did not open automatically, click the manual button below to send your script.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={handleSendOrder}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Re-Open WhatsApp Link</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-5 py-3 border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gray-50 font-bold text-xs rounded-xl"
                  >
                    Place a New Order
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendOrder} className="space-y-6 text-sm">
                
                {/* Section Title */}
                <div className="pb-3 border-b border-gray-100 dark:border-slate-800">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Secure Order Dispatcher</h2>
                  <p className="text-xxs text-slate-400 mt-0.5">Please ensure all required fields (*) are filled before submitting.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mukesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  {/* Mobile */}
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 09234210691"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. custom@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  {/* Preferred Delivery/Pickup Time */}
                  <div className="space-y-1.5">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Preferred Delivery Time</label>
                    <select
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-800 dark:text-slate-100 font-semibold"
                    >
                      <option value="09:00 AM - 01:00 PM (Morning)">09:00 AM - 01:00 PM (Morning)</option>
                      <option value="01:00 PM - 05:00 PM (Afternoon)">01:00 PM - 05:00 PM (Afternoon)</option>
                      <option value="05:00 PM - 09:00 PM (Evening)">05:00 PM - 09:00 PM (Evening)</option>
                      <option value="Store Pickup (Prepare Bundle)">Store Pickup (Prepare Bundle)</option>
                    </select>
                  </div>
                </div>

                {/* Medicine Required (TextArea) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Required Medicines / Quantities *</label>
                    {orderMedicinesInput && (
                      <button
                        type="button"
                        onClick={() => setOrderMedicinesInput('')}
                        className="text-xxs text-rose-500 hover:underline font-bold"
                      >
                        Clear Cart List
                      </button>
                    )}
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="List required formulations. E.g.
- Calpol 650mg (10 Tablets)
- Glycomet 500mg (30 Tablets)
- Ascoril Cough Syrup (1 Bottle)"
                    value={orderMedicinesInput}
                    onChange={(e) => setOrderMedicinesInput(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 font-mono text-xs"
                  ></textarea>
                </div>

                {/* Home Address */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Delivery Address (Leave empty for store pickup)</label>
                  <input
                    type="text"
                    placeholder="e.g. Ward Number 12, Nisarpura Lane, Tekari, Bihar 804422"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
                  />
                </div>

                {/* Drag-and-drop Prescription Uploader */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Attach Medical Prescription (Highly Recommended)</label>
                  
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={triggerFileSelect}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-teal-500 bg-teal-50/20 dark:bg-teal-950/20'
                        : prescription
                        ? 'border-emerald-500 bg-emerald-50/10 dark:bg-emerald-950/10'
                        : 'border-gray-300 dark:border-slate-800 hover:border-teal-500 hover:bg-gray-50/50'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {prescription ? (
                      <div className="flex flex-col items-center gap-2">
                        <FileText className="w-10 h-10 text-emerald-500 animate-pulse" />
                        <div className="text-xs">
                          <p className="font-extrabold text-slate-900 dark:text-white max-w-xs truncate mx-auto">{prescription.name}</p>
                          <p className="text-slate-450 mt-0.5">{(prescription.size / 1024).toFixed(1)} KB • Click to replace</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearFile();
                          }}
                          className="mt-2.5 px-3 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xxs rounded-lg flex items-center gap-1 mx-auto"
                        >
                          <X className="w-3 h-3" />
                          <span>Remove Script</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-10 h-10 text-slate-450 mx-auto" />
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-extrabold text-teal-600 dark:text-emerald-400">Click to upload prescription</span> or drag & drop here
                        </div>
                        <p className="text-[10px] text-slate-400">Supports PNG, JPG, JPEG, and PDF documents</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Note */}
                <div className="space-y-1.5">
                  <label className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Additional Notes or Message</label>
                  <textarea
                    placeholder="Write down any special delivery instructions (e.g., leave with security, call before dispatch, etc.)"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-250 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 resize-none"
                  ></textarea>
                </div>

                {/* Terms and Conditions Acceptance */}
                <div className="flex items-start gap-2.5 bg-gray-50 dark:bg-slate-800/40 p-4 rounded-xl border border-gray-150 dark:border-slate-800 text-xxs text-slate-500">
                  <input
                    type="checkbox"
                    required
                    checked={agreeToTnc}
                    onChange={(e) => setAgreeToTnc(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 dark:border-slate-700 text-teal-600 focus:ring-teal-500 mt-0.5"
                  />
                  <span>
                    I confirm that the medicines catalogued above correspond to a legally registered physician prescription. I authorize S. K. Singh to verify my credentials physically upon store delivery.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="py-3.5 border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-gray-200 font-bold text-xs rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-600 dark:text-emerald-400" />
                    <span>Call S.K. Singh Now</span>
                  </a>
                  
                  <button
                    type="submit"
                    className="py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Order via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

        {/* Right Column: Information & Presets */}
        <div className="lg:col-span-5 space-y-6">
          {/* Prescription Guidelines */}
          <div className="bg-slate-900 text-slate-350 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Prescription Regulations</span>
            </h3>
            
            <p className="text-xs leading-relaxed">
              Under Indian pharmacological guidelines (Schedule H & Schedule G drug acts), dispensing specific compounds requires physical prescription validation.
            </p>

            <ul className="space-y-3.5 text-xs text-slate-450">
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5"></span>
                <p>Ensure the doctor signature, clinic registration number, and date are clearly readable.</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5"></span>
                <p>We do not store prescription files on remote untrusted databases. Files are directly passed to WhatsApp.</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5"></span>
                <p>Refrigerated compounds (such as insulin vials) must be picked up physically to preserve cold-chain guidelines.</p>
              </li>
            </ul>
          </div>

          {/* Quick preset medicines */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <ShoppingBag className="w-4.5 h-4.5 text-teal-600 dark:text-emerald-400 shrink-0" />
              <span>Common Healthcare Needs</span>
            </h3>
            <p className="text-xxs text-slate-400 leading-normal">
              Need standard first aid or devices? Click to add these direct formulations instantly to your required list.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              {[
                { name: 'Omron Digital Blood Pressure Monitor (1 Piece)', cost: '₹1850' },
                { name: 'Multivitamin Becosules Capsules (30 Capsules)', cost: '₹52' },
                { name: 'Paracetamol Calpol 650mg (15 Tablets)', cost: '₹32' },
                { name: 'Dettol Liquid Antiseptic 100ml (1 Bottle)', cost: '₹55' },
                { name: 'Cough Syrup Ascoril LS (1 Bottle)', cost: '₹125' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddPopularPreset(item.name)}
                  className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-teal-50/40 dark:bg-slate-800/40 dark:hover:bg-slate-800 rounded-lg transition-colors flex justify-between items-center border border-gray-100 dark:border-slate-800/60 font-medium text-slate-800 dark:text-slate-200"
                >
                  <span className="truncate">{item.name}</span>
                  <span className="shrink-0 text-teal-600 dark:text-emerald-400 font-bold ml-2">{item.cost} &oplus;</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
