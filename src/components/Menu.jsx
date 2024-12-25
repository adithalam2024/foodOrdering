import { Link } from "react-router-dom";
// import "../index.css";

import MenuItem from "./MenuItem";

const Menu = ({ customerData, dishes, setDishes, countries }) => {
  return (
    <>
      <section class="section">
        <div class="container">
          <h2 class="title has-text-centered p-2">Our Menu</h2>

          <div class="mt-6">
            <h3 class="subtitle is-3">Today's dishes</h3>
            <div className="columns is-multiline">
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
          </div>

          <div className="mt-6">
            <h3 class="subtitle is-3">Ala la carte</h3>
            <div className="columns is-multiline">
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
          </div>
        </div>
      </section>
      <div class="section">
        <div class="container has-text-centered">
          <button class="button is-success is-large is-fullwidth">
            <Link to="/orderDetials">Next</Link>
          </button>
        </div>
      </div>
    </>

    // <div className="container is-fluid">
    //   <div className="section">
    //     <h1 className="title">Menu</h1>
    //     <h2 className="subtitle">Today's Available Dishes</h2>
    //     {dishes.map((el) => {
    //       if (el.category == "regular") {
    //         return (
    //           <MenuItem
    //             e={el}
    //             key={el.id}
    //             customerData={customerData}
    //             setDishes={setDishes}
    //             dishes={dishes}
    //           />
    //         );
    //       }
    //     })}
    //   </div>

    //   <div className="section">
    //     <h2 className="subtitle">Add ons</h2>
    //     {dishes.map((el) => {
    //       if (el.category == "addOns") {
    //         return (
    //           <MenuItem
    //             e={el}
    //             key={el.id}
    //             customerData={customerData}
    //             setDishes={setDishes}
    //             dishes={dishes}
    //           />
    //         );
    //       }
    //     })}
    //   </div>

    //   <div class="field">
    //     <div class="control">
    //       <button className="button is-fullwidth is-warning">
    //         <Link to="/orderDetials">Next</Link>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Menu;
