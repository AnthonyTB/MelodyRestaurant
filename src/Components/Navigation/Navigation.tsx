import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
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

  console.log(props);

  return (
    <nav>
      {NavLinks.map((LinkItem: INavLink) => {
        if (
          LinkItem.LinkLocation.toLowerCase() !==
          props.location.pathname.toLowerCase()
        ) {
          return <Link to={LinkItem.LinkLocation}>{LinkItem.LinkTitle}</Link>;
        }
      })}
    </nav>
  );
};

export default Navigation;
