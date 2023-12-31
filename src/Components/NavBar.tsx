import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import data from "../data.json";
import "./NavBar.scss";

const NavBar: React.FunctionComponent<any> = (props) => {
  return (
    <nav className="navbar">
      <div className="options-wrapper">
        <Link to="/">
          <div className="logo-wrapper">
            <img className="company-logo" src={data.logo} alt="logo"></img>
          </div>
        </Link>
        <ul className="nav-options">
          <li>
            <Link to={"/fee-structure"}>Fee Structure</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to="/resource">Resources</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/shopsy">Shopsy</Link>
          </li>
        </ul>
      </div>
      <div className="action-buttons">
        <SecondaryButton>Start Selling</SecondaryButton>
        <PrimaryButton>Login</PrimaryButton>
      </div>
    </nav>
  );
};

export default NavBar;
