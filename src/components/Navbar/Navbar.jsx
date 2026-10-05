import styles from "./Navbar.module.css";
import { profile } from "../../data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <a href="#home" className={styles.logo}>
        {profile.name.split(" ")[0]}
      </a>
      <nav aria-label="Primary" className={styles.links}>
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className={styles.cta} href="/Resume.pdf" download>
        Resume
      </a>
    </header>
  );
}
