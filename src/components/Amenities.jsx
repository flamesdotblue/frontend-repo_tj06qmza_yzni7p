import { Wifi, Coffee, Car, Sun, Leaf, Home } from "lucide-react";

const items = [
  { icon: Home, title: "Spacious Rooms", desc: "Airy, sunlit rooms with cozy bedding" },
  { icon: Wifi, title: "Fast Wi‑Fi", desc: "Stay connected while you unwind" },
  { icon: Coffee, title: "Homestyle Breakfast", desc: "Fresh, local and hearty every morning" },
  { icon: Car, title: "Easy Access", desc: "Parking and quick routes to ghats" },
  { icon: Sun, title: "Rooftop Sunrises", desc: "Golden hour views over the Ganges" },
  { icon: Leaf, title: "Nature Vibe", desc: "Green corners, calm courtyards" },
];

export default function Amenities() {
  return (
    <section className="bg-emerald-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">Everything you need to feel at home</h2>
          <p className="mt-3 text-emerald-700/90">Thoughtful comforts crafted for slow mornings and peaceful evenings.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-900/5 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-emerald-900">{title}</h3>
              </div>
              <p className="mt-3 text-emerald-700/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
