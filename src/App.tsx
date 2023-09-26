import React, { useState } from "react";
import "./App.css";
import Biography from "./components/Biography";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Navigation from "./components/Navigation";

function App() {
  // Create state variables to manage section visibility
  const [showBiography, setShowBiography] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  // Function to toggle section visibility
  const toggleSection = ({ section }: { section: any }) => {
    setShowBiography(section === "biography");
    setShowProjects(section === "projects");
  };

  return (
    <div>
      <Background />
      <Navigation />
      <div className="buttons">
        <a href="#" onClick={() => toggleSection({ section: "biography" })}>
          About
        </a>
        <a href="#" onClick={() => toggleSection({ section: "projects" })}>
          Projects
        </a>
      </div>
      {/* Conditional rendering of sections based on state */}
      {showBiography && <Biography />}
      {showProjects && <Projects />}
    </div>
  );
}

export default App;
