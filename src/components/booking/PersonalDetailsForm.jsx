const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{7,}$/;

export function validateDetails(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required.';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_RE.test(values.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  return errors;
}

/**
 * Step 3 of booking: patient contact details. Controlled via a single
 * `values` object owned by <BookingForm />; `errors` is computed there
 * (via validateDetails) after a submit attempt.
 */
export default function PersonalDetailsForm({ values, errors, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...values, [name]: value });
  };

  const field = (name, label, type = 'text', required = true) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink/80 mb-1">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={values[name]}
        onChange={handleChange}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={`w-full rounded-card border px-3 py-2 ${
          errors[name] ? 'border-red-400' : 'border-brand-100'
        }`}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-brand-700 mb-1">Your details</h2>
      <p className="text-ink/60 mb-6">So we know who to expect and how to reach you.</p>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {field('firstName', 'First Name')}
          {field('lastName', 'Last Name')}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {field('email', 'Email', 'email')}
          {field('phone', 'Phone', 'tel')}
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-ink/80 mb-1">
            Notes for the clinic (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={handleChange}
            className="w-full rounded-card border border-brand-100 px-3 py-2"
            placeholder="Anything we should know before your visit?"
          />
        </div>
      </div>
    </div>
  );
}
