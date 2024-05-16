import React, { useRef } from "react";
import style from "../styles/Signup.module.css";
import signImg from "../images/logo-best.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const imgRef = useRef();
  const navigate = useNavigate();
  const signupUser = async (data) => {
    await axios
      .post("https://book-store-api-mu.vercel.app/User/Register", data)
      .then((res) => {
        navigate("/login");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    signupUser(data);
  };

  return (
    <div className={style.signup}>
      <div className={style.parent}>
        <div className={style.photo}>
          <img src={signImg} alt="" />
        </div>

        <div className={style.form}>
          <div className={style.form_form}>
            <h1>Sign up</h1>
            <p>Enter your credientials to access your acount</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="firstname" placeholder="First name" />
              <input type="text" name="lastname" placeholder="Last name" />
              <input type="text" name="username" placeholder="User name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="file"
                ref={imgRef}
                name="photo"
                accept=".jpg, .jpeg, .jpg"
              />
              <button type="submit">Join Now</button>
              <p>
                already have account?{" "}
                <Link to="/login" className={style.signlink}>
                  {" "}
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
