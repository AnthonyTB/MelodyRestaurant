import React from "react";
import "./Menu.css";
import { RouteComponentProps } from "@reach/router";
import { MenuSection } from "./Components";
import {
  AppetizerItems,
  BurgerItems,
  ComboPlatterItems,
  DessertMenuItems,
  KidMenuItems,
  PlatterItems,
  RonsPlatterItems,
  SaladMenuItems,
  SandwichItems,
  SecretMenuItems,
  SoupMenuItems,
  TacoItems,
  WingItems,
} from "../../Components/MenuItemList";
import { IWingCount, IWings } from "../../interfaces";

const Menu: React.FC<RouteComponentProps> = () => {
  const renderWingsSection = () => {
    return (
      <div className="Wings">
        {WingItems.map((item: IWings) => {
          return (
            <>
              <h2>{item.ItemName}</h2>
              <h3>
                Count:{" "}
                {item.Counts.map((count: IWingCount) => count.Count).join(", ")}
              </h3>
              <ul>
                {item.Sauces.map((sauce: string, idx: number) => (
                  <li key={idx}>
                    <span>{sauce}</span>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <section className="Menu">
      <MenuSection SectionName={"Appetizers"} List={AppetizerItems} />
      <hr />
      <MenuSection
        SectionName={"Sandwiches"}
        Desc={"All po’ boys come with your choice of ONE side"}
        List={SandwichItems}
      />
      <hr />
      <MenuSection
        SectionName={"Burgers"}
        Desc={
          "Never frozen, certified Angus beef patties served with your choice of ONE side"
        }
        List={BurgerItems}
      />
      <hr />
      <MenuSection
        SectionName={"Platters"}
        Desc={"All platters come with your choice of ONE side"}
        List={PlatterItems}
      />
      <hr />
      <MenuSection SectionName={"Combo Platters"} List={ComboPlatterItems} />
      <hr />
      <MenuSection SectionName={"Ron's Platter"} List={RonsPlatterItems} />
      <hr />
      <MenuSection
        SectionName={"Coastal Tacos'"}
        Desc={"Three tacos with your choice of ONE side"}
        List={TacoItems}
      />
      <hr />
      {renderWingsSection()}
      <hr />
      <MenuSection
        SectionName={"Kelli's Secret Menu"}
        Desc={"All sandwiches come with your choice of ONE side"}
        List={SecretMenuItems}
      />
      <hr />
      <MenuSection SectionName={"Salads"} List={SaladMenuItems} />
      <hr />
      <MenuSection SectionName={"Soups"} List={SoupMenuItems} />
      <hr />
      <MenuSection SectionName={"Kids Corner"} List={KidMenuItems} />
      <hr />
      <MenuSection
        SectionName={"Delectable Desserts"}
        List={DessertMenuItems}
      />
    </section>
  );
};

export default Menu;