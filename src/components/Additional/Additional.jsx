import styles from './Additional.module.css';
import shared from '../../styles/shared.module.css';
import Section from '../Section/Section';
import { additional } from '../../data/portfolio';

export default function Additional() {
  return (
    <Section id="additional" theme={0} lead="Additional development" title="Also hands-on with">
      <ul className={styles.list}>
        {additional.map((a) => <li key={a} className={shared.chip}>{a}</li>)}
      </ul>
    </Section>
  );
}
