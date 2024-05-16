import React, { useEffect, useState } from 'react';
import style from '../styles/ChatBtn.module.css';
import { useNavigate } from 'react-router-dom';

const ChatBtn = () => {

    const navToChat=useNavigate()
    const pathName=window.location.pathname


    return <>
      {/* <button onClick={()=> navToChat('./chatroom')} className={pathName==="/chatroom"||pathName==="/signup"||pathName==="/login"||pathName==="/addnewbook"?style.hideChatBtn:style.chatbtn}>Chat with us</button> */}
      <button onClick={()=>navToChat('/chatroom')}className={pathName==="/chatroom"||pathName==="/signup"||pathName==="/login"||pathName==="/addnewbook"||pathName==="/successfullpayment"||pathName==="/failedpayment"?style.hideChatBtn:style.chatbtn}>Chat With Us</button>
      </>;
}



export default ChatBtn;