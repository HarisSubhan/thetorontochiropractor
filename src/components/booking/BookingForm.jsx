import { useState } from 'react';
import StepIndicator from './StepIndicator.jsx';
import ServiceSelector from './ServiceSelector.jsx';
import DatePicker from './DatePicker.jsx';
import TimeSlotSelector from './TimeSlotSelector.jsx';
import PersonalDetailsForm, { validateDetails } from './PersonalDetailsForm.jsx';
import ReviewStep from './ReviewStep.jsx';
import ConfirmationModal from './ConfirmationModal.jsx';
import { getUpcomingOpenDates } from '../../utils/bookingSchedule.js';

const STORAGE_KEY = 'toh_bookings';

const initialFormData = {
  serviceId: '',
  dateKey: '',
  time: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
};

function saveBookingToLocalStorage(booking) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(booking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage can fail (private browsing, quota) — booking still
    // succeeds for the user's current session either way.
  }
}

/**
 * Drives the 4-step booking flow: Service -> Date & Time -> Details ->
 * Review. All state (current step, form data, validation errors,
 * completed booking) lives here and is passed down as props, so each
 * step component stays a simple, controlled, presentational piece.
 * There is no backend: on submit, the booking is written to
 * localStorage and a confirmation modal is shown with a mock
 * confirmation number.
 */
export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [detailErrors, setDetailErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const openDates = getUpcomingOpenDates(14);
  const selectedDateEntry = openDates.find((d) => d.key === formData.dateKey);
  const selectedDate = selectedDateEntry ? selectedDateEntry.date : null;
  const dateLabel = selectedDateEntry
    ? `${selectedDateEntry.weekdayLabel}, ${selectedDateEntry.dayLabel}`
    : '';

  const canProceedFromStep = {
    1: Boolean(formData.serviceId),
    2: Boolean(formData.dateKey && formData.time),
    3: true, // validated explicitly on click, see handleNext
  };

  const updateField = (patch) => setFormData((prev) => ({ ...prev, ...patch }));

  const handleNext = () => {
    if (step === 3) {
      const errors = validateDetails(formData);
      setDetailErrors(errors);
      if (Object.keys(errors).length > 0) return;
    }
    setStep((s) => Math.min(s + 1, 4));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleEditStep = (targetStep) => setStep(targetStep);

  const handleSubmit = () => {
    const booking = {
      ...formData,
      dateLabel,
      confirmationId: Math.random().toString(36).slice(2, 8).toUpperCase(),
      submittedAt: new Date().toISOString(),
    };
    saveBookingToLocalStorage(booking);
    setConfirmedBooking(booking);
  };

  const handleCloseConfirmation = () => {
    setConfirmedBooking(null);
    setFormData(initialFormData);
    setDetailErrors({});
    setStep(1);
  };

  // Changing the date resets an already-picked time, since availability
  // is date-specific.
  const handleSelectDate = (dateKey) => updateField({ dateKey, time: '' });

  return (
    <div className="max-w-content mx-auto px-4 py-14">
      <div className="max-w-2xl mx-auto">
        <StepIndicator currentStep={step} />

        <div className="bg-white rounded-card shadow-card p-6 sm:p-8">
          {step === 1 && (
            <ServiceSelector
              selectedId={formData.serviceId}
              onSelect={(serviceId) => updateField({ serviceId })}
            />
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="font-display font-bold text-2xl text-brand-700 -mb-2">
                Pick a date and time
              </h2>
              <DatePicker selectedKey={formData.dateKey} onSelect={handleSelectDate} />
              <TimeSlotSelector
                date={selectedDate}
                selectedTime={formData.time}
                onSelect={(time) => updateField({ time })}
              />
            </div>
          )}

          {step === 3 && (
            <PersonalDetailsForm
              values={formData}
              errors={detailErrors}
              onChange={setFormData}
            />
          )}

          {step === 4 && (
            <ReviewStep formData={formData} dateLabel={dateLabel} onEditStep={handleEditStep} />
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-50">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1}
              className="px-5 py-2.5 rounded-card font-semibold text-brand-700 disabled:opacity-0 disabled:pointer-events-none hover:bg-brand-50"
            >
              Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceedFromStep[step]}
                className="px-6 py-2.5 rounded-card font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-card font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>

      {confirmedBooking && (
        <ConfirmationModal booking={confirmedBooking} onClose={handleCloseConfirmation} />
      )}
    </div>
  );
}
