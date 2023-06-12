import React, { Component, StrictMode } from "react";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <div>
          <Dashboard></Dashboard>
        </div>
      </StrictMode>
    );
  }
}

export default App;
