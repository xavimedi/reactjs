import React, { useEffect } from "react";
import "./App.css";
import Biography from "./components/Biography";
import Navigation from "./components/Navigation";
import Background from "./components/Background";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Background />
      <Navigation />
      <Biography />
      <Projects />
    </>
  );
}

export default App;
