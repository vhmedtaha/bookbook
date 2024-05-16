import React from 'react';
import style from '../styles/AuthorCard.module.css'

const AuthorCard = () => {
    return (
        <div className={style.belownav}>

        <div className={style.left}>
            <h3>Announcing Prince Harry's Memoir</h3>
            <p>the remarkably emotionally powerful story of the duke of sussex</p>
            <div className={style.btn}>
            <button>Order here</button>
            </div>
        </div>

        <div className={style.right}>

          <div className={style.image}>
            <img src="https://imgur.com/RMW368m.jpg" alt="" />
          </div>

          <div className={style.right_right}>
          <h3>his words. his story.</h3>
          <hr />
          <h4>JUANUARY 10, 2023</h4>
          <p>princeharry.com</p>
          </div>
        </div>
    </div>
    )
}

export default AuthorCard;