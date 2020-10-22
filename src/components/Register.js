import React, {useState} from 'react'
import './Styles/login.css'
import logos from '../Assets/logo.png'
import {useHistory, Link} from "react-router-dom";

function Register() {

    const [uname, setUname] = useState('');
    const [upass, setUpass] = useState('')
    const history = useHistory();

    const submitForm = (e) => {
      
        e.preventDefault()
            
        localStorage.setItem('users', JSON.stringify({username: uname, password: upass}));   
        alert('Registration successful! Kindly login')
        history.push("/")      
    }  
    return (
        <>
        <div className='register'>
            <header>
            <div className='header'>
                <i className="fas fa-landmark logo"></i> 
                <img src={logos} className='logoText' alt='manageFunds logo' />
            </div>
            <h2 className='primary__header'>Registration Form</h2>
            </header>
            <form 
                className='register-form'  
                onSubmit={submitForm}
            >
                <div className='form-control'>
                    <label>Username: </label> <br/>
                    <input 
                        type='text'
                        name='username'
                        className='form-group'
                        onChange={(e)=>{setUname(e.target.value)}}
                        placeholder='Enter your username ...'
                        required
                    /> 
                
                </div>
   
                <div className='form-control'>
                <label>Password: </label> <br/>
                    <input 
                        type='password'
                        name='password'
                        onChange={(e)=>{setUpass(e.target.value)}}
                        className='form-group'
                        placeholder='Enter your password..'
                        required
                    />
                </div>
               
                <div className='form-control'>
                    <p>Already Register? Kindly 
                       <Link 
                            to='/'
                            className=' btn__secondary m-l-small' 
                        > 
                        Login! 
                        </Link>
                    </p>
                </div>
                <div className='form-control'>
                    <button 
                        type='submit'
                        className='btn-submit' 
                    >  
                        Register
                    </button>
                </div>
            </form>
           
        </div>
        </>
    )
}

export default Register