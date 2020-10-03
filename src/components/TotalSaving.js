import React from 'react'

function TotalSaving(props) {
    const prevSaving = JSON.parse(localStorage.getItem('saving'));
    console.log(prevSaving.map(cur => cur.amount));
    
    //sum up all the savings inputed
    //Calculate total saving percentage


    return (
        <div className='totalSaving'>
            <h3 className='tertiary__header'>Total Saving balance </h3>
            <span className='totalSaving__balance'>$200,000  <span className='totalSaving__balance--percentage'>30% </span></span>
        </div>
    )
}

export default TotalSaving
