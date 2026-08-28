const STEPS = ['Service', 'Date & Time', 'Your Details', 'Review'];

/**
 * Four-step progress bar. Purely presentational — `currentStep` is
 * 1-indexed and comes from <BookingForm />.
 */
export default function StepIndicator({ currentStep }) {
  return (
    <ol className="flex items-center justify-between mb-10" aria-label="Booking progress">
      {STEPS.map((label, i) => {
        const stepNumber = i + 1;
        const isComplete = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        return (
          <li key={label} className="flex-1 flex items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm border-2 ${
                  isCurrent
                    ? 'bg-brand-600 border-brand-600 text-white'
                    : isComplete
                    ? 'bg-brand-100 border-brand-300 text-brand-700'
                    : 'bg-white border-brand-100 text-brand-300'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                {isComplete ? '\u2713' : stepNumber}
              </div>
              <span
                className={`mt-2 text-xs text-center ${
                  isCurrent ? 'text-brand-700 font-semibold' : 'text-ink/50'
                }`}
              >
                {label}
              </span>
            </div>
            {stepNumber < STEPS.length && (
              <div className={`h-0.5 flex-1 -mt-5 ${isComplete ? 'bg-brand-300' : 'bg-brand-100'}`} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
