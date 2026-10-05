import styles from "./Contact.module.css";
import shared from "../../styles/shared.module.css";
import Section from "../Section/Section";
import { profile } from "../../data/portfolio";

const items = [
  ["Email", profile.email, `mailto:${profile.email}`],
  ["Phone", profile.phone, `tel:${profile.phone.replace(/-/g, "")}`],
  ["LinkedIn", "preeti-bidarageri", profile.linkedin],
  ["GitHub", "preetibidarageri", profile.github],
  ["Portfolio", "preetibidarageri.github.io", profile.portfolio],
];

export default function Contact() {
  return (
    <Section id="contact" theme={0} lead="Contact" title="Let's work together">
      <div className={styles.grid}>
        {items.map(([label, text, href]) => (
          <a
            key={label}
            href={href}
            className={`${shared.panel} ${styles.item}`}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span>{label}</span>
            <strong>{text}</strong>
          </a>
        ))}
      </div>
    </Section>
  );
}
