import React from "react";
import "./Menu.css";
import { RouteComponentProps } from "react-router-dom";
import { MenuSection } from "./Components";
import { MenuItems } from "../../Components/MenuItemList";
import { IWingCount } from "../../interfaces";
import useToggleList from "../../Components/Hooks/useToggleList";
import Button from "../../Components/Button/Button";
import { ButtonType } from "../../enums";

const Menu: React.FC<RouteComponentProps> = () => {
  const [isListShowing, ToggleList, setIsShowing] = useToggleList(
    false,
    MenuItems.WingItems.Sauces
  );

  const renderWingsSection = () => {
    return (
      <div className="Wings">
        <>
          <h2>{MenuItems.WingItems.ItemName}</h2>
          <h3>
            Count:{" "}
            {MenuItems.WingItems.Counts.map(
              (count: IWingCount) => count.Count
            ).join(", ")}
          </h3>
          <Button
            Label={isListShowing ? "Hide Sauces" : "Show Sauces"}
            Type={ButtonType.Button}
            isPrimary={true}
            onClick={() => setIsShowing(!isListShowing)}
          />
          <ToggleList />
        </>
      </div>
    );
  };

  return (
    <section className="Menu">
      <MenuSection SectionName={"Appetizers"} List={MenuItems.AppetizerItems} />
      <hr />
      <MenuSection
        SectionName={"Sandwiches"}
        Desc={"All po’ boys come with your choice of ONE side"}
        List={MenuItems.SandwichItems}
      />
      <hr />
      <MenuSection
        SectionName={"Burgers"}
        Desc={
          "Never frozen, certified Angus beef patties served with your choice of ONE side"
        }
        List={MenuItems.BurgerItems}
      />
      <hr />
      <MenuSection
        SectionName={"Platters"}
        Desc={"All platters come with your choice of ONE side"}
        List={MenuItems.PlatterItems}
      />
      <hr />
      <MenuSection
        SectionName={"Combo Platters"}
        List={MenuItems.ComboPlatterItems}
      />
      <hr />
      <MenuSection
        SectionName={"Ron's Platter"}
        List={MenuItems.RonsPlatterItems}
      />
      <hr />
      <MenuSection
        SectionName={"Coastal Tacos'"}
        Desc={"Three tacos with your choice of ONE side"}
        List={MenuItems.TacoItems}
      />
      <hr />
      {renderWingsSection()}
      <hr />
      <MenuSection
        SectionName={"Kelli's Secret Menu"}
        Desc={"All sandwiches come with your choice of ONE side"}
        List={MenuItems.SecretMenuItems}
      />
      <hr />
      <MenuSection SectionName={"Salads"} List={MenuItems.SaladMenuItems} />
      <hr />
      <MenuSection SectionName={"Soups"} List={MenuItems.SoupMenuItems} />
      <hr />
      <MenuSection SectionName={"Kids Corner"} List={MenuItems.KidMenuItems} />
      <hr />
      <MenuSection
        SectionName={"Delectable Desserts"}
        List={MenuItems.DessertMenuItems}
      />
    </section>
  );
};

export default Menu;
