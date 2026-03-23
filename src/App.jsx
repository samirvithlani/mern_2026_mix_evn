import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { ContentComponent } from "./components/ContentComponent";
import { ConditinalStylingDemo1 } from "./components/ConditinalStylingDemo1";

function App() {
 

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <ConditinalStylingDemo1></ConditinalStylingDemo1>
      {/* <ContentComponent></ContentComponent> */}
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export default App;
