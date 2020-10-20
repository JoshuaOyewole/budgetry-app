import React from 'react'
import './Styles/delete.css'

function Delete() {
        
      const delItem = (e)=>{
       
        console.log(e.target);
        
        const type_income = 'income';
        const type_expense = 'expense';
        const parentItem = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const childItem = e.target.parentNode.parentNode.parentNode.parentNode;
    
        parentItem.removeChild(childItem); 
        const parentItem__className =  parentItem.className.includes('expense');
        
       if (parentItem__className) {
           const expensesArray = JSON.parse(localStorage.getItem('expense'));

            //Remove expense from localStorage
            removeList(childItem,expensesArray,type_expense);
        }

        else{
            //Income    
            const incomes = JSON.parse(localStorage.getItem('income'));
            
            //Remove todo from localStorage
            removeList(childItem,incomes,type_income);
        } 
    } 
        const removeList = (list,listArr, type) => {
     
            //Accessing the ID attribute of the current list element
             const listID = list.id;
            //Getting the id number of the current list element
            const id = listID.split('-')[1];
            
            //Checking if its the last item in the List inorder to returning an empty array to the localStorage
            if (listArr.length === 1 && !null){
                listArr.splice(0,1);
                localStorage.removeItem(type);   
            }   

            else{
                listArr.splice(id,1);
                localStorage.setItem(type, JSON.stringify(listArr));
            }  
    } 
    return (
         <span 
            style={{color: 'red'}} 
            onClick={delItem}
            className="del"> X
        </span> 
        

    )
} 

export default Delete