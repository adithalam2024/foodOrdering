import "../Confirmation.css";

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
    <div className="confirmation-container">
      <h1 className="confirmation-title">Confirmed</h1>
      <div className="confirmation-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="checkmark-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 12 15 16 10" />
        </svg>
      </div>
      <p className="confirmation-message">Successfully Placed the order</p>
      <button className="cancel-button" onClick={buttonHandler}>
        Cancel the order
      </button>
    </div>
  );
};

export default Confirmation;
