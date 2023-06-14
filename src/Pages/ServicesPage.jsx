import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = (props) => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      Services Page
      <Link to="/">
        <span>{"<-- Back"}</span>
      </Link>
    </div>
  );
};

export default ServicesPage;
