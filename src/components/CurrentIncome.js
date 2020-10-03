import React from 'react'

function CurrentIncome() {
    return (
        <div className='totalIncome'>
            <h3 className='tertiary__header'>Total Income {/* date */} (September)</h3>
            <span className='totalIncome__balance'>$200,000  <span className='totalIncome__balance--percentage'>30% </span></span>
        </div>
    )
}

export default CurrentIncome
