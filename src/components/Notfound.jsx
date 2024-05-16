import React from 'react';
import style from '../styles/Notfound.module.css'
import { useNavigate } from 'react-router-dom';

const Notfound = () => {

    const navToHome=useNavigate()

    return (
    <div className={style.notfound}>
    <div className={style.notfoundmsg}><p>.....Oooops <br/>this page isn't found</p></div>
    <div className={style.backhome}>
    <button onClick={()=>navToHome('/home')}>Home <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg></button>

    </div>
    </div>

    );



}

export default Notfound;