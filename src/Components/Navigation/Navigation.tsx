import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./Navigation.css";

interface INavLink {
  LinkTitle: string;
  LinkLocation: string;
}

const Navigation: React.FC<RouteComponentProps> = (props) => {
  const NavLinks: INavLink[] = [
    { LinkTitle: "Home", LinkLocation: "/" },
    { LinkTitle: "Menu", LinkLocation: "/Menu" },
  ];

  return (
    <nav>
      {/* {NavLinks.map((LinkItem: INavLink) => {
        if (LinkItem.LinkLocation.toLowerCase() !== props) {
          return <Link to={LinkItem.LinkLocation}>{LinkItem.LinkTitle}</Link>;
        }
      })} */}
    </nav>
  );
};

export default Navigation;
