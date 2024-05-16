import React, { useContext, useEffect } from 'react';
import style from '../styles/Topbooks.module.css'

const Topbooks = ({books}) => {

    return (
        <div className={style.topbooks}>

            <div className={style.firstcard}>
                <h1>Today's Top Books</h1>
                <button>Check the charts <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg></button>
                </div>
          <div className={style.allCards}>
        {books?.map((n,index)=>{return(
            <div className={style.cards} key={n._id}>
            <div className={style.image}>
                <img src={n?.image?.url} alt="" />
            </div>
            <div className={style.num}><h2>{++index}</h2></div>
        </div>
        )})}
        </div>

    </div>
    );
}

export default Topbooks;