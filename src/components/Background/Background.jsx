import styles from "./Background.module.css";

// One colour layer per section theme; the active one fades in as you scroll.
export const THEMES = ["teal", "green", "amber", "red", "purple", "blue"];

export default function Background({ active }) {
  return (
    <div className={styles.bg} aria-hidden="true">
      {THEMES.map((t, i) => (
        <div
          key={t}
          className={`${styles.layer} ${styles[t]} ${i === active ? styles.on : ""}`}
        />
      ))}
      <svg
        className={styles.waves}
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <path
          className={styles.w1}
          d="M0 220 C240 120 420 320 720 230 S1200 120 1440 210 V420 H0Z"
        />
        <path
          className={styles.w2}
          d="M0 270 C260 190 460 340 760 280 S1220 190 1440 260 V420 H0Z"
        />
        <path
          className={styles.w3}
          d="M0 330 C300 260 520 380 820 330 S1260 270 1440 320 V420 H0Z"
        />
      </svg>
    </div>
  );
}
