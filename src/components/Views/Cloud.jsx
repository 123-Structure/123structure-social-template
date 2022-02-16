import React, { useEffect, useState } from "react";
// IMAGES
import bottomLeft from "../../assets/img/light-bottom-left.png";
import topRight from "../../assets/img/light-top-right.png";
import logoMin from "../../assets/img/logo/123structure-logo-min-dark.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseChimney,
  faKey,
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
      className="card"
      ref={(e) => (printRef.current[1] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.light,
        color: theme.color.dark,
      }}
    >
      <img className="bl-card-light" src={bottomLeft} alt="bottom-left" />
      <img className="tr-card-light" src={topRight} alt="top-right" />
      <div className="logo-container">
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
      </h5>

      <div
        className="card-content"
      >
        <h1
          className="title"
          style={{
            color: theme.color.dark,
            background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
          }}
        >
          <FontAwesomeIcon icon={faKey} />
          {" "}Mots Clés
        </h1>
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
