import React from "react";
import { MenuItems } from "../../../../Components/MenuItemList";
import { IHouseSpecialityItem } from "../../../../interfaces";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="AboutUs">
      <h2>About Us</h2>
      <p>
        Melody's Coastal Café offers a somewhat eclectic menu ranging from fresh
        seafood to hand pattied Angus chuck burgers as well as hickory smoked
        BBQ brisket and pork. Along with our regular menu items, we also have
        weekly/daily specials. Check out our Chef Specials board when you come
        in or call to see what we have today!
      </p>
      <h2>Events</h2>
      <p>Live bands every saturday night!</p>
      <h3>House Specialities</h3>
      <ul className="HouseSpecialities">
        {MenuItems.HouseSpecialityItems.map(
          (item: IHouseSpecialityItem, idx: number) => (
            <li key={idx}>
              <h4>{item.ItemName}</h4>
              <p>{item.ItemDesc}</p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default AboutUs;
