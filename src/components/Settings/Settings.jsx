import React, {
  useState,
  // useEffect,
  useRef,
} from "react";
import "./Settings.css";
// COMPONENTS
import ImageSettings from "./ImageSettings";
// MATERIAL UI
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
// ICONS
import SaveIcon from "@mui/icons-material/Save";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import logoMin from "../../assets/img/logo/123structure-logo-min.png";
// import house from "../../assets/img/house.png";
import BurstModeIcon from "@mui/icons-material/BurstMode";
// OTHER
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import axios from "axios";
import ScrollArea from "react-scrollbar";
// LEAFLET
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { Map, Marker, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
// import { SimpleMapScreenshoter } from "leaflet-simple-map-screenshoter";

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
  // setPicture,
  // setPicturePosition,
  setPartner1,
  setPartner2,
  setPartner3,
  setMap1,
  setMap2,
  setImage,
  legende1,
  legende2,
  legende3,
  legende4,
  legende5,
  legende6,
  legende7,
  legende8,
  logoImage1,
  logoImage2,
  logoImage3,
  logoImage4,
  logoImage5,
  logoImage6,
  logoImage7,
  logoImage8,
  logoLightImage1,
  logoLightImage2,
  logoLightImage3,
  logoLightImage4,
  logoLightImage5,
  logoLightImage6,
  logoLightImage7,
  logoLightImage8,
  hideCard1,
  hideCard2,
  hideCard3,
  hideCard4,
  hideCard5,
  hideCard6,
  hideCard7,
  hideCard8,
  setLegende1,
  setLegende2,
  setLegende3,
  setLegende4,
  setLegende5,
  setLegende6,
  setLegende7,
  setLegende8,
  setImage1position,
  setImage2position,
  setImage3position,
  setImage4position,
  setImage5position,
  setImage6position,
  setImage7position,
  setImage8position,
  setLogoImage1,
  setLogoImage2,
  setLogoImage3,
  setLogoImage4,
  setLogoImage5,
  setLogoImage6,
  setLogoImage7,
  setLogoImage8,
  setLogoLightImage1,
  setLogoLightImage2,
  setLogoLightImage3,
  setLogoLightImage4,
  setLogoLightImage5,
  setLogoLightImage6,
  setLogoLightImage7,
  setLogoLightImage8,
  setHideCard1,
  setHideCard2,
  setHideCard3,
  setHideCard4,
  setHideCard5,
  setHideCard6,
  setHideCard7,
  setHideCard8,
}) => {
  // const pictureInput = useRef();
  const imageInput = useRef();
  const partnerInput1 = useRef();
  const partnerInput2 = useRef();
  const partnerInput3 = useRef();
  // const map1Ref = useRef();
  // const layerGroupRef = useRef();
  // const map2Ref = useRef();

  const [sismoAPI, setSismoAPI] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // const myIcon = L.icon({
  //   iconUrl: logoMin,
  //   iconRetinaUrl: logoMin,
  //   iconAnchor: null,
  //   popupAnchor: [0, -15],
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null,
  //   iconSize: 25,
  // });

  // const houseIcon = L.icon({
  //   iconUrl: house,
  //   iconRetinaUrl: house,
  //   iconAnchor: null,
  //   popupAnchor: [0, -15],
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null,
  //   iconSize: 25,
  // });

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
        return `1 - ${legende1 ? legende1 : "Image 1"}`;
      case 1:
        return `2 - ${legende2 ? legende2 : "Image 2"}`;
      case 2:
        return `3 - ${legende3 ? legende3 : "Image 3"}`;
      case 3:
        return `4 - ${legende4 ? legende4 : "Image 4"}`;
      case 4:
        return `5 - ${legende5 ? legende5 : "Image 5"}`;
      case 5:
        return `6 - ${legende6 ? legende6 : "Image 6"}`;
      case 6:
        return `7 - ${legende7 ? legende7 : "Image 7"}`;
      case 7:
        return `8 - ${legende8 ? legende8 : "Image 8"}`;
      case 8:
        return "9 - Contact";

      default:
        break;
    }
  };

  const handleDownloadImage = async () => {
    const zip = require("jszip")();

    const loading = await document.querySelector(".loading");
    loading.style.display = "flex";

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
      // console.log(i, data.replace(/^data:image\/(png|jpg);base64,/, ""));
      zip.file(
        `${title(i)}.jpg`,
        data.replace(/^data:image\/(png|jpg);base64,/, ""),
        {
          base64: true,
        }
      );
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "social.zip");
      cards.style.display = "none";
      preview.style.display = "block";
      loading.style.display = "none";
    });
  };

  // const takeScreenshot = () => {
  //   const map1 = map1Ref.current.leafletElement;
  //   const screenshot1 = new SimpleMapScreenshoter({
  //     hidden: true, // hide screen btn on map
  //   }).addTo(map1);
  //   screenshot1
  //     .takeScreen("blob")
  //     .then((blob) => {
  //       setMap1(URL.createObjectURL(blob));
  //     })
  //     .catch((e) => {
  //       alert(e.toString());
  //     });

  //   const map2 = map2Ref.current.leafletElement;
  //   const screenshot2 = new SimpleMapScreenshoter({
  //     hidden: true, // hide screen btn on map
  //   }).addTo(map2);
  //   screenshot2
  //     .takeScreen("blob")
  //     .then((blob) => {
  //       setMap2(URL.createObjectURL(blob));
  //     })
  //     .catch((e) => {
  //       alert(e.toString());
  //     });
  // };

  // useEffect(() => {
  //   if (selectedCity.border !== undefined) {
  //     const map = map1Ref.current.leafletElement;
  //     const layerGroup = layerGroupRef.current.leafletElement;
  //     const bounds = layerGroup.getBounds();
  //     if (bounds.isValid()) {
  //       map.fitBounds(bounds);
  //     }
  //   }
  // });

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
            {/* <TextField
              id="outlined-basic"
              label="Nom du projet"
              variant="outlined"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            /> */}
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PeopleAltIcon />}
              onClick={() => partnerInput1.current.click()}
              sx={{ marginTop: "16px" }}
            >
              Partenaire 1
            </Button>
            <input
              ref={partnerInput1}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) =>
                setPartner1(window.URL.createObjectURL(e.target.files[0]))
              }
            />
            <Button
              variant="contained"
              size="large"
              startIcon={<PeopleAltIcon />}
              onClick={() => partnerInput2.current.click()}
              sx={{ marginTop: "16px" }}
            >
              Partenaire 2
            </Button>
            <input
              ref={partnerInput2}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) =>
                setPartner2(window.URL.createObjectURL(e.target.files[0]))
              }
            />
            <Button
              variant="contained"
              size="large"
              startIcon={<PeopleAltIcon />}
              onClick={() => partnerInput3.current.click()}
              sx={{ marginTop: "16px" }}
            >
              Partenaire 3
            </Button>
            <input
              ref={partnerInput3}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) =>
                setPartner3(window.URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          {/* <h2>Présentation</h2>
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
              icon={houseIcon}
            />
            <Marker position={[47.070399, -1.3362078]} icon={myIcon} />
            <Marker position={[45.9794406, 4.73999]} icon={myIcon} />
            <Marker position={[43.318502, -0.4246617]} icon={myIcon} />
          </Map> */}
          <h2>Images</h2>
          <Button
            variant="contained"
            size="large"
            startIcon={<BurstModeIcon />}
            onClick={() => imageInput.current.click()}
          >
            Charger plusieurs images
          </Button>
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
          <ImageSettings
            legende1={legende1}
            legende2={legende2}
            legende3={legende3}
            legende4={legende4}
            legende5={legende5}
            legende6={legende6}
            legende7={legende7}
            legende8={legende8}
            logoImage1={logoImage1}
            logoImage2={logoImage2}
            logoImage3={logoImage3}
            logoImage4={logoImage4}
            logoImage5={logoImage5}
            logoImage6={logoImage6}
            logoImage7={logoImage7}
            logoImage8={logoImage8}
            logoLightImage1={logoLightImage1}
            logoLightImage2={logoLightImage2}
            logoLightImage3={logoLightImage3}
            logoLightImage4={logoLightImage4}
            logoLightImage5={logoLightImage5}
            logoLightImage6={logoLightImage6}
            logoLightImage7={logoLightImage7}
            logoLightImage8={logoLightImage8}
            hideCard1={hideCard1}
            hideCard2={hideCard2}
            hideCard3={hideCard3}
            hideCard4={hideCard4}
            hideCard5={hideCard5}
            hideCard6={hideCard6}
            hideCard7={hideCard7}
            hideCard8={hideCard8}
            setLegende1={setLegende1}
            setLegende2={setLegende2}
            setLegende3={setLegende3}
            setLegende4={setLegende4}
            setLegende5={setLegende5}
            setLegende6={setLegende6}
            setLegende7={setLegende7}
            setLegende8={setLegende8}
            setImage1position={setImage1position}
            setImage2position={setImage2position}
            setImage3position={setImage3position}
            setImage4position={setImage4position}
            setImage5position={setImage5position}
            setImage6position={setImage6position}
            setImage7position={setImage7position}
            setImage8position={setImage8position}
            setLogoImage1={setLogoImage1}
            setLogoImage2={setLogoImage2}
            setLogoImage3={setLogoImage3}
            setLogoImage4={setLogoImage4}
            setLogoImage5={setLogoImage5}
            setLogoImage6={setLogoImage6}
            setLogoImage7={setLogoImage7}
            setLogoImage8={setLogoImage8}
            setLogoLightImage1={setLogoLightImage1}
            setLogoLightImage2={setLogoLightImage2}
            setLogoLightImage3={setLogoLightImage3}
            setLogoLightImage4={setLogoLightImage4}
            setLogoLightImage5={setLogoLightImage5}
            setLogoLightImage6={setLogoLightImage6}
            setLogoLightImage7={setLogoLightImage7}
            setLogoLightImage8={setLogoLightImage8}
            setHideCard1={setHideCard1}
            setHideCard2={setHideCard2}
            setHideCard3={setHideCard3}
            setHideCard4={setHideCard4}
            setHideCard5={setHideCard5}
            setHideCard6={setHideCard6}
            setHideCard7={setHideCard7}
            setHideCard8={setHideCard8}
          />
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
