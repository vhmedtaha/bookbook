import React, { useContext } from 'react';
import style from '../styles/CartItems.module.css';
import { cartContext } from '../context/cartContext';

const CartItems = ({carts}) => {
const {deleteBookToCart} = useContext(cartContext)
    return (
        <>
             <div className={style.orderDetails} >
         {carts?.map((cart)=>{
                return(
                 <div className={style.cart} key={cart?._id} value={cart?._id}>
                    <div className={style.cartImg}>
                        <img src={cart?.image?.url} alt="error" />
                        </div>
                        <div className={style.cartDetails}>
                            <p className={style.h4}>{cart?.title}</p>
                            <p className={style.h5}>{cart?.author}</p>
                            <p className={style.des}>{cart?.description}</p>
                            <p className={style.h6}>Price : {cart?.price}<span>$</span></p>
                            <button className={style.delcart} onClick={()=>{deleteBookToCart(cart?._id)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                            </button>
                        </div>
                        </div>
            )})}
             </div>
        </>
    );
}

export default CartItems;