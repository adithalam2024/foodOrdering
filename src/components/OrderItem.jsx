// import "../orderDetials.css";

const OrderItem = ({ el }) => {
  return (
    <div class="column is-one-third">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={el.imageUrl} alt="Paneer Butter Masala" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-5">{el.dishName}</p>
          <p>
            <strong>Quantity:</strong> 2
          </p>
          <p>
            <strong>Special Instructions:</strong> Less spicy, extra butter
          </p>
        </div>
      </div>
    </div>
    // <div className="section">
    //   <h3>{el.category}</h3>
    //   <div className="item">
    //     <img src={el.imageUrl} alt="Today’s Available Dishes" />
    //     <div className="item-details">
    //       <p>{el.dishName}</p>
    //       <p className="price">$99</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OrderItem;
