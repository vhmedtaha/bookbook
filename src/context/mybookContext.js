import { createContext, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "./userContext";
export const myBooksContext = createContext(0);

export default function MyBooksContextProvider(props) {
  const [books, setMyBooks] = useState([]);
  const { token } = useContext(userContext);
  // get user books
  async function getUserBooks() {
    if (token) {
      await axios
        .get("https://book-store-api-mu.vercel.app/User/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err) => alert(err?.response?.data))
        .then((res) => {
          setMyBooks(res?.data?.books);
        });
    }
  }

  return (
    <myBooksContext.Provider value={{ books, getUserBooks }}>
      {props.children}
    </myBooksContext.Provider>
  );
}
