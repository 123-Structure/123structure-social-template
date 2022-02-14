import React, { useState, useRef } from "react";
import "./Settings.css";
// MATERIAL UI
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
// ICONS
import SaveIcon from "@mui/icons-material/Save";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// OTHER
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import axios from "axios";
import ScrollArea from "react-scrollbar";

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
  setPicturePosition,
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
    sismoAPI.forEach((element) => {
      if (element.nomCommuneExact === city) {
        setSelectedCity(element);
      }
    });
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
      saveAs(content, `${projectName}.zip`);
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
        <ScrollArea style={{ height: "100%" }}>
          <h2>Général</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "16px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Code Postal"
                variant="outlined"
                value={searchValue}
                onChange={handleSearchValueChange}
              />
              {(sismoAPI.length === 0 && searchValue.length > 0) ||
              sismoAPI[0] ===
                "Aucune valeur correspondante à votre recherche" ? (
                <CircularProgress
                  sx={{ marginTop: "8px", marginLeft: "16px" }}
                />
              ) : (
                <div></div>
              )}
            </div>
            {sismoAPI.length > 0 &&
            sismoAPI[0] !== "Aucune valeur correspondante à votre recherche" ? (
              <FormControl sx={{ width: "210px", marginTop: "16px" }}>
                <InputLabel id="demo-simple-select-label">
                  Choix de ville
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={
                    selectedCity.nomCommuneExact === undefined
                      ? ""
                      : selectedCity.nomCommuneExact
                  }
                  label="Nom de la ville"
                  onChange={(e) => handleSelectedCity(e.target.value)}
                >
                  {sismoAPI.map((option, key) => (
                    <MenuItem
                      key={key}
                      value={option.nomCommuneExact}
                      // onClick={(e) => handleSelectedCity(e.target.value)}
                    >
                      {option.nomCommuneExact}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
          </div>
          <h2>Présentation</h2>
          <Button
            variant="contained"
            size="large"
            startIcon={<InsertPhotoIcon />}
            onClick={() => fileInput.current.click()}
          >
            Charger une image
          </Button>

          <input
            ref={fileInput}
            type="file"
            style={{ display: "none" }}
            onChange={(e) =>
              setPicture(window.URL.createObjectURL(e.target.files[0]))
            }
          />
          <div>
            <p>Positioner l'image 1</p>
            <Slider
              aria-label="position"
              defaultValue={50}
              valueLabelDisplay="auto"
              onChange={(e) => setPicturePosition(e.target.value)}
              // step={1}
              // marks
              min={1}
              max={100}
              sx={{ width: "75%" }}
            />
          </div>
          <h2>Visualisation et export</h2>
          <FormGroup sx={{ width: "35%" }}>
            <FormControlLabel
              control={
                <Switch
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                />
              }
              label="Lecture automatique"
            />
          </FormGroup>
          <Button
            variant="contained"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleDownloadImage}
            sx={{ marginTop: "16px" }}
          >
            Télécharger
          </Button>
        </ScrollArea>
      </Paper>
    </div>
  );
};

export default Settings;
