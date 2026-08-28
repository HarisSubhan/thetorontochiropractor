import Hero from '../components/Hero.jsx';
import ConditionsGrid from '../components/ConditionsGrid.jsx';
import ServicesOffered from '../components/ServicesOffered.jsx';
import OfficeHours from '../components/OfficeHours.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConditionsGrid />
      <ServicesOffered />
      <OfficeHours />
    </>
  );
}
