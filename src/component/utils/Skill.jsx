import React from "react";
import "./Skill.css";

function Skill() {
  const frontendSkill = [
    { skill: "HTML", lavel: "85%" },
    { skill: "CSS", lavel: "75%" },
    { skill: "JavaScript", lavel: "68%" },
    { skill: "ReactJS", lavel: "80%" },
    { skill: "Redux", lavel: "85%" },
    { skill: "Material UI", lavel: "50%" },
    { skill: "Chakra UI", lavel: "45%" },
    { skill: "Tailwind CSS", lavel: "30%" },
  ];
  const backendSkils = [
    { skill: "node JS", lavel: "65%" },
    { skill: "express JS", lavel: "60%" },
    { skill: "mongoose", lavel: "30%" },
    { skill: "REST APIs", lavel: "80%" },
  ];
  const dataBaseSkills = [{ skill: "mongo DB", lavel: "65%" }];
  return (
    <div className="skill_box">
      <span>SKILLS</span> <br />
      <h3>EXPERTISE</h3>
      <span style={{ color: "blue", fontSize: "0.9rem" }}>frontend </span>
      <div className="frontend_skill_box">
        {frontendSkill.map((item) => (
          <div className="skill_item_box">
            {item.skill} <span>{item.lavel}</span>
          </div>
        ))}
      </div>
      <span style={{ color: "#009688", fontSize: "0.9rem" }}>backend </span>
      <div className="backend_skill_box">
        {backendSkils.map((item) => (
          <div className="skill_item_box">
            {item.skill} <span>{item.lavel}</span>
          </div>
        ))}
      </div>
      <span style={{ color: "red", fontSize: "0.9rem" }}>database </span>
      <div className="database_skill_box">
        {dataBaseSkills.map((item) => (
          <div className="skill_item_box">
            {item.skill} <span>{item.lavel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
