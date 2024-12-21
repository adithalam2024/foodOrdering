import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage.css";

const LoginPage = ({
  customerData,
  validRooms,
  supabase,
  setConfirmed,
  cusData,
  setCusData,
}) => {
  const [roomNumber, setRoomNumber] = useState("");
  const navigate = useNavigate();

  async function getCustomerData() {
    let t = {
      roomNo: 0,
      dishesOrdered: [],
      orderConfirmed: false,
    };
    const { data, error } = await supabase.from("customerData").select();
    console.log(data);

    let temp = data.filter((e) => e["roomNo"] == roomNumber);
    console.log(temp);
    console.log(!(temp.length === 0));
    if (!(temp.length === 0)) {
      console.log("hieeeeeeeeeeeeeee");
      setConfirmed(true);
      t["roomNo"] = temp[0]["roomNo"];
      t["dishesOrdered"] = temp[0]["dishesOrdered"];
      t["orderConfirmed"] = temp[0]["orderConfirmed"];
    }
    setCusData(t);
    return temp;
  }

  const onChangeHandler = (e) => {
    setRoomNumber(e.target.value);
  };

  const loginHandler = () => {
    customerData.roomNo = roomNumber;
    getCustomerData();
    navigate("menu");
  };
  return (
    <div className="login-container">
      <div className="header">
        <h1 className="header-title">YMA-2</h1>
      </div>
      <div className="content">
        <h2 className="greeting">Good Afternoon</h2>
        <p className="instruction">Enter your room number</p>
        <input
          type="number"
          placeholder="Room number"
          className="room-input"
          value={roomNumber}
          onChange={onChangeHandler}
        />
        {validRooms.includes(parseInt(roomNumber)) && (
          <button className="login-button" onClick={loginHandler}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
