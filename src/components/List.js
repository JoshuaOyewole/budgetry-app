import React from 'react'
import './Styles/List.css'
import Delete from './Delete';

function List(props) {
    if(localStorage.length > 0){
    //Retrieve incomes and expenses from localStorage and convert to an array
         const expense_array = JSON.parse(localStorage.getItem('expense')); 
         const income_array = JSON.parse(localStorage.getItem('income')); 

         if(expense_array !==null){
             //map through income and expense array and render each list
            var expense_list = expense_array.map(
                (cur, index) => <li className="item" key={cur.ID} id={`expense-${cur.ID}`}>
                   <div className="item__description">{cur.desc}</div>
                   <div className="right">
                        <div className="item__value">- {cur.amount}</div>
                        <div className="item__delete">
                            <Delete />
                        </div>
                    </div>
                </li>
            )
         }

         if(income_array !==null){
            var income_list = income_array.map(
                (cur, index) => 
                <li className="item" key={cur.ID} id={`income-${cur.ID}`}>
                    <div className="item__description">{cur.desc}</div>
                    <div className="right">
                        <div className="item__value">+ {cur.amount}</div>
                        <div className="item__percentage">21%</div>
                        <div className="item__delete">
                            <Delete />
                        </div>
                    </div> 
                </li> 
            )
        }
             
   }
   
    return (
        <div className="list__container">
                <div className="income">
                    <h2 className="income__title">Income</h2>
                    <ul className="income__list">
                       {income_list}
                    </ul>
                </div>
                <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    <ul className="expenses__list expense">
                        {expense_list}
                    </ul>
                </div>
        </div>
        )
}

export default List
