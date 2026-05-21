import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technical foundation"
          description="Core competencies across the stack, with room to grow in cloud and security."
        />

        <div className="skills__grid">
          {skills.map((group, i) => (
            <article
              key={group.category}
              className="skills__card reveal"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skills__dot" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
