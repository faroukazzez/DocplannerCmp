import React from "react";
import "./App.css";
import "./docplanner-components/NavigationCmp";
import NavigationCmp from "./docplanner-components/NavigationCmp";
import "./docplanner-components/InitialMainCmp";
import InitialMainCmp from "./docplanner-components/InitialMainCmp";
import "./docplanner-components/ServicesCmp";
import ServicesCmp from "./docplanner-components/ServicesCmp";
import "./docplanner-components/MainglobalCmp";
import GlobalCmp from "./docplanner-components/MainglobalCmp";
import "./docplanner-components/footerBoxesCmp";
import FooterBox from "./docplanner-components/footerBoxesCmp";
import MainFooter from "./docplanner-components/mainFooterCmp";
import "./docplanner-components/FooterImgCmp";
import FooterImg from "./docplanner-components/FooterImgCmp";
import FooterCmp from "./docplanner-components/footerCmp";


const arraybox = [
  {
    name: "For patients",
    description:
      "Find a doctor, book a visit and solve any health-related doubt",
    imageLink: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    choosecountry: true,
  },
  {
    name: "For doctors",
    description: "Save time managing visits and cut no-shows by half",
    imageLink: "https://www.docplanner.com/img/screen-saas@2x.png",
    choosecountry: false,
  },
];
function App() {
  return (
    <div className="App">
      <NavigationCmp />;
      <InitialMainCmp />
      <div className="services">
        {arraybox.map((e) => (
          <ServicesCmp info={e} />
        ))}
      </div>
      <GlobalCmp />
      <FooterBox />
      <MainFooter />
      <FooterImg />
      <FooterCmp />
    </div>
  );
}

export default App;
