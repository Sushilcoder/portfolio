const ROWS = [
  { num: '01', title: 'AI & Machine Learning', pills: ['Python', 'Machine Learning', 'YOLO', 'Computer Vision', 'AI', 'LLM Concepts'], g: ['#cbfe01', '#8aff00'], initials: 'AI' },
  { num: '02', title: 'Programming & Backend', pills: ['C', 'Java', 'Python', 'Node.js', 'FastAPI', 'PostgreSQL', 'MySQL'], g: ['#ff5101', '#ff8f00'], initials: 'BE' },
  { num: '03', title: 'Web Development', pills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'], g: ['#22d3ee', '#a78bfa'], initials: 'WD' },
  { num: '04', title: 'Tools & Emerging Tech', pills: ['Docker', 'Git', 'GitHub', 'Groq', 'Claude', 'Blockchain', 'Cybersecurity Fundamentals'], g: ['#a78bfa', '#cbfe01'], initials: 'ET' },
]
const Thumb = ({ initials, g, title }) => (
  <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id={`eg-${initials}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={g[0]} stopOpacity="0.9" /><stop offset="1" stopColor={g[1]} stopOpacity="0.7" /></linearGradient></defs>
    <rect width="320" height="220" fill="#11141a" /><rect width="320" height="220" fill={`url(#eg-${initials})`} />
    <text x="24" y="200" fontFamily="Phudu, sans-serif" fontWeight="800" fontSize="150" fill="rgba(0,0,0,0.4)" style={{ letterSpacing: '-6px' }}>{initials}</text>
    <text x="24" y="40" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(0,0,0,0.7)" fontWeight="600" style={{ letterSpacing: '2px' }}>{title}</text>
  </svg>
)
export default function Expertise() {
  return (
    <section id="expertise" className="section fade-in">
      <div className="section-head"><span className="eyebrow">03 — Expertise</span><h2>Skills & Technologies</h2><span className="rule" /></div>
      <div className="expertise-stack">{ROWS.map(({ num, title, pills, g, initials }) => (
        <article className="exp-row" key={num}><div className="exp-thumb"><Thumb initials={initials} g={g} title={title} /></div>
          <div className="exp-content"><div className="num-head"><span className="num">{num}</span><h3>{title}</h3></div>
            <ul className="exp-pills">{pills.map(p => <li key={p}>{p}</li>)}</ul></div>
        </article>
      ))}</div>
    </section>
  )
}
