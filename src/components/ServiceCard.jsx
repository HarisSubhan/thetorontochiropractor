import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon.jsx';

/**
 * One of the three "Services We Offer" cards. Purely presentational —
 * takes its content via props so <ServicesOffered /> can map over data.
 */
export default function ServiceCard({ title, description, href, hash, icon }) {
  return (
    <div className="bg-white rounded-card shadow-card p-7 flex flex-col h-full border border-brand-50">
      <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
        <ServiceIcon name={icon} />
      </div>
      <h3 className="font-display font-bold text-xl text-brand-700 mb-2">{title}</h3>
      <p className="text-ink/80 mb-5 flex-1">{description}</p>
      <Link
        to={{ pathname: href, hash: hash ? `#${hash}` : undefined }}
        className="text-accent-600 font-semibold hover:text-accent-500 inline-flex items-center gap-1"
      >
        Learn More
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
