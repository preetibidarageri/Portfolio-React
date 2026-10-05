import styles from "./Skills.module.css";
import shared from "../../styles/shared.module.css";
import Section from "../Section/Section";
import { skills } from "../../data/portfolio";
import Reveal from "../Reveal/Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      theme={2}
      lead="Technical skills"
      title="What I work with"
    >
      <div className={styles.grid}>
        {/* Added index here to stagger the outer panels */}
        {skills.map((s, index) => (
          <div
            key={s.group}
            className={shared.panel}
            style={{ "--group-i": index }} /* <-- Pass outer index to CSS */
          >
            {" "}
            <Reveal delay={index * 0.1} className={styles.listWrapper}>
              <h3 className={styles.group}>{s.group}</h3>
              <ul className={styles.list}>
                {s.items.map((i, chipIndex) => (
                  <li
                    key={i}
                    className={shared.chip}
                    style={{
                      "--i": chipIndex,
                    }} /* <-- Keeps inner chips staggered */
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
