import style from '../styles/MyBooksCard.module.css'
import React from 'react';

const MyBooksCard = ({books}) => {
    return (<div className={style.cards}>
        {books?.map(n=>{return(
           <div className={style.card} key={n?._id}  value={n?._id} data-title={n?.title}  >

           <div className={style.image} >
               <img src={n?.image?.url} alt="" />
           </div>

           <div className={style.details} >
               <p className={style.title}>{n?.title}</p>
               <p className={style.title}>{n?.author}</p>
               <button className={style.readbtn}>
                Read
                </button>
           </div>

       </div>
       )})}
  </div> )
}


export default MyBooksCard;