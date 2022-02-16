import React from "react";
// IMAGES
import bottomLeft from "../../assets/img/light-bottom-left.png";
import topRight from "../../assets/img/light-top-right.png";
import logoMinDark from "../../assets/img/logo/123structure-logo-min-dark.png";
import logoMinLight from "../../assets/img/logo/123structure-logo-min-light.png";
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
      className="card"
      ref={(e) => (printRef.current[index] = e)}
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
        className="info"
        style={{
          color: theme.color.dark,
          background: "rgb(255, 250, 230,0.5)", // Make sure this color has an opacity of less than 1
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
