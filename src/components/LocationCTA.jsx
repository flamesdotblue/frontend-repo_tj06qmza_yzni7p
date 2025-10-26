import { Instagram, MapPin, Phone } from "lucide-react";

export default function LocationCTA() {
  return (
    <section id="location" className="bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Find your calm in Haridwar</h2>
            <p className="mt-3 text-emerald-100/90">
              Nestled close to the ghats with quick access to local gems. Let the river and
              birdsong set the pace for your day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                <Phone className="h-5 w-5" />
                Call to Enquire
              </a>
              <a
                href="https://www.instagram.com/gangagetaway?igsh=MWhxNGE1Mm5ocWpnYw=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-medium text-emerald-950 hover:bg-emerald-200 transition"
              >
                <Instagram className="h-5 w-5" />
                Message on Instagram
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-emerald-100/80">
              <MapPin className="h-5 w-5" />
              <span>Haridwar, Uttarakhand • Near main ghats and local cafes</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-emerald-100/20">
            <iframe
              title="Haridwar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.998220609391!2d78.153!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e0b8a0f4d23%3A0x3b9d2a3a64365796!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
