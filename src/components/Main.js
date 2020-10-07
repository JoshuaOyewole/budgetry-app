import React from 'react'
import './Styles/Main.css'
import Header from './Header'
import Dashboard from './Dashboard'
import GetInput from './GetInput'

function Main() {
    return (
        <div className='main'>
            <Header />   
            <Dashboard />   
            <GetInput />
        </div>
    )
}

export default Main
