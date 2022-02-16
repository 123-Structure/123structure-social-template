import React, { useEffect, useState } from "react";
import "./Cloud.css";
// IMAGES
import bottomLeft from "../../../assets/img/light-bottom-left.png";
import topRight from "../../../assets/img/light-top-right.png";
import logoMin from "../../../assets/img/logo/123structure-logo-min-dark.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
// OTHER
import { TagCloud } from "react-tagcloud";

const Cloud = ({ printRef, theme, selectedCity, projectName, partner }) => {
  const data = [
    { color: "#231f20", value: "JavaScript", count: 38 },
    { color: "#f28e1c", value: "React", count: 30 },
    { color: "#ffcc00", value: "Nodejs", count: 28 },
    { color: "#231f20", value: "Express.js", count: 25 },
    { color: "#f28e1c", value: "HTML5", count: 33 },
    { color: "#ffcc00", value: "MongoDB", count: 18 },
    { color: "#231f20", value: "CSS3", count: 20 },
  ];

  return (
    <div
      className="cloud-card"
      ref={(e) => (printRef.current[1] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.light,
        color: theme.color.dark,
        padding: "16px",
      }}
    >
      <img className="bl-cloud-card" src={bottomLeft} alt="bottom-left" />
      <img className="tr-cloud-card" src={topRight} alt="top-right" />
      <div className="bl-content-logo">
        <img className="logo" src={logoMin} alt="logo" />
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
        className="cloud-title"
        style={{
          color: theme.color.dark,
          background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
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

      <div
        className="Card-content"
        style={{
          height: "100%",
          width: "75%",
        }}
      >
        <TagCloud
          minSize={24}
          maxSize={70}
          tags={data}
          // onClick={(tag) => alert(`'${tag.value}' was selected!`)}
        />
      </div>
    </div>
  );
};

export default Cloud;
