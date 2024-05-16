import React, { useEffect } from "react";
import style from "../styles/SortedBooks.module.css";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

const SortedBooks = () => {
  const [Books, setBooks] = useState([]);

  const { category } = useParams();

  //     let Books = [{"rate": 5,"_id": 1,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
  // },
  // {"rate": 3,"_id": 2,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Horror","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
  // },
  // {"rate": 4,"_id": 3,"Year": 1977,"title": "The Shining","handle": "the-shining","Publisher": "Doubleday","ISBN": "978-0-385-12167-5","Pages": 447,"Notes": ["Runner-up (4th place), Locus Award for Best Fantasy Novel, 1978[2]"],"created_at": "2023-11-13T23:48:48.219Z","url": "https://i.imgur.com/DRZ41B5.jpg","author": "Steven King","price": 28,"category": "Fantasy","description": "The Shining centers on the life of Jack Torrance, an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.","weight": 0.426
  // },{"rate": 5,"_id": 4,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
  // },
  // {"rate": 3,"_id": 5,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Science","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
  // }];
  async function getCategoryBooks() {
    const response = await axios.get(
      " https://book-store-api-mu.vercel.app/Books/categories/" + category
    );
    setBooks(response.data.books);
  }

  useEffect(() => {
    getCategoryBooks();
  }, [category]);
  return (
    <div className={style.sorted}>
      <Navbar />

      <div className={style.paths}>
        <Link className={style.links} to="/home">
          Home <span>{">"}</span>
        </Link>
        <Link className={style.links} to={`/home/${category}`}>
          {category}
        </Link>
      </div>
      <div className={style.cardsParent}>
        <div className={style.cards}>
          <Card books={Books} />
        </div>
      </div>
    </div>
  );
};

export default SortedBooks;
