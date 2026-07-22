import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, personal } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((link) => link.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a
          href="#top"
          className="header__logo"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="header__logo-mark">KL</span>
          <span className="header__logo-text">Lorica</span>
        </a>

        <nav
          id="site-nav"
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={activeSection === link.id ? 'header__nav-link--active' : ''}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a className="header__cta" href={`mailto:${personal.email}`}>
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  )
}
