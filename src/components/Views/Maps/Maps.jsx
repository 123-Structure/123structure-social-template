import React, { useEffect, useState } from "react";
import "./Maps.css";
// MATERIAL UI
import Paper from "@mui/material/Paper";
// IMAGES
import bottomLeft from "../../../assets/img/light-bottom-left.png";
import topRight from "../../../assets/img/light-top-right.png";
import logoMin from "../../../assets/img/logo/123structure-logo-min-dark.png";
// ICONS
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Maps = ({ printRef, theme, selectedCity, projectName, map1, map2 }) => {
  const IconSize = 125;

  const [titleLineCount, setTitleLineCount] = useState(0);

  const countLines = (el, h) => {
    var divHeight = el.offsetHeight;
    const nbLine = divHeight / h;
    return nbLine;
  };

  useEffect(() => {
    if (document.getElementById("zone-city") !== null) {
      setTitleLineCount(countLines(document.getElementById("zone-city"), 75));
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
      <img
        className="bl-maps-card"
        src={bottomLeft}
        alt="bottom-left"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <img
        className="tr-maps-card"
        src={topRight}
        alt="top-right"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <img className="bl-presentation-logo" src={logoMin} alt="logo" />
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
        }}
      >
        {projectName ? projectName : "Nom du projet"}
      </h5>
      <div className="Card-content">
        <h1
          id="zone-city"
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
          <LocationOnIcon fontSize="32" sx={{ marginRight: "8px" }} />
          {selectedCity.nomCommuneExact
            ? `${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
            : "Nom de la ville (00)"}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {map1 === "" ? (
            <img
              id="main"
              src="https://via.placeholder.com/250?text=Map+1"
              alt="main"
              style={{
                borderRadius: "8px",
              }}
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${map1})`,
                backgroundSize: "cover",
                backgroundPosition: `50% 50%`,
                height: "250px",
                width: "250px",
                borderRadius: "8px",
              }}
            />
          )}
          {map2 === "" ? (
            <img
              id="main"
              src="https://via.placeholder.com/250?text=Map+2"
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
                height: "250px",
                width: "250px",
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
