import React from 'react'

function NavBar() {
    return (
        <div className='navbar'>
            <div className='logo'>manageFunds</div>
            <ul className='navbar__list'>
                <div className='flex'>
                    <i className='fas fa-2x'></i>
                    <li> <a href='#Home'>Home</a></li>
                </div>
                <div className='flex'>
                    <i className='fas fa-2x'></i>
                    <li> <a href='#History'>History</a></li>
                </div>
                <div className='flex'>
                    <i className='fas fa-2x'></i>
                    <li> <a href='#Balances'>Balances</a></li>
                </div>
                <div className='flex'>
                    <i className='fas fa-2x'></i>
                    <li> <a href='#Report'>Report</a></li>
                </div>
            </ul>
            
        </div>
    )
}

export default NavBar
