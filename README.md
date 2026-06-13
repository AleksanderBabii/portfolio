# Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **SCSS** to showcase my projects, technical skills, and professional journey as a developer.

🌐 **Live Website:**
https://aleksanderbabii.github.io/portfolio/

---

## About

This portfolio serves as a central place to present my work, experience, and technical abilities. The application is designed with a component-based architecture, making it scalable, maintainable, and easy to extend as new projects are added.

The website includes dedicated sections for:

* Home
* About Me
* Projects
* Contact Information

---

## Features

* Responsive design for all screen sizes
* Single Page Application (SPA)
* Project showcase powered by JSON data
* Reusable React components
* Modular SCSS styling architecture
* Smooth navigation between sections
* Optimized build process using Vite
* GitHub Pages deployment

---

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* SCSS

### Tooling

* Vite
* npm
* Git
* GitHub Pages

---

## Project Structure

```text id="plte0x"
portfolio/
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   │
│   ├── data/
│   │   └── projects.json
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _animations.scss
│   │   ├── _globals.scss
│   │   └── main.scss
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── dist/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Component Architecture

### Reusable Components

| Component   | Purpose                                   |
| ----------- | ----------------------------------------- |
| Navbar      | Main site navigation                      |
| HeroSection | Landing section introducing the portfolio |
| ProjectCard | Displays project information dynamically  |
| Footer      | Site footer and additional links          |

### Pages

| Page     | Description                              |
| -------- | ---------------------------------------- |
| Home     | Landing page                             |
| About    | Personal background and skills           |
| Projects | Portfolio project showcase               |
| Contact  | Contact information and networking links |

---

## Getting Started

### Clone the Repository

```bash id="n2xg0z"
git clone https://github.com/AleksanderBabii/portfolio.git
```

### Navigate to the Project

```bash id="t7kg22"
cd portfolio
```

### Install Dependencies

```bash id="mjlwmx"
npm install
```

### Start Development Server

```bash id="jlwm58"
npm run dev
```

Open your browser and visit:

```text id="jlwm59"
http://localhost:5173
```

---

## Build for Production

Create an optimized production build:

```bash id="jlwm60"
npm run build
```

Preview the production version:

```bash id="jlwm61"
npm run preview
```

---

## Managing Projects

Projects are stored in:

```text id="jlwm62"
src/data/projects.json
```

Adding a new project only requires updating the JSON file, making the portfolio easy to maintain and scale.

---

## Styling Architecture

The project uses a modular SCSS structure:

* Global styles
* Variables
* Mixins
* Animations
* Page-specific styles
* Component-specific styles

This approach improves maintainability and encourages reusable design patterns.

---

## Future Improvements

* Dark mode support
* Enhanced animations
* Project filtering and search
* Blog section
* Contact form integration
* Accessibility improvements
* Internationalization support

---

## Lessons Learned

This project helped strengthen my understanding of:

* React component architecture
* Data-driven UI development
* SCSS organization and scalability
* Responsive web design
* Vite build tooling
* GitHub Pages deployment
* Frontend project structure best practices

---

## Author

**Aleksander Babii**

GitHub: https://github.com/AleksanderBabii

Portfolio: https://aleksanderbabii.github.io/portfolio/

LinkedIn: www.linkedin.com/in/aleksanderanczypoliwski

---

## License

This project is open-source and available under the MIT License.

```

⭐ If you found this project interesting, consider starring the repository.
```
