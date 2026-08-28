const paragraphs = [
  'Current research is finding that the brain is involved in every aspect of human function.',
  'This includes communication from the brain to the body as well as from the body to the brain.',
  'This communication network includes major networks in the Heart (Heart Brain) and Digestive system (Gut Brain).',
  'True health and healing involves correcting any imbalances in the brain and the communication network.',
  'Brain-based care facilitates healing, eliminates pain (e.g. back pain, neck pain and headaches), and achieves stress relief from all forms of stress \u2014 physical, chemical, and emotional.',
];

export default function BrainBodySection() {
  return (
    <section id="philosophy" className="py-16 bg-brand-700 text-white scroll-mt-24">
      <div className="max-w-content mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] rounded-card bg-brand-500/40 border border-white/20 shadow-card flex items-center justify-center order-last md:order-first">
          <span className="text-sm px-6 text-center text-brand-100">
            [ Illustration: brain-body communication network ]
          </span>
        </div>
        <div>
          <h2 className="font-display font-bold text-3xl mb-6 leading-snug">
            Enhancing Your Brain-Body Connection: An Unbalanced Brain Equals Sickness and
            Disease
          </h2>
          <div className="space-y-4 text-brand-100">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
