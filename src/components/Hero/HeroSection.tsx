import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.name}>OLEKSANDR BABII</p>

        <h1>
          3D
          <br />
          <span>& ENVIRONMENT ARTIST</span>
        </h1>

        <p className={styles.description}>
          Game-ready environments, props and assets
          <br />
          for real-time games.
        </p>

        <a href="#work" className={styles.button}>
          VIEW MY WORK <span>↓</span>
        </a>

        <p className={styles.location}>
          Based in Poland · Available for freelance opportunities
        </p>
      </div>

      <div className={styles.visual}>
        <div className={styles.imagePlaceholder}>
          <span>YOUR 3D ARTWORK</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;