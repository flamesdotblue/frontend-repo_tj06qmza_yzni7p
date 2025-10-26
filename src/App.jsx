import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      {/* Hero with interactive Spline and floating WhatsApp */}
      <Hero />

      {/* Content sections */}
      <main>
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70 bg-white/70 px-6 py-8 text-sm text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-black/40 dark:text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} GANGA GETAWAY • Haridwar, Uttarakhand</p>
          <div className="flex items-center gap-4">
            <a href="#gallery" className="transition hover:text-neutral-900 dark:hover:text-white">Gallery</a>
            <a href="#testimonials" className="transition hover:text-neutral-900 dark:hover:text-white">Reviews</a>
            <a href="#book" className="transition hover:text-neutral-900 dark:hover:text-white">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
