import styles from "../TechSkills/TechSkills.module.scss";
const technicalGroups = [
  {
    number: "01",
    title: "GAME DEVELOPMENT",
    skills: ["Unity", "C#", "Game Development", "Real-time Rendering"],
  },
  {
    number: "02",
    title: "3D TOOLS",
    skills: ["Blender", "Unity", "Photoshop"],
  },
  {
    number: "03",
    title: "WEB DEVELOPMENT",
    skills: ["React", "TypeScript", "JavaScript", "Git / GitHub"],
  },
];
const TechnicalSkills = () => {
  return (
    <section className={styles.technical} id="technical">
      {" "}
      <div className={styles.header}>
        {" "}
        <p className={styles.label}>06 — TECHNICAL SKILLS</p>{" "}
        <h2>
          {" "}
          ART <br /> <span>& TECHNOLOGY</span>{" "}
        </h2>{" "}
        <p className={styles.intro}>
          {" "}
          Combining creative and technical skills to build assets and
          environments for real-time applications.{" "}
        </p>{" "}
      </div>{" "}
      <div className={styles.content}>
        {" "}
        <div className={styles.groups}>
          {" "}
          {technicalGroups.map((group) => (
            <article className={styles.group} key={group.number}>
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
        <div className={styles.statement}>
          {" "}
          <p className={styles.statementLabel}>ART × TECHNOLOGY</p>{" "}
          <p className={styles.statementText}>
            {" "}
            My background in both 3D art and software development allows me to
            understand the complete workflow from creating an asset to
            implementing it inside a real-time application.{" "}
          </p>{" "}
          <div className={styles.workflow}>
            {" "}
            <span>3D MODELING</span> <span>→</span> <span>OPTIMIZATION</span>{" "}
            <span>→</span> <span>UNITY</span> <span>→</span>{" "}
            <span>IMPLEMENTATION</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default TechnicalSkills;
