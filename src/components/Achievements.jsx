const Trophy = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 0 1-2-2V4h4M18 9h2a2 2 0 0 0 2-2V4h-4M6 4h12v7a6 6 0 0 1-12 0zM9 20h6M12 14v6"/></svg>
const Cert = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M8.5 12l-1.5 8 5-3 5 3-1.5-8"/></svg>
const Users = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
const ITEMS = [
  { icon: <Trophy />, title: 'iQOO India Mobile First Hackathon 2026', meta: '2026 · National Finalist', body: 'Selected as a national finalist with Team HackMantra in the iQOO India Mobile First Hackathon.' },
  { icon: <Trophy />, title: 'SAP Code Unnati Hackathon 2026', meta: '2026 · Top 20 Teams', body: 'Recognized among the Top 20 teams in the SAP Code Unnati Hackathon.' },
  { icon: <Users />, title: 'GeeksforGeeks Campus Mantri', meta: '2026 · First Tenure', body: 'Recognized among the Top 500 Campus Mantris during the first tenure.' },
  { icon: <Cert />, title: 'Student Leadership', meta: '2023–2024', body: 'Served as Technical Vice President at Government Polytechnic Pune after contributing as a core-team member.' },
]
export default function Achievements() {
  return <section id="achievements" className="section fade-in">
    <div className="section-head"><span className="eyebrow">06 — Recognition</span><h2>Achievements & Recognition</h2><span className="rule" /></div>
    <figure className="achievement-feature">
      <img src="/bg-image.png" alt="Sushil Giri presenting at a technology event" loading="lazy" />
      <figcaption><span>COMMUNITY · TECHNOLOGY · BUILDING</span><strong>Learning, sharing and building with the tech community.</strong></figcaption>
    </figure>
    <div className="achv-grid">{ITEMS.map(({ icon, title, meta, body }) => <div className="achv-card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><div className="meta">{meta}</div><p>{body}</p></div>)}</div>
  </section>
}
