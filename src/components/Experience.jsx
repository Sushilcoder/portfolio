const EXPERIENCE = [
  {
    role: 'Campus Mantri', company: 'GeeksforGeeks', duration: '2026 · First Tenure', mode: 'Student Tech Community',
    bullets: ['Contributed to student technology-community initiatives and learning activities.', 'Recognized among the Top 500 Campus Mantris for the first tenure.', 'Built experience in communication, coordination, peer engagement and community building.'],
    stack: ['Community Building', 'Communication', 'Leadership', 'Learning Initiatives'],
  },
  {
    role: 'Technical Vice President', company: 'Government Polytechnic Pune', duration: 'Jan 2023 – Aug 2024', mode: 'Student Leadership · Volunteer',
    bullets: ['Progressed from core-team member to Technical Vice President.', 'Supported student-led technical activities and coordination across the campus community.'],
    stack: ['Leadership', 'Event Coordination', 'Teamwork'],
  },
  {
    role: 'Marketing Specialist', company: 'CodeLite', duration: 'Oct 2024 – Dec 2024 · Jan 2026 – Mar 2026', mode: 'Student / Community Experience',
    bullets: ['Contributed to marketing-related activities and outreach.', 'Developed communication, collaboration and coordination experience.'],
    stack: ['Marketing', 'Communication', 'Outreach'],
  },
  {
    role: 'Volunteer', company: 'iQOO Hackathon · Pune', duration: '5–6 Sep 2026', mode: 'Hackathon Volunteer',
    bullets: ['Supported the event team during a 30-hour hackathon in Pune.', 'Helped contribute to smooth event execution while engaging with participants and the technology community.'],
    stack: ['Event Support', 'Teamwork', 'Problem Solving'],
  },
]
export default function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <div className="section-head"><span className="eyebrow">02 — Journey</span><h2>Experience & Involvement</h2><span className="rule" /></div>
      <div className="timeline">
        {EXPERIENCE.map(({ role, company, duration, mode, bullets, stack }) => (
          <div className="exp-item" key={`${company}-${duration}`}>
            <div className="exp-head"><div className="role">{role} <span className="company">@ {company}</span></div><div className="duration">{duration}</div></div>
            <span className="exp-mode">{mode}</span>
            <ul className="exp-bullets">{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            <div className="exp-stack">{stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
