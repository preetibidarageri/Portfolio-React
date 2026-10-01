import styles from './Experience.module.css';
import shared from '../../styles/shared.module.css';
import Section from '../Section/Section';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <Section id="experience" theme={3} lead="Internship experience" title="Where I've worked">
      <div className={styles.stack}>
        {experience.map((e) => (
          <article key={e.company} className={shared.panel}>
            <h3 className={styles.role}>{e.role}</h3>
            <p className={styles.meta}>{e.company}{e.period && ` | ${e.period}`}</p>
            <ul className={styles.points}>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
