import React, { useState, useEffect } from "react";
import "./Presentation.css";
// IMAGES
import topLeft from "../../../assets/img/dark-top-left.png";
import bottomRight from "../../../assets/img/dark-bottom-right.png";
// ICONS
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

const Presentation = ({
  printRef,
  theme,
  projectName,
  selectedCity,
  picture,
}) => {
  console.log(picture);

  const [titleLineCount, setTitleLineCount] = useState(0);
  const [cityLineCount, setCityLineCount] = useState(0);

  const countLines = (el, h) => {
    var divHeight = el.offsetHeight;
    const nbLine = divHeight / h;
    return nbLine;
  };

  if (document.getElementById("presentation-title") !== null) {
    countLines(document.getElementById("presentation-title"), 75);
  }

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
      <img
        className="tl-presentation-card"
        src={topLeft}
        alt="top-left"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <img
        className="br-presentation-card"
        src={bottomRight}
        alt="bottom-right"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
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
          }}
        >
          <MapsHomeWorkIcon fontSize="32" sx={{ marginRight: "8px" }} />
          {projectName ? projectName : "Nom du projet"}
        </h1>
        <h1
          id="presentation-city"
          style={{
            color: theme.color.light,
            fontStyle: "italic",
            textAlign: "center",
            marginTop: titleLineCount > 1 ? "0" : "24px",
            marginBottom:
              cityLineCount > 1 && titleLineCount > 1 ? "32px" : "32px",
          }}
        >
          {selectedCity.nomCommuneExact
            ? `${selectedCity.nomCommuneExact} (${selectedCity.codeDepartement})`
            : "Nom de la ville (00)"}
        </h1>
        {picture === undefined ? (
          <img
            id="main"
            src="https://via.placeholder.com/380"
            alt="main"
            style={{
              borderRadius: "8px",
            }}
          />
        ) : (
          <img
            id="main"
            src={picture}
            alt="main"
            style={{
              height:
                cityLineCount > 1 && titleLineCount > 1
                  ? "320px"
                  : cityLineCount === 1 && titleLineCount > 1
                  ? "360px"
                  : cityLineCount > 1 && titleLineCount === 1
                  ? "340px"
                  : "380px",
              width:
                cityLineCount > 1 && titleLineCount > 1
                  ? "320px"
                  : cityLineCount === 1 && titleLineCount > 1
                  ? "360px"
                  : cityLineCount > 1 && titleLineCount === 1
                  ? "340px"
                  : "380px",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Presentation;
