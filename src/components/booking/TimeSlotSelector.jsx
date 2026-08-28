import { getTimeSlotsForDate } from '../../utils/bookingSchedule.js';

/**
 * Grid of time-of-day buttons for the selected date. Slots already
 * booked (mock data) or in the past are rendered disabled. `date` is a
 * JS Date; pass null while no date is selected yet.
 */
export default function TimeSlotSelector({ date, selectedTime, onSelect }) {
  if (!date) {
    return <p className="text-sm text-ink/50">Pick a date to see available times.</p>;
  }

  const slots = getTimeSlotsForDate(date);

  if (slots.length === 0) {
    return <p className="text-sm text-ink/50">The clinic is closed that day &mdash; please pick another date.</p>;
  }

  return (
    <div>
      <h3 className="font-semibold text-brand-700 mb-3">Choose a time</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2" role="radiogroup" aria-label="Select a time">
        {slots.map(({ time, disabled }) => {
          const isSelected = time === selectedTime;
          return (
            <button
              key={time}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => onSelect(time)}
              className={`rounded-card border-2 py-2 text-sm font-medium transition-colors ${
                disabled
                  ? 'border-brand-50 bg-brand-50 text-ink/30 cursor-not-allowed line-through'
                  : isSelected
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-brand-100 bg-white text-ink/80 hover:border-brand-300'
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
