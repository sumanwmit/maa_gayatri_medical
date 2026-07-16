import { motion } from 'motion/react';
import { ShieldCheck, Heart, User, Clock, Award, Building, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, ABOUT_TIMELINE, STORE_VALUES } from '../../data';

export default function AboutTab() {
  return (
    <div id="about-tab-container" className="space-y-16 py-12">
      
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Heritage</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          About Maa Gayatri Medical Hall
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
          Serving Tekari and Gaya community with genuine health care and pharmaceutical accuracy since 2012.
        </p>
      </section>

      {/* Owner Message & Biography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-150 dark:border-slate-800 bg-gray-50">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
              alt="S. K. Singh - Founder"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="p-5 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 text-center">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {BUSINESS_INFO.owner.name}
              </h3>
              <p className="text-xs text-teal-600 dark:text-emerald-400 font-bold uppercase tracking-wider mt-1">
                {BUSINESS_INFO.owner.role}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Leadership Message</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            "Your Health is Our Sacred Trust"
          </h2>
          
          <blockquote className="relative p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border-l-4 border-teal-500 text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-medium">
            "{BUSINESS_INFO.owner.message}"
          </blockquote>

          <div className="space-y-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <p>
              Under the direct pharmacological supervision of S. K. Singh, we have built a local culture of zero-error drug dispensing. We educate patients on drug interactions, pediatric syrups guidelines, and food contraindications to protect rural communities from common self-prescription dangers.
            </p>
            <p>
              Maa Gayatri Medical Hall is fully registered under the State Drugs Control Administration, Bihar, ensuring complete compliance with the Indian Pharmacy Act, Schedule H guidelines, and standard retail standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                To eliminate pharmaceutical counterfeit rings in our block by providing direct-sourced, 100% authentic, and temperature-controlled medical components at highly standard rates, keeping healthcare accessible to every single household in Tekari.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                To modernize the retail medicine distribution in rural Bihar by adopting digital prescription scanning, temperature compliance, interactive customer advice databases, and ultra-fast WhatsApp-to-counter preparation tunnels.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Our Shared Values</h3>
              <p className="text-xs text-slate-400 mt-1">Our day-to-day work is strictly bound by four operational pillars.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STORE_VALUES.map((val, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800/80 text-center">
                  <div className="w-10 h-10 bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{val.title}</h4>
                  <p className="text-xxs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Historical Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Journey</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">The History of Maa Gayatri</h2>
          <p className="text-sm text-slate-400">Milestones of medical dedication and professional community trust.</p>
        </div>

        <div className="relative border-l border-teal-200 dark:border-slate-800 ml-4 md:ml-32 space-y-8">
          {ABOUT_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10">
              {/* Year display on left for medium+ screens */}
              <div className="hidden md:block absolute right-full top-1 mr-10 text-right">
                <span className="text-sm font-black text-teal-600 dark:text-emerald-400">{item.year}</span>
              </div>
              
              {/* Timeline marker */}
              <span className="absolute left-0 top-1.5 -translate-x-[9px] w-4.5 h-4.5 bg-teal-500 border-4 border-white dark:border-slate-900 rounded-full"></span>
              
              <div className="space-y-1 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-sm">
                <span className="md:hidden inline-block text-xs font-black text-teal-600 dark:text-emerald-400 uppercase mb-1">{item.year}</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                <p className="text-xxs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
