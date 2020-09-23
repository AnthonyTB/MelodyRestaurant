import React from "react";
import { IMenuItem } from "../../../../interfaces";
import MenuItem from "../MenuItem/MenuItem";

interface IProps {
  List: IMenuItem[];
}

const MenuList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.List.map((item: IMenuItem) => (
        <li key={item.id}>
          <MenuItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
