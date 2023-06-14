import React, { Component, StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ServicesPage from "./Pages/ServicesPage";
import FeeStructurePage from "./Pages/FeeStructurePage";
import ResourcesPage from "./Pages/ResourcesPage";
import FAQPage from "./Pages/FAQPage";

import "./App.scss";

// // lazy imports
// const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
// const FAQPage = React.lazy(() => import("./Pages/FAQPage"));
// const ResourcesPage = React.lazy(() => import("./Pages/ResourcesPage"));
// const ServicesPage = React.lazy(() => import("./Pages/ServicesPage"));
// const FeeStructurePage = React.lazy(() => import("./Pages/FeeStructurePage"));

class App extends Component {
  render() {
    return (
      <StrictMode>
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/services" element={<ServicesPage />}></Route>
              <Route
                path="/fee-structure"
                element={<FeeStructurePage />}
              ></Route>
              <Route path="/resource" element={<ResourcesPage />}></Route>
              <Route path="/faq" element={<FAQPage />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      </StrictMode>
    );
  }
}

export default App;
