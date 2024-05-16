import React from 'react';
import style from '../styles/Card.module.css'
import { useNavigate } from 'react-router-dom';

const Card = ({books,ss}) => {

    const navToDetails=useNavigate();

    // useEffect(()=>{

    // },[])


    return (<>
         {books?.map(n=>{return(
            <div className={style.card} key={n?._id}  value={n?._id} data-title={n?.title}  onClick={()=>navToDetails(`/booksdetails/${n?._id}`)}>

            <div className={style.image}  onClick={ss}>
                <img src={n?.image?.url} alt="" />
            </div>

            <div className={style.details} >
                <p className={style.title}>{n?.title}</p>
                <p className={style.title}>{n?.author}</p>
                <p>{n?.price}$</p>
            </div>

        </div>
        )})}
   </> )
}

export default Card;