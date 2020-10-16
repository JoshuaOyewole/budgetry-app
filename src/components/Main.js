import React from 'react'
import './Styles/Main.css'
import Header from './Header'
import './Styles/dashboard.css'
import GetInput from './GetInput'
import CurrentIncome from './CurrentIncome'
import CurrentExpenditure from './CurrentExpenditure'
import TotalSaving from './TotalSaving'

function Main() {
    return (
        <div className='main'>
            <Header />   
            <div className='dashboard container'>
                <CurrentIncome />
                <CurrentExpenditure />
                <TotalSaving />z
            </div> 
            <GetInput />
        </div>
    )
}

export default Main
