import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      {" "}
      <div className={styles.header}>
        {" "}
        <p className={styles.label}>07 — CONTACT</p>{" "}
        <h2>
          {" "}
          LET'S BUILD <br /> <span>SOMETHING.</span>{" "}
        </h2>{" "}
      </div>{" "}
      <div className={styles.content}>
        {" "}
        <p className={styles.description}>
          {" "}
          I'm currently available for freelance projects, collaborations and
          junior 3D / Environment Art opportunities.{" "}
        </p>{" "}
        <p className={styles.description}>
          {" "}
          If you're looking for someone who can create game-ready environments
          and assets for Unity, I'd be happy to hear about your project.{" "}
        </p>{" "}
        <div className={styles.links}>
          {" "}
          <a href="mailto:your@email.com" className={styles.link}>
            {" "}
            <span>EMAIL</span> <strong>your@email.com</strong>{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {" "}
            <span>LINKEDIN</span> <strong>linkedin.com</strong>{" "}
          </a>{" "}
          <a
            href="https://www.artstation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {" "}
            <span>ARTSTATION</span> <strong>artstation.com</strong>{" "}
          </a>{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {" "}
            <span>GITHUB</span> <strong>github.com</strong>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <footer className={styles.footer}>
        {" "}
        <span>© 2026 Oleksandr Babii</span>{" "}
        <span>3D Artist · Environment Artist · Game Developer</span>{" "}
      </footer>{" "}
    </section>
  );
};

export default Contact;
