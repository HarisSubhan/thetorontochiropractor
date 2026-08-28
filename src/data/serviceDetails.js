// Content for the individual service sections on /services. The live
// site hosts each of these as its own page (chiropractic-care,
// vehicle-accident-care, psych-k, braintap, custom-orthotics,
// pregnancy-and-chiropractic, workshops); this recreation keeps them as
// anchored sections on one Services page, matching the Services dropdown
// in the header nav (see data/navigation.js `hash` values). Custom
// Orthotics has its own richer <OrthoticsSection /> further down the
// page instead of an entry here, to avoid a duplicate #orthotics id.
export const serviceDetails = [
  {
    id: 'chiropractic-care',
    title: 'Chiropractic Care',
    summary:
      'A gentle, non-invasive, hands-on health care discipline that focuses on the neuromusculoskeletal system \u2014 nerves, muscles, and joints.',
    bullets: [
      'Full spinal and postural assessment',
      'Manual adjustments and mobilizations',
      'Functional and corrective care options',
      'Individualized treatment plans',
    ],
  },
  {
    id: 'mva',
    title: 'MVA (Motor Vehicle Accidents)',
    summary:
      'Assessment and rehabilitation for injuries sustained in car accidents, including whiplash, soft-tissue injury, and post-collision pain.',
    bullets: [
      'Detailed injury assessment and documentation',
      'Treatment plans coordinated with your insurer',
      'Corrective exercise and rehabilitation',
      'Progress re-evaluations',
    ],
  },
  {
    id: 'psych-k',
    title: 'Psych-K',
    summary:
      'A process that works with the subconscious mind to help shift self-limiting beliefs that can stand in the way of health and stress resilience.',
    bullets: [
      'Belief-pattern identification',
      'Guided balancing process',
      'Complements physical care with a mind-body approach',
    ],
  },
  {
    id: 'neurofeedback',
    title: 'Bio and Neurofeedback',
    summary:
      'BrainTap (neurofeedback) and HeartMath (biofeedback) technologies that help retrain the nervous system\u2019s response to stress.',
    bullets: [
      'BrainTap guided relaxation sessions',
      'HeartMath heart-rate variability training',
      'Stress resilience and sleep support',
    ],
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy Chiropractic',
    summary:
      'Gentle, pregnancy-safe chiropractic care to support changing posture and pelvic balance through every trimester.',
    bullets: [
      'Webster Technique-informed pelvic assessment',
      'Positioning support through all trimesters',
      'Postpartum recovery care',
    ],
  },
  {
    id: 'workshops',
    title: 'Stress & Resilience Workshops',
    summary:
      'Community education sessions on building resilience and coping with physical, chemical, and emotional stress.',
    bullets: [
      'Group and corporate workshop formats',
      'Practical resilience tools and techniques',
      'Ongoing community education events',
    ],
  },
];
