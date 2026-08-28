import { useState } from 'react';

const initialForm = { firstName: '', lastName: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  return errors;
}

/**
 * Contact form: controlled inputs via a single `form` state object,
 * client-side validation on submit, and a lightweight success/error
 * status message. There is no real backend here — submission is mocked
 * with a short delay (see the limitations note in the README).
 */
export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // Mock async submission — replace with a real API call.
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 bg-cloud">
      <div className="max-w-content mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="section-heading text-3xl mb-6">Contact Us</h2>
          <dl className="space-y-4 text-ink/80">
            <div>
              <dt className="font-semibold text-brand-700">Location</dt>
              <dd>2300 Yonge Street Suite 2004, Toronto, ON</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-700">Phone Number</dt>
              <dd>
                <a href="tel:+14169012141" className="hover:text-brand-500">
                  (416) 901-2141
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-700">Email Address</dt>
              <dd>
                <a href="mailto:info@thetorontochiropractor.com" className="hover:text-brand-500">
                  info@thetorontochiropractor.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-card shadow-card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-ink/80 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-card border border-brand-100 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-ink/80 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-card border border-brand-100 px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1">
              Email <span className="text-accent-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full rounded-card border px-3 py-2 ${
                errors.email ? 'border-red-400' : 'border-brand-100'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-card border border-brand-100 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
          >
            {status === 'submitting' ? 'Sending\u2026' : 'Submit'}
          </button>

          {status === 'success' && (
            <p role="status" className="text-brand-600 font-medium text-sm">
              Thanks &mdash; your message has been sent. We&rsquo;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
