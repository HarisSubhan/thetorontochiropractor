export default function LegalPage({ title }) {
  return (
    <div className="max-w-content mx-auto px-4 py-16 max-w-2xl">
      <h1 className="section-heading text-3xl mb-6">{title}</h1>
      <p className="text-ink/70">
        This is a placeholder page. Replace with the clinic's actual {title.toLowerCase()} text.
      </p>
    </div>
  );
}
