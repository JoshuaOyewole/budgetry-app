import React from 'react'
import logos from '../Assets/logo.png'

function NavBar() {

    const icons = { 
        marginRight : '1rem',
        color: '#807777',
        fontSize: '2rem'
    }

    const link ={
        fontSize: '2rem'
    }

    const grid = {
        display: 'grid',
        gridTemplateColumns: '1fr 5fr',
        alignItems: 'center',
        marginBottom: '2rem'
    }

    const flex ={
        display: 'flex',
        alignItems: 'center',
        marginBottom: '6rem',
        marginTop: '2rem'
    }

    const logo = {
        marginRight: '1rem',
        color: '#057CD1',
        fontSize: '2rem'
    }
    const logoText = {
        maxWidth: '20rem',
    }
    return (
        <div className='navbar'>
            <div style={flex}>
                <i className="fas fa-landmark" style={logo}></i> 
                <img src={logos} style={logoText} alt='manageFunds logo' />
            </div>
            <ul className='navbar__list'>
                    <li style={grid}>
                        <i className='fas fa-home' style={icons}></i>
                        <a href='#Home' style={link}>Home</a>
                    </li>              
                    <li style={grid}> 
                        <i className='fas fa-history' style={icons}></i>
                        <a href='#History' style={link}>History</a>
                    </li> 
                    <li style={grid}> 
                        <i className="fas fa-balance-scale-right" style={icons}></i>
                        <a href='#Balances' style={link}>Balances</a>
                    </li>
                    <li style={grid}> 
                        <i className="fas fa-file-invoice" style={icons}></i>
                        <a href='#Report' style={link}>Report</a>
                    </li>
            </ul>
            
        </div>
    )
}

export default NavBar
