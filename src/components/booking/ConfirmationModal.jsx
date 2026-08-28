import { useEffect, useRef } from 'react';

/**
 * Success modal shown after submit. Traps focus loosely (focuses the
 * close button on open) and closes on Escape or backdrop click. No
 * external modal library — a simple fixed overlay + `useEffect`.
 */
export default function ConfirmationModal({ booking, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-heading"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-card shadow-card max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4 text-2xl">
          &#10003;
        </div>
        <h2 id="confirmation-heading" className="font-display font-bold text-2xl text-brand-700 mb-2">
          You're booked!
        </h2>
        <p className="text-ink/70 mb-5">
          A confirmation has been saved for <strong>{booking.dateLabel}</strong> at{' '}
          <strong>{booking.time}</strong>. We look forward to seeing you,{' '}
          {booking.firstName}.
        </p>
        <p className="text-xs text-ink/40 mb-6">Confirmation #{booking.confirmationId}</p>
        <button
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}
