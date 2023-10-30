import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Contact from "../utils/Contact";
import Project from "../project/Project";
import Skill from "../utils/Skill";
import About from "../utils/About";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(Math.round(window.scrollY));
    });
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="all_content">
        <div className="hero" style={{ height: "100vh" }}>
          thi is the hero section
        </div>
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
