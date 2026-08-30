import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.tsx";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Project Details */}
        <Route path="/projects/:id" element={<ProjectDetails />} />

        {/* Redirects */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="/projects"
          element={<Navigate to="/" replace />}
        />

        <Route
          path="/about-me"
          element={<Navigate to="/#about" replace />}
        />

        <Route
          path="/contact-me"
          element={<Navigate to="/#contact" replace />}
        />

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
