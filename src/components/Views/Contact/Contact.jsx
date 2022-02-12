import React from "react";
import "./Contact.css"
// IMAGES
import bottomLeft from "../../../assets/img/main-bottom-left.png";
import topRight from "../../../assets/img/main-top-right.png";

const Contact = ({ printRef, theme, selectedCity }) => {
  return (
    <div
      className="contact-card"
      ref={(e) => (printRef.current[2] = e)}
      style={{
        width: theme.dimension.width,
        height: theme.dimension.height,
        backgroundColor: theme.color.main,
        color: theme.color.dark,
        padding: "16px",
      }}
    >
      <img
        className="bl-contact-card"
        src={bottomLeft}
        alt="bottom-left"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      <img
        className="tr-contact-card"
        src={topRight}
        alt="top-right"
        style={{
          width: "50%",
          zIndex: 0,
        }}
      />
      {selectedCity.nomCommuneExact ? (
        <div className="Card-content">
          <h1>
            {selectedCity.nomCommuneExact} ({selectedCity.codePostal})
          </h1>
          <h2>{selectedCity.vent}</h2>
          <h2>{selectedCity.neige}</h2>
          <h2>{selectedCity.seisme}</h2>
        </div>
      ) : (
        <div className="Card-content">
          <h1>Aucune valeur correspondante à votre recherche</h1>
        </div>
      )}
    </div>
  );
};

export default Contact;
