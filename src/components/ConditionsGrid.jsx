import { conditionsTreated } from '../data/services.js';

/**
 * "Our Services" section: a scannable grid/tag list of everything the
 * clinic treats or offers, mirroring the flat list on the live page.
 */
export default function ConditionsGrid() {
  return (
    <section className="bg-cloud py-16">
      <div className="max-w-content mx-auto px-4">
        <h2 className="section-heading text-3xl text-center mb-10">Our Services</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {conditionsTreated.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 bg-white rounded-card px-4 py-3 shadow-soft text-sm text-ink/90"
            >
              <span className="text-brand-500 mt-0.5" aria-hidden="true">
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
