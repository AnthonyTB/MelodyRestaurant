import React from "react";
import { IMenuItem, IWings } from "../../../../interfaces";
import MenuList from "../MenuList/MenuList";
import "./MenuSection.css";

interface IProps {
  SectionName: string;
  List: IMenuItem[];
  Desc?: string;
}

const MenuSection: React.FC<IProps> = (props) => {
  return (
    <div className={props.SectionName}>
      <h2>{props.SectionName}</h2>
      <p>{props.Desc}</p>
      <MenuList List={props.List} />
    </div>
  );
};

export default MenuSection;
