import React, { useState } from 'react';
import style from '../styles/BasicBanner.module.css'
import Card from './Card';
import OffersCard from './OffersCard';


const BasicBanner = ({seller="",books=[]}) => {

    const nn=(e)=>{
        // console.log(e.currentTarget.children[0].dataset.id)
        console.log(e.currentTarget.dataset.id)
    }

    const [showAll,setShowAll]=useState(false)
    const firstFourBooks=books?.slice(0,4)    // put manually to test the design

    return (
        <div className={style.bestseller}>
        <div className={style.parent}>
        <p className={style.header}>{seller}</p>
        <div className={style.seeAll}>
        <button className={style.seeAllbtn} onClick={()=>{setShowAll(!showAll)}}>View All</button>
        </div>
        </div>
        <div className={style.cards}>
            {seller==="Offers & Deals"?
        <OffersCard books={showAll?books:firstFourBooks} />
        :
        <Card books={showAll?books:firstFourBooks} ss={nn}/>
            }
        </div>
    </div>
    );
}

export default BasicBanner;