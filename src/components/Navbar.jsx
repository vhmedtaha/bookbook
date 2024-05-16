import style from "../styles/Navbar.module.css";
import React, { useState, useRef, useContext, useEffect } from "react";
import img4 from "../images/logo-black.png";
import black from "../images/black.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import { cartContext } from "../context/cartContext";
import axios from "axios";

const Navbar = () => {
  const navTo = useNavigate();
  const { pathname } = useLocation();
  const { user } = useContext(userContext);
  const [searchBooks, setSearch] = useState([]);
  const searchInput = useRef(0);

  async function getAllBooks({ callBack }) {
    const response = await axios.get(
      "https://book-store-api-mu.vercel.app/Books/"
    );
    callBack(response.data);
  }

  function handleSearch() {
    navTo(`/search?title=${searchInput.current.value}`);
  }

  useEffect(() => {
    getAllBooks({ callBack: setSearch });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div
      className={
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname === "/notfound"
          ? style.none
          : style.bar
      }
    >
      <div className={style.logo}>
        <img src={img4} alt="" />
        <span className={style.title}>BookStore.com</span>
      </div>

      <div className={style.center}>
        <div className={style.centertop}>
          <div className={style.search}>
            <input
              ref={searchInput}
              type="search"
              list="suggestions"
              placeholder="Search By  Book, Author"
            />
            <datalist id="suggestions">
              {searchBooks.map((bookName) => (
                <option key={bookName?._id} value={bookName?.title} />
              ))}
            </datalist>
            <button onClick={handleSearch} className={style.search_sign}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <div className={style.centerbtns}>
            {user && (
              <>
                <button
                  className={style.mybookbtn}
                  onClick={() => navTo("/mybooks")}
                >
                  My books
                </button>
                <button onClick={() => navTo("/favorite")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <span className={style.cartnum}>
                    {user && user.Favorites.length}
                  </span>
                </button>

                <button
                  className={style.carticon}
                  onClick={() => navTo("/cart")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  <span className={style.cartnum}>
                    {user && user.Bookmarks.length}
                  </span>
                </button>
              </>
            )}

            <button
              onClick={() => {
                user ? navTo("/userprofile") : navTo("/login");
              }}
              className={user?.userName ? style.profilephoto : style.personicon}
            >
              {user?.userName && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              )}
              {!user ? "Sign in" : "Profile"}
            </button>
          </div>
        </div>

        <div className={style.centerbottom}>
          <ul>
            <li onClick={() => navTo("/")} className={style.home}>
              Home
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Fantasy
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Horror
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              History
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Classics
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Mystery
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Crime
            </li>
            <li
              onClick={(e) => navTo(`/bookscategories/${e.target.textContent}`)}
            >
              Fiction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
