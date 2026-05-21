import { certifications, education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          label="Education & certs"
          title="Learning never stops"
        />

        <div className="edu__grid">
          <div className="edu__column">
            <h3 className="edu__column-title">Education</h3>
            {education.map((item, i) => (
              <article
                key={item.school}
                className="edu__card reveal"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <time>{item.period}</time>
                <h4>{item.degree}</h4>
                <p className="edu__school">{item.school}</p>
                {item.highlight && <p className="edu__highlight">{item.highlight}</p>}
              </article>
            ))}
          </div>

          <div className="edu__column">
            <h3 className="edu__column-title">Certifications & training</h3>
            {certifications.map((group, i) => (
              <article
                key={group.provider}
                className="cert__card reveal"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <h4>{group.provider}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
