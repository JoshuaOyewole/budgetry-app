import React from 'react'

function TotalIncome() {
    const prevIncome = JSON.parse(localStorage.getItem('saving'));

    if (prevIncome !== null){
        const amounts = prevIncome.map(el => {
            return  el.amount
          });
          console.log(amounts);
          
          var result = amounts.reduce((prev, cur) =>{
              return prev + cur
          }, 0)
          
       
          //sum up all the savings inputed
          //Calculate total saving percentage
    }
  

    return (
        <div className='totalIncome'>
            <h3 className='tertiary__header'>Total Income balance </h3>
            <span className='totalIncome__balance'>${result} <span className='totalIncome__balance--percentage'>30% </span></span>
        </div>
    )
}

export default TotalIncome
