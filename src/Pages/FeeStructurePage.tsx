import React from "react";
import { Link } from "react-router-dom";

const FeeStructurePage: React.FunctionComponent<any> = (props) => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      Fee Structure
      <Link to="/">
        <span>{"<-- Back"}</span>
      </Link>
    </div>
  );
};

export default FeeStructurePage;
