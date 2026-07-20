import { FaYoutube } from 'react-icons/fa'
import { FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import { personal } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact__panel reveal">
          <SectionHeading
            label="Contact"
            title="Let's build something together"
            description="Open to internships, junior developer roles, and collaborative IT projects."
          />

          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact__link">
              <FiMail aria-hidden />
              <span>
                <small>Email</small>
                {personal.email}
              </span>
            </a>
            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="contact__link">
              <FiPhone aria-hidden />
              <span>
                <small>Phone</small>
                {personal.phone}
              </span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <FiGithub aria-hidden />
              <span>
                <small>GitHub</small>
                github.com/Keojun
              </span>
            </a>
            <a href={personal.youtube} target="_blank" rel="noopener noreferrer" className="contact__link">
              <FaYoutube aria-hidden />
              <span>
                <small>YouTube</small>
                youtube.com/@Keojun
              </span>
            </a>
          </div>

          <a href={`mailto:${personal.email}?subject=IT%20Opportunity%20%E2%80%94%20Ken%20Lorica`} className="btn btn--primary btn--large">
            Send an email
          </a>
        </div>
      </div>
    </section>
  )
}
