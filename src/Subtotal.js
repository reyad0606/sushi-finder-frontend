import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [isClicked, setIsClicked] = useState(false);

  const clickedHandler = (e) => {
    e.preventDefault();
    alert("Order Completed!");
  };

  const handleCheckout = () => {
    if (basket == 0) {
      alert("Cart is empty, please add items to checkout!");
    } else {
      setIsClicked(!isClicked);
    }
  };
  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
      {isClicked ? (
        <div className="form">
          <div className="form_container">
            <h1>Please Confirm the order!</h1>
            {/* <div className="form"> */}

            <div>
              <h3>You ordered total of {basket.length} items</h3>
              <h5>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Final Total :<strong> {value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h5>
              <form>
                <h3>Please enter payment details below</h3>
                <label htmlFor="CardholderName">Cardholder Name : </label>
                <input type="text" placeholder="cardholder name" />
                <label htmlFor="CardNumber">Credit/Debit card Number : </label>
                <input type="number" placeholder="credit/debit card number" />
                <label htmlFor="CardExp">Exp Date : </label>
                <input type="number" placeholder="MM" />
                <input type="number" placeholder="YYYY" />
                <label htmlFor="CVV">CVV : </label>
                <input type="number" placeholder="please enter CVV here" />
                <button
                  type="submit"
                  className="btn_submit"
                  onClick={clickedHandler}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
}

export default Subtotal;
