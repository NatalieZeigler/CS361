import React from 'react'
import RegistrationInfo from '../components/RegistrationInfo'

function Login(){
    return(
        <>
            <div className = 'App-home'>
            <h2>Welcome to Trivia!</h2>
            <p>Please login with your name and email</p>
            <p>Thanks!</p>
            <RegistrationInfo/>
            </div>
        </>
    )

}


export default Login;