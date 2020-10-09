import React from 'react'

function CurrentExpenditure() {

    const prevExpenditure = JSON.parse(localStorage.getItem('expense'));

    if (prevExpenditure !== null){
        const amounts = prevExpenditure.map(el => {
            return  el.amount
          });
          
          var result = amounts.reduce((prev, cur) =>{
              return prev + cur
          }, 0)
          
       
          //sum up all the savings inputed
          //Calculate total saving percentage
    }
  
    return (
        <div className='currentExpenditure card'>
            <h3 className='tertiary__header'>CURRENT EXPENDITURE {/* date */} </h3>
            <span className='currentExpenditure__balance'>${result}<span className='currentExpenditure__balance--percentage'> </span></span>
        </div>
    )
}

export default CurrentExpenditure
