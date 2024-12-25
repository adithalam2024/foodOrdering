import { useState } from "react";
let i;

const MenuItem = ({ e, customerData, setDishes, dishes }) => {
  const [inputText, setInputText] = useState(e.comment ? e.comment : "");

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addButtonHandler = (dish) => {
    dish = { ...dish, comment: inputText, added: !dish.added };
    if (customerData.dishesOrdered.length === 0) {
      customerData.dishesOrdered = [dish];
    } else {
      let el;
      for (el of customerData.dishesOrdered) {
        if (el.id === dish.id) {
          i = 1;
        } else {
          i = 0;
        }
      }
      if (i === 0) {
        customerData.dishesOrdered = [...customerData.dishesOrdered, dish];
      }
      //  else {
      //   temp = customerData.dishesOrdered;
      // }
    }

    const data = dishes.filter((d) => d.id !== dish.id);
    setDishes([...data, dish]);
    // let newData = dish;
    // let dataTemp = data.filter((d) => d.dishName !== newData.dishName);
    // newData = { ...newData, comment: inputText, added: !newData.added };
    // dataTemp.push(newData);
    // setInitialData(dataTemp);
    // setInputText("");
    // console.log(initialData);
    console.log(customerData);
  };

  const undoButtonHandler = (dish) => {
    dish = { ...dish, comment: "", added: !dish.added };
    const data = dishes.filter((d) => d.id !== dish.id);
    setDishes([...data, dish]);
    let arr;
    if (customerData.dishesOrdered.length === 1) {
      arr = [];
    } else {
      arr = customerData.dishesOrdered.filter((el) => el.id !== dish.id);
    }
    customerData.dishesOrdered = arr;
  };

  return (
    <>
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={e.imageUrl} alt="Veg Biryani" />
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-4">{e.dishName}</p>
            <div class="field">
              <label class="label">Special Instructions</label>
              <div class="control">
                <input
                  value={inputText}
                  type="text"
                  placeholder="E.g., No onions, extra masala"
                  className="input"
                  onChange={onChangeHandler}
                  disabled={e.added ? true : false}
                />
              </div>
            </div>
            <button
              class="button is-primary is-fullwidth"
              disabled={e.added ? true : false}
              onClick={() => addButtonHandler(e)}
            >
              Add to Cart
            </button>
            {e.added && (
              <button
                class="button is-danger is-fullwidth mt-4"
                onClick={() => undoButtonHandler(e)}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </>

    // <div className="menu-item">
    //   <img
    //     src={e.imageUrl} // Replace with actual image URL
    //     alt="Today's Available Dish"
    //     className="menu-image"
    //   />
    //   <div className="menu-info">
    //     <p>{e.dishName}</p>
    //     <input
    //       value={inputText}
    //       type="text"
    //       placeholder="Comments"
    //       className="menu-comments"
    //       onChange={onChangeHandler}
    //       disabled={e.added ? true : false}
    //     />
    //     <button
    //       disabled={e.added ? true : false}
    //       className="add-button"
    //       onClick={() => addButtonHandler(e)}
    //     >
    //       Add
    //     </button>
    //     {e.added && (
    //       <button className="add-button" onClick={() => undoButtonHandler(e)}>
    //         Undo
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default MenuItem;
