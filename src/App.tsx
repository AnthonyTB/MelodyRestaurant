import React from "react";
import "./App.css";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { Footer, Navigation } from "./Components";
import { Home, Menu, Boundary } from "./Routes/";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route
        render={(routeProps: RouteComponentProps) => (
          <Navigation {...routeProps} />
        )}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps: RouteComponentProps) => <Home {...routeProps} />}
        />
        <Route
          exact
          path="/menu"
          render={(routeProps: RouteComponentProps) => <Menu {...routeProps} />}
        />
        <Boundary />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
