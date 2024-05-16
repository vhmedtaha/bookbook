import { createContext, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "./userContext";
export const favContext = createContext(0);

export default function FavContextProvider(props) {
  const [favList, setFavList] = useState([]);
  const { token, setUser } = useContext(userContext);
  // get Fav list
  async function getFavList() {
    if (token) {
      await axios
        .get("https://book-store-api-mu.vercel.app/User/Favorites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setFavList(res?.data?.favorites);
        });
    }
  }

  //  add to Fav
  async function addBookToFav(bookId) {
    if (token) {
      await axios
        .post(
          "https://book-store-api-mu.vercel.app/User/Favorites/" + bookId,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          setFavList(res?.data?.user?.Favorites);
        });
    } else {
      alert("Please login to add to cart");
    }
  }
  //  delete from fav
  async function deleteBookFromFav(bookId) {
    if (token) {
      await axios
        .delete(
          "https://book-store-api-mu.vercel.app/User/Favorites/" + bookId,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          setFavList(res?.data?.user?.Favorites);
        });
    } else {
      alert("Please login to add to cart");
    }
  }
  return (
    <favContext.Provider
      value={{ getFavList, favList, addBookToFav, deleteBookFromFav }}
    >
      {props.children}
    </favContext.Provider>
  );
}
