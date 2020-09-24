import React from "react";
import "./App.css";
import { RouteComponentProps, Router } from "@reach/router";
import { Footer, Navigation } from "./Components";
import { Home, Menu, Boundary } from "./Routes/";

const App: React.FC<RouteComponentProps> = () => {
  return (
    <div className="App">
      <Router>
        <Navigation path="" />
        <Home path="/" />
        <Menu path="/menu" />
        <Boundary default />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
