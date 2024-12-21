import { Link } from "react-router-dom";
import "../index.css";

import MenuItem from "./MenuItem";

const Menu = ({ customerData, dishes, setDishes, countries }) => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      <div className="section">
        <h2 className="section-title">Today's Available Dishes</h2>
        {dishes.map((el) => {
          if (el.category == "regular") {
            return (
              <MenuItem
                e={el}
                key={el.id}
                customerData={customerData}
                setDishes={setDishes}
                dishes={dishes}
              />
            );
          }
        })}
      </div>

      <div className="section">
        <h2 className="section-title">Add ons</h2>
        {dishes.map((el) => {
          if (el.category == "addOns") {
            return (
              <MenuItem
                e={el}
                key={el.id}
                customerData={customerData}
                setDishes={setDishes}
                dishes={dishes}
              />
            );
          }
        })}
      </div>

      <button className="next-button">
        <Link to="/orderDetials">Next</Link>
      </button>
    </div>
  );
};

export default Menu;
