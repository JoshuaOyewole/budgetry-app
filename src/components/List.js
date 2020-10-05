import React from 'react'
import './List.css'

function List(props) {
    if(localStorage.length > 0){
    //Retrieve incomes and expenses from localStorage and convert to an array
         const expense_array = JSON.parse(localStorage.getItem('expense')); 
         const income_array = JSON.parse(localStorage.getItem('income')); 
    //map through income and expense array and render each list
         var expense_list = expense_array.map(
           (cur, index) => <li key={index} className='item' id={cur.ID}> {cur.desc} </li>
         )
         var income_list = income_array.map(
            (cur, index) => <li key={index} className='item' id={cur.ID}> {cur.desc} </li>
          )
   }

    return (
        <div className='list'>
            <div className='row'>
                {/* Expense list */}
                <ul className='list__item' style={{'listStyleType' : 'none'}}>
                   {expense_list}  
                </ul>

                {/* Income list */}
                <ul className='list__item' style={{'listStyleType' : 'none'}}>
                    {income_list} 
                </ul>
            </div>
        </div>  
    )
}

export default List
