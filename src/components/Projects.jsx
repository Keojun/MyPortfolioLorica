import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work on GitHub"
          description="Full-stack and frontend applications built for real business scenarios."
        />

        <div className="projects__featured">
          {featured.map((project, i) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-card--featured reveal"
              style={{ '--accent': project.accent, '--reveal-delay': `${i * 100}ms` }}
            >
              <div className="project-card__top">
                <span className="project-card__icon" style={{ background: `${project.accent}22`, color: project.accent }}>
                  <FiGithub />
                </span>
                <FiArrowUpRight className="project-card__arrow" aria-hidden />
              </div>
              <h3>{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="projects__grid">
          {others.map((project, i) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal"
              style={{ '--accent': project.accent, '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="project-card__top">
                <span className="project-card__icon" style={{ background: `${project.accent}22`, color: project.accent }}>
                  <FiGithub />
                </span>
                <FiArrowUpRight className="project-card__arrow" aria-hidden />
              </div>
              <h3>{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
