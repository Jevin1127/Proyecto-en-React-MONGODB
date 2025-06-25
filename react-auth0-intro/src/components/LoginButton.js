import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const LogginButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (     
        <div >         
            <button onClick={() => loginWithRedirect()} > 
            <svg aria-hidden="true" viewBox="0 0 10 10">
            <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
             </svg>Login</button>
        </div>  

    )   
}

export default LogginButton