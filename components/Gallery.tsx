'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.42.jpeg', caption: 'Building CivicTrack during a hackathon', span: 'md:col-span-2' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.43 (1).jpeg', caption: 'Working late night on Sitekraft projects', span: '' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.43.jpeg', caption: 'Coding session at midnight', span: '' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.44 (1).jpeg', caption: 'Speaking at developer conference', span: 'md:col-span-2' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.44 (2).jpeg', caption: 'Team collaboration moment', span: '' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.44.jpeg', caption: 'College developer community meetup', span: '' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.45 (1).jpeg', caption: 'Early brainstorming session for DevQBX', span: '' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.45.jpeg', caption: 'Product launch celebration', span: 'md:col-span-2' },
    { src: '/gallery/WhatsApp Image 2026-03-06 at 15.56.46.jpeg', caption: 'Networking at tech event', span: '' },
  ];

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Journey & Gallery</h2>
          <p className="text-xl text-gray-400">Moments from my journey as a developer and founder</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${image.span} glass rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].caption}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-white text-center mt-6 text-lg font-semibold">
                {images[selectedIndex].caption}
              </p>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                <X size={24} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                <ChevronRight size={24} />
              </button>

              <div className="text-center mt-4 text-gray-400">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
