import React from "react";
import NavBar from "./NavBar";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NavBar />
      <section>
        <textarea title="item-description"></textarea>
      </section>
      <article>
        <img src="" alt="product-image" />
      </article>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default Dashboard;
