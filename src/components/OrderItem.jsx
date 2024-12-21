import "../orderDetials.css";

const OrderItem = ({ el }) => {
  return (
    <div className="section">
      <h3>{el.category}</h3>
      <div className="item">
        <img src={el.imageUrl} alt="Today’s Available Dishes" />
        <div className="item-details">
          <p>{el.dishName}</p>
          <p className="price">$99</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
