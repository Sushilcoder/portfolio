export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse" />
          AI/ML Trainee <span style={{ color: 'var(--dim)' }}>·</span>
          <span className="co">Full-Stack Developer</span>
        </div>
        <h1 className="hero-name">SUSHIL<span className="accent">.</span></h1>
        <h2 className="hero-headline">
          Building <span className="accent">useful technology</span><br />
          for real-world problems.
        </h2>
        <p className="hero-desc">
          I'm an Electronics and Telecommunication engineering student and
          aspiring AI/ML and full-stack developer from Pune. I enjoy building
          practical solutions across AI, healthcare, web development and
          decentralized applications.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="pill-cta" data-cursor="View Work">
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="pill-cta ghost">Let's Connect</a>
        </div>
        <div className="hero-kpis">
          <div className="kpi"><div className="k">AI/ML</div><div className="v">Learning &<br />Building</div></div>
          <div className="kpi"><div className="k">3+</div><div className="v">Featured<br />Projects</div></div>
          <div className="kpi"><div className="k">2026</div><div className="v">Hackathon<br />Journey</div></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-glow" aria-hidden="true" />
        <img
          className="hero-photo hero-portrait"
          src="/Stylish Man with Soft-Fade Trousers.png"
          alt="Sushil Giri standing in a black outfit"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
