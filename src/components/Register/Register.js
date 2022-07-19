import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder='Your Email'/><br /><br />
                    <input type="password" name="" id="" placeholder='Your Password' /><br /><br />
                    <input type="password" name="" id="" placeholder='Re-type Password' /><br /><br />
                    <input type="submit" value="Register" /><br /><br />
                </form>
                <span>Already have an account?</span> <Link to='/login'>Sign In</Link>
                <br /><br />
                <div>-------or--------</div><br />
                <button>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;