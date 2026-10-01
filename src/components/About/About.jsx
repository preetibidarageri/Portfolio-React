import styles from './About.module.css';
import shared from '../../styles/shared.module.css';
import Section from '../Section/Section';
import { profile } from '../../data/portfolio';

export default function About() {
  return (
    <Section id="about" theme={1} lead="Career objective" title="Who I am">
      <p className={`${shared.panel} ${styles.text}`}>{profile.objective}</p>
    </Section>
  );
}
