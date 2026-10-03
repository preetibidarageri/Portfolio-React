import styles from "./Section.module.css";
import { THEMES } from "../Background/Background";
import Reveal from "../Reveal/Reveal";
// Shared wrapper: anchor id, background theme index, and a two-line heading.
export default function Section({ id, theme, lead, title, children }) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`${styles.section} ${styles[THEMES[theme]]}`}
    >
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.head}>
            <p className={styles.lead}>{lead}</p>
            <h2 className={styles.title}>{title}</h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
