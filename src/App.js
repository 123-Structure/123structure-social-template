import React, { useRef, useState, useEffect } from "react";
import "./App.css";
// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// OTHER
import Carousel from "react-material-ui-carousel";
// COMPONENTS
import Settings from "./components/Settings/Settings";
// import Presentation from "./components/Views/Presentation.jsx";
// import Zone from "./components/Views/Zone.jsx";
// import Maps from "./components/Views/Maps.jsx";
import Image from "./components/Views/Image.jsx";
// import Cloud from "./components/Views/Cloud.jsx";
import Contact from "./components/Views/Contact.jsx";
import Loading from "./components/Loading.jsx";
// IMAGES
import background from "./assets/img/background.png";

function App() {
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
  // const [picture, setPicture] = useState();
  // const [picturePosition, setPicturePosition] = useState(50);
  const [image, setImage] = useState([]);
  const [legende1, setLegende1] = useState("");
  const [legende2, setLegende2] = useState("");
  const [legende3, setLegende3] = useState("");
  const [image1position, setImage1position] = useState(50);
  const [image2position, setImage2position] = useState(50);
  const [image3position, setImage3position] = useState(50);
  const [logoImage1, setLogoImage1] = useState(false);
  const [logoImage2, setLogoImage2] = useState(false);
  const [logoImage3, setLogoImage3] = useState(false);
  const [logoLightImage1, setLogoLightImage1] = useState(false);
  const [logoLightImage2, setLogoLightImage2] = useState(false);
  const [logoLightImage3, setLogoLightImage3] = useState(false);
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");
  const [partner3, setPartner3] = useState("");
  // const [map1, setMap1] = useState("");
  // const [map2, setMap2] = useState("");
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

  const info = () => {
    switch (currentView) {
      case 0:
        return "1/4 - Image 1";

      case 1:
        return "2/4 - Image 2";

      case 2:
        return "3/4 - Image 3";

      case 3:
        return "4/4 - Contact";

      default:
        break;
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = "repeat";
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Loading theme={theme} />
        <Settings
          printRef={printRef}
          theme={theme}
          autoplay={autoplay}
          setAutoplay={setAutoplay}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          projectName={projectName}
          setProjectName={setProjectName}
          // setPicture={setPicture}
          // picturePosition={picturePosition}
          // setPicturePosition={setPicturePosition}
          setPartner1={setPartner1}
          setPartner2={setPartner2}
          setPartner3={setPartner3}
          // setMap1={setMap1}
          // setMap2={setMap2}
          setImage={setImage}
          legende1={legende1}
          legende2={legende2}
          legende3={legende3}
          setLegende1={setLegende1}
          setLegende2={setLegende2}
          setLegende3={setLegende3}
          setImage1position={setImage1position}
          setImage2position={setImage2position}
          setImage3position={setImage3position}
          setLogoImage1={setLogoImage1}
          setLogoImage2={setLogoImage2}
          setLogoImage3={setLogoImage3}
          setLogoLightImage1={setLogoLightImage1}
          setLogoLightImage2={setLogoLightImage2}
          setLogoLightImage3={setLogoLightImage3}
        />
        <div className="Preview">
          <Carousel
            autoPlay={autoplay}
            indicators={false}
            onChange={(e) => setCurrentView(e)}
            index={currentView}
            swipe={false}
          >
            {/* <Presentation
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
            /> */}
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
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[0]}
              index={0}
              imgPosition={image1position}
              logoStyle={logoImage1}
              logoLightStyle={logoLightImage1}
              legende={legende1}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[1]}
              index={1}
              imgPosition={image2position}
              logoStyle={logoImage2}
              logoLightStyle={logoLightImage2}
              legende={legende2}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[2]}
              index={2}
              imgPosition={image3position}
              logoStyle={logoImage3}
              logoLightStyle={logoLightImage3}
              legende={legende3}
            />
            {/* <Cloud
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
            /> */}
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
            {info()}
          </h4>
        </div>
        <div className="download-card" style={{ display: "none" }}>
          {/* <Presentation
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
            /> */}
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
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[0]}
            index={0}
            imgPosition={image1position}
            logoStyle={logoImage1}
            logoLightStyle={logoLightImage1}
            legende={legende1}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[1]}
            index={1}
            imgPosition={image2position}
            logoStyle={logoImage2}
            logoLightStyle={logoLightImage2}
            legende={legende2}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[2]}
            index={2}
            imgPosition={image3position}
            logoStyle={logoImage3}
            logoLightStyle={logoLightImage3}
            legende={legende3}
          />
          {/* <Cloud
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner={partner}
            /> */}
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
