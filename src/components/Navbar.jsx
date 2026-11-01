import { useEffect, useState } from 'react'
const LINKS = [
  { label: 'About', href: '#about', num: '01' }, { label: 'Expertise', href: '#expertise', num: '02' },
  { label: 'Experience', href: '#experience', num: '03' }, { label: 'Projects', href: '#projects', num: '04' },
  { label: 'Achievements', href: '#achievements', num: '05' }, { label: 'Education', href: '#education', num: '06' },
  { label: 'Contact', href: '#contact', num: '07' },
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const h = document.documentElement
      const pct = h.scrollHeight > h.clientHeight ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0
      h.style.setProperty('--sp', `${pct}%`)
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [isOpen])
  const close = () => setIsOpen(false)
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-container">
          <a href="#home" className="wordmark" onClick={close}>SUSHIL<span className="dot">.</span></a>
          <ul className="nav-inline">
            <li><a href="#home" onClick={close}>Home</a></li><li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#projects" onClick={close}>Projects</a></li><li><a href="#experience" onClick={close}>Experience</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://www.linkedin.com/in/sushilgiri/" target="_blank" rel="noreferrer" className="pill-cta hide-sm" onClick={close}>LinkedIn ↗</a>
            <button className={`menu-toggle${isOpen ? ' open' : ''}`} onClick={() => setIsOpen(v => !v)} aria-label="Toggle menu" aria-expanded={isOpen}><span /><span /><span /></button>
          </div>
        </nav>
      </header>
      <div className={`drawer-overlay${isOpen ? ' open' : ''}`} onClick={close} />
      <aside className={`drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-left">
          <ul className="drawer-links">{LINKS.map(({ label, href, num }) => <li key={label}><a href={href} onClick={close}><span className="num">{num}</span>{label}</a></li>)}</ul>
          <div className="drawer-cta"><a href="https://www.linkedin.com/in/sushilgiri/" target="_blank" rel="noreferrer" className="pill-cta ghost" onClick={close}>View LinkedIn ↗</a></div>
        </div>
      </aside>
    </>
  )
}
