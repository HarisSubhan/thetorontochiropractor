import { Link } from 'react-router-dom';

/**
 * One anchored service detail block on /services. `reverse` flips the
 * image/text column order so consecutive sections alternate visually.
 */
export default function ServiceDetailSection({ id, title, summary, bullets, reverse }) {
  return (
    <section id={id} className="py-14 border-t border-brand-50 scroll-mt-24">
      <div className="max-w-content mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[&>*:first-child]:order-last' : ''}`}>
          <div className="aspect-[4/3] rounded-card bg-brand-50 border border-brand-100 shadow-soft flex items-center justify-center text-brand-500">
            <span className="text-sm px-6 text-center">[ Photo: {title} ]</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-brand-700 mb-3">{title}</h3>
            <p className="text-ink/80 mb-4">{summary}</p>
            <ul className="space-y-2 mb-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink/90">
                  <span className="text-brand-500 mt-0.5" aria-hidden="true">
                    &#10003;
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-card shadow-soft transition-colors"
            >
              Book This Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
