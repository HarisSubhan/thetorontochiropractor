import { useState } from 'react';
import { testimonials } from '../data/testimonials.js';

/**
 * The live site embeds a third-party Google Reviews widget here (an
 * iframe pulled from backend.leadconnectorhq.com) instead of static
 * markup, so there was no real review text to recreate. This component
 * reproduces the *layout* — a one-at-a-time review carousel — driven by
 * placeholder data; wire it up to a real reviews API before shipping.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-content mx-auto px-4 max-w-2xl text-center">
        <h2 className="section-heading text-3xl mb-10">What People Are Saying</h2>

        <div className="bg-white rounded-card shadow-card p-8 relative">
          <div className="flex justify-center gap-1 mb-4 text-accent-500" aria-hidden="true">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </div>
          <p className="text-ink/80 text-lg italic mb-4">&ldquo;{current.quote}&rdquo;</p>
          <p className="font-semibold text-brand-700">{current.name}</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="p-2 rounded-full border border-brand-100 hover:bg-brand-50 text-brand-600"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === index ? 'bg-brand-600' : 'bg-brand-100'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="p-2 rounded-full border border-brand-100 hover:bg-brand-50 text-brand-600"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
