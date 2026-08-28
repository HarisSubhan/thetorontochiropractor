import TeamGrid from '../components/TeamGrid.jsx';
import BrainBodySection from '../components/BrainBodySection.jsx';

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-700 text-white py-14">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="font-display font-extrabold text-4xl mb-3">About Us</h1>
          <p className="text-brand-100 max-w-2xl mx-auto">
            Midtown Family Chiropractic Centre &mdash; neurological and brain-based care for
            every stage of life.
          </p>
        </div>
      </div>
      <TeamGrid />
      <BrainBodySection />
    </>
  );
}
