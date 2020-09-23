import React from "react";
import { IMenuItem, IVaribleItemPrice } from "../../../../interfaces";
import "./MenuItem.css";

const MenuItem: React.FC<IMenuItem> = (props) => {
  const renderPrice = () => {
    if (Array.isArray(props.ItemCost)) {
      return (
        <>
          {props.ItemCost.map((cost: IVaribleItemPrice) => {
            return (
              <>
                <span className="OptionName">{cost.OptionName}</span>
                {cost.OptionCookVariation ? (
                  <span className="OptionCook">{cost.OptionCookVariation}</span>
                ) : null}
                <span className="OptionValue">${cost.OptionValue}</span>
              </>
            );
          })}
        </>
      );
    } else {
      return <span>${props.ItemCost}</span>;
    }
  };

  return (
    <>
      <h3>{props.ItemName}</h3>
      <p>{props.ItemDesc}</p>
      <div className="prices">{renderPrice()}</div>
    </>
  );
};

export default MenuItem;
