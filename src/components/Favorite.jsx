import React, { useContext, useEffect } from "react";
import style from "../styles/Favorite.module.css";
import Navbar from "./Navbar";
import { favContext } from "../context/favoritesContext";
import CartItems from "./CartItems";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const { favList, getFavList } = useContext(favContext);

  useEffect(() => {
    getFavList();
  }, [favList]);

  return (
    <>
      <Navbar />
      <FavoriteCard books={favList} />
    </>
  );
};

export default Favorite;
