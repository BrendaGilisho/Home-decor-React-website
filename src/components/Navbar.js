import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Link } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


import './Navbar.css';

export default function Navbar() {
    return (
        <div className='header-bar'>

            <div className='top-header'>
                <div className='logo'>
                    <h1>DECOR</h1>
                </div>

                <div className='search-bar'>
                    <form action='/' method='get'>
                        <span className='visually-hidden'>

                        </span>
                        <input
                            type='text'
                            className='header-search'
                            id='header-search'
                            placeholder='Search(ex, arm chair, sofa)'
                            name='s'
                        />
                        <button type='submit'>Search</button>

                    </form>
                </div>

                <div className='interactionIcons'>
                    <FaCommentDots className='comments-icon' />

                    {/* <Dropdown className='user-icon'>
                        <Dropdown.Toggle variant='success'>
                            <FaUser className='user-icon' />
                            <Dropdown.Menu>
                                <Dropdown.Item Link to='/sign-up'>Sign Up</Dropdown.Item>
                                <Dropdown.Item Link to='/login'>Login</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown> */}
                    <Link to='/sign-up'>
                        <FaUser className='user-icon' />
                    </Link>

                    <FaHeart className='heart-icon' />

                    <Link to='/Cart'>
                        <FaShoppingCart className='cart-icon' />
                    </Link>
                </div>

            </div>

            <div className='navbar-menu'>
                <NavLink to="/" className='home-nav'>
                    Home
                </NavLink>
                <NavLink to="outdoor" className='outdoor'>
                    Outdoor
                </NavLink>
                <NavLink to="furniture" className='furniture'>
                    Furniture
                </NavLink>
                <NavLink to="holiday-decor" className='home-decor'>
                    Holiday Decor
                </NavLink>
                <NavLink to="rugs" className='rugs'>
                    Rugs
                </NavLink>
                <NavLink to="lighting" className='lighting'>
                    Lighting
                </NavLink>
                <NavLink to="styles-inspo" className='styles-inspo'>
                    Styles and Inspo
                </NavLink>
            </div>

        </div>



    );
}

