import React from 'react'

function Header() {
    const month = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const curMonth = date.getMonth();
    const year = date.getFullYear()

    
    return (
        <div className='header container'>
                <h1 className='primary__header'>Financial Record</h1>
                <span className='header__date'>{month[curMonth]}, {year}</span>
        </div>
    )
}

export default Header
