import { FiGithub, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { personal } from '../data/portfolio'
import profilePhoto from '../../assets/c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_80338ddb7914ecb79f1779ec4c7b5488_images_20240214_215148-0cee4e57-53cf-4fbc-9e0c-d0ffc58600f5.png'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="hero__eyebrow">
            <span className="hero__status" />
            Open for internship & IT roles
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">Ken Eubert</span>
            <span className="hero__title-line hero__title-line--accent">Lorica</span>
          </h1>
          <p className="hero__role">{personal.role}</p>
          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View my work</a>
            <a href={`mailto:${personal.email}`} className="btn btn--ghost">Get in touch</a>
          </div>

          <ul className="hero__meta">
            <li><FiMapPin aria-hidden /> {personal.location}</li>
            <li><FiMail aria-hidden /> <a href={`mailto:${personal.email}`}>{personal.email}</a></li>
            <li><FiPhone aria-hidden /> <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a></li>
          </ul>
        </div>

        <div className="hero__visual reveal reveal--delay">
          <div className="hero__frame">
            <img src={profilePhoto} alt={`Portrait of ${personal.name}`} width={420} height={520} />
            <div className="hero__frame-badge">
              <span className="hero__frame-badge-num">4+</span>
              <span className="hero__frame-badge-label">Projects shipped</span>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__github"
            aria-label="GitHub profile"
          >
            <FiGithub />
            <span>@Keojun</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
