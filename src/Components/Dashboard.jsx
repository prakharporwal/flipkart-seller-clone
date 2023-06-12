import React from "react";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <div>
          <img src="company-logo" alt="logo"></img>
        </div>
        <ul>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>Fun</a>
          </li>
          <li>
            <a>Hello</a>
          </li>
        </ul>
      </nav>
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
