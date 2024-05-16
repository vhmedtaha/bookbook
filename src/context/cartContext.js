import { createContext, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "./userContext";
export const cartContext = createContext(0);

export default function CartContextProvider(props) {
  const [cartList, setCartList] = useState([]);
  const { token, setUser } = useContext(userContext);

  // get cart list
  async function getCartList() {
    if (token) {
      await axios
        .get("https://book-store-api-mu.vercel.app/User/Bookmarks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setCartList(res?.data?.bookmarks);
        });
    }
  }

  //  add to cart
  async function addBookToCart(bookId) {
    if (token) {
      await axios
        .post(
          `https://book-store-api-mu.vercel.app/User/Bookmarks/${bookId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setUser(res?.data?.user);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
        });
    } else {
      alert("Please login to add to cart");
    }
  }
  //  delete to cart
  async function deleteBookToCart(bookId) {
    if (token) {
      await axios
        .delete(
          "https://book-store-api-mu.vercel.app/User/Bookmarks/" + bookId,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setUser(res?.data?.user);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
        });
    } else {
      alert("Please login to add to cart");
    }
  }
  return (
    <cartContext.Provider
      value={{ getCartList, cartList, addBookToCart, deleteBookToCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
