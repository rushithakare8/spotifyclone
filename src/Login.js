import React from 'react';
import './Login.css';
import { loginUrl } from './Spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://i.pinimg.com/originals/9b/84/14/9b84143eb318f738166337637b0fb9e2.jpg"/>

            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login
