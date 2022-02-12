import React, { useState, useRef } from "react";
import "./Settings.css";
// MATERIAL UI
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// OTHER
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import axios from "axios";

const Settings = ({
  printRef,
  theme,
  autoplay,
  selectedCity,
  projectName,
  setAutoplay,
  setSelectedCity,
  setProjectName,
  setPicture,
}) => {
  const fileInput = useRef();

  const [sismoAPI, setSismoAPI] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = async (e) => {
    await setSearchValue(e.target.value);
    e.target.value.length === 5
      ? await axios
          .get(`https://sismo-api.vercel.app/api/v1/city/cp/${e.target.value}`)
          .then((res) => {
            console.log(res.data);
            setSismoAPI(res.data);
          })
      : setSismoAPI([]);
  };

  const handleSelectedCity = (city) => {
    setSelectedCity(city);
  };

  const handleDownloadImage = async () => {
    const zip = require("jszip")();

    const cards = await document.querySelector(".download-card");
    cards.style.display = "flex";
    cards.style.flexDirection = "column";

    const preview = await document.querySelector(".Preview");
    preview.style.display = "none";

    for (let i = 0; i <= 2; i++) {
      const element = printRef.current[i];
      const canvas = await html2canvas(element, { scale: 2 });
      const data = await canvas.toDataURL("image/jpg");
      console.log(i, data);
      zip.file(`${i}.jpg`, data.replace(/^data:image\/(png|jpg);base64,/, ""), {
        base64: true,
      });
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "Export.zip");
      cards.style.display = "none";
      preview.style.display = "";
    });
  };

  return (
    <div className="Settings">
      <Paper
        elevation={3}
        sx={{ width: "100%", height: theme.dimension.height, padding: "16px" }}
      >
        <TextField
          id="outlined-basic"
          label="Nom du projet"
          variant="outlined"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Code Postal"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        {sismoAPI[0] !== "Aucune valeur correspondante à votre recherche" ? (
          sismoAPI.map((city, id) => (
            <p
              key={id}
              onClick={() => handleSelectedCity(city)}
              style={{
                color: selectedCity.insee === city.insee ? "red" : "black",
              }}
            >
              {city.nomCommuneExact}
            </p>
          ))
        ) : (
          <p>Chargement...</p>
        )}
        <Button
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
          onClick={() => fileInput.current.click()}
        >
          Charger une image
        </Button>

        <input
          ref={fileInput}
          type="file"
          style={{ display: "none" }}
          onChange={(e) => setPicture(window.URL.createObjectURL(e.target.files[0]))}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={autoplay}
                onChange={(e) => setAutoplay(e.target.checked)}
              />
            }
            label="Autoplay"
          />
        </FormGroup>
        <Button
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
          onClick={handleDownloadImage}
        >
          Télécharger
        </Button>
      </Paper>
    </div>
  );
};

export default Settings;
