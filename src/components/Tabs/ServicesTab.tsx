import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle, HelpCircle, MessageSquare, Plus, ShoppingBag, Eye } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../../data';
import { Service } from '../../types';

export default function ServicesTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Medicines' | 'Equipment' | 'Care'>('All');
  const [activeDetailSrv, setActiveDetailSrv] = useState<Service | null>(null);

  // Classify services into filters
  const getCategoryByServiceId = (id: string): 'Medicines' | 'Equipment' | 'Care' => {
    if (id.includes('sales') || id.includes('prescription') || id.includes('otc')) return 'Medicines';
    if (id.includes('equipment') || id.includes('bp') || id.includes('surgical') || id.includes('devices') || id.includes('homecare')) return 'Equipment';
    return 'Care'; // baby, personal, supplements, firstaid, diabetic
  };

  const filteredServices = SERVICES.filter(srv => {
    const matchesSearch = srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          srv.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const category = getCategoryByServiceId(srv.id);
    const matchesFilter = selectedFilter === 'All' || category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const handleWhatsAppConsult = (srv: Service) => {
    const text = `Hello Maa Gayatri Medical Hall, I am interested in your service: "${srv.title}". Do you have stocks or support for this available currently?`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="services-tab-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Range</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Professional medicine dispensing, diagnostic setups, wellness supplements, and orthopedic supports in Tekari, Bihar.
        </p>
      </section>

      {/* Filter Options & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Pills Filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All Services' },
              { id: 'Medicines', label: 'Prescription & OTC' },
              { id: 'Equipment', label: 'Equipment & Surgical' },
              { id: 'Care', label: 'Wellness & Personal Care' }
            ].map(pill => (
              <button
                key={pill.id}
                onClick={() => setSelectedFilter(pill.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedFilter === pill.id
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-500/15'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 placeholder-slate-400"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(srv => (
            <div
              key={srv.id}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-150 dark:border-slate-800/80 hover:border-teal-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Plus className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {getCategoryByServiceId(srv.id)}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {srv.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {srv.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xxs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-normal">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800/60 flex gap-2">
                <button
                  onClick={() => setActiveDetailSrv(srv)}
                  className="flex-1 py-2 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 text-slate-700 dark:text-gray-300 font-bold text-xxs rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Guidelines</span>
                </button>
                <button
                  onClick={() => handleWhatsAppConsult(srv)}
                  className="flex-1 py-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold text-xxs rounded-lg transition-colors flex items-center justify-center gap-1 border border-teal-100"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 space-y-2">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="font-bold text-slate-750">No Services Found</p>
              <p className="text-xs max-w-sm mx-auto">Try clearing search terms or changing your filters above.</p>
            </div>
          )}
        </div>
      </section>

      {/* Guidelines Detail Modal */}
      {activeDetailSrv && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-150 dark:border-slate-800 relative">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-teal-600 dark:text-emerald-400 font-bold">Clinical Care Guidelines</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-1">{activeDetailSrv.title}</h3>
              </div>
              <button
                onClick={() => setActiveDetailSrv(null)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <Plus className="w-5 h-5 rotate-45" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-600 dark:text-slate-350">
              <p className="leading-relaxed font-medium text-slate-750 dark:text-slate-200">
                {activeDetailSrv.description}
              </p>

              <div>
                <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xxs mb-2">Our Standard Core Procedures</p>
                <div className="space-y-2">
                  {activeDetailSrv.details.map((det, i) => (
                    <div key={i} className="flex gap-2.5 items-start bg-gray-50 dark:bg-slate-800/30 p-2.5 rounded-lg border border-gray-100 dark:border-slate-800/60">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-normal">{det}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50/30 dark:bg-teal-950/10 p-3 rounded-lg border border-teal-100/50 text-xxs text-slate-500 leading-normal">
                <strong>Dispensing Notice:</strong> For scheduled medication categories, physical verification of a registered clinical prescription at Maa Gayatri Medical Hall (Titaiganj Road, Tekari) is strictly required under the Drugs and Cosmetics Rules.
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setActiveDetailSrv(null)}
                  className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppConsult(activeDetailSrv);
                    setActiveDetailSrv(null);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg shadow-sm"
                >
                  Ask Stockist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
