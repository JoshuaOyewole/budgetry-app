import React, {useState,useContext} from 'react'
import './Styles/login.css'
import logos from '../Assets/logo.png'
import {useHistory} from "react-router-dom";
import {userContext} from '../App'

function Login({onLogin}) {
   
    let history = useHistory();
    let user = useContext(userContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

 
    const submitForm = (e) => {
      
         e.preventDefault();
         
         //Query users datas from localStorage
         const queryDB = JSON.parse(localStorage.getItem('users')); 

         //Check if the userDB is empty or not
         if(queryDB !== null){
            for( const user of queryDB){
                if (user.username === username && user.password === password){
                    clearFields();
                    onLogin(true);
                    history.push("/home")
                }

                else{
                    alert('Invalid details entered')
                    clearFields();
                }
            }
         }
     }

     const clearFields = () =>{
         setUsername('');
         setPassword('');   
     }

    return (
        <>
        <div className='login'>
            <header>
            <div className='header'>
                <i className="fas fa-landmark logo"></i> 
                <img src={logos} className='logoText' alt='manageFunds logo' />
                <p>Hello {user} </p>
            </div>
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
                        onChange={(e)=>{setUsername(e.target.value)}}
                        placeholder='Enter your username ...'
                    />
                </div>
              
                <div className='form-control'>
                <label>Password: </label> <br/>
                    <input 
                        type='password'
                        name='password'
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className='form-group'
                        placeholder='Enter your password..'
                    />
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

export default Login
