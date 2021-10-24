import React, { Component } from "react";
import './sign-up.css'

export default class SignUp extends Component {
    render() {
        return (
            <form className='main-form'>
                <h3>Sign Up</h3>
                <div className='form-group'>
                    <div className="fname">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="lname">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="e-address">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="password">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                </div>
                <button type="submit" className="btn-sign-up">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}