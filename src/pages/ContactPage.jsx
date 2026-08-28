import ContactSection from '../components/ContactSection.jsx';
import OfficeHours from '../components/OfficeHours.jsx';

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-700 text-white py-14">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="font-display font-extrabold text-4xl mb-3">Contact Us</h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            2300 Yonge Street Suite 2004, Toronto &middot; (416) 901-2141
          </p>
        </div>
      </div>
      <ContactSection />
      <OfficeHours />
    </>
  );
}
