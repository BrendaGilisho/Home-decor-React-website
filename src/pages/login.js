import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';


import axios from "axios";

export default function LoginIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const logInUser = {
            email: email,
            password: password

        }
        console.log(logInUser)
        axios.post('https://home-decorr-backend.herokuapp.com/login', logInUser)  //'http://localhost:4000/app/login'

            .then(response => alert(response.data.message))

            .catch(error => {
                // error.json(error)
                console.log(error)
            })

        // window.location = '/home'
        setEmail('');
        setPassword('');


    }

    return (
        <form
            className='main-form'>
            <h3>Log In</h3>

            <div className='form-group'>

                <div className="email">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="password">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit"
                onClick={handleLoginSubmit}
                className="btn-sign-up">
                Sign Up
            </button>


            <p className="forgot-password text-right">
                New user 
                <Link to='/sign-up'>
                    Sign up
                </Link>
            </p>
        </form>
    );

}