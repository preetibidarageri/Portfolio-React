import styles from "./Projects.module.css";
import shared from "../../styles/shared.module.css";

export default function ProjectCard({
  title,
  subtitle,
  tech,
  points,
  demo,
  code,
}) {
  return (
    <article className={`${shared.panel} ${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.sub}>{subtitle}</p>
      <ul className={styles.points}>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ul className={styles.tech}>
        {tech.map((t) => (
          <li key={t} className={shared.chip}>
            {t}
          </li>
        ))}
      </ul>
      {(demo || code) && (
        <div className={styles.actions}>
          {demo && (
            <a
              className={styles.demo}
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}
          {code && (
            <a
              className={styles.code}
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
