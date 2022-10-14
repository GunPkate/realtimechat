import React from "react";

const Login = () =>{
    return (
        <div className="formContainer">
            <div className="formWrapper">  
                <span className="logo">Nanosoft Team</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>

                    <button>Sign ip</button>
                </form>
                <p>Do you have no account? Register</p>
            </div>
        </div>
    )
}

export default Login