import React, { useState } from "react";
import "./App.css";
import Biography from "./components/Biography";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
// import Other from "./components/Other";

function App() {
  const [showBiography, setShowBiography] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  // const [showOther, setShowOther] = useState(false);

  const toggleSection = ({ section }: { section: any }) => {
    setShowBiography(section === "biography");
    setShowProjects(section === "projects");

    // setShowOther(section === "other");
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
        {/*<a href="#" onClick={() => toggleSection({ section: "other" })}>*/}
        {/*  Other*/}
        {/*</a>*/}
      </div>
      {showBiography && <Biography />}
      {showProjects && <Projects />}
    </div>
  );
}

export default App;
