// import "../Confirmation.css";

const Confirmation = ({
  setConfirmed,
  customerData,
  supabase,
  cusData,
  setCusData,
}) => {
  console.log(cusData);
  async function deleteRow(no) {
    const response = await supabase
      .from("customerData")
      .delete()
      .eq("roomNo", no);
    return response;
  }

  const buttonHandler = () => {
    console.log(customerData);
    deleteRow(cusData["roomNo"]);
    setConfirmed(false);
  };

  return (
    <section class="section">
      <div class="container">
        <div class="has-text-centered">
          <figure class="image is-128x128 is-inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              width="128"
              height="128"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path
                d="M9.75 16.25L5.5 12l1.4-1.4 2.85 2.85L17.1 7l1.4 1.4-7.75 7.85z"
                fill="white"
              />
            </svg>
          </figure>
          <h2 class="title mt-3">Your Order Has Been Confirmed!</h2>
        </div>

        <div class="columns is-multiline mt-5">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://via.placeholder.com/300x225"
                    alt="Paneer Butter Masala"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">Paneer Butter Masala</p>
                <p>
                  <strong>Quantity:</strong> 2
                </p>
                <p>
                  <strong>Special Instructions:</strong> Less spicy, extra
                  butter
                </p>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://via.placeholder.com/300x225"
                    alt="Chicken Biryani"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">Chicken Biryani</p>
                <p>
                  <strong>Quantity:</strong> 1
                </p>
                <p>
                  <strong>Special Instructions:</strong> No onions
                </p>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://via.placeholder.com/300x225"
                    alt="Veg Biryani"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-5">Veg Biryani</p>
                <p>
                  <strong>Quantity:</strong> 3
                </p>
                <p>
                  <strong>Special Instructions:</strong> Extra masala
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="has-text-centered mt-5">
          <button class="button is-danger is-large" onClick={buttonHandler}>
            Cancel Order
          </button>
        </div>
      </div>
    </section>

    // <div className="confirmation-container">
    //   <h1 className="confirmation-title">Confirmed</h1>
    //   <div className="confirmation-icon">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       className="checkmark-icon"
    //     >
    //       <circle cx="12" cy="12" r="10" />
    //       <polyline points="9 12 12 15 16 10" />
    //     </svg>
    //   </div>
    //   <p className="confirmation-message">Successfully Placed the order</p>
    //   <button className="cancel-button" onClick={buttonHandler}>
    //     Cancel the order
    //   </button>
    // </div>
  );
};

export default Confirmation;
