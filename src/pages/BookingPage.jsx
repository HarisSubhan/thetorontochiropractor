import BookingForm from '../components/booking/BookingForm.jsx';

export default function BookingPage() {
  return (
    <>
      <div className="bg-brand-700 text-white py-14">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="font-display font-extrabold text-4xl mb-3">Request An Appointment</h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            Book in a few quick steps. We&rsquo;ll confirm your visit by phone or email.
          </p>
        </div>
      </div>
      <BookingForm />
    </>
  );
}
