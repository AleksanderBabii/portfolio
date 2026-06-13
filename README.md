# Permalist Project

A simple and efficient task management application built with **Node.js**, **Express.js**, and **EJS**. The application allows users to create, view, and manage tasks through a clean and intuitive interface.

---

## Overview

Permalist is a lightweight web application designed to help users organize daily tasks and maintain productivity. The project demonstrates server-side rendering using EJS templates, Express routing, and modular project organization.

The application follows a structured MVC-inspired architecture, separating views, assets, and application logic for maintainability and scalability.

---

## Features

* Create and manage tasks
* Dynamic page rendering with EJS
* Reusable layout components using partials
* Responsive user interface
* Organized static assets
* Clean and maintainable code structure

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Frontend

* HTML5
* CSS3
* EJS Templates

### Development Tools

* npm
* Git
* GitHub

---

## Project Structure

```text
Permalist_Project/
│
├── public/
│   ├── assets/
│   │   └── icons/
│   │       ├── check-solid.svg
│   │       └── pencil-solid.svg
│   │
│   └── styles/
│       └── main.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   └── index.ejs
│
├── index.js
├── solution.js
├── queries.sql
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd Permalist_Project
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
node index.js
```

or

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Application Components

### Views

The application uses EJS templates for rendering dynamic content.

| File       | Purpose               |
| ---------- | --------------------- |
| index.ejs  | Main application view |
| header.ejs | Reusable page header  |
| footer.ejs | Reusable page footer  |

### Assets

Custom styling and icons are stored within the `public` directory and served as static files.

---

## Database

The project includes a SQL file:

```text
queries.sql
```

This file contains database queries used by the application and can be used to initialize or manage the required database structure.

---

## Learning Objectives

This project was created to practice:

* Express.js fundamentals
* Server-side rendering with EJS
* Template partials and reusable layouts
* Routing and middleware
* Static file serving
* SQL database integration
* Full-stack application structure

---

## Future Improvements

* User authentication
* Task categories
* Task deadlines and reminders
* Task completion tracking
* Database optimization
* Search and filtering functionality
* REST API support

---

## Author

**Aleksander Babii**

GitHub: https://github.com/AleksanderBabii

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and learn from this project.
