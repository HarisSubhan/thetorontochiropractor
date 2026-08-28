// Mock bios for the "Meet Our Team" section. The live site names three
// doctors throughout its copy (Halpern, Stethem, Najafian) but the full
// bio text lives on pages this fetch didn't reach, so these summaries
// are written to match the site's stated specialties, not scraped verbatim.
export const teamMembers = [
  {
    id: 'stethem',
    name: 'Dr. Lauren Stethem',
    role: 'Chiropractor, Brain-Based Care',
    bio: 'Focuses on neurological and brain-based chiropractic care, helping patients address the root causes of pain and dysfunction rather than just symptoms.',
  },
  {
    id: 'halpern',
    name: 'Dr. Mark Halpern',
    role: 'Chiropractor, Family Wellness',
    bio: 'Brings a family-wellness focus to care, working with patients of all ages from pregnancy through adulthood.',
  },
  {
    id: 'najafian',
    name: 'Dr. Touraj Najafian',
    role: 'Chiropractor, Spinal Health',
    bio: 'Specializes in spinal health and corrective care, with an emphasis on patient education and long-term outcomes.',
  },
];
