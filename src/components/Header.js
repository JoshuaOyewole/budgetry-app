import React from 'react'
import './Styles/Header.css' 
import Profile_pics from '../Assets/profile-pixs.jpg';

function Header() {
    const month = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const curMonth = date.getMonth();
    const year = date.getFullYear()

    
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
                        <span className='profile_username'>Joshua O.</span>
                    </div>
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
