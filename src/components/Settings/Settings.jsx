import React, { useState, useEffect, useRef } from "react";
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
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import logoMin from "../../assets/img/logo/123structure-logo-min.png";
import BurstModeIcon from "@mui/icons-material/BurstMode";
// OTHER
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import axios from "axios";
import ScrollArea from "react-scrollbar";
// LEAFLET
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, Marker, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
import { SimpleMapScreenshoter } from "leaflet-simple-map-screenshoter";

const Settings = ({
  printRef,
  theme,
  autoplay,
  selectedCity,
  projectName,
  map1,
  setAutoplay,
  setSelectedCity,
  setProjectName,
  setPicture,
  setPicturePosition,
  setPartner,
  setMap1,
  setMap2,
  setImage,
  setImage1position,
  setImage2position,
  setImage3position,
  setLogoImage1,
  setLogoImage2,
  setLogoImage3,
}) => {
  const pictureInput = useRef();
  const imageInput = useRef();
  const partnerInput = useRef();
  const map1Ref = useRef();
  const layerGroupRef = useRef();
  const map2Ref = useRef();

  const [sismoAPI, setSismoAPI] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const myIcon = L.icon({
    iconUrl: logoMin,
    iconRetinaUrl: logoMin,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: 25,
  });

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
    sismoAPI.forEach((element, id) => {
      if (element.nomCommuneExact === city) {
        setSelectedCity(element);
      }
    });
  };

  const title = (i) => {
    switch (i) {
      case 0:
        return "01_Presentation";

      case 1:
        return "02_Localisation";

      case 2:
        return "03_Zone Sismique - Vent - Neige";

      case 3:
        return "04_Image 1";
      case 4:
        return "05_Image 2";

      case 5:
        return "06_Image 3";

      case 6:
        return "07_Contact";

      default:
        break;
    }
  };

  const handleDownloadImage = async () => {
    const zip = require("jszip")();

    const cards = await document.querySelector(".download-card");
    cards.style.display = "flex";
    cards.style.flexDirection = "column";

    const preview = await document.querySelector(".Preview");
    preview.style.display = "none";

    for (let i = 0; i <= printRef.current.length - 1; i++) {
      const element = printRef.current[i];
      // element.style.transform = "scale(2)";
      const canvas = await html2canvas(element);
      const data = await canvas.toDataURL("image/jpg");
      console.log(i, data);
      zip.file(
        `${title(i)}.jpg`,
        data.replace(/^data:image\/(png|jpg);base64,/, ""),
        {
          base64: true,
        }
      );
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${projectName}.zip`);
      cards.style.display = "none";
      preview.style.display = "block";
    });
  };

  const takeScreenshot = () => {
    const map1 = map1Ref.current.leafletElement;
    const screenshot1 = new SimpleMapScreenshoter({
      hidden: true, // hide screen btn on map
    }).addTo(map1);
    screenshot1
      .takeScreen("blob")
      .then((blob) => {
        setMap1(URL.createObjectURL(blob));
      })
      .catch((e) => {
        alert(e.toString());
      });

    const map2 = map2Ref.current.leafletElement;
    const screenshot2 = new SimpleMapScreenshoter({
      hidden: true, // hide screen btn on map
    }).addTo(map2);
    screenshot2
      .takeScreen("blob")
      .then((blob) => {
        setMap2(URL.createObjectURL(blob));
      })
      .catch((e) => {
        alert(e.toString());
      });
  };

  useEffect(() => {
    if (selectedCity.border !== undefined) {
      const map = map1Ref.current.leafletElement;
      const layerGroup = layerGroupRef.current.leafletElement;
      const bounds = layerGroup.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds);
      }
    }
  });

  return (
    <div className="Settings">
      <Paper
        elevation={3}
        sx={{ width: "100%", height: theme.dimension.height, padding: "16px" }}
      >
        <ScrollArea style={{ height: "100%", marginLeft: "16px" }}>
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
                    <MenuItem key={key} value={option.nomCommuneExact}>
                      {option.nomCommuneExact}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
          </div>
          <Button
            variant="contained"
            size="large"
            startIcon={<PeopleAltIcon />}
            onClick={() => partnerInput.current.click()}
            sx={{ marginTop: "16px" }}
          >
            Partenaire
          </Button>

          <input
            ref={partnerInput}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) =>
              setPartner(window.URL.createObjectURL(e.target.files[0]))
            }
          />
          <h2>Présentation</h2>
          <Button
            variant="contained"
            size="large"
            startIcon={<InsertPhotoIcon />}
            onClick={() => pictureInput.current.click()}
          >
            Charger une image
          </Button>

          <input
            ref={pictureInput}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) =>
              setPicture(window.URL.createObjectURL(e.target.files[0]))
            }
          />
          <div>
            <p>Positioner l'image principale</p>
            <Slider
              aria-label="position1"
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
          <h2>Localisation</h2>
          <Button
            variant="contained"
            size="large"
            startIcon={<PhotoCameraIcon />}
            onClick={takeScreenshot}
          >
            Capturer les cartes
          </Button>
          <Map
            center={[47.0870318, -1.2828461]}
            zoom={14}
            className="maps"
            ref={map1Ref}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
            <FeatureGroup ref={layerGroupRef}>
              <GeoJSON
                key={selectedCity.nomCommuneExact}
                data={selectedCity.border}
                style={{
                  color: theme.color.main,
                }}
              />
            </FeatureGroup>
          </Map>
          <Map
            center={[46.539006, 1.7]}
            zoom={5}
            className="maps"
            ref={map2Ref}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                selectedCity.latitude !== undefined ? selectedCity.latitude : 0,
                selectedCity.longitude !== undefined
                  ? selectedCity.longitude
                  : 0,
              ]}
              icon={myIcon}
            />
          </Map>
          <h2>Images</h2>
          <Button
            variant="contained"
            size="large"
            startIcon={<BurstModeIcon />}
            onClick={() => imageInput.current.click()}
          >
            Charger plusieurs images
          </Button>
          <h3>Image 1</h3>
          <input
            ref={imageInput}
            type="file"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setImage(files.map((file) => window.URL.createObjectURL(file)));
            }}
          />
          <div>
            <p>Positioner l'image 1</p>
            <Slider
              aria-label="position1"
              defaultValue={50}
              valueLabelDisplay="auto"
              onChange={(e) => setImage1position(e.target.value)}
              // step={1}
              // marks
              min={1}
              max={100}
              sx={{ width: "75%" }}
            />
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch onChange={(e) => setLogoImage1(e.target.checked)} />
              }
              label="Logo 123 STR standard ?"
            />
          </FormGroup>
          <h3>Image 2</h3>
          <div>
            <p>Positioner l'image 2</p>
            <Slider
              aria-label="position1"
              defaultValue={50}
              valueLabelDisplay="auto"
              onChange={(e) => setImage2position(e.target.value)}
              // step={1}
              // marks
              min={1}
              max={100}
              sx={{ width: "75%" }}
            />
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch onChange={(e) => setLogoImage2(e.target.checked)} />
              }
              label="Logo 123 STR standard ?"
            />
          </FormGroup>
          <h3>Image 3</h3>
          <div>
            <p>Positioner l'image 3</p>
            <Slider
              aria-label="position1"
              defaultValue={50}
              valueLabelDisplay="auto"
              onChange={(e) => setImage3position(e.target.value)}
              // step={1}
              // marks
              min={1}
              max={100}
              sx={{ width: "75%" }}
            />
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch onChange={(e) => setLogoImage3(e.target.checked)} />
              }
              label="Logo 123 STR standard ?"
            />
          </FormGroup>
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
