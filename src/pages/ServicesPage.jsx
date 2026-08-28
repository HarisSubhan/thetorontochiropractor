import ConditionsGrid from '../components/ConditionsGrid.jsx';
import ServicesOffered from '../components/ServicesOffered.jsx';
import ServiceDetailSection from '../components/ServiceDetailSection.jsx';
import OrthoticsSection from '../components/OrthoticsSection.jsx';
import { serviceDetails } from '../data/serviceDetails.js';

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brand-700 text-white py-14">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="font-display font-extrabold text-4xl mb-3">Services</h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            Certified. Responsive. Compassionate. Explore our full range of chiropractic and
            wellness services.
          </p>
        </div>
      </div>
      <ConditionsGrid />
      <ServicesOffered />
      {serviceDetails.map((detail, i) => (
        <ServiceDetailSection key={detail.id} {...detail} reverse={i % 2 === 1} />
      ))}
      <OrthoticsSection />
    </>
  );
}
