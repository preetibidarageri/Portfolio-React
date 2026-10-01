import styles from './Education.module.css';
import shared from '../../styles/shared.module.css';
import Section from '../Section/Section';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <Section id="education" theme={5} lead="Education" title="Where I studied">
      <ol className={styles.timeline}>
        {education.map((e) => (
          <li key={e.degree} className={`${shared.panel} ${styles.item}`}>
            <div>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>{e.school}</p>
            </div>
            <div className={styles.right}>
              <strong>{e.score}</strong>
              <span>{e.period}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
