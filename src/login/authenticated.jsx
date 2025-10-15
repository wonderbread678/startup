import React from 'react'
import { useNavigate } from 'react-router-dom'


export function Authenticated(props){

    function logout(){
        localStorage.removeItem('userName')
        props.onLogout();
    }

    return (<main className='main'>
        <div className='body'>
            <h1>Welcome to Koob</h1>
            <h2>{props.userName}</h2>
        </div>
        <button onClick={() => useNavigate('/entry_upload')}>Entry upload</button>
        <button onClick={() => useNavigate('/list')}>View lists</button>
        <button onClick={() => logout()}>Logout</button>
    </main>
    );
}