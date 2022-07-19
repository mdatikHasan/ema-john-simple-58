import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {user, signInUsingGoogle}= useFirebase();
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="email" placeholder='Your email' /><br /><br />
                    <input type="password" name="" id="password" placeholder='Your Password' /><br /><br />
                    <input type="submit" value="Log In" />
                </form><br />
                <span>New to ema-john ?</span> <Link to='/register'>Create Account</Link><br />
                <div><b>-------or-------</b></div><br />
                <button className='btn-regular' onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;