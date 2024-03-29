import React, { useEffect, useState } from "react";
// MATERIAL UI
import Paper from "@mui/material/Paper";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
// IMAGES
import bottomLeft from "../../assets/img/light-bottom-left.png";
import topRight from "../../assets/img/light-top-right.png";
import logoMin from "../../assets/img/logo/123structure-logo-min-dark.png";
// WIND
import wind_default from "../../assets/img/wind/wind-default.png";
import wind_1 from "../../assets/img/wind/wind-1.png";
import wind_2 from "../../assets/img/wind/wind-2.png";
import wind_3 from "../../assets/img/wind/wind-3.png";
import wind_4 from "../../assets/img/wind/wind-4.png";
import wind_5 from "../../assets/img/wind/wind-5.png";
// SNOW
import snow_default from "../../assets/img/snow/snow-default.png";
import snow_0 from "../../assets/img/snow/snow-0.png";
import snow_A1 from "../../assets/img/snow/snow-A1.png";
import snow_A2 from "../../assets/img/snow/snow-A2.png";
import snow_B1 from "../../assets/img/snow/snow-B1.png";
import snow_B2 from "../../assets/img/snow/snow-B2.png";
import snow_C1 from "../../assets/img/snow/snow-C1.png";
import snow_C2 from "../../assets/img/snow/snow-C2.png";
import snow_D from "../../assets/img/snow/snow-D.png";
import snow_E from "../../assets/img/snow/snow-E.png";
// SEISM
import seism_default from "../../assets/img/seism/seism-default.png";
import seism_1 from "../../assets/img/seism/seism-1.png";
import seism_2 from "../../assets/img/seism/seism-2.png";
import seism_3 from "../../assets/img/seism/seism-3.png";
import seism_4 from "../../assets/img/seism/seism-4.png";
import seism_5 from "../../assets/img/seism/seism-5.png";

const Zone = ({ printRef, theme, selectedCity, projectName, partner }) => {
  const IconSize = 225;

  return (
    <div
      className="card"
      ref={(e) => (printRef.current[2] = e)}
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
            (Zone d'exposition géographique)
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "88px",
          }}
        >
          <Paper
            className="wind-card"
            elevation={0}
            sx={{
              alignItems: "center",
              textAlign: "center",
              height: IconSize + 100,
              width: IconSize + 70,
            }}
          >
            <h2>Vent</h2>
            <img
              className="wind-icon"
              style={{
                width: IconSize,
                height: IconSize,
              }}
              src={
                selectedCity.vent === "1"
                  ? wind_1
                  : selectedCity.vent === "2"
                  ? wind_2
                  : selectedCity.vent === "3"
                  ? wind_3
                  : selectedCity.vent === "4"
                  ? wind_4
                  : selectedCity.vent === "5"
                  ? wind_5
                  : wind_default
              }
              alt="wind-icon"
            />
          </Paper>
          <Paper
            className="wind-card"
            elevation={0}
            sx={{
              alignItems: "center",
              textAlign: "center",
              height: IconSize + 100,
              width: IconSize + 70,
              margin: "0px 24px",
            }}
          >
            <h2>Neige</h2>
            <img
              className="snow-icon"
              style={{
                width: IconSize,
                height: IconSize,
              }}
              src={
                selectedCity.neige === "A1"
                  ? snow_A1
                  : selectedCity.neige === "A2"
                  ? snow_A2
                  : selectedCity.neige === "B1"
                  ? snow_B1
                  : selectedCity.neige === "B2"
                  ? snow_B2
                  : selectedCity.neige === "C1"
                  ? snow_C1
                  : selectedCity.neige === "C2"
                  ? snow_C2
                  : selectedCity.neige === "D"
                  ? snow_D
                  : selectedCity.neige === "E"
                  ? snow_E
                  : selectedCity.neige === "0"
                  ? snow_0
                  : snow_default
              }
              alt="snow-icon"
            />
          </Paper>
          <Paper
            className="wind-card"
            elevation={0}
            sx={{
              alignItems: "center",
              textAlign: "center",
              height: IconSize + 100,
              width: IconSize + 70,
            }}
          >
            <h2>Séisme</h2>
            <img
              className="seism-icon"
              style={{
                width: IconSize,
                height: IconSize,
              }}
              src={
                selectedCity.seisme === "1"
                  ? seism_1
                  : selectedCity.seisme === "2"
                  ? seism_2
                  : selectedCity.seisme === "3"
                  ? seism_3
                  : selectedCity.seisme === "4"
                  ? seism_4
                  : selectedCity.seisme === "5"
                  ? seism_5
                  : seism_default
              }
              alt="seism-icon"
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Zone;
