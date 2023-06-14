import React from "react";
import { Link } from "react-router-dom";

const FAQPage = (props) => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      FAQs
      <Link to="/">
        <span>{"<-- Back"}</span>
      </Link>
    </div>
  );
};
export default FAQPage;
