const PROJECTS = [
  { num: '01', title: 'Jivsetu / MediKiosk', tag: 'In Development', description: 'AI-assisted patient case-taking platform designed for accessible clinical intake in hospitals and AYUSH settings. Planned capabilities include multilingual voice and touch interaction, guided medical-history collection, document OCR and structured summaries, with privacy-focused local development.', stack: ['Next.js', 'React', 'Python', 'FastAPI', 'MySQL', 'OCR', 'Voice AI'], live: null, initials: 'JM', g: ['#cbfe01', '#8aff00'] },
  { num: '02', title: 'Blood Donation Using Machine Learning', tag: 'Project', description: 'A machine-learning-based blood donor management concept for hospitals and donation camps. Includes donor records, BMI and blood-volume calculations, eligibility assessment using Linear Regression, and donation-status tracking.', stack: ['Python', 'Machine Learning', 'Linear Regression', 'MySQL'], live: null, initials: 'BD', g: ['#ff5101', '#ff8f00'] },
  { num: '03', title: 'Syallbot — Verified Course Generator', tag: 'Project', description: 'A course-generation concept focused on producing structured learning content with an emphasis on verification and usefulness for learners.', stack: ['AI', 'Python', 'Full-Stack Development'], live: null, initials: 'SY', g: ['#22d3ee', '#a78bfa'] },
  { num: '04', title: 'Decentralized Healthcare Records', tag: 'Concept / Prototype', description: 'A patient-controlled health-record sharing concept. Records are encrypted and stored off-chain, while blockchain smart contracts manage permissions and audit access.', stack: ['Blockchain', 'IPFS', 'Smart Contracts', 'Healthcare'], live: null, initials: 'DH', g: ['#a78bfa', '#cbfe01'] },
  { num: '05', title: 'Decentralized Property Registry', tag: 'Project', description: 'A blockchain-based property registry concept using smart contracts for transparent ownership records, document integrity and controlled role-based access.', stack: ['React', 'Solidity', 'Polygon', 'IPFS'], live: null, initials: 'PR', g: ['#15803d', '#84cc16'] },
  { num: '06', title: 'Land Cover Classification', tag: 'Project', description: 'Explored land-cover classification using the Random Forest algorithm and satellite imagery through Google Earth Engine.', stack: ['Python', 'Random Forest', 'Google Earth Engine'], live: null, initials: 'LC', g: ['#a78bfa', '#ff8f00'] },
]
const Thumb = ({ initials, g, title }) => (
  <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id={`pg-${initials}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={g[0]} stopOpacity="0.95" /><stop offset="1" stopColor={g[1]} stopOpacity="0.75" /></linearGradient></defs>
    <rect width="320" height="200" fill="#11141a" /><rect width="320" height="200" fill={`url(#pg-${initials})`} />
    <text x="22" y="180" fontFamily="Phudu, sans-serif" fontWeight="800" fontSize="130" fill="rgba(0,0,0,0.42)" style={{ letterSpacing: '-5px' }}>{initials}</text>
    <text x="22" y="38" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(0,0,0,0.7)" fontWeight="600" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>{title}</text>
  </svg>
)
export default function Projects() {
  return (
    <section id="projects" className="section projects-section fade-in">
      <div className="projects-backdrop">WORKS</div>
      <div className="section-head"><span className="eyebrow">04 — Work</span><h2>Selected Projects</h2><span className="rule" /></div>
      <div className="projects-grid">
        {PROJECTS.map(({ num, title, tag, description, stack, initials, g }) => (
          <article className="project-card" key={num}>
            <div className="thumb"><Thumb initials={initials} g={g} title={title} /></div>
            <div className="meta"><span className="num">{num}</span><span className="badge wip">{tag}</span></div>
            <h3>{title}</h3><p>{description}</p>
            <div className="stack">{stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
            <div className="links"><span className="disabled-note">Project details available on request</span></div>
          </article>
        ))}
      </div>
    </section>
  )
}
