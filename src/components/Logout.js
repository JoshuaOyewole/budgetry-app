
   export const lout = () =>{
        localStorage.setItem('isLoggedin', false)
    } 

   /*  Little manipulation after several hours of trying to get pass this, lolz 
    - 23 oct, 2020 (11:13am)

    - I set the isLoggedin state to false when the Logout component is called
    - Calling a Logout component will render an error component (404 page)     because there is no <Route> for it to render when matched.
    - Redirect the any route from /logout to homepage 
    
    
    Future plans
    - To implement JWT Authentication to solve this work around solution
    */
