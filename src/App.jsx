import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

import OrderDetails from "./components/OrderDetials";
import Menu from "./components/Menu";
import Confirmation from "./components/Confirmation";
import LoginPage from "./components/LoginPage";

const BASE_URL = "http://localhost:8000";

const supabase = createClient(
  "https://drxpfwghsiojlhcfjfmh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeHBmd2doc2lvamxoY2ZqZm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5Nzg2NDUsImV4cCI6MjA0ODU1NDY0NX0.iEGes18NUzfTI-z7RGCrwnGsldWEQMcnz4uGBqkAc8I"
);

const customerData = {
  roomNo: 0,
  dishesOrdered: [],
  orderConfirmed: false,
};
console.log("hello");

async function getCustomerData() {
  const { data } = await supabase.from("customerData").select();
  return data;
}

async function insertData() {
  const { error } = await supabase.from("customerData").insert(customerData);
  console.log(error);
}

const validRooms = [112, 116, 107];

function App() {
  const [cusData, setCusData] = useState(customerData);
  const [dishes, setDishes] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  customerData["orderConfirmed"] = confirmed;
  // const [initialData, setInitialData] = useState(data);

  console.log(cusData);

  if (confirmed === true) {
    async function check() {
      let y = 0;
      let data = await getCustomerData();
      for (let a of data) {
        if (a["roomNo"] == customerData["roomNo"]) {
          y = 1;
        }
      }
      if (y === 0) {
        await insertData();
      }
    }
    check();
  }

  useEffect(function () {
    // async function fetchDishes() {
    //   try {
    //     const res = await fetch(`${BASE_URL}/dishes`);
    //     const data = await res.json();
    //     setDishes(data);
    //   } catch {
    //     alert("There was an error loading the data");
    //   }
    // }
    async function getCountries() {
      const { data } = await supabase.from("dishes").select();
      setDishes(data);
    }
    // fetchDishes();
    getCountries();
  }, []);

  console.log(dishes);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-project"
          element={
            <LoginPage
              customerData={customerData}
              cusData={cusData}
              setCusData={setCusData}
              validRooms={validRooms}
              getCustomerData={getCustomerData}
              supabase={supabase}
              setConfirmed={setConfirmed}
            />
          }
        />
        <Route
          path="/menu"
          element={
            !confirmed ? (
              <Menu
                // countries={countries}
                customerData={customerData}
                dishes={dishes}
                setDishes={setDishes}
                confirmed={confirmed}
                setConfirmed={setConfirmed}
              />
            ) : (
              <Confirmation
                setConfirmed={setConfirmed}
                customerData={customerData}
                supabase={supabase}
                cusData={cusData}
                setCusData={setCusData}
              />
            )
          }
        />
        <Route
          path="/orderDetials"
          element={
            !confirmed ? (
              <OrderDetails
                customerData={customerData}
                confirmed={confirmed}
                setConfirmed={setConfirmed}
              />
            ) : (
              <Confirmation
                setConfirmed={setConfirmed}
                customerData={customerData}
                supabase={supabase}
                cusData={cusData}
                setCusData={setCusData}
              />
            )
          }
        />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
