import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1519961655809-34fa156820ff?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523419410520-01fc4d1558cc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            A glimpse into the calm, cozy, and nature-forward spaces.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="group relative aspect-[2/3] overflow-hidden rounded-xl bg-neutral-200 shadow-sm dark:bg-neutral-800"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
