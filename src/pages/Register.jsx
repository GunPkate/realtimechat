import React from "react";
import Add from "../img/addAvatar.png";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh
    // console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nanosoft Team</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
