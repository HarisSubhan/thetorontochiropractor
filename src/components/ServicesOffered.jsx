import ServiceCard from './ServiceCard.jsx';
import { serviceCards } from '../data/services.js';

export default function ServicesOffered() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-content mx-auto px-4">
        <p className="text-center text-accent-600 font-semibold uppercase tracking-wide text-sm mb-2">
          Certified. Responsive. Compassionate.
        </p>
        <h2 className="section-heading text-3xl text-center mb-12">Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
