import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

export const Navbar = () => {
  const {theme,settheme} = useContext(ThemeContext)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar 
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <button onClick={()=>{settheme(theme=="dark"?"light":"dark")}} className="btn btn-primary">CHNAGE THEME {theme}</button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Netflix Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/shows">
                Netflix Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/teams">
                IPL TEAMS
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo1">
                USE STATE DEMO 1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo2">
                USE STATE DEMO 2
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo3">
                USE STATE DEMO 3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/employees">
                employees
              </Link>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/students">
                students
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/tabledemo">
                tabledemo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo5">
                formdemo5
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo6">
                formdemo6
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1b">
                formdemo1b
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2b">
                formdemo2b
              </Link>
            </li> */}

              {/* <li class="nav-item active">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/omdbsearch">
                omdbsearch
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useeffectdemo1">
                useeffectdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo3">
                apidemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo4">
                apidemo4
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/createproduct">
                createproduct
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/formdemo7">
                formdemo7
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/insertproduct">
                insertproduct
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/mobile">
                mobile
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/WaterFlow">
                WaterFlow
              </Link>
          </li> */}
          <li class="nav-item active">
              <Link class="nav-link" to="/usememodemo">
                usememodemo
              </Link>
          </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/findbomb">
                findbomb
              </Link>
          </li>
          
          
          
            
            
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
