import React, {useState} from 'react'
import './Styles/login.css'
import logos from '../Assets/logo.png'
import {useHistory, withRouter, Link} from "react-router-dom";


function Login(props) {
   
    let history = useHistory();

    const [uname, setUname] = useState('');
    const [upass, setUpass] = useState('');
    
    const submitForm = (e) => {
      
         e.preventDefault();
         
         //Query users datas from localStorage
         const queryDB = JSON.parse(localStorage.getItem('users')); 

         //Check if the userDB is empty or not
         if(queryDB !== null){
                if (queryDB.username === uname && queryDB.password === upass){
                    props.onLogin(true); 
                    
                    localStorage.setItem('isLoggedin', true)
                    history.push({
                    pathname: "/home",
                    state: {uname: uname}
                    })
                }
                else alert('Invalid credentials entered!')
        }  

        else{
            alert('Kindly click on the signup button to register first');
         }
    }

    return (
        <>
        <div className='login'>
            <header>
            <div className='header'>
                <i className="fas fa-landmark logo"></i> 
                <img src={logos} className='logoText' alt='manageFunds logo' />
            </div>
            <h2 className='primary__header'>Login Form </h2>
            </header>
            <form 
                className='login-form'  
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
                    />
                </div>
                <div className='form-control'>
                    <p>Not yet Register? Kindly 
                       <Link 
                            to='/register'
                            className=' btn__secondary m-l-small' 
                        > 
                        Signup! 
                        </Link>
                    </p>
                </div>
               
                <div className='form-control'>
                    <button 
                        type='submit'
                        className='btn-submit' 
                    >  Login </button>
                </div>
            </form>
  
        </div>
        </>
    )
}

export default withRouter(Login)
