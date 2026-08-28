import { teamMembers } from '../data/team.js';

export default function TeamGrid() {
  return (
    <section id="team" className="py-16 scroll-mt-24">
      <div className="max-w-content mx-auto px-4">
        <h2 className="section-heading text-3xl text-center mb-2">Meet Our Team</h2>
        <p className="text-center text-ink/70 max-w-xl mx-auto mb-12">
          The Toronto Chiropractors leading Focused on Health Centre.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-card shadow-card p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-brand-50 border border-brand-100 mx-auto mb-4 flex items-center justify-center text-brand-500 text-xs">
                Photo
              </div>
              <h3 className="font-display font-bold text-lg text-brand-700">{member.name}</h3>
              <p className="text-accent-600 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-ink/70 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
