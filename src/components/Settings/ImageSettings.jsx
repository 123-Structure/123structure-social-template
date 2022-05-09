import React from "react";
// MATERIAL UI
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

const ImageSettings = ({
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
  const hideAllCard = (value) => {
    setHideCard1(value);
    setHideCard2(value);
    setHideCard3(value);
    setHideCard4(value);
    setHideCard5(value);
    setHideCard6(value);
    setHideCard7(value);
    setHideCard8(value);
  };

  const allDarkLogo = (value) => {
    setLogoImage1(value);
    setLogoImage2(value);
    setLogoImage3(value);
    setLogoImage4(value);
    setLogoImage5(value);
    setLogoImage6(value);
    setLogoImage7(value);
    setLogoImage8(value);
  };

  const allLightLogo = (value) => {
    setLogoLightImage1(value);
    setLogoLightImage2(value);
    setLogoLightImage3(value);
    setLogoLightImage4(value);
    setLogoLightImage5(value);
    setLogoLightImage6(value);
    setLogoLightImage7(value);
    setLogoLightImage8(value);
  };

  return (
    <React.Fragment>
      <h3>Paramètres globaux</h3>
      <FormGroup
        style={{
          marginTop: "16px",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={
                hideCard1 &&
                hideCard2 &&
                hideCard3 &&
                hideCard4 &&
                hideCard5 &&
                hideCard6 &&
                hideCard7 &&
                hideCard8
              }
              onChange={(e) => hideAllCard(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ? (Global)"
        />
        <FormControlLabel
          control={
            <Switch
              checked={
                logoImage1 &&
                logoImage2 &&
                logoImage3 &&
                logoImage4 &&
                logoImage5 &&
                logoImage6 &&
                logoImage7 &&
                logoImage8
              }
              onChange={(e) => allDarkLogo(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ? (Global)"
        />
        <FormControlLabel
          control={
            <Switch
              checked={
                logoLightImage1 &&
                logoLightImage2 &&
                logoLightImage3 &&
                logoLightImage4 &&
                logoLightImage5 &&
                logoLightImage6 &&
                logoLightImage7 &&
                logoLightImage8
              }
              onChange={(e) => allLightLogo(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ? (Global)"
        />
      </FormGroup>
      <h3>Image 1</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende1}
        onChange={(e) => {
          setLegende1(e.target.value);
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
            <Switch
              checked={hideCard1}
              onChange={(e) => setHideCard1(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage1}
              onChange={(e) => setLogoImage1(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage1}
              onChange={(e) => setLogoLightImage1(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 2</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende2}
        onChange={(e) => {
          setLegende2(e.target.value);
        }}
      />
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
            <Switch
              checked={hideCard2}
              onChange={(e) => setHideCard2(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage2}
              onChange={(e) => setLogoImage2(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage2}
              onChange={(e) => setLogoLightImage2(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 3</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende3}
        onChange={(e) => {
          setLegende3(e.target.value);
        }}
      />
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
            <Switch
              checked={hideCard3}
              onChange={(e) => setHideCard3(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage3}
              onChange={(e) => setLogoImage3(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage3}
              onChange={(e) => setLogoLightImage3(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 4</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende4}
        onChange={(e) => {
          setLegende4(e.target.value);
        }}
      />
      <div>
        <p>Positioner l'image 4</p>
        <Slider
          aria-label="position1"
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={(e) => setImage4position(e.target.value)}
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
            <Switch
              checked={hideCard4}
              onChange={(e) => setHideCard4(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage4}
              onChange={(e) => setLogoImage4(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage4}
              onChange={(e) => setLogoLightImage4(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 5</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende5}
        onChange={(e) => {
          setLegende5(e.target.value);
        }}
      />
      <div>
        <p>Positioner l'image 5</p>
        <Slider
          aria-label="position1"
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={(e) => setImage5position(e.target.value)}
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
            <Switch
              checked={hideCard5}
              onChange={(e) => setHideCard5(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage5}
              onChange={(e) => setLogoImage5(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage5}
              onChange={(e) => setLogoLightImage5(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 6</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende6}
        onChange={(e) => {
          setLegende6(e.target.value);
        }}
      />
      <div>
        <p>Positioner l'image 6</p>
        <Slider
          aria-label="position1"
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={(e) => setImage6position(e.target.value)}
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
            <Switch
              checked={hideCard6}
              onChange={(e) => setHideCard6(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage6}
              onChange={(e) => setLogoImage6(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage6}
              onChange={(e) => setLogoLightImage6(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 7</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende7}
        onChange={(e) => {
          setLegende7(e.target.value);
        }}
      />
      <div>
        <p>Positioner l'image 7</p>
        <Slider
          aria-label="position1"
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={(e) => setImage7position(e.target.value)}
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
            <Switch
              checked={hideCard7}
              onChange={(e) => setHideCard7(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage7}
              onChange={(e) => setLogoImage7(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage7}
              onChange={(e) => setLogoLightImage7(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
      <h3>Image 8</h3>
      <TextField
        id="outlined-basic"
        label="Légende"
        variant="outlined"
        value={legende8}
        onChange={(e) => {
          setLegende8(e.target.value);
        }}
      />
      <div>
        <p>Positioner l'image 8</p>
        <Slider
          aria-label="position1"
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={(e) => setImage8position(e.target.value)}
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
            <Switch
              checked={hideCard8}
              onChange={(e) => setHideCard8(e.target.checked)}
            />
          }
          label="Masquer Zone Vent / Neige / Séisme ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoImage8}
              onChange={(e) => setLogoImage8(e.target.checked)}
            />
          }
          label="Logo 123 STR sombre ?"
        />
        <FormControlLabel
          control={
            <Switch
              checked={logoLightImage8}
              onChange={(e) => setLogoLightImage8(e.target.checked)}
            />
          }
          label="Logo 123 STR clair ?"
        />
      </FormGroup>
    </React.Fragment>
  );
};

export default ImageSettings;
