import { Link } from 'react-router-dom';

/**
 * Full-width hero: brand headline, sub-copy naming the three doctors,
 * and a primary CTA that routes to the booking page.
 */
export default function Hero() {
  return (
    <section className="relative bg-brand-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
      <div className="relative max-w-content mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-accent-400 font-semibold text-sm mb-3">
            Midtown Family Chiropractic Centre
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
            Focused on Health
          </h1>
          <p className="text-lg text-brand-100 mb-2">Neurological and Brain Based Care</p>
          <p className="text-brand-100 mb-6 max-w-xl">
            Are you ready to optimize the health of you and your family? The Toronto
            Chiropractors <strong className="text-white">Dr. Halpern, Dr. Stethem, and Dr.
            Najafian</strong> strive for excellence through superior patient treatment,
            education, and satisfaction.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-accent-500 hover:bg-accent-600 transition-colors text-white font-semibold px-6 py-3 rounded-card shadow-card"
          >
            Request An Appointment
          </Link>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-card bg-brand-500/40 border border-white/20 shadow-card flex items-center justify-center text-brand-100">
            {/* Replace with the clinic's hero photograph */}
            <span className="text-sm px-6 text-center">
              [ Hero photograph of the care team / clinic interior ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
