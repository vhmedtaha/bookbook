import React, { useContext, useRef } from "react";
import style from "../styles/Login.module.css";
import signImg from "../images/logo-best.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../context/userContext";
const Login = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(userContext);

  const logInUser = async (data) => {
    const response = await axios.post(
      "https://book-store-api-mu.vercel.app/User/login",
      data
    );
    setToken(response.data.token);
    setUser(response.data.UserInformation);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.UserInformation));
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    logInUser(data);
  };

  return (
    <div className={style.login}>
      <div className={style.parent}>
        <div className={style.photo}>
          <img src={signImg} alt="" />
        </div>

        <div className={style.form}>
          <div className={style.form_form}>
            <h1>Log in</h1>
            <p>Enter your credientials to access your acount</p>
            <form onSubmit={handleSubmit}>
              <input
                ref={username}
                type="text"
                name="username"
                placeholder="Email or Username"
              />
              <input
                ref={password}
                type="password"
                name="password"
                placeholder="Password"
              />
              <button>Join Now</button>
              <p>
                Don't have account?{" "}
                <Link to="/signup" className={style.signlink}>
                  {" "}
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
