import React, { useContext, useEffect, useState } from "react";
import style from "../styles/Usercart.module.css";
import Navbar from "./Navbar";
import Visa from "../images/visa.png";
import MasterCard from "../images/mastercard.png";
import AmericanExpress from "../images/AM_EX.png";
import PayPal from "../images/paypal.png";
import CartItems from "./CartItems";
import { cartContext } from "../context/cartContext";
import { userContext } from "../context/userContext";

const Usercart = () => {
  const { getCartList, cartList } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user, token } = useContext(userContext);

  useEffect(() => {
    getCartList();
  }, [user]);

  useEffect(() => {
    let price = cartList?.map((book) => book?.price).reduce((a, b) => a + b, 0);
    setTotalPrice(price);
  }, [cartList]);


  const proceedBtn = () => {
    fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <div className={style.cart}>
      <Navbar />
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-cart-check"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        Shopping Cart
      </h1>
      <div className={style.cartsContainer}>
        <div className={style.title}>
          <h5>1. CART / PANIER</h5>
          <h5>2. PAYMENT</h5>
        </div>
        <div className={style.cartDetailsParent}>
          <CartItems carts={cartList} />
          {cartList?.length > 0 && (
            <div className={style.payment}>
              <h4>
                Total<span>{totalPrice} $</span>
              </h4>
              <button onClick={proceedBtn}>proceed to check out</button>
              <div className={style.paymentMethods}>
                <img src={Visa} alt="error" />
                <img src={MasterCard} alt="error" />
                <img src={PayPal} alt="error" />
                <img src={AmericanExpress} alt="error" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usercart;
