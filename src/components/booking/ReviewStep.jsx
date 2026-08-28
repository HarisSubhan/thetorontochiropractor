import { bookableServices } from '../../data/booking.js';

/**
 * Step 4 of booking: a read-only summary of everything chosen so far,
 * with "Edit" links that jump back to the relevant step via `onEditStep`.
 */
export default function ReviewStep({ formData, dateLabel, onEditStep }) {
  const service = bookableServices.find((s) => s.id === formData.serviceId);

  const row = (label, value, step) => (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-brand-50 last:border-0">
      <div>
        <dt className="text-xs uppercase tracking-wide text-ink/50">{label}</dt>
        <dd className="font-medium text-ink">{value}</dd>
      </div>
      <button
        type="button"
        onClick={() => onEditStep(step)}
        className="text-sm text-brand-600 hover:text-brand-700 font-medium shrink-0"
      >
        Edit
      </button>
    </div>
  );

  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-brand-700 mb-1">Review your booking</h2>
      <p className="text-ink/60 mb-6">Please confirm everything looks right before submitting.</p>

      <dl className="bg-cloud rounded-card px-5">
        {row('Service', service ? `${service.name} (${service.duration})` : '\u2014', 1)}
        {row('Date & Time', `${dateLabel} at ${formData.time}`, 2)}
        {row('Name', `${formData.firstName} ${formData.lastName}`, 3)}
        {row('Email', formData.email, 3)}
        {row('Phone', formData.phone, 3)}
        {formData.notes && row('Notes', formData.notes, 3)}
      </dl>
    </div>
  );
}
