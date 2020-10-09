import React from 'react'

function CurrentIncome() {
    const prevIncome = JSON.parse(localStorage.getItem('income'));

    if (prevIncome !== null){
        const amounts = prevIncome.map(el => {
            return  el.amount
          });
          
          var result = amounts.reduce((prev, cur) =>{
              return prev + cur
          }, 0)
          
       
          //sum up all the savings inputed
          //Calculate total saving percentage
    }
  

    return (
        <div className='totalIncome card'>
            <h3 className='tertiary__header'>TOTAL INCOME BALANCE</h3>
            <span className='totalIncome__balance'>${result} <span className='totalIncome__balance--percentage'></span></span>
        </div>
    )
}

export default CurrentIncome
