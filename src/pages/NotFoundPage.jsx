import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-content mx-auto px-4 py-24 text-center">
      <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-2">404</p>
      <h1 className="section-heading text-3xl mb-4">Page not found</h1>
      <p className="text-ink/70 mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-card shadow-soft transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
