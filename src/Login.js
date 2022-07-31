import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return(
        <div className="login">
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <LocalConvenienceStoreRoundedIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">OnShop</h2>
                </div>
            </Link>

            <div className="login__container">
                <h1>Sing-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" placeholder="name@maile.com"  value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login__signInButton">Sing In</button>
                </form>

                    <p>
                        signing-in you agree to the Website Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice.
                    </p>

                <button className="login__registerButton">Create your eShop Account</button>
            </div>


        </div>


    );
}

export default Login;