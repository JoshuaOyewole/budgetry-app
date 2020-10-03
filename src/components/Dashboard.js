import React from 'react'
import './dashboard.css'
import CurrentIncome from './CurrentIncome'
import CurrentExpenditure from './CurrentExpenditure'
import TotalSaving from './TotalSaving'

function Dashboard() {
    return (
        <div className='dashboard container'>
            <CurrentIncome />
            <CurrentExpenditure />
            <TotalSaving />
        </div>
    )
}

export default Dashboard
