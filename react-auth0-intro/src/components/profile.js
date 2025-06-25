import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from "react-json-pretty";
import 'react-json-pretty/themes/monikai.css'

const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
    return (
         isAuthenticated && (      
        <div>
            <img src={user.picture} alt={user.name}/>
            <h5>{user.name} <br></br>{user.email}</h5>                     
        </div>
        )
    )
}

export default Profile