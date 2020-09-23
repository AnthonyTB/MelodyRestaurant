import React, { FunctionComponent } from "react";
import "./App.css";
import { RouteComponentProps, Router } from "@reach/router";
import { Footer, Navigation } from "./Components";
import { Home, Menu, Boundary } from "./Routes/";

const App: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <Menu path="/menu" />
        <Boundary default />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
