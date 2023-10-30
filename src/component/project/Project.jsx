import React from "react";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import social_media from "../../image/socialmedia2.png";
import PMS from "../../image/pms.webp";
import whatsApp from "../../image/whatsapp.png";
import youtube_v2 from "../../image/socialmedia.png";
import ecommerce from "../../image/ecommerce.png";

function Project() {
  let array = [
    { image: youtube_v2, borderColor: "red" },
    { image: social_media, borderColor: "blue" },
    { image: ecommerce, borderColor: "brown" },
    { image: whatsApp, borderColor: "black" },
    { image: PMS, borderColor: "purple" },
  ];
  return (
    <div className="projects_main_box">
      <span>MY WORKS</span> <br />
      <h3>RECENT PROJECTS</h3>
      <div className="projects_box">
        {array.map((item) => (
          <div
            className="projects_show_box"
            // style={{ borderBottom: `4px solid ${item.borderColor}` }}
          >
            <div className="image_box">
              {/* <img src="" alt="social_media" /> */}
            </div>
            <button>
              <GitHubIcon /> github
            </button>
            <button>
              <VideoLibraryRoundedIcon /> live demo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
