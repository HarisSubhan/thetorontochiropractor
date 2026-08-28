import Testimonials from '../components/Testimonials.jsx';

export default function TestimonialsPage() {
  return (
    <>
      <div className="bg-brand-700 text-white py-14">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="font-display font-extrabold text-4xl mb-3">Testimonials</h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            What our patients say about their care at Focused on Health Centre.
          </p>
        </div>
      </div>
      <Testimonials />
    </>
  );
}
