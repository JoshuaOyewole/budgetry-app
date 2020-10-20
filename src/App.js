import React, {useState} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { Switch, Route, Redirect} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import History from './components/History'
import Balance from './components/Balance'
import Report from './components/Report'


export const userContext = React.createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  const username = 'Orisfina'
  
  return (
    <div className='App'>
      <Switch>
        <Route path="/" exact >
        <userContext.Provider value={username} >
          <Login onLogin={setIsLoggedIn} />
          </userContext.Provider>
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
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default App