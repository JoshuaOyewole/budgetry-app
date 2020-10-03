import React,{useState} from 'react'

function Testing() {

    const [type, setType] = useState('saving')
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [saving, setSaving] = useState([])
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])

const submitHandler = e =>{
    e.preventDefault()
    //Check for Previous Savings, Incomes or Expenses
    const prevSaving = JSON.parse(localStorage.getItem('saving'));
    const prevIncome = JSON.parse(localStorage.getItem('income'));
    const prevExpense = JSON.parse(localStorage.getItem('expense'));

    switch (type) {
        case 'saving':

        if(prevSaving !== null){  
            appendPreviousDatas(prevSaving, type)
            resetStates()
        }
        else{
            storeNewData(saving, type)
            resetStates()
        }
        break;

        case 'income':

        if(prevIncome !== null){  
            appendPreviousDatas(prevIncome, type)
            resetStates()
        }
        else{
            storeNewData(income, type)
            resetStates()
        }
        break;

        case 'expense':

        if(prevExpense !== null){  
            appendPreviousDatas(prevExpense, type)
            resetStates()
        }

        else{
            storeNewData(expense, type)
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

    const storeNewData = (cat, type) =>{
        cat.push({'desc': desc, 'amount': amount})
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

const appendPreviousDatas = (prevCat, type) =>{
    const ID = prevCat.length
    prevCat.push({'desc': desc, 'amount': amount})
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
            <form onSubmit={submitHandler}>
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
                />
                <input
                    type='number'
                    name='amount'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} 
                    required
                />
                <button 
                    type='submit'
                    name='submit'> Add 
                </button>
            </form>
        </div>
        </>
    )
}

export default Testing
