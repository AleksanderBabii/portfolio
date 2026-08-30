import { Link } from "react-router-dom";
import styles from "./SelectedWork.module.scss";

const projects = [
  {
    id: "rural",
    number: "01",
    title: "RURAL ENVIRONMENT",
    category: "Environment Art · 3D Modeling · Unity",
    description:
      "A realistic Eastern European rural environment created for a game project.",
    image: "/images/project-rural.jpg",
  },
  {
    id: "props",
    number: "02",
    title: "ENVIRONMENT & PROPS",
    category: "3D Modeling · Blender · Unity",
    description:
      "A collection of game-ready environmental assets and props created for real-time applications.",
    image: "/images/project-props.jpg",
  },
  {
    id: "gamejam",
    number: "03",
    title: "GAME JAM PROJECT",
    category: "Environment Art · Game Design · Unity",
    description:
      "A complete game environment created as part of a game jam project.",
    image: "/images/project-gamejam.jpg",
  },
  {
    id: "assets",
    number: "04",
    title: "3D ASSET COLLECTION",
    category: "3D Modeling · Materials · Optimization",
    description:
      "A collection of optimized 3D assets designed for use in real-time games.",
    image: "/images/project-assets.jpg",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.header}>
        <p className={styles.label}>02 — SELECTED WORK</p>

        <h2>
          SELECTED
          <br />
          <span>WORK</span>
        </h2>

        <p className={styles.intro}>
          A selection of my 3D environments, props and game-ready assets.
        </p>
      </div>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`${styles.project} ${
              index === 0 ? styles.featured : ""
            }`}
          >
            <Link
              to={`/projects/${project.id}`}
              className={styles.imageWrapper}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />

              <div className={styles.overlay}>
                <span>VIEW PROJECT →</span>
              </div>
            </Link>

            <div className={styles.info}>
              <div>
                <p className={styles.projectNumber}>{project.number}</p>

                <h3>{project.title}</h3>

                <p className={styles.category}>{project.category}</p>
              </div>

              <p className={styles.description}>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
