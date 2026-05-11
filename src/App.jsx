import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { ContentComponent } from "./components/ContentComponent";
import { ConditinalStylingDemo1 } from "./components/ConditinalStylingDemo1";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/Netflix/NetflixHome";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { HomeComponent } from "./components/HomeComponent";
import { Navbar } from "./components/Navbar";
import { Error404 } from "./components/Error404";
import { Watch } from "./components/Netflix/Watch";
import { Teams } from "./components/ipl/Teams";
import { TeamDetail } from "./components/ipl/TeamDetail";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Employees } from "./components/Employees";
import { Student } from "./components/Student";
import { TableDemo } from "./components/TableDemo";
import { InputDemo1 } from "./components/InputDemo1";
import { InputDemo2 } from "./components/InputDemo2";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";

function App() {
 

  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element ={<HomeComponent/>}></Route>
          <Route path="/netflixhome" element={<NetflixHome/>}></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
          <Route path="/shows" element ={<NetflixShows/>}></Route>
          <Route path="/teams" element ={<Teams/>}></Route>
          <Route path="/teamDetail/:id" element ={<TeamDetail/>}></Route>
          <Route path ="/usestatedemo1" element = {<UseStateDemo1/>}></Route>
          <Route path ="/usestatedemo2" element = {<UseStateDemo2/>}></Route>
          <Route path ="/usestatedemo3" element = {<UseStateDemo3/>}></Route>    
          <Route path="/employees" element = {<Employees/>}></Route>
          <Route path="/students" element = {<Student/>}></Route>
          <Route path="/tabledemo" element={<TableDemo/>}></Route>
          <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
          <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
          <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
          <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
          {/* <Route path="/watch" element = {<Watch/>}></Route> */}
          {/* <Route path="/watch/dhurandhar" element = {<Watch/>}></Route> */}
          <Route path="/watch/:name" element = {<Watch/>}></Route>
          <Route path="/*" element = {<Error404/>}></Route>
          
        </Routes>
    </div>
  );
}

export default App;
