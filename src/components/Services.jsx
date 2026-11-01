const SERVICES = [
  { num: '01', label: 'AI & Machine Learning', body: 'Exploring practical AI/ML applications, model workflows and computer-vision concepts through hands-on projects.', tag: 'Python · ML · YOLO', bg: ['#cbfe01', '#8aff00', 'AI'] },
  { num: '02', label: 'Healthcare Technology', body: 'Designing accessible digital healthcare workflows, including guided patient intake, document processing and privacy-aware record handling.', tag: 'Healthcare · OCR · Voice', bg: ['#ff5101', '#ff8f00', 'HC'] },
  { num: '03', label: 'Full-Stack Development', body: 'Building web application interfaces and backend services with modern JavaScript frameworks, Python APIs and databases.', tag: 'React · Next.js · FastAPI', bg: ['#22d3ee', '#a78bfa', 'FS'] },
  { num: '04', label: 'Decentralized Applications', body: 'Learning and prototyping blockchain-based systems for transparent registries and patient-controlled data access.', tag: 'Blockchain · IPFS', bg: ['#a78bfa', '#cbfe01', 'DA'] },
  { num: '05', label: 'Cybersecurity Fundamentals', body: 'Developing foundational knowledge of application security, privacy, secure data handling and ethical cybersecurity.', tag: 'Security · Privacy', bg: ['#cbfe01', '#ff5101', 'CS'] },
]
function bgImage(c1, c2, letters) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='800' height='400' fill='${c1}'/><rect width='800' height='400' fill='url(#g)'/><text x='40' y='360' font-family='Phudu, sans-serif' font-weight='800' font-size='320' fill='rgba(0,0,0,0.35)' letter-spacing='-14'>${letters}</text></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}
export default function Services() {
  return <section id="services" className="section fade-in">
    <div className="section-head"><span className="eyebrow">05 — Focus Areas</span><h2>What I'm Exploring</h2><span className="rule" /></div>
    <div className="services-list">{SERVICES.map(({ num, label, body, tag, bg }, i) => (
      <a href="#contact" className={`service-row${i === 0 ? ' active' : ''}`} key={num} style={{ '--bg-img': bgImage(bg[0], bg[1], bg[2]) }}>
        <div className="num">{num}</div><h3>{label}</h3><p>{body}</p><span className="tag">{tag}</span>
      </a>
    ))}</div>
  </section>
}
