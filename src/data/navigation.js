// Route-based nav for the multi-page app (was anchor-based in the
// single-page version). `href` is a real react-router path; an
// optional `hash` scrolls to a section within that page on arrival
// (see src/hooks/useScrollToHash.js).
export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Meet Our Team', href: '/about', hash: 'team' },
      { label: 'Midtown Chiropractic Care', href: '/about', hash: 'philosophy' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Chiropractic Care', href: '/services', hash: 'chiropractic-care' },
      { label: 'MVA (Motor Vehicle Accidents)', href: '/services', hash: 'mva' },
      { label: 'Psych-K', href: '/services', hash: 'psych-k' },
      { label: 'Bio and Neurofeedback', href: '/services', hash: 'neurofeedback' },
      { label: 'Custom Orthotics', href: '/services', hash: 'orthotics' },
      { label: 'Pregnancy Chiropractic', href: '/services', hash: 'pregnancy' },
      { label: 'Stress & Resilience Workshops', href: '/services', hash: 'workshops' },
    ],
  },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Us', href: '/contact' },
];

// The primary CTA used in the header and throughout the site.
export const bookingHref = '/booking';
