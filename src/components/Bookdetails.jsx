import React, { useState, useRef, useEffect, useContext } from "react";
import style from "../styles/Bookdetails.module.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BasicBanner from "./BasicBanner";
import axios from "axios";
import { cartContext } from "../context/cartContext";
import { favContext } from "../context/favoritesContext";
import { userContext } from "../context/userContext";
const Bookdetails = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const [youMightAlsoLike, setyouMightAlsoLike] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { addBookToCart } = useContext(cartContext);
  const { addBookToFav , deleteBookFromFav } = useContext(favContext);
  const { user } = useContext(userContext);

  const bookRef = useRef();
  const [cartBtnState, setCartBtnState] = useState("Add To Cart");

  function handleAddToCart() {
    addBookToCart(bookData._id);
  }
  function handleAddToFav() {
    if (user?.Favorites.includes(bookData._id)) return deleteBookFromFav(bookData._id);
    addBookToFav(bookData._id);
  }
  //     const books= [{"rate": 5,"_id": 1,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
  //     },
  //     {"rate": 3,"_id": 2,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Horror","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
  //     },
  //     {"rate": 4,"_id": 3,"Year": 1977,"title": "The Shining","handle": "the-shining","Publisher": "Doubleday","ISBN": "978-0-385-12167-5","Pages": 447,"Notes": ["Runner-up (4th place), Locus Award for Best Fantasy Novel, 1978[2]"],"created_at": "2023-11-13T23:48:48.219Z","url": "https://i.imgur.com/DRZ41B5.jpg","author": "Steven King","price": 28,"category": "Horror","description": "The Shining centers on the life of Jack Torrance, an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.","weight": 0.426
  //     },{"rate": 5,"_id": 4,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
  // },
  // {"rate": 3,"_id": 5,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Horror","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
  // }];

  // const bookData = books.filter((book)=>book._id===parseInt(id))[0]

  // const youMightAlsoLike=books
  async function GetBookByID() {
    let { data } = await axios(
      `https://book-store-api-mu.vercel.app/Books/${id}`
    );
    setBookData(data.book);
  }
  async function getAllBooks() {
    const response = await axios.get(
      "https://book-store-api-mu.vercel.app/Books/"
    );
    setyouMightAlsoLike(response.data);
  }

  useEffect(() => {
    GetBookByID();
    getAllBooks();
  }, [id]);

  return (
    <div className={style.cardDetails}>
      <Navbar />

      <div className={style.bd_p}>
        <div className={style.bd_i}>
          <img src={bookData?.image?.url} alt="" />
        </div>

        <div className={style.bd}>
          <div className={style.bh}>
            <h5 className={style.bh_h}>{bookData?.author}</h5>
            <h1 className={style.bh_h}>{bookData?.title}</h1>
          </div>

          <div className={style.dpc}>
            <p className={style.price}>{bookData?.price}$</p>
            <button
              onClick={handleAddToCart}
              ref={bookRef}
              className={style.bdbtns}
            >
              {cartBtnState}
            </button>
            <button className={style.favoritebtn} onClick={handleAddToFav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={user?.Favorites.includes(bookData._id) ? "red" : "white"}
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
            </button>
          </div>

          <div className={style.sd}>
            <div className={style.sd1}>
              <div className={style.smallDetials}>
                <p>Article : </p>{" "}
                <p className={style.changedPart}>{bookData?.ISBN}</p>
              </div>
              <div className={style.smallDetials}>
                <p>Genre : </p>{" "}
                <p className={style.changedPart} p>
                  {bookData?.book?.category}
                </p>
              </div>
              <div className={style.smallDetials}>
                <p>Publishing house : </p>{" "}
                <p className={style.changedPart}>{bookData?.Publisher}</p>
              </div>
            </div>
            <div className={style.sd2}>
              <div className={style.smallDetials}>
                <p> Binding : </p>{" "}
                <p className={style.changedPart}>Paper back</p>
              </div>
              <div className={style.smallDetials}>
                <p>Author :</p>{" "}
                <p className={style.changedPart}>{bookData?.book?.author}</p>
              </div>
              <div className={style.smallDetials}>
                <p>Pages : </p>{" "}
                <p className={style.changedPart}>{bookData?.Pages}</p>
              </div>
            </div>
            <div className={style.sd3}>
              <div className={style.smallDetials}>
                <p>Language : </p>
                <p className={style.changedPart}> English</p>
              </div>
              <div className={style.smallDetials}>
                <p>Weight (kg) : </p>
                <p className={style.changedPart}>{bookData?.weight}</p>
              </div>
            </div>
          </div>

          <div className={style.reviews}>
            <div className={style.rating}>
              {[...Array(5)].map((_, i) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  w_idth="20"
                  height="20"
                  fill={bookData?.book?.rate > i ? "black" : "white"}
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
            </div>

            <p className={style.p_reviews}>
              customer reviews ({bookData?.reviews?.length})
            </p>
            <button className={style.showAllbtn}>show all </button>
          </div>
        </div>
        <div className={style.summaryContainer}>
          <div className={style.summary}>
            <h2>Description :</h2>
            <p className={showAll ? style.showAll_p : style.default_p}>
              I{bookData?.description}
            </p>
            <button
              onClick={() => setShowAll(!showAll)}
              className={style.showAllbtn}
            >
              show all{" "}
            </button>
          </div>
        </div>
      </div>
      <BasicBanner
        seller={"You may also like"}
        books={youMightAlsoLike?.slice(0, 4)}
      />
    </div>
  );
};

export default Bookdetails;
