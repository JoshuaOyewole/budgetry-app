import React, {useContext } from 'react'
import './Styles/Header.css' 
import Profile_pics from '../Assets/profile-pixs.jpg';
import {usernameContext} from './Home'

function Header() {
    const month = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const curMonth = date.getMonth();
    const year = date.getFullYear()
    const username = useContext(usernameContext)
    
    return (
        <>
        <div className='header container'>
            <div className='header__top'>
            {/*     <h2 className='secondary__header'>Good Morning, </h2> */}
                <i className='fas fa-toggle-on'></i> 
                <div className='right'>
                    <img src={Profile_pics} className='profile_pix--small'  alt='user_profile-pixs' />
                    <div className='flex'>
                        <span className='greeting'>Good Morning,</span>
                        <span className='profile_username'>{username}</span>
                    </div>
                    <i className="fas fa-caret-down ml-small"></i>
                </div> 
            </div>   
            <div className='header__bottom'>
            <h2 className='secondary__header'>Overview </h2>
                <span className='header__date'>{month[curMonth]}, {year}</span>
            </div>
                
        </div>
        </>
    )
}

export default Header
