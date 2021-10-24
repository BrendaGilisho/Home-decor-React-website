/* Ignore this */

import React from 'react';
import './SignUp.css'


export default function SignUp() {
    return (
        <div className='signup-container'>
            <div className='email-capture'>
                <div className='signup-title'>
                    <span className='p-title'>Stay Updated on special offers, lates trends and more </span>
                </div>
                <div className='signup-form'>

                    <form>
                        <input type='text'
                            name='email'
                            autoComplete='off'
                            placeholder='Email Address' />

                        <button className='sign-up-button' id='sign-up-button' type='submit'>
                            SIGN UP
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}