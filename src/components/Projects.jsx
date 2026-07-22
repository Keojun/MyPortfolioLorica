import { useMemo, useState } from 'react'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live demos' },
  { id: 'code', label: 'Repositories' },
]

function isLiveDemo(link) {
  return !link.includes('github.com')
}

function projectAction(link) {
  return isLiveDemo(link) ? 'Visit live site' : 'View repository'
}

function ProjectCard({ project, featured = false, delay = 0 }) {
  const action = projectAction(project.link)

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card${featured ? ' project-card--featured' : ''}`}
      style={{ '--accent': project.accent, '--reveal-delay': `${delay}ms` }}
      aria-label={`${project.title} — ${action}`}
    >
      <div className="project-card__top">
        <span
          className="project-card__icon"
          style={{ background: `${project.accent}22`, color: project.accent }}
        >
          <FiExternalLink aria-hidden />
        </span>
        <span className="project-card__badge">
          {isLiveDemo(project.link) ? 'Live demo' : 'Code'}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__desc">{project.description}</p>
      <ul className="project-card__tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <span className="project-card__cta">
        {action}
        <FiArrowUpRight aria-hidden />
      </span>
    </a>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (filter === 'live') return projects.filter((p) => isLiveDemo(p.link))
    if (filter === 'code') return projects.filter((p) => !isLiveDemo(p.link))
    return projects
  }, [filter])

  const featured = filteredProjects.filter((p) => p.featured)
  const others = filteredProjects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Tap a filter to browse live demos or repositories—each card opens in a new tab."
        />

        <div className="projects__toolbar reveal" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`projects__filter${filter === item.id ? ' projects__filter--active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span className="projects__filter-count">
                {item.id === 'all'
                  ? projects.length
                  : item.id === 'live'
                    ? projects.filter((p) => isLiveDemo(p.link)).length
                    : projects.filter((p) => !isLiveDemo(p.link)).length}
              </span>
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="projects__empty reveal">No projects in this category yet.</p>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="projects__featured">
                {featured.map((project, i) => (
                  <ProjectCard key={project.title} project={project} featured delay={i * 100} />
                ))}
              </div>
            )}

            {others.length > 0 && (
              <div className="projects__grid">
                {others.map((project, i) => (
                  <ProjectCard key={project.title} project={project} delay={i * 80} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
