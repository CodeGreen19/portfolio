import React from "react";
import "./Contact.css";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
function Contact() {
  return (
    <div className="contact_box">
      <span>GET IN TOUCH</span> <br />
      <h3>CONTACT</h3>
      <div className="contact_info_box">
        <div className="contact_info">
          <div>
            <span style={{ color: "tomato" }}>
              <MarkEmailUnreadIcon />
            </span>{" "}
            codegreen19s@gmail.com
          </div>
          <div>
            <span style={{ color: "blue" }}>
              <WhatsAppIcon />
            </span>{" "}
            +880 01870425052
          </div>
        </div>
        <div className="send_message_box">
          <div>
            <PersonPinRoundedIcon style={{ color: "#009688" }} />
            <input type="text" placeholder="name" className="name_input" />
          </div>
          <div>
            <MarkEmailUnreadIcon style={{ color: "blue" }} />
            <input type="text" placeholder="email" />
          </div>
          <div>
            <ArticleRoundedIcon />
            <input type="text" placeholder="subject" />
          </div>
          <div>
            <AssignmentRoundedIcon style={{ color: "purple" }} />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=" message ...."
            ></textarea>
          </div>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
