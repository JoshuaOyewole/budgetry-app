import React, {useState} from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
//Components
import Login from './components/Login'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import History from './components/History'
import Balance from './components/Balance'
import Report from './components/Report'
import Register from './components/Register'


function App() {

  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  
  return (
    <div className='App'>
      <Switch>
        <Route path="/" exact >
          <Login onLogin={setIsLoggedIn} />
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
        <Route path="/register" >
          <Register onLogin={setIsLoggedIn} /> 
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default App