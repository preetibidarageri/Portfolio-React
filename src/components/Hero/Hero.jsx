import styles from "./Hero.module.css";
import shared from "../../styles/shared.module.css";
import { profile } from "../../data/portfolio";
import Reveal from "../Reveal/Reveal";

export default function Hero() {
  return (
    <section id="home" data-theme="0" className={styles.hero}>
      <div className={styles.text}>
        <Reveal delay={0}>
          <p className={styles.hi}>Hi, I'm</p>
        </Reveal>
        <Reveal delay={200}>
          {" "}
          <h1 className={styles.name}>{profile.name}</h1>
        </Reveal>
        <Reveal delay={400}>
          {" "}
          <p className={styles.role}>{profile.role}</p>
        </Reveal>
        <div className={styles.actions}>
          <a className={styles.primary} href="#projects">
            View projects
          </a>
          <a className={styles.ghost} href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <aside className={`${shared.panel} ${styles.card}`}>
        {profile.facts.map(([k, v]) => (
          <div key={k} className={styles.fact}>
            <span>{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
      </aside>
    </section>
  );
}
