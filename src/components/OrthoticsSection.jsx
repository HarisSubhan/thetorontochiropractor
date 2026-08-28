import { Link } from 'react-router-dom';
import { orthoticIndications } from '../data/services.js';

export default function OrthoticsSection() {
  return (
    <section id="orthotics" className="py-16 scroll-mt-24">
      <div className="max-w-content mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h2 className="section-heading text-3xl mb-4">Custom Made Orthotics</h2>
            <p className="text-ink/80 mb-4">
              Custom-made foot orthotics are medical devices discreetly inserted into shoes
              to support and align the foot and ankle, prevent and/or accommodate foot
              abnormalities, and improve foot function.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
            >
              Book a Fitting
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-card bg-brand-50 border border-brand-100 shadow-card flex items-center justify-center text-brand-600">
            <span className="text-sm px-6 text-center">[ Photo of custom orthotic insoles ]</span>
          </div>
        </div>

        <div className="bg-cloud rounded-card p-8">
          <h3 className="font-display font-bold text-2xl text-brand-700 mb-5">
            Who should wear orthotics?
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {orthoticIndications.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/90">
                <span className="text-accent-600 mt-0.5" aria-hidden="true">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/booking"
            className="mt-6 inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
          >
            Request An Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
