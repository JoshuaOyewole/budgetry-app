import React from 'react'

function CurrentExpenditure() {
    return (
        <div className='currentExpenditure'>
            <h3 className='tertiary__header'>Current Expenditure {/* date */} (September)</h3>
            <span className='currentExpenditure__balance'>$200,000  <span className='currentExpenditure__balance--percentage'>30% </span></span>
        </div>
    )
}

export default CurrentExpenditure
