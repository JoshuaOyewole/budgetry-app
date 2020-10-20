import React from 'react'

function Logout() {
    localStorage.removeItem('user')
    return <button>Logout</button>
}

export default Logout
