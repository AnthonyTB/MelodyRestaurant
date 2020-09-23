import { RouteComponentProps, Redirect, Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import "./Boundary.css";

const Boundary: React.FC<RouteComponentProps> = () => {
  const [redirect, setRedirect] = useState<boolean | string>(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 5000);
  }, []);

  return (
    <div className="Boundary">
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds
        </h1>
      )}
    </div>
  );
};

export default Boundary;
