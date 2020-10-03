import React from 'react'
import './navigation.css'


function Navigation() {
    return (
        <div className='navigation container'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <a 
                        href='#expenditures'
                        className='list-group-link'
                    > Expenditures </a>
                </li>
                <li className='list-group-item'>
                    <a 
                        href='#incomes'
                        className='list-group-link'
                    > Incomes </a>
                </li>
                <li className='list-group-item'>
                    <a 
                        href='#settings'
                        className='list-group-link'
                    > Settings </a>
                </li>
                <li className='list-group-item'>
                    <a 
                        href='#income'
                        className='list-group-link'
                    > Plan your Income </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
