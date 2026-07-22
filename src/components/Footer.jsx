import { navLinks, personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p>© {year} {personal.name}</p>
          <p className="footer__note">Built with React & Vite</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href="#top"
          className="footer__top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
