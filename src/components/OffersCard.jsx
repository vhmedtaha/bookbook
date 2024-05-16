import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/OffersCard.module.css';
import offerImg from '../images/offer-yellow.png'

const OffersCard = ({books}) => {

    const navToDetails=useNavigate();

    return (<>
        {books?.map(n=>{return(
           <div className={style.card} key={n?._id}  value={n?._id} onClick={()=> navToDetails(`/booksdetails/${n._id}`)} >

           <div className={style.image} >
               <img src={n?.image?.url} alt="" />
               <span className={style.offerImg}>30% OFF</span>
           </div>

           <div className={style.details}>
               <p className={style.title}>{n?.title}</p>
               <p className={style.title}>{n?.author}</p>
               {/* <p className={style.offerPrice}><span>{n?.price}$</span>{(n?.price/2)}$</p> */}
               <p className={style.offerPrice}><span>{n?.price}$</span>20$</p>

           </div>

       </div>
       )})}
  </> )
}

export default OffersCard;