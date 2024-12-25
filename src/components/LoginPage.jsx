import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../LoginPage.css";

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
    <>
      <div
        className="container is-flex is-justify-content-center is-align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card">
          <div className="card-content">
            <p className="title">YMA - 2</p>
            <div className="field">
              <label className="label">Enter your room number</label>
              <div className="control">
                <input
                  type="number"
                  placeholder="Eg: 112"
                  className="input"
                  value={roomNumber}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="field">
              <p className="control">
                {validRooms.includes(parseInt(roomNumber)) && (
                  <button
                    className="button is-warning is-align-self-center"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container is-fluid">
        <div className="card">
          <div className="card-content">
            <p className="title">YMA - 2</p>
            <div className="field">
              <label className="label">Enter your room number</label>
              <div className="control">
                <input
                  type="number"
                  placeholder="Eg: 112"
                  className="input"
                  value={roomNumber}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="field">
              <p className="control">
                {validRooms.includes(parseInt(roomNumber)) && (
                  <button
                    className="button is-warning is-align-self-center"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="panel is-success">
      <div className="has-background-warning is-flex is-flex-direction-column">
        <h1 className="title has-text-white is-align-self-center">YMA-2</h1>
      </div>
      <div className="has-background-white is-flex is-flex-direction-column">
        <h2 className="subtitle is-align-self-center">Good Afternoon</h2>

        <p className="instruction">Enter your room number</p>
        <input
          type="number"
          placeholder="Room number"
          class="input"
          value={roomNumber}
          onChange={onChangeHandler}
        />

        {validRooms.includes(parseInt(roomNumber)) && (
          <button
            className="button is-warning is-align-self-center"
            onClick={loginHandler}
          >
            Login
          </button>
        )}
      </div>
    </div> */}
    </>
  );
};

export default LoginPage;
