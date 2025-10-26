import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, Send } from 'lucide-react';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Client-only submit via WhatsApp for now
    const text = encodeURIComponent(
      `Booking Inquiry — GANGA GETAWAY\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Check-in: ${form.checkIn}\n` +
        `Check-out: ${form.checkOut}\n` +
        `Guests: ${form.guests}\n` +
        `Message: ${form.message}`
    );
    const whatsappNumber = '919999999999';
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-xl ring-1 ring-black/5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-2xl font-semibold md:text-3xl">Booking inquiry</h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Share your dates and details — we’ll confirm availability and the best rate.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm">Full name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-xl border border-neutral-300/70 bg-white px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-xl border border-neutral-300/70 bg-white px-10 py-3 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm">Phone</label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full rounded-xl border border-neutral-300/70 bg-white px-10 py-3 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
                placeholder="WhatsApp number"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm">Check-in</label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                required
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={onChange}
                className="w-full rounded-xl border border-neutral-300/70 bg-white px-10 py-3 outline-none transition focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm">Check-out</label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                required
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={onChange}
                className="w-full rounded-xl border border-neutral-300/70 bg-white px-10 py-3 outline-none transition focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm">Guests</label>
            <div className="relative">
              <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                required
                type="number"
                min={1}
                name="guests"
                value={form.guests}
                onChange={onChange}
                className="w-full rounded-xl border border-neutral-300/70 bg-white px-10 py-3 outline-none transition focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="w-full rounded-xl border border-neutral-300/70 bg-white px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Any special requests or questions?"
            />
          </div>
          <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            {submitted && (
              <span className="text-sm text-green-600 dark:text-green-400">We opened WhatsApp with your inquiry. You can hit send there.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
