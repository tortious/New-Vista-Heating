import React from "react";
import { Phone, CalendarDays, ShieldCheck, Star, Clock, MapPin, Flame, Snowflake, Wind, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function NewVistaHomepageRedesign() {
  const services = [
    { icon: Flame, title: "Heating Repair", text: "Fast furnace and heating service when your home needs warmth now." },
    { icon: Snowflake, title: "A/C Service", text: "Air conditioning repair, replacement, and seasonal tune-ups." },
    { icon: Wind, title: "Indoor Air Quality", text: "Cleaner, healthier air with filtration, humidifiers, and ventilation options." },
    { icon: Wrench, title: "Commercial HVAC", text: "Dependable heating and cooling service for local businesses." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          New Vista Heating &amp; Cooling
        </motion.h1>
        <p className="text-lg md:text-xl mb-8 text-blue-200">
          Trusted HVAC service for homes and businesses in the area.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+1-555-000-0000"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            <Phone size={18} /> Call Us Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            <CalendarDays size={18} /> Schedule Service
          </a>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-50 py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          {[
            { icon: ShieldCheck, label: "Licensed & Insured" },
            { icon: Star, label: "5-Star Rated" },
            { icon: Clock, label: "Same-Day Service" },
            { icon: MapPin, label: "Locally Owned" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={18} className="text-blue-700" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-start gap-3 border border-gray-100 hover:shadow-md transition"
              whileHover={{ y: -4 }}
            >
              <Icon size={28} className="text-orange-500" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-500">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why New Vista?</h2>
          <ul className="space-y-4 text-left text-gray-700">
            {[
              "Upfront pricing — no surprises on your bill",
              "Certified technicians with years of local experience",
              "Available for emergency repairs 7 days a week",
              "All major brands serviced and installed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-500 mb-8">
          Call us or fill out the form and we&apos;ll get back to you fast.
        </p>
        <a
          href="tel:+1-555-000-0000"
          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition text-lg"
        >
          <Phone size={20} /> Call Now
        </a>
      </section>

      <footer className="bg-blue-900 text-blue-200 text-center py-6 text-sm">
        © {new Date().getFullYear()} New Vista Heating &amp; Cooling. All rights reserved.
      </footer>
    </div>
  );
}
