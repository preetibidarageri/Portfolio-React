import styles from './Skills.module.css';
import shared from '../../styles/shared.module.css';
import Section from '../Section/Section';
import { skills } from '../../data/portfolio';

export default function Skills() {
  return (
    <Section id="skills" theme={2} lead="Technical skills" title="What I work with">
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.group} className={shared.panel}>
            <h3 className={styles.group}>{s.group}</h3>
            <ul className={styles.list}>
              {s.items.map((i) => <li key={i} className={shared.chip}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
