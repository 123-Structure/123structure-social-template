import React, { useState, useEffect } from "react";
// IMAGES
import topLeft from "../../assets/img/dark-top-left.png";
import bottomRight from "../../assets/img/dark-bottom-right.png";
import logoMin from "../../assets/img/logo/123structure-logo-min.png";
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
  partner,
}) => {
  const [titleLineCount, setTitleLineCount] = useState(0);
  const [cityLineCount, setCityLineCount] = useState(0);

  const countLines = (el, h) => {
    var divHeight = el.offsetHeight;
    console.log(divHeight);
    const nbLine = divHeight / h;
    return nbLine;
  };

  useEffect(() => {
    if (document.querySelector(".title") !== null) {
      setTitleLineCount(countLines(document.querySelector(".title"), 86));
    }
    if (document.querySelector(".presentation-city") !== null) {
      setCityLineCount(
        countLines(document.querySelector(".presentation-city"), 54)
      );
    }
  }, [projectName, selectedCity]);

  return (
    <div
      className="card"
      ref={(e) => (printRef.current[0] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.dark,
        color: theme.color.light,
      }}
    >
      <img className="tl-card-dark" src={topLeft} alt="top-left" />
      <img className="br-card-dark" src={bottomRight} alt="bottom-right" />
      <div className="logo-container" style={{ flexDirection: "column" }}>
        <img className="logo" src={logoMin} alt="logo" />
        {partner !== "" ? (
          <img className="logo" src={partner} alt="partner" />
        ) : (
          <div></div>
        )}
      </div>
      <div className="card-content">
        <h1
          className="title"
          style={{
            color: theme.color.dark,
            background: "rgb(255, 250, 230,0.5)", // Make sure this color has an opacity of less than 1
          }}
        >
          <FontAwesomeIcon icon={faHouseChimney} />
          {projectName ? " " + projectName : " Nom du projet"}
        </h1>
        <h1
          className="presentation-city"
          style={{
            color: theme.color.light,
            fontStyle: "italic",
            textAlign: "center",
            marginTop: titleLineCount > 1 ? "32px" : "64px",
            marginBottom: "64px",
            fontSize: "2.5em",
          }}
        >
          {selectedCity.nomCommuneExact
            ? `${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
            : "Nom de la ville (00)"}
        </h1>
        {picture === undefined ? (
          <img
            id="main"
            src="https://via.placeholder.com/500?text=Image+Principale"
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
