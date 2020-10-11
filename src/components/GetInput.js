import React,{useState} from 'react'
import List from './List'
import './Styles/getInput.css'
import Button from '@material-ui/core/Button';

function GetInput() {
    
    const [type, setType] = useState('saving')
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [saving, setSaving] = useState([])
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])

const getInputs = e =>{
    e.preventDefault()
    //Check for Previous Savings, Incomes or Expenses
    const prevSaving = JSON.parse(localStorage.getItem('saving'));
    const prevIncome = JSON.parse(localStorage.getItem('income'));
    const prevExpense = JSON.parse(localStorage.getItem('expense'));

    switch (type) {
        case 'saving':

        if(prevSaving !== null){  
            appendPreviousDatas(prevSaving, type, desc, amount)
            resetStates()
        }
        else{
            storeNewData(saving, type, desc, amount)
            resetStates()
        }
        break;

        case 'income':

        if(prevIncome !== null){  
            appendPreviousDatas(prevIncome, type, desc, amount)
            resetStates()
        }
        else{
            storeNewData(income, type, desc, amount)
            resetStates()
        }
        break;

        case 'expense':

        if(prevExpense !== null){  
            appendPreviousDatas(prevExpense, type, desc, amount)
            resetStates()
        }

        else{
            storeNewData(expense, type, desc, amount)
            resetStates()
        }
        break;
    
        default: alert('Wrong Input')
        break;
    }
}

const resetStates = ()=>{
    setDesc('')
    setAmount('')
}

    const storeNewData = (cat, type, desc, amount) =>{

        const ID = 0

        cat.push({'ID': ID, 'desc': desc, 'amount': parseInt(amount)})
        
        switch (type) {
            case 'saving':
            localStorage.setItem('saving', JSON.stringify(cat))
            setSaving(cat)
            
            break;

            case 'income':
            localStorage.setItem('income', JSON.stringify(cat))
            setIncome(cat)
            break;

            case 'expense':
            localStorage.setItem('expense', JSON.stringify(cat))
            setExpense(cat)
            break;
        
            default: alert('Invalid category Inputed')
            break;
        }
    }

const appendPreviousDatas = (prevCat, type, desc, amount) =>{
    //Initializing ID
    const prevID = prevCat[prevCat.length - 1].ID
    const id = prevID + 1

    prevCat.push({'ID': id, 'desc': desc, 'amount': parseInt(amount)})
        switch (type) {
            case 'saving':
            localStorage.setItem('saving', JSON.stringify(prevCat))
            setSaving(prevCat)
            break;
    
            case 'income':
            localStorage.setItem('income', JSON.stringify(prevCat))
            setIncome(prevCat)
            break;
    
            case 'expense':
            localStorage.setItem('expense', JSON.stringify(prevCat))
            setExpense(prevCat)
            break;
            
            default: alert('Invalid category Inputed')
            break;
        }
}
 
    return (
        <>
        <div className='inputField container'>
            <form onSubmit={getInputs}>
                <select 
                    value={type}
                    name='type'
                    onChange={(e)=>setType(e.target.value)}
                    required
                >
                    <option value='income'>Income</option>
                    <option value='expense'>Expense</option>
                    <option value='saving'>Savings</option>
                </select>
                <input 
                    type='text'
                    name='desc'
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    required
                    placeholder = 'Enter a description ...'
                />
                <input
                    type='number'
                    name='amount'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} 
                    placeholder='Enter amount'
                    required
                />
                <Button 
                    style={{'padding': '.5rem 3rem', 'fontSize': '1.4rem'}}
                    variant="contained"
                    color="secondary"
                    type='submit'
                    name='submit'> Add 
                </Button>
            </form>
        </div>
        <List />
        </>
    )
}

export default GetInput
