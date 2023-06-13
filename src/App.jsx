import React, { Component, StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./Pages/ServicesPage";
import FAQPage from "./Pages/FAQPage";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));

class App extends Component {
  render() {
    return (
      <StrictMode>
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/services" element={<ServicesPage />}></Route>
              <Route path="/fee-structure" element={<ServicesPage />}></Route>
              <Route path="/resource" element={<ServicesPage />}></Route>
              <Route path="/faq" element={<FAQPage />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      </StrictMode>
    );
  }
}

export default App;
