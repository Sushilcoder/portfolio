export default function About() {
  return (
    <section id="about" className="section about-section fade-in">
      <div className="about-bg" aria-hidden="true" />
      <div className="section-head center"><span className="eyebrow">01 — About</span><h2>Who I Am</h2></div>
      <div className="about-profile-visuals" aria-label="Profile photographs">
        <figure className="about-profile-secondary">
          <img src="/new_main1.jpeg" alt="Sushil Giri outdoors" loading="lazy" />
          <figcaption>CURIOUS BY NATURE. BUILT TO CREATE.</figcaption>
        </figure>
      </div>
      <div className="about-copy">
        <p>I'm <span className="em">Sushil Giri</span>, an Electronics and Telecommunication engineering student with a strong interest in <span className="em">Artificial Intelligence, Machine Learning, full-stack development and cybersecurity</span>. I like exploring how technology can solve practical problems and building projects that connect software with real-world needs.</p>
        <p>My project work includes <span className="em">AI-powered healthcare workflows, machine-learning applications and decentralized systems</span>. I have also taken part in hackathons and student technology communities, where I have developed collaboration, communication, leadership and problem-solving skills.</p>
        <p>I'm pursuing a <span className="em">B.E. in Electronics and Telecommunication</span> at PDEA College of Engineering, Pune. I'm continuously learning, experimenting with new tools and looking for opportunities to contribute to meaningful technology projects.</p>
        <a href="#contact" className="round-cta" data-cursor="Connect">Let's<br />Connect <span className="arr">→</span></a>
      </div>
      <div className="about-counters">
        <div className="about-counter lime"><div className="k">AI/ML</div><div className="label">Focused learning and project work</div></div>
        <div className="about-counter"><div className="k">Pune</div><div className="label">Engineering student & tech community</div></div>
      </div>
    </section>
  )
}
