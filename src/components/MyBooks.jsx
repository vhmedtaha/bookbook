import React, { useContext, useEffect } from "react";
import style from "../styles/MyBooks.module.css";
import Navbar from "./Navbar";
import { myBooksContext } from "../context/mybookContext";
import MyBooksCard from "./MyBooksCard";

const MyBooks = () => {
  const { books, getUserBooks } = useContext(myBooksContext);


  useEffect(() => {
    getUserBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <Navbar />
      <MyBooksCard books={books}/>

    </>
  );
};

export default MyBooks;
