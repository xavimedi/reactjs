import React, { useState } from "react";
import "./App.css";
import Biography from "./components/Biography";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Navigation from "./components/Navigation";

function App() {
  const [showBiography, setShowBiography] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

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
      {showBiography && <Biography />}
      {showProjects && <Projects />}
    </div>
  );
}

export default App;
