import { getUpcomingOpenDates } from '../../utils/bookingSchedule.js';

/**
 * Custom calendar strip (rather than a third-party datepicker library):
 * shows the next 14 days the clinic is open, per office hours. Selecting
 * a day is lifted up via `onSelect`, keyed by the date's YYYY-MM-DD key.
 */
export default function DatePicker({ selectedKey, onSelect }) {
  const dates = getUpcomingOpenDates(14);

  return (
    <div>
      <h3 className="font-semibold text-brand-700 mb-3">Choose a date</h3>
      <div className="flex gap-2 overflow-x-auto pb-2" role="radiogroup" aria-label="Select a date">
        {dates.map(({ key, weekdayLabel, dayLabel }) => {
          const isSelected = key === selectedKey;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(key)}
              className={`shrink-0 w-20 rounded-card border-2 py-3 text-center transition-colors ${
                isSelected
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-brand-100 bg-white text-ink/70 hover:border-brand-300'
              }`}
            >
              <div className="text-xs uppercase tracking-wide">{weekdayLabel}</div>
              <div className="font-semibold">{dayLabel}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
