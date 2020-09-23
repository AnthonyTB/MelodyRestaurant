import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Message, AboutUs } from "./Components/";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <section className="Home">
      <Message />
      <AboutUs />
    </section>
  );
};

export default Home;
