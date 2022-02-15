import React, { useState, useEffect } from "react";
import "./Presentation.css";
// IMAGES
import topLeft from "../../../assets/img/dark-top-left.png";
import bottomRight from "../../../assets/img/dark-bottom-right.png";
import logoMin from "../../../assets/img/logo/123structure-logo-min.png";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

const Presentation = ({
  printRef,
  theme,
  projectName,
  selectedCity,
  picture,
  picturePosition,
}) => {
  const [titleLineCount, setTitleLineCount] = useState(0);
  const [cityLineCount, setCityLineCount] = useState(0);

  const countLines = (el, h) => {
    var divHeight = el.offsetHeight;
    const nbLine = divHeight / h;
    return nbLine;
  };

  useEffect(() => {
    if (document.getElementById("presentation-title") !== null) {
      setTitleLineCount(
        countLines(document.getElementById("presentation-title"), 75)
      );
    }
    if (document.getElementById("presentation-city") !== null) {
      setCityLineCount(
        countLines(document.getElementById("presentation-city"), 43)
      );
    }
  }, [projectName, selectedCity]);

  return (
    <div
      className="presentation-card"
      ref={(e) => (printRef.current[0] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.dark,
        color: theme.color.light,
        padding: "16px",
      }}
    >
      <img className="tl-presentation-card" src={topLeft} alt="top-left" />
      <img
        className="br-presentation-card"
        src={bottomRight}
        alt="bottom-right"
      />
      <img className="bl-presentation-logo" src={logoMin} alt="logo" />
      <div className="Card-content">
        <h1
          id="presentation-title"
          style={{
            color: theme.color.dark,
            background: "rgb(255, 250, 230,0.5)", // Make sure this color has an opacity of less than 1
            backdropFilter: "blur(4px)", // This be the blur
            borderRadius: "8px",
            padding: "16px",
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "2em",
            marginTop: "46px",
          }}
        >
          <FontAwesomeIcon icon={faHouseChimney} />
          {projectName ? " " + projectName : " Nom du projet"}
        </h1>
        <h1
          id="presentation-city"
          style={{
            color: theme.color.light,
            fontStyle: "italic",
            textAlign: "center",
            marginTop: titleLineCount > 1 ? "32px" : "64px",
            marginBottom: "64px",
            fontSize: "2em",
          }}
        >
          {selectedCity.nomCommuneExact
            ? `${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
            : "Nom de la ville (00)"}
        </h1>
        {picture === undefined ? (
          <img
            id="main"
            src="https://via.placeholder.com/300?text=Image+1"
            alt="main"
            style={{
              borderRadius: "8px",
            }}
          />
        ) : (
          <div
            style={{
              backgroundImage: `url(${picture})`,
              backgroundSize: "cover",
              backgroundPosition: `${picturePosition}% 50%`,
              height:
                cityLineCount > 1 && titleLineCount > 1
                  ? "520px"
                  : cityLineCount === 1 && titleLineCount > 1
                  ? "560px"
                  : cityLineCount > 1 && titleLineCount === 1
                  ? "540px"
                  : "580px",
              width:
                cityLineCount > 1 && titleLineCount > 1
                  ? "520px"
                  : cityLineCount === 1 && titleLineCount > 1
                  ? "560px"
                  : cityLineCount > 1 && titleLineCount === 1
                  ? "540px"
                  : "580px",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Presentation;
