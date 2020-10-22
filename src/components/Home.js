import React, {useEffect} from 'react'
import SideMenu from './SideMenu'
import Main from './Main'
import { useLocation } from 'react-router-dom'

export const usernameContext = React.createContext();

function Home(props) {
    let location = useLocation();
    let username = location.state.uname;

   useEffect(()=>{
    document.title = `${username} Dashboard`
    },[username]) 

    return (
        <>
        <usernameContext.Provider value={username}>
            <SideMenu />
            <Main />
        </usernameContext.Provider>
        </>
    )
}

export default Home