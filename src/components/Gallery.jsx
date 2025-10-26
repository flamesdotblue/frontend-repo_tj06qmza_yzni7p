import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519961655809-34fa156820ff?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523419410520-01fc4d1558cc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Nature-forward spaces</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            An earthy palette with soft greens and warm woods. Slow mornings on the rooftop, 
            golden evenings by the river, and rooms designed for deep rest.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-5 text-emerald-900 ring-1 ring-emerald-900/10 dark:bg-emerald-900/20 dark:text-emerald-50">
          <p>
            Tip: Tap any image to view it closer on Instagram. We post daily stories of
            sunrises, cafe recommendations, and local walks.
          </p>
          <a
            className="mt-3 inline-block rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-500"
            href="https://www.instagram.com/gangagetaway?igsh=MWhxNGE1Mm5ocWpnYw=="
            target="_blank"
            rel="noreferrer"
          >
            Follow @gangagetaway
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {images.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/gangagetaway?igsh=MWhxNGE1Mm5ocWpnYw=="
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 shadow-sm dark:bg-neutral-800"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
