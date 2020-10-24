import React, {useState} from 'react'
import { Switch, Route, Redirect, NavLink} from 'react-router-dom'
//Components
import Login from './components/Login'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import History from './components/History'
import Balance from './components/Balance'
import Report from './components/Report'
import Register from './components/Register'


function App() {

  let aut = JSON.parse(localStorage.getItem('isLoggedin'))

  if(aut === null){
    aut = false
  }

  let [isLoggedIn, setIsLoggedIn] =  useState(aut);
 
 
  return (
    <div className='App'>
      <Switch>
        <Route path="/" exact >
          <Login onLogin={setIsLoggedIn} auth={isLoggedIn} />
        </Route> 
        <Route path="/home">
          { isLoggedIn ? 
            <Home /> : 
            <Redirect to="/" />
          }
        </Route>
        <Route path="/history">
          { isLoggedIn ? 
            <History /> : 
            <Redirect to="/" />
          }
        </Route>
        <Route path="/balance">
          { isLoggedIn ? 
            <Balance /> : 
            <Redirect to="/" />
          }
        </Route>
        <Route path="/report">
          { isLoggedIn ? 
            <Report /> : 
            <Redirect to="/" />
          }
        </Route>

     {/*    Redirect a user to Homepage (Login component) after loging out */}
        <Redirect from="/logout" to="/" />
                
        <Route path="/register" >
          <Register onLogin={setIsLoggedIn} /> 
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default App