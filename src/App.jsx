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
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { FormDemo6 } from "./components/forms/FormDemo6";
import { FormDemo1b } from "./components/forms/FormDemo1b";
import { FormDemo2b } from "./components/forms/FormDemo2b";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { OmdbSearch } from "./components/api/OmdbSearch";
import { UseEffectDemo1 } from "./components/UseEffectDemo1";
import { ApiDemo3 } from "./components/api/ApiDemo3";
import { ApiDemo4 } from "./components/api/ApiDemo4";
import { Bounce, ToastContainer } from "react-toastify";
import { CreateProduct } from "./components/api/CreateProduct";
import { UpdateUser } from "./components/api/UpdateUser";
import { FormDemo7 } from "./components/forms/FormDemo7";
import { InsertProducts } from "./components/api/InsertProducts";
import { Mobile } from "./components/Mobile";
import { WaterFlow } from "./components/WaterFlow";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/shows" element={<NetflixShows />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/teamDetail/:id" element={<TeamDetail />}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1 />}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2 />}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3 />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/students" element={<Student />}></Route>
        <Route path="/tabledemo" element={<TableDemo />}></Route>
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/inputdemo2" element={<InputDemo2 />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route>
        <Route path="/formdemo6" element={<FormDemo6></FormDemo6>}></Route>
        <Route path="/formdemo7" element={<FormDemo7 />}></Route>
        <Route path="/formdemo1b" element={<FormDemo1b />}></Route>
        <Route path="/formdemo2b" element={<FormDemo2b />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/omdbsearch" element={<OmdbSearch />}></Route>
        <Route path="/useeffectdemo1" element={<UseEffectDemo1 />}></Route>
        <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
        <Route path="/apidemo4" element={<ApiDemo4 />}></Route>
        <Route path="/createproduct" element = {<CreateProduct/>}></Route>
        <Route path="/updateuser/:id" element ={<UpdateUser/>}></Route>
        <Route path="/insertproduct" element ={<InsertProducts/>}></Route>
        <Route path="/mobile" element ={<Mobile/>}></Route>
        <Route path="/waterflow" element = {<WaterFlow/>}></Route>
        {/* <Route path="/watch" element = {<Watch/>}></Route> */}
        {/* <Route path="/watch/dhurandhar" element = {<Watch/>}></Route> */}
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
