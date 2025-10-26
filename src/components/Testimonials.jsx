import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav K.',
    text:
      'Magical mornings by the Ganga. The rooftop sunrise and peaceful rooms made it our favorite Haridwar stay.',
    rating: 5,
  },
  {
    name: 'Meera S.',
    text:
      'Immaculately clean, warm hosts, and such a relaxing vibe. Loved the homestyle breakfast and quick access to the ghats.',
    rating: 5,
  },
  {
    name: 'Daniel P.',
    text:
      'Modern yet soulful. We booked last-minute over WhatsApp and everything was seamless. Highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Guest love</h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Real experiences from recent stays.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-lg ring-1 ring-black/5 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-3 flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <p className="text-neutral-700 dark:text-neutral-200">{t.text}</p>
            <div className="mt-4 text-sm font-medium text-neutral-900 dark:text-white">— {t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
