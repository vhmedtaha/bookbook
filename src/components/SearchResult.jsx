import React, { useEffect, useState } from "react";
import style from "../styles/SearchResult.module.css";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);

  async function getSearchResultes(search) {
    const response = await axios.get(
      "https://book-store-api-mu.vercel.app/Books?search=" + search
    );
    setBooks(response?.data);
  }
  useEffect(() => {
    getSearchResultes(searchParams.get("title"));
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div className={style.searchContainer}>
        <div className={style.searchCards}>
          <Card books={books} />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
