import React, { useRef, useState, useEffect } from "react";
import "./App.css";
// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// OTHER
import Carousel from "react-material-ui-carousel";
// COMPONENTS
import Settings from "./components/Settings/Settings";
import Presentation from "./components/Views/Presentation/Presentation.jsx";
import Zone from "./components/Views/Zone/Zone.jsx";
import Maps from "./components/Views/Maps/Maps.jsx";
import Image from "./components/Views/Image/Image.jsx";
import Cloud from "./components/Views/Cloud/Cloud";
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
  const [image, setImage] = useState([]);
  const [image1position, setImage1position] = useState(50);
  const [image2position, setImage2position] = useState(50);
  const [image3position, setImage3position] = useState(50);
  const [logoImage1, setLogoImage1] = useState(false);
  const [logoImage2, setLogoImage2] = useState(false);
  const [logoImage3, setLogoImage3] = useState(false);
  const [partner, setPartner] = useState("");
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
      width: "1000px",
      height: "1000px",
    },
  };

  const subtitle = () => {
    switch (currentView) {
      case 0:
        return "1/8 - Presentation";

      case 1:
        return "2/8 - Localisation";

      case 2:
        return "3/8 - Zone Sismique - Vent - Neige";

      case 3:
        return "4/8 - Image 1";

      case 4:
        return "5/8 - Image 2";

      case 5:
        return "6/8 - Image 3";

      case 6:
        return "7/8 - Mots clés";

      case 7:
        return "8/8 - Contact";

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
          setPartner={setPartner}
          setMap1={setMap1}
          setMap2={setMap2}
          setImage={setImage}
          setImage1position={setImage1position}
          setImage2position={setImage2position}
          setImage3position={setImage3position}
          setLogoImage1={setLogoImage1}
          setLogoImage2={setLogoImage2}
          setLogoImage3={setLogoImage3}
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
              partner={partner}
            />
            <Maps
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              map1={map1}
              map2={map2}
              partner={partner}
            />
            <Zone
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
            />
            {/* {image.map((img, index) => (
              <Image
                printRef={printRef}
                theme={theme}
                selectedCity={selectedCity}
                projectName={projectName}
                partner={partner}
                img={img}
                key={index}
              />
            ))} */}
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
              img={image[0]}
              index={3}
              imgPosition={image1position}
              logoStyle={logoImage1}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
              img={image[1]}
              index={4}
              imgPosition={image2position}
              logoStyle={logoImage2}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
              img={image[2]}
              index={5}
              imgPosition={image3position}
              logoStyle={logoImage3}
            />
            <Cloud
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
            />
            <Contact
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
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
            partner={partner}
          />
          <Maps
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            map1={map1}
            map2={map2}
            partner={partner}
          />
          <Zone
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner={partner}
          />
          {/* {image.map((img, index) => (
              <Image
                printRef={printRef}
                theme={theme}
                selectedCity={selectedCity}
                projectName={projectName}
                partner={partner}
                img={img}
                key={index}
              />
            ))} */}
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner={partner}
            img={image[0]}
            index={3}
            imgPosition={image1position}
            logoStyle={logoImage1}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner={partner}
            img={image[1]}
            index={4}
            imgPosition={image2position}
            logoStyle={logoImage2}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner={partner}
            img={image[2]}
            index={5}
            imgPosition={image3position}
            logoStyle={logoImage3}
          />
          <Cloud
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner={partner}
          />
          <Contact
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
