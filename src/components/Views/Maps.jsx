import React, { useEffect, useState } from "react";
// IMAGES
import bottomLeft from "../../assets/img/decorators/light-bottom-left.png";
import topRight from "../../assets/img/decorators/light-top-right.png";
import logoMin from "../../assets/img/logo/123structure-logo-min-dark.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const Maps = ({
  printRef,
  theme,
  selectedCity,
  projectName,
  map1,
  map2,
  partner,
}) => {
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
        {projectName ? " " + projectName : " Nom du projet"}
      </h5>
      <div className="card-content">
        <div className="title-container">
          <h1
            className="title"
            style={{
              color: theme.color.dark,
              background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} />
            {selectedCity.nomCommuneExact
              ? ` ${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
              : " Nom de la ville (00)"}
          </h1>
          <h5
            className="subtitle"
            style={{
              color: theme.color.dark,
              background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
            }}
          >
            (Localisation)
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "72px",
          }}
        >
          {map1 === "" ? (
            <img
              id="main"
              src="https://via.placeholder.com/450?text=Map+1"
              alt="main"
              style={{
                borderRadius: "8px",
                marginRight: "24px",
              }}
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${map1})`,
                backgroundSize: "cover",
                backgroundPosition: `50% 50%`,
                height: "450px",
                width: "450px",
                borderRadius: "8px",
                marginRight: "24px",
              }}
            />
          )}
          {map2 === "" ? (
            <img
              id="main"
              src="https://via.placeholder.com/450?text=Map+2"
              alt="main"
              style={{
                borderRadius: "8px",
              }}
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${map2})`,
                backgroundSize: "cover",
                backgroundPosition: `50% 50%`,
                height: "450px",
                width: "450px",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Maps;
