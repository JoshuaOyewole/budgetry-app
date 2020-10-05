import React from 'react'

function TotalSaving() {
    const prevSaving = JSON.parse(localStorage.getItem('saving'));

    if (prevSaving !== null){
        const amounts = prevSaving.map(el => {
            return  el.amount
          });
          
          var result = amounts.reduce((prev, cur) =>{
              return prev + cur
          }, 0)
          
       
          //sum up all the savings inputed
          //Calculate total saving percentage
    }
  

    return (
        <div className='totalSaving'>
            <h3 className='tertiary__header'>Total Saving balance </h3>
            <span className='totalSaving__balance'>${result} <span className='totalSaving__balance--percentage'> </span></span>
        </div>
    )
}

export default TotalSaving
