import { bookableServices } from '../../data/booking.js';

/**
 * Step 1 of booking: pick a service. Renders each option as a
 * selectable card (radio-group semantics) driven by the parent's
 * `selectedId` + `onSelect`.
 */
export default function ServiceSelector({ selectedId, onSelect }) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-brand-700 mb-1">
        What can we help you with?
      </h2>
      <p className="text-ink/60 mb-6">Choose the service you'd like to book.</p>

      <div role="radiogroup" aria-label="Select a service" className="grid sm:grid-cols-2 gap-4">
        {bookableServices.map((service) => {
          const isSelected = service.id === selectedId;
          return (
            <button
              key={service.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(service.id)}
              className={`text-left rounded-card border-2 p-5 transition-colors ${
                isSelected
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-brand-100 bg-white hover:border-brand-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-brand-700">{service.name}</h3>
                <span className="text-xs whitespace-nowrap bg-brand-100 text-brand-700 rounded-full px-2 py-0.5">
                  {service.duration}
                </span>
              </div>
              <p className="text-sm text-ink/70">{service.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
