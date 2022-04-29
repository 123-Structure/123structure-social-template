import React from "react";
// IMAGES
import bottomLeft from "../../assets/img/decorators/main-bottom-left.png";
import topRight from "../../assets/img/decorators/main-top-right.png";
import logo from "../../assets/img/logo/123structure-logo-dark.png";
import france from "../../assets/img/france.png";
import qrCode from "../../assets/img/QRCode.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faDesktop,
  // faHouseChimney,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ printRef, theme, projectName, selectedCity }) => {
  return (
    <div
      className="card"
      ref={(e) => (printRef.current[3] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.main,
        color: theme.color.dark,
      }}
    >
      <img className="bl-card-main" src={bottomLeft} alt="bottom-left" />
      <img className="tr-card-main" src={topRight} alt="top-right" />
      {/* <h5
        className="info"
        style={{
          color: theme.color.dark,
          background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
        }}
      >
        <FontAwesomeIcon icon={faHouseChimney} />
        {projectName ? " " + projectName : " Nom du projet"} -
        {selectedCity.nomCommuneExact
          ? ` ${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
          : " Nom de la ville (00)"}
      </h5> */}
      <div
        className="card-content"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50%",
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
        <h1>
        <FontAwesomeIcon icon={faLink} /> linktr.ee/123structure
        </h1>
        <img
          src={france}
          alt="france"
          style={{ height: "325px", marginTop: "16px" }}
        />
        <img src={qrCode} alt="QR Code" className="qrCode" />
      </div>
    </div>
  );
};

export default Contact;
