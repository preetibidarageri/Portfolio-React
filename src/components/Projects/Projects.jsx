import styles from "./Projects.module.css";
import Section from "../Section/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" theme={4} lead="Projects" title="Things I've built">
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
