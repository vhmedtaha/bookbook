import style from '../styles/SuccessfullPayment.module.css'
import React, { useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const SuccessfullPayment = () => {

  const navTo = useNavigate()

    return (
        <>
    <div className={style.success}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
  </svg></div>
  <p className={style.success_p}>Successfull Process !</p>
  <button className={style.success_btn} onClick={()=>navTo('/')}>Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>
  </>);
}


export default SuccessfullPayment;