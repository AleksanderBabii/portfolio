import styles from "./About.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.header}>
        <p className={styles.label}>04 — ABOUT ME</p>

        <h2>
          ABOUT
          <br />
          <span>ME</span>
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.lead}>
            I'm Aleksander, a 3D Artist focused on environment art and
            game-ready assets.
          </p>

          <p>
            With a background in Game Design and experience with Unity and Unreal Engine, I enjoy creating realistic environments, props, and spaces for real-time games.
          </p>

          <p>
            I combine artistic and technical skills to create assets that not only look good but are also optimized to perform efficiently in a game engine.
          </p>
        </div>

        <div className={styles.focus}>
          <p className={styles.focusLabel}>WHAT I ENJOY CREATING</p>

          <ul>
            <li>Environment Assets</li>
            <li>Props</li>
            <li>Buildings</li>
            <li>Rural & Urban Environments</li>
            <li>Game-ready Assets</li>
            <li>Real-time Scenes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
