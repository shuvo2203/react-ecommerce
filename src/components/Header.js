import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink class="navbar-brand" to='/'>
                    <img className='logo' src='images/logo.png' alt='Company Logo' />
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <NavLink class="nav-link" to='/'>Home <span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/products'>Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/contact'>Contact</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/cart'>
                                <div className='cart'><ShoppingCartIcon /></div> <span className='item'>5</span>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Header