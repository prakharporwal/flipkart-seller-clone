import React from "react";
import { Link } from "react-router-dom";

const ResourcesPage = (props) => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      Resources Page
      <Link to="/">
        <span>{"<-- Back"}</span>
      </Link>
    </div>
  );
};

export default ResourcesPage;
