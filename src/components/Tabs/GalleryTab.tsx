import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Plus } from 'lucide-react';
import { GALLERY } from '../../data';
import { GalleryItem } from '../../types';

export default function GalleryTab() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Front', 'Shelves', 'Products', 'Equipment', 'Customers'];

  const filteredItems = selectedCat === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedCat);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY.findIndex(g => g.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? GALLERY.length - 1 : (prev ?? 0) - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === GALLERY.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div id="gallery-tab-container" className="space-y-12 py-12">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-bold text-teal-600 dark:text-emerald-400 uppercase tracking-widest">Our Store Visuals</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Maa Gayatri Store Gallery
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Take a look at our clinical environment, organized storage shelves, hygienic surgical supplies, and diagnostic counters.
        </p>
      </section>

      {/* Category Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
                selectedCat === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-500/10'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Masonry Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-slate-800 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-4/3 bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/25 backdrop-blur-md rounded-full text-white border border-white/20">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-gray-100/30">
                  {item.category}
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100/50 dark:border-slate-800/40">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                <p className="text-xxs text-slate-400 dark:text-slate-500 mt-1 leading-relaxed line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col justify-between p-4"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white py-2 max-w-7xl mx-auto w-full">
              <div>
                <span className="text-xxs font-bold uppercase tracking-wider text-teal-400">{GALLERY[lightboxIndex].category}</span>
                <h4 className="font-bold text-sm sm:text-base mt-0.5">{GALLERY[lightboxIndex].title}</h4>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-full text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 p-3 bg-black/40 hover:bg-black/60 border border-white/10 text-white rounded-full z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={GALLERY[lightboxIndex].imageUrl}
                alt={GALLERY[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 p-3 bg-black/40 hover:bg-black/60 border border-white/10 text-white rounded-full z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs text-slate-400 py-3 max-w-xl mx-auto w-full">
              <p className="px-4">{GALLERY[lightboxIndex].description}</p>
              <span className="inline-block mt-2 font-bold text-xxs tracking-widest text-teal-500 bg-teal-950/35 border border-teal-800/40 px-2.5 py-0.5 rounded-full">
                {lightboxIndex + 1} / {GALLERY.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
