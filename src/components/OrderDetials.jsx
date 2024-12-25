import OrderItem from "./OrderItem";
// import "../orderDetials.css";
import { Link } from "react-router-dom";

function OrderDetails({ customerData, setConfirmed }) {
  return (
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered">Order Details</h2>

        <div class="columns is-multiline">
          {customerData.dishesOrdered.map((el) => {
            return <OrderItem el={el} key={el.id} />;
          })}
        </div>

        <div class="has-text-centered mt-5">
          <button
            class="button is-success is-large"
            onClick={() => setConfirmed(true)}
          >
            Confirm Details
          </button>
        </div>
      </div>
    </section>
    // <div className="order-details">
    //   <h2>Order details</h2>
    //   {customerData.dishesOrdered.map((el) => {
    //     return <OrderItem el={el} key={el.id} />;
    //   })}
    //   <div className="total">
    //     <p>Total</p>
    //     <p className="price">$249</p>
    //   </div>

    //   <button className="confirm-btn" onClick={() => setConfirmed(true)}>
    //     Confirm Order
    //   </button>
    //   <button className="confirm-btn">
    //     <Link to="/menu">Go back</Link>
    //   </button>
    // </div>
  );
}

export default OrderDetails;
