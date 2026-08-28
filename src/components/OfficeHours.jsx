import { Link } from 'react-router-dom';
import { officeHours } from '../data/officeHours.js';

export default function OfficeHours() {
  return (
    <section className="py-16 bg-cloud">
      <div className="max-w-content mx-auto px-4 max-w-2xl text-center">
        <h2 className="section-heading text-3xl mb-2">Office Hours</h2>
        <p className="text-ink/70 mb-8 italic">Note: please contact us before coming by!</p>

        <dl className="bg-white rounded-card shadow-card divide-y divide-brand-50 text-left">
          {officeHours.map(({ day, hours }) => (
            <div key={day} className="flex items-center justify-between px-6 py-3">
              <dt className="font-semibold text-brand-700">{day}</dt>
              <dd className={hours === 'Closed' ? 'text-ink/50' : 'text-ink/80'}>{hours}</dd>
            </div>
          ))}
        </dl>

        <Link
          to="/booking"
          className="mt-8 inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
        >
          Request Appointment
        </Link>
      </div>
    </section>
  );
}
