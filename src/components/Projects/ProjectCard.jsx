import styles from './Projects.module.css';
import shared from '../../styles/shared.module.css';

export default function ProjectCard({ title, subtitle, tech, points }) {
  return (
    <article className={`${shared.panel} ${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.sub}>{subtitle}</p>
      <ul className={styles.points}>{points.map((p) => <li key={p}>{p}</li>)}</ul>
      <ul className={styles.tech}>{tech.map((t) => <li key={t} className={shared.chip}>{t}</li>)}</ul>
    </article>
  );
}
