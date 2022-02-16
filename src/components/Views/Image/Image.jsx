import React, { useEffect, useState } from "react";
import "./Image.css";
// IMAGES
import bottomLeft from "../../../assets/img/light-bottom-left.png";
import topRight from "../../../assets/img/light-top-right.png";
import logoMinDark from "../../../assets/img/logo/123structure-logo-min-dark.png";
import logoMinLight from "../../../assets/img/logo/123structure-logo-min-light.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

const Image = ({
  printRef,
  theme,
  selectedCity,
  projectName,
  partner,
  img,
  index,
  imgPosition,
  logoStyle,
}) => {
  return (
    <div
      className="image-card"
      ref={(e) => (printRef.current[index] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.light,
        color: theme.color.dark,
        padding: "16px",
      }}
    >
      <img className="bl-image-card" src={bottomLeft} alt="bottom-left" />
      <img className="tr-image-card" src={topRight} alt="top-right" />
      <div className="bl-content-logo">
        <img
          className="logo"
          src={logoStyle ? logoMinLight : logoMinDark}
          alt="logo"
        />
        {partner !== "" ? (
          <img
            className="logo"
            src={partner}
            alt="partner"
            style={{ marginLeft: "16px" }}
          />
        ) : (
          <div></div>
        )}
      </div>
      <h5
        className="image-title"
        style={{
          color: theme.color.dark,
          background: "rgb(255, 250, 230,0.5)", // Make sure this color has an opacity of less than 1
          backdropFilter: "blur(4px)", // This be the blur
          borderRadius: "8px",
          padding: "16px",
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "1.05em",
        }}
      >
        <FontAwesomeIcon icon={faHouseChimney} />
        {projectName ? " " + projectName : " Nom du projet"} -
        {selectedCity.nomCommuneExact
          ? ` ${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
          : " Nom de la ville (00)"}
      </h5>
      {img === undefined ? (
        <img
          id="main"
          src={`https://via.placeholder.com/1000?text=Image+${index - 2}`}
          alt="main"
          style={{
            borderRadius: "8px",
          }}
        />
      ) : (
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: `${imgPosition}% 50%`,
          }}
        />
      )}
    </div>
  );
};

export default Image;
