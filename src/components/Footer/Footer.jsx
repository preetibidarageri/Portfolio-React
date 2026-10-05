import styles from "./Footer.module.css";
import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
