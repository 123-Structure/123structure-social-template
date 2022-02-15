import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// OTHER
import Carousel from "react-material-ui-carousel";
// COMPONENTS
import Settings from "./components/Settings/Settings";
import Presentation from "./components/Views/Presentation/Presentation.jsx";
import Zone from "./components/Views/Zone/Zone.jsx";
import Maps from "./components/Views/Maps/Maps.jsx";
import Contact from "./components/Views/Contact/Contact.jsx";
// IMAGES
import background from "./assets/img/background.png";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = "repeat";
  }, []);

  const customTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#ffcc00",
      },
      secondary: {
        main: "#f28e1c",
      },
    },
  });

  const printRef = useRef([]);

  const [projectName, setProjectName] = useState("");
  const [selectedCity, setSelectedCity] = useState({});
  const [picture, setPicture] = useState();
  const [picturePosition, setPicturePosition] = useState(50);
  const [map1, setMap1] = useState("");
  const [map2, setMap2] = useState("");
  const [autoplay, setAutoplay] = useState(false);
  const [currentView, setCurrentView] = useState(0);

  const theme = {
    color: {
      dark: "#231f20",
      light: "#f2f2f2",
      main: "#ffcc00",
      secondary: "#f28e1c",
    },
    dimension: {
      width: "600px",
      height: "600px",
    },
  };

  const subtitle = () => {
    switch (currentView) {
      case 0:
        return "1/4 - Presentation";

      case 1:
        return "2/4 - Localisation";

      case 2:
        return "3/4 - Zone Sismique / Vent / Neige";

      case 3:
        return "4/4 - Contact";

      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Settings
          printRef={printRef}
          theme={theme}
          autoplay={autoplay}
          setAutoplay={setAutoplay}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          projectName={projectName}
          setProjectName={setProjectName}
          setPicture={setPicture}
          picturePosition={picturePosition}
          setPicturePosition={setPicturePosition}
          setMap1={setMap1}
          setMap2={setMap2}
        />
        <div className="Preview">
          <Carousel
            autoPlay={autoplay}
            indicators={false}
            onChange={(e) => setCurrentView(e)}
            index={currentView}
            swipe={false}
          >
            <Presentation
              printRef={printRef}
              theme={theme}
              projectName={projectName}
              selectedCity={selectedCity}
              picture={picture}
              picturePosition={picturePosition}
            />
            <Maps
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              map1={map1}
              map2={map2}
            />
            <Zone
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
            />
            <Contact
              printRef={printRef}
              theme={theme}
              projectName={projectName}
            />
          </Carousel>
          <h4
            style={{
              position: "absolute",
              color: theme.color.dark,
              background: "rgb(255, 250, 230,0.5)", // Make sure this color has an opacity of less than 1
              backdropFilter: "blur(4px)", // This be the blur
              borderRadius: "8px",
              padding: "16px",
              marginTop: "8px",
            }}
          >
            {subtitle()}
          </h4>
        </div>
        <div className="download-card" style={{ display: "none" }}>
          <Presentation
            printRef={printRef}
            theme={theme}
            projectName={projectName}
            selectedCity={selectedCity}
            picture={picture}
            picturePosition={picturePosition}
          />
          <Maps
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            map1={map1}
            map2={map2}
          />
          <Zone
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
          />
          <Contact
            printRef={printRef}
            theme={theme}
            projectName={projectName}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
