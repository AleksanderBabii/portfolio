import styles from "../Art/ArtSkills.module.scss";

const skillGroups = [
  {
    number: "01",
    title: "MODELING",
    skills: [
      "Hard Surface Modeling",
      "Environment Modeling",
      "Props",
      "Architectural Assets",
    ],
  },
  {
    number: "02",
    title: "ENVIRONMENT ART",
    skills: [
      "Scene Composition",
      "Set Dressing",
      "Modular Assets",
      "Environmental Storytelling",
    ],
  },
  {
    number: "03",
    title: "MATERIALS & TEXTURES",
    skills: [
      "UV Mapping",
      "PBR Materials",
      "Basic Texturing",
      "Material Setup",
    ],
  },
  {
    number: "04",
    title: "REAL-TIME",
    skills: [
      "Game-ready Assets",
      "Optimization",
      "LOD",
      "Colliders",
      "Prefab Setup",
    ],
  },
];

const ArtSkills = () => {
  return (
    <section className={styles.skills} id="art-skills">
      {" "}
      <div className={styles.header}>
        {" "}
        <p className={styles.label}>05 — 3D SKILLS</p>{" "}
        <h2>
          {" "}
          3D <br /> <span>SKILLS</span>{" "}
        </h2>{" "}
        <p className={styles.intro}>
          {" "}
          Skills and techniques I use to create environments and assets for
          real-time applications.{" "}
        </p>{" "}
      </div>{" "}
      <div className={styles.skillList}>
        {" "}
        {skillGroups.map((group) => (
          <article className={styles.skillGroup} key={group.number}>
            {" "}
            <span className={styles.number}>{group.number}</span>{" "}
            <h3>{group.title}</h3>{" "}
            <ul>
              {" "}
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}{" "}
            </ul>{" "}
          </article>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default ArtSkills;