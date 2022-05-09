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
  const [legende4, setLegende4] = useState("");
  const [legende5, setLegende5] = useState("");
  const [legende6, setLegende6] = useState("");
  const [legende7, setLegende7] = useState("");
  const [legende8, setLegende8] = useState("");
  const [image1position, setImage1position] = useState(50);
  const [image2position, setImage2position] = useState(50);
  const [image3position, setImage3position] = useState(50);
  const [image4position, setImage4position] = useState(50);
  const [image5position, setImage5position] = useState(50);
  const [image6position, setImage6position] = useState(50);
  const [image7position, setImage7position] = useState(50);
  const [image8position, setImage8position] = useState(50);
  const [logoImage1, setLogoImage1] = useState(false);
  const [logoImage2, setLogoImage2] = useState(false);
  const [logoImage3, setLogoImage3] = useState(false);
  const [logoImage4, setLogoImage4] = useState(false);
  const [logoImage5, setLogoImage5] = useState(false);
  const [logoImage6, setLogoImage6] = useState(false);
  const [logoImage7, setLogoImage7] = useState(false);
  const [logoImage8, setLogoImage8] = useState(false);
  const [logoLightImage1, setLogoLightImage1] = useState(false);
  const [logoLightImage2, setLogoLightImage2] = useState(false);
  const [logoLightImage3, setLogoLightImage3] = useState(false);
  const [logoLightImage4, setLogoLightImage4] = useState(false);
  const [logoLightImage5, setLogoLightImage5] = useState(false);
  const [logoLightImage6, setLogoLightImage6] = useState(false);
  const [logoLightImage7, setLogoLightImage7] = useState(false);
  const [logoLightImage8, setLogoLightImage8] = useState(false);
  const [hideCard1, setHideCard1] = useState(false);
  const [hideCard2, setHideCard2] = useState(false);
  const [hideCard3, setHideCard3] = useState(false);
  const [hideCard4, setHideCard4] = useState(false);
  const [hideCard5, setHideCard5] = useState(false);
  const [hideCard6, setHideCard6] = useState(false);
  const [hideCard7, setHideCard7] = useState(false);
  const [hideCard8, setHideCard8] = useState(false);
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
        return `1/9 - ${legende1 ? legende1 : "Image 1"}`;
      case 1:
        return `2/9 - ${legende2 ? legende2 : "Image 2"}`;
      case 2:
        return `3/9 - ${legende3 ? legende3 : "Image 3"}`;
      case 3:
        return `4/9 - ${legende4 ? legende4 : "Image 4"}`;
      case 4:
        return `5/9 - ${legende5 ? legende5 : "Image 5"}`;
      case 5:
        return `6/9 - ${legende6 ? legende6 : "Image 6"}`;
      case 6:
        return `7/9 - ${legende7 ? legende7 : "Image 7"}`;
      case 7:
        return `8/9 - ${legende8 ? legende8 : "Image 8"}`;
      case 8:
        return "9/9 - Contact";

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
              hideCard={hideCard1}
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
              hideCard={hideCard2}
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
              hideCard={hideCard3}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[3]}
              index={3}
              imgPosition={image4position}
              logoStyle={logoImage4}
              logoLightStyle={logoLightImage4}
              legende={legende4}
              hideCard={hideCard4}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[4]}
              index={4}
              imgPosition={image5position}
              logoStyle={logoImage5}
              logoLightStyle={logoLightImage5}
              legende={legende5}
              hideCard={hideCard5}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[5]}
              index={5}
              imgPosition={image6position}
              logoStyle={logoImage6}
              logoLightStyle={logoLightImage6}
              legende={legende6}
              hideCard={hideCard6}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[6]}
              index={6}
              imgPosition={image7position}
              logoStyle={logoImage7}
              logoLightStyle={logoLightImage7}
              legende={legende7}
              hideCard={hideCard7}
            />
            <Image
              printRef={printRef}
              theme={theme}
              selectedCity={selectedCity}
              projectName={projectName}
              partner1={partner1}
              partner2={partner2}
              partner3={partner3}
              img={image[7]}
              index={7}
              imgPosition={image8position}
              logoStyle={logoImage8}
              logoLightStyle={logoLightImage8}
              legende={legende8}
              hideCard={hideCard8}
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
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[3]}
            index={3}
            imgPosition={image4position}
            logoStyle={logoImage4}
            logoLightStyle={logoLightImage4}
            legende={legende4}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[4]}
            index={4}
            imgPosition={image5position}
            logoStyle={logoImage5}
            logoLightStyle={logoLightImage5}
            legende={legende5}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[5]}
            index={5}
            imgPosition={image6position}
            logoStyle={logoImage6}
            logoLightStyle={logoLightImage6}
            legende={legende6}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[6]}
            index={6}
            imgPosition={image7position}
            logoStyle={logoImage7}
            logoLightStyle={logoLightImage7}
            legende={legende7}
          />
          <Image
            printRef={printRef}
            theme={theme}
            selectedCity={selectedCity}
            projectName={projectName}
            partner1={partner1}
            partner2={partner2}
            partner3={partner3}
            img={image[7]}
            index={7}
            imgPosition={image8position}
            logoStyle={logoImage8}
            logoLightStyle={logoLightImage8}
            legende={legende8}
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
