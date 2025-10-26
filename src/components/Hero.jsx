import React from 'react';
import Spline from '@splinetool/react-spline';
import { Instagram, Star, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const rating = 5;
  const whatsappNumber = '919999999999'; // Replace with your real number in international format without +
  const whatsappText = encodeURIComponent(
    'Hi GANGA GETAWAY, I would like to inquire about availability and pricing.'
  );

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (do not block Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            Haridwar, Uttarakhand
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            GANGA GETAWAY
            <span className="block bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-transparent">
              Riverside Homestay
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-white/80 md:text-lg">
            Wake to the sound of the Ganga, breathe Himalayan air, and unwind in
            a modern yet soulful homestay crafted for calm, comfort, and connection.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" /> Book on Instagram
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
            >
              <Phone className="h-4 w-4" /> WhatsApp Us
            </a>
            <div className="ml-2 hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur sm:flex">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
              ))}
              <span className="ml-2 text-white/80">5.0 Rated Stay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <Phone className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
