import React from "react";
import "./Contact.css";
// IMAGES
import bottomLeft from "../../../assets/img/main-bottom-left.png";
import topRight from "../../../assets/img/main-top-right.png";
import logo from "../../../assets/img/logo/123structure-logo-dark.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faDesktop,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ printRef, theme, projectName }) => {
  return (
    <div
      className="contact-card"
      ref={(e) => (printRef.current[3] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.main,
        color: theme.color.dark,
        padding: "16px",
      }}
    >
      <img
        className="bl-contact-card"
        src={bottomLeft}
        alt="bottom-left"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <img
        className="tr-contact-card"
        src={topRight}
        alt="top-right"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <h5
        className="zone-title"
        style={{
          color: theme.color.dark,
          background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
          backdropFilter: "blur(4px)", // This be the blur
          borderRadius: "8px",
          padding: "16px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon icon={faHouseChimney} />
        {projectName ? " " + projectName : " Nom du projet"}
      </h5>
      <div className="Card-content">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50%",
            marginTop: "128px",
          }}
        />

        <h1>
          <FontAwesomeIcon icon={faEnvelope} /> contact@123structure.fr
        </h1>
        <h1>
          <FontAwesomeIcon icon={faPhone} /> 02.28.00.31.95
        </h1>
        <h1>
          <FontAwesomeIcon icon={faDesktop} /> 123structure.fr
        </h1>
      </div>
    </div>
  );
};

export default Contact;
