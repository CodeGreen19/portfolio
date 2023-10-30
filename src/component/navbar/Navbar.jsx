import React from "react";
import "./Navbar.css";
import profile from "../../image/cap wearing.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="profile_box">
        <div className="profile_picture_box">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <h3>
        Code<span style={{ color: "#ff1c00" }}>G</span>reen
      </h3>
      <p>full stack developer</p>
      <p>
        specialized in{" "}
        <span
          style={{ color: "black", letterSpacing: "3px", fontWeight: "bolder" }}
        >
          MERN
        </span>{" "}
      </p>
      <ul className="navigate_items_ul">
        <li>Home</li>
        <li>About</li>
        <li>Expertise</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="copyright_text">copyright @2023 by codeGreen</div>
    </div>
  );
}

export default Navbar;
