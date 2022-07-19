import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder='Your email'/><br />
                    <input type="password" name="" id="" placeholder='Your Password' /><br />
                    <input type="submit" value="Login" />
                </form>
                <p>New to ema-john ?</p> <Link to='/register'>Create Account</Link><br />
                <div>-------or------</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;