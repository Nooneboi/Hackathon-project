import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkMode/DarkModeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTemperature0 } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div className="app">
      <ul className="nav">
        <li>
          <Link to="/Todo" className="nav-link"><FontAwesomeIcon className="i" icon={faBars}/><span> To-Do List</span></Link>
        </li>
        <li>
          <Link to="/Reg" className="nav-link"> <FontAwesomeIcon className="i" icon={faUser}/><span> User Registration</span></Link>
        </li>
        <li>
          <Link to="/Convert" className="nav-link"><FontAwesomeIcon className="i" icon={faTemperature0}/><span> Temperature Converter</span></Link>
        </li>
      </ul>
      <DarkModeButton />
    </div>
  );
}

export default Navbar;