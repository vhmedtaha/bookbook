import style from '../styles/Home.module.css'
import Readerrewards from './Readerrewards';
import Topbooks from './Topbooks';
import Navbar from './Navbar';
import AuthorCard from './AuthorCard';
import BasicBanner from './BasicBanner';
import axios from "axios"
import { useEffect, useState } from 'react';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [onSale, setonSale] = useState([]);
    const [upComing, setupComing] = useState([]);
    const [topSeller, settopSeller] = useState([]);
    const [newArrival, setnewArrival] = useState([]);

//     const books= [
//         {"rate": 5,"_id": 1,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
//     },
//     {"rate": 3,"_id": 2,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Horror","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
//     },
//     {"rate": 4,"_id": 3,"Year": 1977,"title": "The Shining","handle": "the-shining","Publisher": "Doubleday","ISBN": "978-0-385-12167-5","Pages": 447,"Notes": ["Runner-up (4th place), Locus Award for Best Fantasy Novel, 1978[2]"],"created_at": "2023-11-13T23:48:48.219Z","url": "https://i.imgur.com/DRZ41B5.jpg","author": "Steven King","price": 28,"category": "Horror","description": "The Shining centers on the life of Jack Torrance, an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.","weight": 0.426
//     },{"rate": 5,"_id": 4,"Year": 1974,"title": "Carrie","handle": "carrie","Publisher": "Doubleday","ISBN": "978-0-385-08695-0","Pages": 199,"Notes": [""],"created_at": "2023-11-13T23:48:47.848Z","url": "https://i.imgur.com/FmljXfP.jpg","author": "Steven King","price": 35,"category": "Horror","description": "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.","weight": 0.287
// },
// {"rate": 3,"_id": 5,"Year": 1975,"title": "Salem's Lot","handle": "salem-s-lot","Publisher": "Doubleday","ISBN": "978-0-385-00751-1","Pages": 439,"Notes": ["Nominee, World Fantasy Award, 1976[2]"],"created_at": "2023-11-13T23:48:48.098Z","url": "https://imgur.com/1qBIg9u.jpg","author": "Steven King","price": 45,"category": "Horror","description": "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, has returned after twenty-five years.","weight": 0.314
// }];

    // const onSale = bookss
    // const upComing = books
    // const topSeller = books
    // const newArrival = books

    const title=["Offers & Deals", "New Releases", "Coming Soon", "Best Sellers"]


    async function  getAllBooks({callBack,path}) {
      const response = await axios.get("https://book-store-api-mu.vercel.app/Books/"+path)
      callBack(response.data.book)
    }
    
        useEffect(()=>{
            getAllBooks({callBack:setonSale,path:"onsale"})
            getAllBooks({callBack:setupComing,path:"upcoming"})
            getAllBooks({callBack:settopSeller,path:"topseller"})
            getAllBooks({callBack:setnewArrival,path:"newarrival"})
        },[])

    return (
    <div className={style.home}>
        <Navbar/>

        <AuthorCard/>
        <BasicBanner seller={title[0]} books={onSale}/>
        <Readerrewards/>
        <BasicBanner seller={title[1]} books={newArrival}/>
        <BasicBanner seller={title[2]} books={upComing}/>
        <Topbooks books={topSeller.slice(0,3)}/>
        <BasicBanner seller={title[3]} books={topSeller}/>

    </div>
)
}

export default Home;