import { Link, useParams } from "react-router-dom";

import styles from "./ProjectDetails.module.scss";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;

  heroImage: string;

  role: string;
  software: string;
  engine: string;
  platform: string;

  environment: string;
  assets: string;
  materials: string;

  myRole: string;

  workflow: string[];

  technicalDetails: {
    label: string;
    value: string;
  }[];

  gallery: string[];

  process: {
    title: string;
    description: string;
    image?: string;
  }[];
};

const projects: Project[] = [
  {
    id: 1,

    title: "RURAL ENVIRONMENT",

    category: "Environment Art · 3D Modeling · Unity",

    description:
      "A realistic Eastern European rural environment created with a focus on believable architecture, natural materials and game-ready assets.",

    heroImage: "/images/project-rural.jpg",

    role: "3D Environment Artist",

    software: "Blender",

    engine: "Unity",

    platform: "PC",

    environment: "Rural / Eastern European",

    assets: "Buildings · Props · Environment",

    materials: "PBR",

    myRole:
      "I was responsible for creating the 3D environment and supporting assets, including architectural elements, props and materials. The main goal was to create a believable rural location while keeping the assets optimized for real-time rendering.",

    workflow: [
      "Reference gathering",
      "Blockout",
      "3D Modeling",
      "UV Unwrapping",
      "Materials",
      "Optimization",
      "Unity Integration",
      "Lighting & Composition",
    ],

    technicalDetails: [
      {
        label: "ENGINE",
        value: "Unity",
      },
      {
        label: "SOFTWARE",
        value: "Blender",
      },
      {
        label: "ASSET TYPE",
        value: "Environment",
      },
      {
        label: "STYLE",
        value: "Realistic",
      },
      {
        label: "MATERIALS",
        value: "PBR",
      },
      {
        label: "OPTIMIZATION",
        value: "Game-ready",
      },
    ],

    gallery: [
      "/images/project-rural-01.jpg",
      "/images/project-rural-02.jpg",
      "/images/project-rural-03.jpg",
      "/images/project-rural-04.jpg",
    ],

    process: [
      {
        title: "REFERENCE & BLOCKOUT",

        description:
          "The environment started with reference gathering and a simple blockout. The focus was on establishing the correct proportions, scale and overall composition before adding detail.",

        image: "/images/project-rural-process-01.jpg",
      },

      {
        title: "MODELING",

        description:
          "The main architectural elements were modeled with a modular approach. Simple and reusable geometry was prioritized to keep the assets suitable for real-time applications.",

        image: "/images/project-rural-process-02.jpg",
      },

      {
        title: "MATERIALS",

        description:
          "Materials were created with a focus on believable surface variation. Small imperfections and differences in roughness help avoid an overly clean or procedural appearance.",

        image: "/images/project-rural-process-03.jpg",
      },

      {
        title: "UNITY INTEGRATION",

        description:
          "The finished assets were imported into Unity and arranged into the final environment. Attention was given to composition, lighting and performance.",

        image: "/images/project-rural-process-04.jpg",
      },
    ],
  },

  {
    id: 2,

    title: "ENVIRONMENT & PROPS",

    category: "Environment Art · Props · Unreal Engine",

    description:
      "A collection of game-ready environmental assets and props designed for use in a realistic real-time environment.",

    heroImage: "/images/project-props.jpg",

    role: "3D Environment Artist",

    software: "Blender",

    engine: "Unreal Engine",

    platform: "PC",

    environment: "Real-time Environment",

    assets: "Props · Environment Assets",

    materials: "PBR",

    myRole:
      "I created a collection of optimized props and environment assets designed to work together as a coherent visual set. The assets were prepared for real-time rendering and integrated into Unreal Engine.",

    workflow: [
      "Reference Gathering",
      "Blockout",
      "3D Modeling",
      "UV Unwrapping",
      "PBR Materials",
      "Optimization",
      "Unreal Integration",
      "Lighting",
    ],

    technicalDetails: [
      {
        label: "ENGINE",
        value: "Unreal Engine",
      },
      {
        label: "SOFTWARE",
        value: "Blender",
      },
      {
        label: "ASSET TYPE",
        value: "Environment Props",
      },
      {
        label: "STYLE",
        value: "Realistic",
      },
      {
        label: "MATERIALS",
        value: "PBR",
      },
      {
        label: "PIPELINE",
        value: "Game-ready",
      },
    ],

    gallery: [
      "/images/project-props-01.jpg",
      "/images/project-props-02.jpg",
      "/images/project-props-03.jpg",
      "/images/project-props-04.jpg",
    ],

    process: [
      {
        title: "REFERENCE",

        description:
          "Real-world references were used to establish believable proportions, construction details and material characteristics.",

        image: "/images/project-props-process-01.jpg",
      },

      {
        title: "MODELING",

        description:
          "Assets were modeled with clean topology and a focus on efficient geometry suitable for real-time rendering.",

        image: "/images/project-props-process-02.jpg",
      },

      {
        title: "MATERIALS",

        description:
          "PBR materials were used to create consistent surface response across the asset collection.",

        image: "/images/project-props-process-03.jpg",
      },

      {
        title: "UNREAL ENGINE",

        description:
          "The finished assets were imported into Unreal Engine and prepared for use in a real-time environment.",

        image: "/images/project-props-process-04.jpg",
      },
    ],
  },

  {
    id: 3,

    title: "GAME JAM PROJECT",

    category: "Environment Art · Game Design · Unity",

    description:
      "A complete game environment created during a game jam, combining environment design, 3D assets and real-time implementation.",

    heroImage: "/images/project-gamejam.jpg",

    role: "Game Designer · 3D Artist",

    software: "Blender",

    engine: "Unity",

    platform: "PC",

    environment: "Game Environment",

    assets: "Environment · Props",

    materials: "PBR / Stylized",

    myRole:
      "I worked on the environment design, 3D assets and implementation of the environment inside Unity.",

    workflow: [
      "Concept",
      "Blockout",
      "Environment Design",
      "Modeling",
      "Materials",
      "Unity Integration",
      "Lighting",
    ],

    technicalDetails: [
      {
        label: "ENGINE",
        value: "Unity",
      },
      {
        label: "SOFTWARE",
        value: "Blender",
      },
      {
        label: "PROJECT TYPE",
        value: "Game Jam",
      },
      {
        label: "ROLE",
        value: "3D Artist",
      },
      {
        label: "STYLE",
        value: "Game-ready",
      },
      {
        label: "PLATFORM",
        value: "PC",
      },
    ],

    gallery: [
      "/images/project-gamejam-01.jpg",
      "/images/project-gamejam-02.jpg",
      "/images/project-gamejam-03.jpg",
      "/images/project-gamejam-04.jpg",
    ],

    process: [
      {
        title: "CONCEPT",

        description:
          "The environment concept was developed around the gameplay requirements and the limited production time of a game jam.",

        image: "/images/project-gamejam-process-01.jpg",
      },

      {
        title: "BLOCKOUT",

        description:
          "The initial blockout was used to establish the playable space, scale and composition before detailed modeling.",

        image: "/images/project-gamejam-process-02.jpg",
      },

      {
        title: "ASSET CREATION",

        description:
          "Environment assets were created with the goal of balancing visual quality and production speed.",

        image: "/images/project-gamejam-process-03.jpg",
      },

      {
        title: "UNITY SCENE",

        description:
          "The final assets were assembled in Unity with lighting and composition adjusted for the final gameplay experience.",

        image: "/images/project-gamejam-process-04.jpg",
      },
    ],
  },

  {
    id: 4,

    title: "3D ASSET COLLECTION",

    category: "3D Modeling · Environment Art · Unity / Unreal",

    description:
      "A collection of optimized 3D assets created for real-time applications, with a focus on clean topology, reusable materials and efficient geometry.",

    heroImage: "/images/project-assets.jpg",

    role: "3D Artist",

    software: "Blender",

    engine: "Unity / Unreal Engine",

    platform: "PC",

    environment: "Environment Assets",

    assets: "Props · Modular Assets",

    materials: "PBR",

    myRole:
      "I focused on modeling, UVs, materials and optimization of a collection of game-ready assets. The assets were designed to be flexible enough for use across different real-time engines.",

    workflow: [
      "Reference",
      "Blockout",
      "Modeling",
      "Retopology",
      "UV Unwrapping",
      "Materials",
      "Optimization",
      "Engine Export",
    ],

    technicalDetails: [
      {
        label: "ENGINES",
        value: "Unity / Unreal Engine",
      },
      {
        label: "SOFTWARE",
        value: "Blender",
      },
      {
        label: "ASSET TYPE",
        value: "Environment Props",
      },
      {
        label: "MATERIALS",
        value: "PBR",
      },
      {
        label: "TOPOLOGY",
        value: "Optimized",
      },
      {
        label: "PIPELINE",
        value: "Game-ready",
      },
    ],

    gallery: [
      "/images/project-assets-01.jpg",
      "/images/project-assets-02.jpg",
      "/images/project-assets-03.jpg",
      "/images/project-assets-04.jpg",
    ],

    process: [
      {
        title: "REFERENCE & BLOCKOUT",

        description:
          "The assets were planned from real-world references with attention to proportions, construction and modularity.",

        image: "/images/project-assets-process-01.jpg",
      },

      {
        title: "MODELING",

        description:
          "The assets were modeled with clean topology and efficient geometry suitable for real-time rendering.",

        image: "/images/project-assets-process-02.jpg",
      },

      {
        title: "UV & MATERIALS",

        description:
          "UV layouts and PBR materials were prepared to create consistent and reusable assets.",

        image: "/images/project-assets-process-03.jpg",
      },

      {
        title: "REAL-TIME IMPLEMENTATION",

        description:
          "The final assets were exported and prepared for use in Unity and Unreal Engine environments.",

        image: "/images/project-assets-process-04.jpg",
      },
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();

  const projectId = Number(id);

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className={styles.projectDetails}>
        <div className={styles.container}>
          <p className={styles.label}>PROJECT NOT FOUND</p>

          <h1 className={styles.title}>
            THIS PROJECT
            <br />
            DOES NOT EXIST.
          </h1>

          <Link to="/" className={styles.back}>
            ← BACK TO PORTFOLIO
          </Link>
        </div>
      </main>
    );
  }

  const nextProjectId =
    projectId === projects.length ? projects[0].id : projectId + 1;

  const nextProject = projects.find((item) => item.id === nextProjectId);

  return (
    <main className={styles.projectDetails}>
      <div className={styles.container}>
        {/* BACK */}

        <Link to="/#work" className={styles.back}>
          ← BACK TO SELECTED WORK
        </Link>

        {/* HEADER */}

        <header className={styles.header}>
          <div>
            <p className={styles.label}>
              {String(project.id).padStart(2, "0")} — PROJECT
            </p>
          </div>

          <div>
            <h1 className={styles.title}>{project.title}</h1>

            <p className={styles.category}>{project.category}</p>
          </div>
        </header>

        {/* HERO IMAGE */}

        <div className={styles.heroImage}>
          <img src={project.heroImage} alt={project.title} />
        </div>

        {/* PROJECT OVERVIEW */}

        <section className={styles.info}>
          <div>
            <p className={styles.infoLabel}>PROJECT OVERVIEW</p>
          </div>

          <p className={styles.description}>{project.description}</p>
        </section>

        {/* PROJECT DETAILS */}

        <section className={styles.details}>
          <div className={styles.detail}>
            <p className={styles.detailLabel}>ROLE</p>

            <p className={styles.detailValue}>{project.role}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailLabel}>SOFTWARE</p>

            <p className={styles.detailValue}>{project.software}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailLabel}>ENGINE</p>

            <p className={styles.detailValue}>{project.engine}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailLabel}>ENVIRONMENT</p>

            <p className={styles.detailValue}>{project.environment}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailLabel}>ASSETS</p>

            <p className={styles.detailValue}>{project.assets}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailLabel}>MATERIALS</p>

            <p className={styles.detailValue}>{project.materials}</p>
          </div>
        </section>

        {/* MY ROLE */}

        <section className={styles.info}>
          <div>
            <p className={styles.infoLabel}>MY ROLE</p>
          </div>

          <p className={styles.description}>{project.myRole}</p>
        </section>

        {/* WORKFLOW */}

        <section className={styles.process}>
          <div>
            <p className={styles.infoLabel}>WORKFLOW</p>
          </div>

          <div className={styles.processContent}>
            <h2 className={styles.processTitle}>
              FROM BLOCKOUT
              <br />
              TO GAME-READY.
            </h2>

            <div className={styles.workflow}>
              {project.workflow.map((step, index) => (
                <span key={step}>
                  {String(index + 1).padStart(2, "0")} — {step}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL DETAILS */}

        <section className={styles.details}>
          {project.technicalDetails.map((detail) => (
            <div className={styles.detail} key={detail.label}>
              <p className={styles.detailLabel}>{detail.label}</p>

              <p className={styles.detailValue}>{detail.value}</p>
            </div>
          ))}
        </section>

        {/* GALLERY */}

        <section className={styles.gallery}>
          {project.gallery.map((image, index) => (
            <div className={styles.galleryItem} key={image}>
              <img src={image} alt={`${project.title} — image ${index + 1}`} />
            </div>
          ))}
        </section>

        {/* PROCESS BREAKDOWN */}

        {project.process.map((step, index) => (
          <section className={styles.process} key={step.title}>
            <div>
              <p className={styles.infoLabel}>
                {String(index + 1).padStart(2, "0")} — PROCESS
              </p>
            </div>

            <div className={styles.processContent}>
              <h2 className={styles.processTitle}>{step.title}</h2>

              <p className={styles.processText}>{step.description}</p>

              {step.image && (
                <div className={styles.galleryItem}>
                  <img src={step.image} alt={step.title} />
                </div>
              )}
            </div>
          </section>
        ))}

        {/* PROJECT NAVIGATION */}

        <nav className={styles.navigation}>
          <Link to="/#work" className={styles.navigationLink}>
            ← ALL PROJECTS
          </Link>

          {nextProject && (
            <Link
              to={`/projects/${nextProject.id}`}
              className={`${styles.navigationLink} ${styles.next}`}
            >
              NEXT PROJECT →
              <br />
              {nextProject.title}
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
};

export default ProjectDetails;
