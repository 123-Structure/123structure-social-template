import React, { useEffect, useState } from "react";
import "./Maps.css";
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

const Maps = ({
  printRef,
  theme,
  selectedCity,
  projectName,
  map1,
  map2,
  partner,
}) => {
  const [titleLineCount, setTitleLineCount] = useState(0);

  const countLines = (el, h) => {
    var divHeight = el.offsetHeight;
    const nbLine = divHeight / h;
    return nbLine;
  };

  useEffect(() => {
    if (document.getElementById("maps-city") !== null) {
      setTitleLineCount(countLines(document.getElementById("maps-city"), 75));
    }
  }, [selectedCity]);

  return (
    <div
      className="maps-card"
      ref={(e) => (printRef.current[1] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.light,
        color: theme.color.dark,
        padding: "16px",
      }}
    >
      <img className="bl-maps-card" src={bottomLeft} alt="bottom-left" />
      <img className="tr-maps-card" src={topRight} alt="top-right" />
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
        className="maps-title"
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
        {projectName ? " " + projectName : " Nom du projet"}
      </h5>
      <div className="Card-content">
        <h1
          id="maps-city"
          style={{
            color: theme.color.dark,
            background: "rgb(35, 31, 32,0.1)", // Make sure this color has an opacity of less than 1
            backdropFilter: "blur(4px)", // This be the blur
            borderRadius: "8px",
            padding: "16px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "72px",
          }}
        >
          <FontAwesomeIcon icon={faLocationDot} />
          {selectedCity.nomCommuneExact
            ? ` ${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
            : " Nom de la ville (00)"}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: titleLineCount > 1 ? "104px" : "150px",
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
