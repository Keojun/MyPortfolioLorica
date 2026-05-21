import { activities, personal } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          label="About"
          title="Turning ideas into reliable software"
          description="Focused on clean architecture, clear documentation, and user-centered design."
        />

        <div className="about__grid">
          <div className="about__card reveal">
            <p className="about__text">{personal.summary}</p>
            <p className="about__text">
              My thesis centers on a patient record and appointment management system with integrated
              data analytics—experience I bring to every project from planning through implementation.
            </p>
          </div>

          <div className="about__aside reveal reveal--delay">
            <h3 className="about__aside-title">Community & growth</h3>
            <ul className="about__list">
              {activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="about__stat">
              <span className="about__stat-value">22</span>
              <span className="about__stat-label">Years old · Internship-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
